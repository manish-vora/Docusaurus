import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './SmartContract.module.css';

export default function ZeebuContracts() {
  return (
    <div className={styles.zeebuTabs}>
      <Tabs>
        <TabItem value="ethereum" label="Ethereum (ERC20)">
          <div className={styles.zeebuTabContent}>
            <a
              href="https://etherscan.io/token/0xe77f6aCD24185e149e329C1C0F479201b9Ec2f4B"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Etherscan
            </a>
            <pre>
              <code>0xe77f6aCD24185e149e329C1C0F479201b9Ec2f4B</code>
            </pre>
          </div>
        </TabItem>

        <TabItem value="base" label="Base (ERC20)">
          <div className={styles.zeebuTabContent}>
            <a
              href="https://basescan.org/token/0x2C8C89C442436CC6C0a77943E09c8Daf49Da3161"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on BaseScan
            </a>
            <pre>
              <code>0x2C8C89C442436CC6C0a77943E09c8Daf49Da3161</code>
            </pre>
          </div>
        </TabItem>

        <TabItem value="bsc" label="Binance Smart Chain (BEP20)">
          <div className={styles.zeebuTabContent}>
            <a
              href="https://bscscan.com/token/0x4D3dc895a9EDb234DfA3e303A196c009dC918f84"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on BSCScan
            </a>
            <pre>
              <code>0x4D3dc895a9EDb234DfA3e303A196c009dC918f84</code>
            </pre>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}
