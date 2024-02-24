# Installation

## Install on VPS (Recommended)

### Requirements

- Ubuntu 22.04 LTS
- 1 GB Memory
- 1 CPU

::: info
Other Ubuntu versions might also work but we don't recommend them.
:::

::: warning
You cannot use Vito to install applications into the same server as Vito. Otherwise, It might crash your Vito instance.
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


## Install via Docker

Vito provides a single docker image that you can install it easily!

### Docker Command

```sh
docker run -v vito_db:/var/lib/mysql -v vito_storage:/var/www/html/storage \
    -e APP_KEY=your_32_character_app_key  \
    -e APP_URL=https://your-vito-url  \
    -e DB_PASSWORD=your_db_pass  \
    -e NAME=your_name \
    -e EMAIL=your_email \
    -e PASSWORD=your_password \
    -p 80:80 vitodeploy/vito:latest
```

::: warning
Make sure you modify the env variables when running the command.
:::

### Docker Compose

```yaml
version: '3'
services:
    vito:
        image: vitodeploy/vito:latest
        ports:
            - '8000:80'
        environment:
            APP_KEY: 'your-32-character-app-key'
            APP_URL: 'https://your-vito-url'
            DB_PASSWORD: 'my_password'
            NAME: 'vito'
            EMAIL: 'vito@example.com'
            PASSWORD: 'password'
        volumes:
            - 'vito-storage:/var/www/html/storage'
            - 'vito-db:/var/lib/mysql'
volumes:
    vito-storage:
        driver: local
    vito-db:
        driver: local
```

### Environment Variables

`APP_KEY`: A 32-character string app key used for encryption within the app.

`APP_URL`: The URL of your Vito instance, by default is http://localhost

`DB_PASSWORD`: This will be the root password of the MySQL database.

`NAME`: Your account's name

`EMAIL`: Your account's email for login

`PASSWORD`: Your account's password for login

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
cp .env.sail .env
```
Fill the `.env` file and then

```sh
composer install
```

And then boot up with Sail

```sh
./vendor/bin/sail up -d
```

Generate App Key

```sh
./vendor/bin/sail artisan key:generate
```

Run the migrations

```sh
./vendor/bin/sail artisan migrate
```

Create a new user

```sh
./vendor/bin/sail artisan user:create {name} {email} {password}
```

Vito by default will run on localhost:2080. You can change the port on your `.env` file.

[Sail Documentation](https://laravel.com/docs/10.x/sail)

### Laravel Herd or Valet

In this case you just need to setup the `.env` file

And before that make sure that you have the Mysql up and running on your local

```sh
cp .env.example .env
```

Fill the `.env`

Generate App Key

```sh
php artisan key:generate
```

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
