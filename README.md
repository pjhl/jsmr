# JSMR

## Start

To start the development version with docker-compose:

```bash
docker-compose up --build
```

## Applications

* `frontend` - Web-site
* `rest` - REST API
* `admin`- Admin panel
* `documentation` - Documentation site


## Tasks

### 1. Pages (static pages module)

Fields:

* id
* pathname
* status (DISABLED, ENABLED)
* name
* body

### 2. Users (users)

Fields:

* id
* status (ACTIVE, DISABLED)
* role
* name
* email
* password
