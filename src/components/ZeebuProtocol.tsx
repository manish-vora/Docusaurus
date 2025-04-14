import React from 'react';
import { useHistory } from '@docusaurus/router';
import { ArrowRight } from 'lucide-react';
import styles from './ZeebuProtocol.module.css';
import { useColorMode } from '@docusaurus/theme-common';

export default function UserGuideDashboard() {
  const history = useHistory();
  const { colorMode } = useColorMode(); // Use colorMode

  const guides = [
    {
      icon: '/images/academy/useronboarding.svg',
      darkIcon: '/images/academy/useronboarding-dark.svg',
      label: 'User Onboarding',
      link: '/docs/zeebuacademy/zeebuprotocol/useronboarding',
    },
    {
      icon: '/images/academy/login-dashboard.svg',
      darkIcon: '/images/academy/login-dashboard-dark.svg',
      label: 'Login & Dashboard',
      link: '/docs/zeebuacademy/zeebuprotocol/logindashboard',
    },
    {
      icon: '/images/academy/blockchain.svg',
      darkIcon: '/images/academy/blockchain-dark.svg',
      label: 'How to change Blockchain',
      link: '/docs/zeebuacademy/zeebuprotocol/howtochangeblockchain',
    },
    {
      icon: '/images/academy/stake.svg',
      darkIcon: '/images/academy/stake-dark.svg',
      label: 'Stake ZBU',
      link: '/docs/zeebuacademy/zeebuprotocol/stakezeebu',
    },
    {
      icon: '/images/academy/stakeLP.svg',
      darkIcon: '/images/academy/stakeLP-dark.svg',
      label: 'Add & Stake Liquidity (LP)',
      link: '/docs/zeebuacademy/zeebuprotocol/howtoaddstakeliquidity',
    },
    {
      icon: '/images/academy/swap.svg',
      darkIcon: '/images/academy/swap-dark.svg',
      label: 'Buy/Swap ZBU',
      link: '/docs/zeebuacademy/zeebuprotocol/howtobuyswapzeebu',
    },
    {
      icon: '/images/academy/deployer.svg',
      darkIcon: '/images/academy/deployer-dark.svg',
      label: 'Become Deployer',
      link: '/docs/zeebuacademy/zeebuprotocol/howtobecomedeployer',
    },
  ];

  return (
    <div className={styles.dashboardWrapper}>
      <p className={styles.subtitle}>
        Navigate each section for a detailed visual guide on using{' '}
        <a href="https://zeebu.fi" target="_blank" rel="noopener noreferrer">
          zeebu.fi
        </a>
      </p>

      <div className={styles.grid}>
        {guides.map((guide, idx) => {
          const iconToUse =
            colorMode === 'light' && guide.darkIcon ? guide.darkIcon : guide.icon;

          return (
            <div
              key={idx}
              onClick={() => history.push(guide.link)}
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <img
                  src={iconToUse}
                  alt={guide.label}
                  width={30}
                />
                <span className={styles.label}>{guide.label}</span>
                <ArrowRight size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
