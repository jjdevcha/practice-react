const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/coins`);
  const json = await response.json();
  return json.slice(0, 100);
}

export async function fetchCoinInfo(coinId: string | undefined) {
  const infoData = await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
  return infoData;
}

export async function fetchPriceInfo(coinId: string | undefined) {
  const priceData = await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();

  return priceData;
}
