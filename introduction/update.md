# Update

To update Vito to its latest version you just need to run the `update.sh` file inside the root of the project.

```sh
cd /home/vito/YOUR-DOMAIN

bash ./update.sh
```

**YOUR-DOMAIN** is the folder that the project has been installed.

## What happens?

Just like other git projects, It pulls the latest changes from the repo and runs a few Laravel scripts to update.

Content of the `update.sh`:

```sh
php artisan down

git pull

composer install --no-dev

php artisan migrate --force

php artisan config:clear
php artisan cache:clear

php artisan config:cache

sudo supervisorctl restart worker:*

php artisan up
```