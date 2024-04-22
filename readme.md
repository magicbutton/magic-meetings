---
title: magic-meetings
description: Magic Meetings is a solution for handling all aspects of meetings. From initial request for a meeting till everything have been accounted for.
---

# Magic Meetings

## Magic App Configuration

The app is define using the `magicapp` manifest format stored at ./koksmat/magicapp.yaml. At the time of writing the manifest consists of the following element

- roles
- accessroles
- baseattributes
- entities
- methods
- services
- processes
- events

## Entities

The most central part of the configuration is the entities section, where you define the data model of your app

The entities section is a list of entities, each entity has a name, description, baselineattributes, additionalattributes
the baselineattributes are the attributes that are common to all entities, like id, created, updated, createdby, updatedby
the additionalattributes are the attributes that are specific to the entity you are defining. You can define the type of the attribute,
if it is required, and if it is a reference to another entity
you can also define the parent entity, if the entity is a child of another entity

### Relationsships

#### One to One

You can define a one to one relationship by defining an attribute as a reference to another entity

In this example the attribute responsible is a reference to the user entity

```yaml
entities:
  task: &task
    name: task
    description: Task
    baselineattributes: *recordAttributes
    parent: productionorder
    additionalattributes:
      - name: starttime
        type: datetime
        required: true
      - name: location
        type: string
        required: true
      - name: responsible
        type: reference
        entity: *user
        required: true

```

#### One to Many

The yaml structure above also ddemonstrates a one to many relationship. In this case the task entity is a child of the productionorder entity,
that is there can be many tasks for a single productionorder

#### Many to Many

The following yaml structure demonstrates a many to many relationship. Any number of service catalogues can be associated with any number of services

```yaml
entities:
  servicecatalogue: &servicecatalogue
    name: servicecatalogue
    description: Service Catalogue
    baselineattributes: *recordAttributes
    additionalattributes:
      - name: services
        type: array
        entity: *service
        required: false

```

# Backup

## Message templates inspiration

https://ataylor.io/exp/go-templates/
https://atlasgo.io/atlas-schema/external
https://docs.sqlc.dev/en/stable/index.html

go get github.com/sqlc-dev/sqlc/cmd/sqlc
