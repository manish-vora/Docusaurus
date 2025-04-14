import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './OlpBenefits.module.css';

export default function OlpBenefits() {
  return (
    <div className={styles.olpTabs}>
      <Tabs>
        <TabItem value="decentralization" label="Be a Pillar of Decentralization">
          <div className={styles.olpTabContent}>
            <ul>
              <li><strong>Support Economic Security:</strong> By becoming an OLP, you contribute to the decentralization and security of the Zeebu Protocol, making it more resilient and trustless.</li>
              <li><strong>Strengthen the Ecosystem:</strong> A robust on-chain Liquidity ensures the protocol remains blazing fast, transparent, and resistant to centralization risks.</li>
            </ul>
          </div>
        </TabItem>

        <TabItem value="financial-rewards" label="Earn Financial Rewards">
          <div className={styles.olpTabContent}>
            <ul>
              <li><strong>LP Fee Revenue:</strong> Earn a share of the transaction fees through your provisioned liquidity, providing a steady stream of APYs.</li>
              <li><strong>DEX Pool Emissions:</strong> Lock LP tokens and harvest additional yield through DEX-native token emissions.</li>
            </ul>
          </div>
        </TabItem>

        <TabItem value="protocol-shaping" label="Actively Shape the Protocols">
          <div className={styles.olpTabContent}>
            <ul>
              <li><strong>Participate in Governance:</strong> Help decide protocol upgrades, fee structures, and other critical decisions.</li>
              <li><strong>Influence Ecosystem Growth:</strong> Your involvement drives adoption, scalability, and the overall success of Zeebu.</li>
            </ul>
          </div>
        </TabItem>

        <TabItem value="earn-yield" label="How Does OLP Earn Yield?">
          <div className={styles.olpTabContent}>
            <ul>
              <li>Earn rewards in the form of <strong>ZBU tokens</strong> and <strong>stablecoins</strong>.</li>
              <li>Rewards are proportional to liquidity provided and duration committed.</li>
            </ul>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}
