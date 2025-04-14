import React from 'react';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './ZeebuExchangeList.module.css';
import { useColorMode } from '@docusaurus/theme-common';

const dexExchanges = [
  {
    name: 'Uniswap',
    url: 'https://app.uniswap.org/swap?chain=mainnet&inputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&outputCurrency=0xe77f6acd24185e149e329c1c0f479201b9ec2f4b',
    img: '/img/uniswap.png',
  },
  {
    name: 'PancakeSwap',
    url: 'https://pancakeswap.finance/swap?inputCurrency=0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d&outputCurrency=0x4D3dc895a9EDb234DfA3e303A196c009dC918f84&exactAmount=&exactField=INPUT',
    img: '/img/pancakeswap-cake-logo.png',
  },
  {
    name: 'Balancer',
    url: 'https://balancer.fi/swap/base/USDC/0x2c8c89c442436cc6c0a77943e09c8daf49da3161',
    img: '/img/balancer-bal-logo.png',
  },
];

const cexExchanges = [
  {
    name: 'Bitget',
    url: 'https://www.bitget.com/spot/ZBUUSDT',
    img: '/img/bitget-token-new-bgb-logo.png',
  },
  {
    name: 'MEXC Global',
    url: 'https://www.mexc.com/exchange/ZBU_USDT?_from=search',
    img: '/img/mexc-logo.png',
  },
  {
    name: 'Gate.io',
    url: 'https://www.gate.io/trade/ZBU_USDT?ref=12312805',
    img: '/img/gate.io-logo.png',
  },
  {
    name: 'BitMart',
    url: 'https://www.bitmart.com/trade/en-US?symbol=ZBU_USDT',
    img: '/img/bitmart.svg',
    darkIcon: '/img/bitmart-dark.svg',
  },
  {
    name: 'LBank',
    url: 'https://www.lbank.com/trade/zbu_usdt',
    img: '/img/lbank.svg',
  },
  {
    name: 'Biconomy',
    url: 'https://www.biconomy.com/exchange/ZBU_USDT',
    img: '/img/biconomy.svg',
  },
  {
    name: 'Bitunix',
    url: 'https://www.bitunix.com/spot-trade/ZBUUSDT',
    img: '/img/bitunix.svg',
  },
  {
    name: 'GroveX',
    url: 'https://www.grovex.io/trade/ZBU_USDT',
    img: '/img/grovex.png',
  },
  {
    name: 'CoinDCX',
    url: 'https://coindcx.com/trade/ZBUINR',
    img: '/img/coindcx.svg',
    darkIcon: '/img/coindcx-dark.svg',
  },
];
const renderExchangeGrid = (list, colorMode) => (
  <div className={styles.grid}>
    {list.map((ex, idx) => {
      const usedImage = colorMode === 'dark' && ex.darkIcon ? ex.darkIcon : ex.img;

      return (
        <div key={idx} className={styles.card}>
          <img src={usedImage} alt={ex.name} className={styles.logo} />
          <h4 className={styles.exchangeName}>{ex.name}</h4>
          <p>ZBU/USDT</p>
          <Link href={ex.url} target="_blank" rel="noopener noreferrer">
            Buy Here
          </Link>
        </div>
      );
    })}
  </div>
);

export default function ZeebuExchangeList() {
  const { colorMode } = useColorMode(); 

  return (
    <Tabs groupId="exchange-tabs">
      <TabItem value="dex" label="DEXs">
        {renderExchangeGrid(dexExchanges, colorMode)}
      </TabItem>
      <TabItem value="cex" label="CEXs">
        {renderExchangeGrid(cexExchanges, colorMode)}
      </TabItem>
    </Tabs>
  );
}
