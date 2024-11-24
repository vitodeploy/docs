# CronJobs

- [Introduction](#introduction)
- [Create a new Cronjob](#create-a-new-cronjob)
  - [Command](#command)
  - [User](#user)
  - [Frequency](#frequency)
- [Delete Cronjob](#delete-cronjob)
- [Enable/Disable Cronjob](#enabledisable-cronjob)

## Introduction

Vito makes managing CronJobs painless! It interacts directly with your server's `crontab` and deploys your CronJobs there.

You can Create, Delete, Enable and Disable CronJobs.

## Create a new Cronjob

Simply navigate to the Cronjobs and create a new cronjob by clicking the `Create` button and fill the following fields.

### Command

This is the command that will be executed on each cron execution. Depending on the user that will run the cron, It will run from the home directory of that user.

If the user is `vito` then the command will be executed on `/home/vito`. We recommend to use the absolute path for your commands in the cronjobs.

:::info
For example, To run Laravel's scheduler you can use the following command:

```
php /home/vito/your-domain/artisan schedule:run >> /dev/null 2>&1
```

:::

:::warning
Do not add any frequency (`* * * * *`) to the command because VitoDeploy will add it when deploying the cronjob.
:::

### User

The cronjob command will be executed by this user

### Frequency

This is the part you will provide the frequency and then VitoDeploy will attach it to the command when deploying the cronjob.

## Delete Cronjob

To delete a cronjob you can just hit the delete icon (trash) and confirm that you want to delete the cronjob.

## Enable/Disable Cronjob

VitoDeploy allows you to enable/disable a cronjob.

A disabled cronjob will not execute on the given frequency.
