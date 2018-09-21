# JSMR

## Start

To start the development version with docker-compose:

```bash
docker-compose up --build
```

## Technology stack

* `node` **v10.10**
* `mongo` **v4.1**


## Applications

* `frontend` - Web-site
* `rest` - REST API
* `admin`- Admin panel
* `documentation` - Documentation site


## Tasks

### 1. Pages (static pages module)

| Name | Type | Description |
|------|------|-------------|
| pathname | String\* | Path to the page without `.html`. Lowercase, allowed symbols: `/^[a-z0-9/-]+$/`) |
| status | String\* | Status: `DISABLED` or `ENABLED` |
| name | String\* | Page name. Max 70 symbols |
| meta | Object | Meta-data |
| meta.title | String | Meta-title. Max 70 symbols |
| meta.description | String | Meta-description. Max 160 symbols |
| body | String | Page body (HTML) |


### 2. Users (users)

Fields:

* id
* status (ACTIVE, DISABLED)
* role
* name
* email
* password
