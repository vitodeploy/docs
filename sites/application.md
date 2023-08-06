# Application

In the Application page you can manage your app and deployments.

![Application](/sites/application.png)

## Branch

You can change the branch of your cloned repository

## Deployment Script

This is a script which will be executed on your application server each time you press the `Deploy` button.

::: info
Your website's path is `/home/vito/YOUR-DOMAIN`
:::

## .env

This is the `.env` file of your PHP app (In this case Laravel) which you've installed on your server.

::: warning
Vito doesn't read the `.env` file in the beginning and you need to initiate the file from this page.
:::

## Deploy

This button appears when there is a deployment script! So you need to first write your deployment script and then this button will appear and you will be able to click on it an execute the deployment script on the server.