import React, { useState } from 'react';
import clsx from 'clsx';
import styles from '/src/components/Socials.module.css';
import { useColorMode } from '@docusaurus/theme-common';

interface SocialItem {
  name: string;
  url: string;
  icon: string;
  darkIcon?: string;
}

const socialItems: SocialItem[] = [
  {
    name: 'Medium / Blog',
    url: 'https://zeebu.gitbook.io/zbu-protocol-1.0/hvKFvzLoONc5kSQNlboc',
    icon: '/images/social/medium.svg',
    darkIcon: '/images/social/medium-white.svg',
  },
  {
    name: 'Announcements',
    url: 'https://notion.zeebu.com/ZBU-Airdrop-12d86421b7d8801fba38c87e583bd003?pvs=4',
    icon: '/images/social/announcements.svg',
    darkIcon: '/images/social/announcements-white.svg',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/zeebuofficial',
    icon: '/images/social/x.svg',
    darkIcon: '/images/social/x-white.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/zeebu.official/',
    icon: '/images/social/instagram.svg',
    darkIcon: '/images/social/instagram-white.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/zeebuofficial/',
    icon: '/images/social/linkedin.svg',
    darkIcon: '/images/social/linkedin-white.svg',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/ZeebuOfficial',
    icon: '/images/social/telegram.svg',
    darkIcon: '/images/social/telegram-white.svg',
  },
  {
    name: 'Discord',
    url: 'https://discord.com/invite/zeebuofficial',
    icon: '/images/social/discord.svg',
    darkIcon: '/images/social/discord-white.svg',
  },
];

const Socials: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { colorMode } = useColorMode();

  return (
    <>
      <h2>Socials</h2>
      <p style={{ textAlign: 'left', marginBottom: '30px' }}>
        Follow our official social media channels for the latest updates, community discussions,
        and insights into Zeebu's development.
      </p>

      <div className={styles.grid}>
        {socialItems.map((social, index) => {
          const iconToUse = colorMode === 'dark' && social.darkIcon ? social.darkIcon : social.icon;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={clsx(styles.card, {
                [styles.cardHover]: hoverIndex === index,
              })}
            >
              <img src={iconToUse} alt={social.name} width="50" />
              <p>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              </p>
            </div>
          );
        })}
      </div>

      <p style={{ textAlign: 'left' }}>
        Follow these channels to stay up to date on Zeebu's journey to revolutionize global payments.
      </p>
    </>
  );
};

export default Socials;