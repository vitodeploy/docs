// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  sidebar: [
    {
      "type": "doc",
      "label": "Introduction",
      "id": "intro"
    },
    {
      "type": "doc",
      "label": "Release Notes",
      "id": "release-notes"
    },
    {
      "type": "category",
      "label": "Getting Started",
      "items": [
        {
          "type": "doc",
          "label": "Installation",
          "id": "getting-started/installation"
        },
        {
          "type": "doc",
          "label": "Securing",
          "id": "getting-started/securing"
        },
        {
          "type": "doc",
          "label": "Configuration",
          "id": "getting-started/configuration"
        },
        {
          "type": "doc",
          "label": "Update",
          "id": "getting-started/update"
        },
        {
          "type": "doc",
          "label": "Upgrade Guide",
          "id": "getting-started/upgrade"
        },
        {
          "type": "doc",
          "label": "Contribution Guide",
          "id": "getting-started/contribution-guide"
        }
      ]
    },
    {
      "type": "category",
      "label": "Servers",
      "items": [
        {
          "type": "doc",
          "id": "servers/database"
        },
        {
          "type": "doc",
          "id": "servers/php"
        },
        {
          "type": "doc",
          "id": "servers/firewall"
        },
        {
          "type": "doc",
          "id": "servers/cronjobs"
        },
        {
          "type": "doc",
          "id": "servers/ssh-keys"
        },
        {
          "type": "doc",
          "id": "servers/services"
        },
        {
          "type": "doc",
          "id": "servers/monitoring"
        },
        {
          "type": "doc",
          "id": "servers/console"
        },
        {
          "type": "doc",
          "id": "servers/redis"
        },
        {
          "type": "doc",
          "id": "servers/settings"
        },
        {
          "type": "doc",
          "id": "servers/logs"
        }
      ]
    },
    {
      "type": "category",
      "label": "Sites",
      "items": [
        {
          "type": "doc",
          "id": "sites/site-types"
        },
        {
          "type": "doc",
          "id": "sites/application"
        },
        {
          "type": "doc",
          "id": "sites/ssl"
        },
        {
          "type": "doc",
          "id": "sites/queues"
        },
        {
          "type": "doc",
          "id": "sites/settings"
        }
      ]
    },
    {
      "type": "doc",
      "label": "Scripts",
      "id": "scripts"
    },
    {
      "type": "category",
      "label": "Settings",
      "items": [
        {
          "type": "doc",
          "id": "settings/profile"
        },
        {
          "type": "doc",
          "id": "settings/projects"
        },
        {
          "type": "doc",
          "id": "settings/server-providers"
        },
        {
          "type": "doc",
          "id": "settings/source-controls"
        },
        {
          "type": "doc",
          "id": "settings/notification-channels"
        },
        {
          "type": "doc",
          "id": "settings/storage-providers"
        }
      ]
    }
  ],
};

export default sidebars;
