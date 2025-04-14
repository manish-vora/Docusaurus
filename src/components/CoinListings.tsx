import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './CoinListings.module.css';

export default function CoinListings() {
  return (
    <div className={styles.coinTabs}>
      <Tabs>
        <TabItem value="coinmarketcap" label="CoinMarketCap">
          <div className={styles.coinTabContent}>
            <a
              href="https://coinmarketcap.com/currencies/zeebu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on CoinMarketCap
            </a>
          </div>
        </TabItem>

        <TabItem value="coingecko" label="CoinGecko">
          <div className={styles.coinTabContent}>
            <a
              href="https://www.coingecko.com/en/coins/zeebu"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on CoinGecko
            </a>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}
