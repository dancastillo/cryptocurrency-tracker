import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {GET_COIN_QUERY} from "../../utils/queries";
import SearchModalTable from "./SearchModalTable";
import ErrorModal from "../Error/ErrorModal";

const SearchModal = ({ isModalOpen, onClose, coinSymbol }) => {
    const loadingText = 'Loading....';
    const coinNotFound = 'Coin Cannot be Found.';
    const { data, loading, error } = useQuery(GET_COIN_QUERY, {
        variables: {
            coinId: `${coinSymbol}`
        }
    });

    return (
            <>
            {
                (data === undefined)
                ? (
                    <ErrorModal
                        coin={coinSymbol}
                        text={loadingText}
                        isModalOpen={isModalOpen}
                        onClose={onClose}
                    />
                )
                : (data.getCoin === null)
                    ? (
                        <ErrorModal
                            coin={coinSymbol}
                            text={coinNotFound}
                            isModalOpen={isModalOpen}
                            onClose={onClose}
                        />
                    )
                    : (
                        <SearchModalTable
                            isModalOpen={isModalOpen}
                            onClose={onClose}
                            coinSymbol={data.getCoin.id}
                            coinName={data.getCoin.name}
                            currency={data.getCoin.currency}
                            logoUrl={data.getCoin.logo_url}
                            price={data.getCoin.price}
                            marketCap={data.getCoin.market_cap}
                        />
                    )
            }
        </>
    )
};

export default SearchModal;
