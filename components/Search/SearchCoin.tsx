import React, { useState } from "react";
import SearchModal from "./SearchModal";

const SearchCoin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState(null);

    let coinEl: React.RefObject<HTMLInputElement> = React.createRef();

    const handleSubmit = e => {
        e.preventDefault();
        const coinSymbol = (coinEl.current.value).trim().toUpperCase();

        setIsModalOpen(!isModalOpen);
        setSelectedCoin(coinSymbol);
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text"
                       placeholder="Coin...."
                       id="coin"
                       ref={ coinEl }/>
                <button type="submit">Find Coin</button>
            </form>
            {isModalOpen ? (
                <SearchModal
                    isModalOpen={ isModalOpen }
                    onClose={() => setIsModalOpen(false)}
                    coinSymbol={ selectedCoin }
                />
            ) : null}
        </div>
    );
};

export default SearchCoin;
