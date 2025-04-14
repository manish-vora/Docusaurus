import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zeebu',
  tagline: 'Zeebu are cool',
  favicon: 'img/zeebuFavicon.png',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook', // Change this to your GitHub org/user
  projectName: 'zeebu-docs',    // Change this to your GitHub repo

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en', 
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Zeebu Logo',
        src: 'https://zeebu.fi/logo-light.svg',
        srcDark: 'https://zeebu.fi/logo-dark.svg',
      },
      /*items: [
        {
          type: 'docSidebar',
          sidebarId: 'zeebuSidebar',
          position: 'right',
          label: 'Zeebu',
        },
      ],*/
    },
    footer: {
      style: 'dark',
      copyright: `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 16px; font-size: 14px;">
            <a href="/docs/miscellaneous/policy" style="text-decoration: none;">Privacy Policy</a>
            <span>•</span>
            <a href="/docs/miscellaneous/termsandconditions" style="text-decoration: none;">Terms of Service</a>
          </div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <a href="https://zeebu.gitbook.io/zbu-protocol-1.0/hvKFvzLoONc5kSQNlboc" target="_blank">
              <img class="footer-icon footer-icon-light" src="/images/social/medium.svg" width="30" alt="Medium" title="Medium" />
              <img class="footer-icon footer-icon-dark" src="/images/social/medium-white.svg" width="30" alt="Medium" title="Medium" />
            </a>
            <a href="https://notion.zeebu.com/ZBU-Airdrop-12d86421b7d8801fba38c87e583bd003?pvs=4" target="_blank">
              <img class="footer-icon footer-icon-light" src="/images/social/announcements.svg" width="30" alt="Announcement" title="Announcement" />
              <img class="footer-icon footer-icon-dark" src="/images/social/announcements-white.svg" width="30" alt="Announcement" title="Announcement" />
            </a>
            <a href="https://x.com/zeebuofficial" target="_blank">
              <img class="footer-icon footer-icon-light" src="/images/social/x.svg" width="30" alt="X" title="X" />
              <img class="footer-icon footer-icon-dark" src="/images/social/x-white.svg" width="30" alt="X" title="X" />
            </a>
            <a href="https://www.instagram.com/zeebu.official/" target="_blank">
              <img class="footer-icon footer-icon-light" src="/images/social/instagram.svg" width="30" alt="Instagram" title="Instagram" />
              <img class="footer-icon footer-icon-dark" src="/images/social/instagram-white.svg" width="30" alt="Instagram" title="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/zeebuofficial/" target="_blank">
              <img class="footer-icon footer-icon-light" src="/images/social/linkedin.svg" width="30" alt="LinkedIn" title="LinkedIn" />
              <img class="footer-icon footer-icon-dark" src="/images/social/linkedin-white.svg" width="30" alt="LinkedIn" title="LinkedIn" />
            </a>
            <a href="https://t.me/ZeebuOfficial" target="_blank">
              <img class="footer-icon footer-icon-light" src="/images/social/telegram.svg" width="30" alt="Telegram" title="Telegram" />
              <img class="footer-icon footer-icon-dark" src="/images/social/telegram-white.svg" width="30" alt="Telegram" title="Telegram" />
            </a>
            <a href="https://discord.com/invite/zeebuofficial" target="_blank">
              <img class="footer-icon footer-icon-light" src="/images/social/discord.svg" width="30" alt="Discord" title="Discord" />
              <img class="footer-icon footer-icon-dark" src="/images/social/discord-white.svg" width="30" alt="Discord" title="Discord" />
            </a>
            </div>
        </div>
      `,
    },
      
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
