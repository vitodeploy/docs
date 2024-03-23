# Update

To update Vito to its latest version you just need to run the `update.sh` file inside the root of the project.

```sh
cd /home/vito/vito

bash scripts/update.sh
```

::: info
If you are using the Docker version you will need to pull the latest image and recreate the container.
:::

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