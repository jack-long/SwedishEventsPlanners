# Swedish Event Planners

## requirements

install `npm`
```Shell
curl -L https://npmjs.org/install.sh | sh
```

Install dependencies
```shell
npm install
```

### npm - Node Package Manager for JavaScript

Packages required are listed in file `package.json`.

They are installed locally.

### bower - a package manager for the web

Bower doesn’t concatenate or minify code or do anything else - it just installs the right versions of the packages you need and their dependencies.

Packages required are listed in file `bower.json` and installed in `bower_conponents/`.

The installation directory of bower is set by `.bowerrc` file.

## Run

```
npm start
```

## Tests

Karma is the test runner for unit tests

To start the unit test use the following command:

```
npm test
```

Protractor is used to run E2E tests

### login

After `customer_service` login, `DB.user` is `customer_service`, `path` is `/event_requests`.

### create new event request

length of `DB.event_requests` increase by `1`

### review event request

After `senior_customer_service` `approve` request, request `reviewer` changed to `finance_manager`.
After `admin_manger` `approve` request, request `reviewer` changed to `approved`.
After `senior_customer_service` `reject` request, `reviewer` changed to `Rejected by SeniorCS`.
After `admin_manger` `reject` request, `reviewer` changed to `Rejected by Admin`.
