# Installation

## Requirements

To install Vito, You need a virtual server with `Ubuntu 22.04 LTS` installed.

::: info
Other Ubuntu versions might also work but we don't recommend them.
:::

## Installation

Vito can be installed with only one single command on your server:

```sh
wget https://raw.githubusercontent.com/vitodeploy/vito/main/install/install.sh && bash install.sh
```

::: warning
The command should be ran as `root`
:::

The installation will ask you for these inputs:

**Domain**

This is the domain that Vito will be installed on and you can use it.

::: warning
Before installation, Make sure that your Domain is pointing to the installation server's IP address.
:::

**Email**

This is the email that you will use to login.

**Password**

This is the password you will use to login.

## Ready

The installation can take several minutes and after it is done, It will print an output like bellow:

```txt
🎉 Congratulations!
✅ SSH User: SSH-USER
✅ SSH Password: SSH-PASSWORD
✅ DB Name: DATABASE-NAME
✅ DB Username: DATABASE-USER
✅ DB Password: DATABASE-PASSWORD
✅ Admin Email: ADMIN-EMAIL
✅ Admin Password: ADMIN-PASSWORD
✅ URL: http://YOUR-DOMAIN
```