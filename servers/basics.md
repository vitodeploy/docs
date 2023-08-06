# Servers

Creating servers requires some mandatory fields which you can know about them in this guide.

![Create Server](/servers/create-server.png)

## Server Provider

Select the provider that you want to use. Learn more about server providers [here](/servers/server-providers)

::: warning
If you're using Custom server provider, You need ro run a command which you can see on the screenshot to allow your Vito server to connect to it in order to provision.
:::

## Server Name

This is a unique server name which will be also used as hostname for your server.

## SSH IP Address

This is your server's IP Address

## SSH Port

This is the SSH port that Vito will connect to your server with it.

## Operating System

Vito currently supports Ubuntu and the following versions of it

- Ubuntu 20.04 LTS
- Ubuntu 22.04 LTS

## Server Type

The server type that you want Vito to provision.

Learn more about Server Types [here](/servers/server-types)

## Webserver

The Webserver that Vito will install on your server. Currently Vito supports Nginx.

## Database

Select the database which you want Vito to install.

Vito supports the following databases:

- Mysql 5.7
- Mysql 8
- MariaDB

## PHP

Select the PHP version that you want as primary version on your server.

You can install PHP or other versions of it later as well.