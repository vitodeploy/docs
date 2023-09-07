# Installation

## Install on VPS (Recommended)

### Requirements

To install Vito, You need a virtual server with `Ubuntu 22.04 LTS` installed.

::: info
Other Ubuntu versions might also work but we don't recommend them.
:::

### Installation

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

If you've already set an E2E Certificate on your domain and you want to run it under `https` then you can run the following command to install:

```sh
wget https://raw.githubusercontent.com/vitodeploy/vito/main/install/install.sh && V_SSL=1 bash install.sh
```

::: warning
Before installation, Make sure that your Domain is pointing to the installation server's IP address.
:::

**Email**

This is the email that you will use to login.

**Password**

This is the password you will use to login.

### Ready

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

## Install Locally

To test VitoDeploy or to prevent spending more money on a Virtual Server you might want to install VitoDeploy locally and use it to manage your servers!

VitoDeploy is a Laravel project which means you can follow Laravel's documentation to see how you can run it locally but here we will recommend 2 ways of installing it locally.

VitoDeploy uses OpenSSL keys to connect to your servers so you can manage them, Every Vito instance should have its own public and private key to do so. With the following command, you can generate a key pair.

If you're using Mac or Linux, You can run it on your terminal. If you're using Windows with Sail, You can run it on the app container after bringing up the Sail.

```sh
openssl genpkey -algorithm RSA -out /PATH_TO_VITO/storage/ssh-private.pem
chmod 600 /PATH_TO_VITO/storage/ssh-private.pem
ssh-keygen -y -f /PATH_TO_VITO/storage/ssh-private.pem > /PATH_TO_VITO/storage/ssh-public.key
```

### Laravel Sail

To run the app locally via Laravel Sail clone the repository into your local machine and then run the following commands:

Set the envs

```sh
cp .env.example .env
```
Fill the `.env` file and then

```sh
composer install
```

And then boot up with Sail

```sh
./sail up
```

You might need to make the `sail` executable first

```sh
chmod +x ./sail
```

Login to the docker container and Run the migrations

```sh
php artisan migrate
```

Create a new user

```sh
php artisan user:create {name} {email} {password}
```

Open the the app on your local and use it.

[Sail Documentation](https://laravel.com/docs/10.x/sail)

### Laravel Herd or Valet

In this case you just need to setup the `.env` file

And before that make sure that you have the Mysql up and running on your local

```sh
cp .env.example .env
```

Fill the `.env`

Run the migrations

```sh
php artisan migrate
```

Create a new user

```sh
php artisan user:create {name} {email} {password}
```

And then run the queues

```sh
php artisan queue:listen --timeout=600 --queue=default,ssh,ssh-long
```

and then use Valet or Herd to link the site and open it locally

[Herd Documentation](https://herd.laravel.com/)

[Valet Documentation](https://laravel.com/docs/10.x/valet)
