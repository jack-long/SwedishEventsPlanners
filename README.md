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

Protractor is used to run E2E tests
