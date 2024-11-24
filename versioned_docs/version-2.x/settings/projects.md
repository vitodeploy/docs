# Projects

- [Introduction](#introduction)
- [Creating a Project](#creating-a-project)
- [Project User Management](#project-user-management)
- [Deleting a Project](#deleting-a-project)
- [Switching Projects](#switching-projects)

## Introduction

Vito enables you to handle your different projects.

Every user in Vito can have multiple projects and the servers belong to projects. The relationship between servers and
projects is one-to-many

## Creating a Project

To create a project you just need a unique name! Go to the Projects page and create a new one. It will appear in the
left sidebar, Under Projects dropdown.

:::info
Only admins can create projects.
:::

## Project User Management

Admins can manage the users of the project. They can add or remove users from the project.

## Deleting a Project

Deleting a project is as easy as hitting the delete button and confirming that you want to delete it.

:::danger
If you delete a project it will delete all of its servers! If you are using
a [cloud provider](./server-providers) to create the servers, By deleting the project, It will also delete it
from the provider.
:::

## Switching Projects

In the left sidebar you can see the current Project which is already selected in the dropdown. To change it to another
project just open it and select the project you want to switch to. Then Vito will change your current project and will
load the selected project's servers.
