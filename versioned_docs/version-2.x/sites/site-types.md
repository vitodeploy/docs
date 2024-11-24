# Site Types

- [Introduction](#introduction)
- [Supported Site Types](#supported-site-types)
    - [PHP](#php)
    - [Blank PHP](#blank-php)
    - [Laravel](#laravel)
    - [WordPress](#wordpress)
    - [PHPMyAdmin](#phpmyadmin)
- [Site Type Features](#site-type-features)
- [Composer](#composer)

## Introduction

Vito is built to support deploying PHP applications and currently, it supports any PHP applications. But it has site
types for provide more features out of the box for some specific PHP applications.

## Supported Site Types

- PHP (Any other PHP applications)
- Blank PHP
- Laravel
- WordPress
- PHPMyAdmin

### PHP

You can deploy any PHP application with this site type if you have the source code on
any [supported source control providers](../settings/source-controls#supported-providers).

**Note:**

To deploy a site this type, You need to have a Webserver and PHP installed on your server in
the [Services](../servers/services) section.

### Blank PHP

Blank PHP site type is simply a blank php website that doesn't require a source control or composer.

:::info
Vito doesn't provide a file manager, and you need to upload your files by connecting to the server via SSH.
:::

### Laravel

Laravel site type is a subtype of the PHP site type. With this separation, We will be able to provide more Laravel
specified features like Artisan commands in the future.

### WordPress

Vito installs WordPress easily by just submitting a form. You don't need to download WordPress and upload it to your
server.

:::info
Additional to the PHP site type requirements, You also need to have Mysql service in
the [Services](../servers/services) section.
:::

### PHPMyAdmin

Vito supports PHPMyAdmin installation out of the box. It will install PHPMyAdmin and connect it your Mysql service.

## Site Type Features

| Site Type  | Deployments | Queues | SSL | Composer | .env |
|------------|-------------|--------|-----|----------|------|
| PHP        | ✅           | ✅      | ✅   | ✅        | ✅    |
| Blank PHP  | ✅           | ✅      | ✅   | ❌        | ✅    |
| Laravel    | ✅           | ✅      | ✅   | ✅        | ✅    |
| WordPress  | ❌           | ❌      | ✅   | ❌        | ❌    |
| PHPMyAdmin | ❌           | ❌      | ✅   | ❌        | ❌    |

## Composer

Vito handles the composer installation for you during the site creation process.

If you want to run `composer install` after cloning the repository click the checkbox.

If you check this, It will run the following command on the installation process after cloning the repository.

```sh
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev
```
