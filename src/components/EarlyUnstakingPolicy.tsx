import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './EarlyUnstakingPolicy.module.css';

export default function EarlyUnstakingPolicy() {
  return (
    <div className={styles.penaltyTabs}>
      <Tabs>
        <TabItem value="structure" label="Penalty Structure">
          <div className={styles.penaltyTabContent}>
            <ul>
              <li><strong>Linear Penalty Rate:</strong> The penalty for early unstaking decreases linearly over the staking period.</li>
              <li><strong>Maximum Penalty Rate:</strong> 90% at the start of staking.</li>
              <li><strong>Minimum Penalty Rate:</strong> 0% at the end of the staking period.</li>
            </ul>
          </div>
        </TabItem>

        <TabItem value="calculation" label="Calculation of Penalty Rate">
          <div className={styles.penaltyTabContent}>
            <ul>
              <li><strong>To Staked Amount:</strong> The penalty is applied to the amount of ZBU tokens staked.</li>
              <li><strong>Formula:</strong><br />
                <code>Penalty Rate = Max Penalty × (Remaining Staking Period ÷ Total Staking Period)</code>
              </li>
              <li><strong>Example:</strong><br />
                If a user unstakes halfway through the staking period:<br />
                <code>Penalty Rate = 90% × (1/2) = 45%</code>
              </li>
            </ul>
          </div>
        </TabItem>

        <TabItem value="restriction" label="Restriction">
          <div className={styles.penaltyTabContent}>
            <ul>
              <li><strong>Unstaking Threshold:</strong> Unstaking is not allowed if the penalty exceeds 90%.</li>
            </ul>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}
