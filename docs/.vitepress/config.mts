import {defineConfig} from 'vitepress'
import fetch from "node-fetch";

let version = '2.x';
let changelog = '';
await fetch('https://api.github.com/repos/vitodeploy/vito/releases/latest')
  .then(response => response.json()).then((data: any) => {
    version = data.tag_name;
    changelog = data.html_url;
  });

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "VitoDeploy",
  description: "Free and Self-Hosted Server Management Tool",
  head: [
    [
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-9N4ER7K7M6',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-9N4ER7K7M6');",
    ]
  ],
  themeConfig: {
    logo: "/icon.png",

    nav: [
      {
        text: 'Docs',
        items: [
          {text: 'Get Started', link: '/getting-started/introduction'},
          {text: 'Installation', link: '/getting-started/installation'},
          {text: '1.x Docs', link: 'https://v1.vitodeploy.com'},
        ]
      },
      {
        text: version,
        items: [
          {text: 'Changelog', link: changelog},
          {text: 'Contribute', link: '/getting-started/contribution-guide'},
        ]
      },
      {
        text: 'Demo',
        link: 'https://demo.vitodeploy.com'
      }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'OSJRVBTWTB',
        apiKey: 'ed70c039271bac31d9f51d375c2e002e',
        indexName: 'vitodeploy',
      }
    },

    sidebar: [
      {
        text: 'Prologue',
        items: [
          {text: 'Release Notes', link: '/prologue/release-notes'},
          {text: 'Upgrade Guide', link: '/prologue/upgrade'},
          {text: 'Contribution Guide', link: '/prologue/contribution-guide'}
        ]
      },
      {
        text: 'Getting Started',
        items: [
          {text: 'Introduction', link: '/getting-started/introduction'},
          {text: 'Installation', link: '/getting-started/installation'},
          {text: 'Securing', link: '/getting-started/securing'},
          {text: 'Configuration', link: '/getting-started/configuration'},
          {text: 'Update', link: '/getting-started/update'},
        ]
      },
      {
        text: 'Servers',
        items: [
          {text: 'Database', link: '/servers/database'},
          {text: 'PHP', link: '/servers/php'},
          {text: 'Firewall', link: '/servers/firewall'},
          {text: 'CronJobs', link: '/servers/cronjobs'},
          {text: 'SSH Keys', link: '/servers/ssh-keys'},
          {text: 'Services', link: '/servers/services'},
          {text: 'Server Monitoring', link: '/servers/monitoring'},
          {text: 'Headless Console', link: '/servers/console'},
          {text: 'Redis', link: '/servers/redis'},
          {text: 'Settings', link: '/servers/settings'},
          {text: 'Logs', link: '/servers/logs'},
        ]
      },
      {
        text: 'Sites',
        items: [
          {text: 'Site Types', link: '/sites/site-types'},
          {text: 'Application', link: '/sites/application'},
          {text: 'SSL', link: '/sites/ssl'},
          {text: 'Queues', link: '/sites/queues'},
          {text: 'Settings', link: '/sites/settings'},
        ]
      },
      {text: 'Scripts', link: '/scripts'},
      {
        text: 'Settings',
        items: [
          {text: 'Profile', link: '/settings/profile'},
          {text: 'Projects', link: '/settings/projects'},
          {text: 'Server Providers', link: '/settings/server-providers'},
          {text: 'Source Controls', link: '/settings/source-controls'},
          {text: 'Notification Channels', link: '/settings/notification-channels'},
          {text: 'Storage Providers', link: '/settings/storage-providers'},
        ]
      },
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/vitodeploy/vito'},
      {icon: 'discord', link: 'https://discord.gg/uZeeHZZnm5'},
      {icon: 'twitter', link: 'https://twitter.com/saeed_vz'},
      {icon: 'youtube', link: 'https://www.youtube.com/@saeedvaziry'},
    ],
    footer: {
      message: 'Made with ❤️',
      copyright: 'Copyright © 2023-present Saeed Vaziry'
    }
  }
})
