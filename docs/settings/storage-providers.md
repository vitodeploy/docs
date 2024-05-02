# Storage Providers

You can view and manage/create your storage providers' profiles here.

Supported Drivers:

- Dropbox
- Local (Available on version 1.5.0 or higher)
- FTP(s) (Beta)

## Dropbox

To connect to Dropbox you need to create an app on your Dropbox developer generate a token for that and use that token to connect your VitoDeploy instance to Dropbox.

## Local

Local storage means that the server itself will be used as the storage. For example if you have a server managed by Vito and want to backup the databases, The backup files will be stored in the same server that the database exists.

::: warning
To use this driver, You need to provide a path and the `vito` user must have write access to that path
:::

## FTP(s)

To connect to FTP(s) you need to have a separate FTP(s) server with its connection info like HOST, PORT, USERNAME, and PASSWORD

