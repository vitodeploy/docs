# CronJobs

Vito makes managing CronJobs painless! It interacts directly with your server's `crontab` and deploys your CronJobs there.

You can create and delete CronJobs.

## How it works?

Every time you modify the CronJobs list (Create or Delete), Vito rewrites the `crontab` with the final existing CronJobs that you have in your dashboard.