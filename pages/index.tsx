import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Loader, Divider } from 'semantic-ui-react'
import CoinsTable from '../components/Index/CoinsTable'
import { GET_COINS_QUERY } from '../utils/queries'
import SearchCoin from "../components/Search/SearchCoin";

const FETCH_POLICY = 'network-only';
const POLL_INTERVAL: number = 5000;

export default () => {
    const { data, loading, error } = useQuery(GET_COINS_QUERY, {
        fetchPolicy: FETCH_POLICY,
        pollInterval: POLL_INTERVAL,
    });

    return (
        <div>
            <h1>Top Cryptocurrencies</h1>
            <Divider />
            {error ? <h1>Error Fetching Coin Data!</h1> : null}
            {loading ? (
                <Loader active inline="centered" content="Loading" />
            ) : (
                <div>
                    <SearchCoin />
                    <CoinsTable coins={data.getCoins} />
                </div>
            )}
        </div>
    );
}
