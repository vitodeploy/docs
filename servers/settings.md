# Settings

In the Settings page of each server, You can view/modify the information of the server such as

- Name
- SSH IP
- SSH Port

If you change the IP or Port, Vito will try to reconnect to the server via new IP and Port.

## Restart

You can restart the server by clicking the `Restart` button.

## Delete

You have the option of deleting a server.

Deleting a server will erase it from your Vito Instance's database and if the server was created on a supported server providers (Not custom), It will try to delete the server on the provider via their APIs.

::: danger
It is possible that Vito cannot reach to the Server Provider to delete the instance. If that happens you will get an email (If you have configured the [Email](/introduction/configuration.md#email)) saying that Vito couldn't delete the server on the provider.
:::