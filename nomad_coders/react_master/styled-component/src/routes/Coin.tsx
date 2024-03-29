import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";
import { fetchCoinInfo, fetchPriceInfo } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Loader = styled.div`
  text-align: center;
  display: block;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span: first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

type RouteParams = {
  coinId: string;
};

interface RouteState {
  state: {
    name: string;
    rank: number;
  };
}

interface Tag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
}

interface Contract {
  contract: string;
  platform: string;
  type: string;
}

interface Links {
  explorer: string[];
  facebook: string[];
  reddit: string[];
  source_code: string[];
  website: string[];
  youtube: string[];
  medium: null;
}

interface ExtendedLink {
  url: string;
  type: string;
  stats?: { subscribers?: number; contributors?: number; stars?: number };
}

interface Whitepaper {
  link: string;
  thumbnail: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  parent: {
    id: string;
    name: string;
    symbol: string;
  };
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: Tag[];
  team: TeamMember[];
  description: string;
  message: string;
  open_source: boolean;
  hardware_wallet: boolean;
  started_at: string;
  development_status: string;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  contract: string;
  platform: string;
  contracts: Contract[];
  links: Links;
  links_extended: ExtendedLink[];
  whitepaper: Whitepaper;
  first_data_at: string;
  last_data_at: string;
}

interface Quotes {
  BTC: {
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_15m: number;
    percent_change_30m: number;
    percent_change_1h: number;
    percent_change_6h: number;
    percent_change_12h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_1y: number;
    ath_price: number | null;
    ath_date: string | null;
    percent_from_price_ath: number | null;
  };
  USD: {
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_15m: number;
    percent_change_30m: number;
    percent_change_1h: number;
    percent_change_6h: number;
    percent_change_12h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_1y: number;
    ath_price: number | null;
    ath_date: string | null;
    percent_from_price_ath: number | null;
  };
}

interface IPriceInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: Quotes;
}

interface ICoinProps {}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation() as RouteState;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: priceLoading, data: priceInfo } = useQuery<IPriceInfo>(
    ["tickers", coinId],
    () => fetchPriceInfo(coinId)
  );

  //   const [loading, setLoading] = useState(true);
  //   const [info, setInfo] = useState<IInfoData>();
  //   const [priceInfo, setPriceInfo] = useState<IPriceInfo>();
  //   useEffect(() => {
  //     (async () => {
  //       const infoData = await (
  //         await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //       ).json();
  //       const priceData = await (
  //         await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //       ).json();
  //       setInfo(infoData);
  //       setPriceInfo(priceData);
  //       setLoading(false);
  //     })();
  //   }, [coinId]);

  const loading = infoLoading || priceLoading;

  return (
    <>
      <Container>
        <Header>
          <Title>
            {state?.name ? state.name : loading ? "Loading" : infoData?.name}
          </Title>
        </Header>
        {loading ? <Loader>Loading...</Loader> : null}
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to="chart">Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to="price">Price</Link>
            </Tab>
          </Tabs>
          <Routes>
            <Route path="chart" element={<Chart coidId={coinId} />} />
            <Route path="price" element={<Price />} />
          </Routes>
        </>
      </Container>
    </>
  );
}

export default Coin;
