import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

const featureSections = [
  {
    title: 'Zeebu',
    features: [
      { title: 'ZBU Token', description: 'Learn about Zeebu’s native token and its utilities.', link: '/docs/zeebu/token', icon: '/images/zeebu/token.svg', darkIcon: '/images/zeebu/token-dark.svg'},
      { title: 'Zeebu Settlement', description: 'Understand how settlements work within Zeebu.', link: '/docs/zeebu/token/tokonomics', icon: '/images/zeebu/settlement.svg', darkIcon: '/images/zeebu/settlement-dark.svg'},
      { title: 'Current Challenges', description: 'Explore the challenges Zeebu aims to solve.', link: '/docs/opportunity/currentchallenges', icon: '/images/zeebu/challenges.svg', darkIcon: '/images/zeebu/challenges-dark.svg'},
      { title: 'Technology', description: 'Learn about the technology powering Zeebu.', link: '/docs/zeebu/psp/platformoverview/technology', icon: '/images/zeebu/technology.svg', darkIcon: '/images/zeebu/technology-dark.svg'},
      { title: 'Token Allocation', description: 'See how ZBU is allocated within the ecosystem.', link: '/docs/zeebu/token/tokenallocation', icon: '/images/zeebu/allocation.svg', darkIcon: '/images/zeebu/allocation-dark.svg'},
      { title: 'ZBU Burn', description: 'Understand the burning mechanism of ZBU.', link: '/docs/zeebu/zeebuphoenixprotocol/zeebuburn', icon: '/images/zeebu/burn.svg', darkIcon: '/images/zeebu/burn-dark.svg'},
    ],
  },
  {
    title: 'Zeebu Protocol',
    features: [
      { title: 'Protocol', link: '/docs/zeebuprotocol', icon: '/images/protocol/protocol.svg',darkIcon: '/images/protocol/protocol-dark.svg'},
      { title: 'Locked ZBU (VeZBU)', link: '/docs/zeebuprotocol/stake/lockedzbu-vezbu', icon: '/images/protocol/locked.svg', darkIcon: '/images/protocol/locked-dark.svg'},
      { title: 'On-Chain Clearing House (OCH)', link: '/docs/zeebuprotocol/keyparticipants/deployer-och', icon: '/images/protocol/clearing.svg', darkIcon: '/images/protocol/clearing-dark.svg'},
      { title: 'OLP', link: '/docs/zeebuprotocol/keyparticipants/olp', icon: '/images/protocol/olp.svg', darkIcon: '/images/protocol/olp-dark.svg'},
      { title: 'Transparency', link: '/docs/miscellaneous/transparency', icon: '/images/protocol/transparency.svg', darkIcon: '/images/protocol/transparency-dark.svg'},
      { title: 'Airdrop', link: '/docs/airdrop', icon: '/images/protocol/airdrop.svg', darkIcon: '/images/protocol/airdrop-dark.svg'},
    ],
  },
  {
    title: 'Zeebu Academy',
    features: [
      { title: 'User Onboarding', link: '/docs/zeebuacademy/zeebuprotocol/useronboarding', icon: '/images/academy/useronboarding.svg', darkIcon: '/images/academy/useronboarding-dark.svg' },
      { title: 'Stake ZBU', link: '/docs/zeebuacademy/zeebuprotocol/stakezeebu', icon: '/images/academy/stake.svg', darkIcon: '/images/academy/stake-dark.svg' },
      { title: 'How To Add & Stake Liquidity (LP)', link: '/docs/zeebuacademy/zeebuprotocol/howtoaddstakeliquidity', icon: '/images/academy/stakeLP.svg', darkIcon: '/images/academy/stakeLP-dark.svg' },
      { title: 'How to Buy/Swap ZBU', link: '/docs/zeebuacademy/zeebuprotocol/howtobuyswapzeebu', icon: '/images/academy/swap.svg', darkIcon: '/images/academy/swap-dark.svg' },
      { title: 'How to become Deployer', link: '/docs/zeebuacademy/zeebuprotocol/howtobecomedeployer', icon: '/images/academy/deployer.svg', darkIcon: '/images/academy/deployer-dark.svg' },
      { title: 'How to change Blockchain', link: '/docs/zeebuacademy/zeebuprotocol/howtochangeblockchain', icon: '/images/academy/blockchain.svg', darkIcon: '/images/academy/blockchain-dark.svg' },
    ],
  },
];

export default function ZeebuSection() {
  const { colorMode } = useColorMode();

  return (
      <div className="container">
        {featureSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className={styles.features}>
            <h2>{section.title}</h2>
            <div className="row">
            {section.features.map((feature, idx) => {
              const iconToUse = colorMode === 'light' && feature.darkIcon ? feature.darkIcon : feature.icon;
               return (
                  <div key={idx} className="col col--2">
                    <Link to={feature.link} className={styles.learnMore}>
                      <div className={styles.featurecard}>
                        <img src={iconToUse} alt={feature.title} className={styles.featureIcon} />
                        <span>{feature.title}</span>
                      </div>
                    </Link>
                  </div>
              );
            })}
            </div>
          </div>
        ))}
      </div>
  );
}
