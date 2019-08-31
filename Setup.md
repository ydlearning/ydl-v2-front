# Setup frontend
YDL V2 frontend

## Y&D Learning V2 - frontend

> Course Manager - Manage your courses easily.

## Build Setup

``` bash
# install dependencies
pnpm install

# serve with hot reload at localhost:8080
pnpm run serve

# build for production with minification
pnpm run build

# build for production and view the bundle analyzer report
pnpm run build --report

# run unit tests
pnpm run unit

# run e2e tests
pnpm run e2e

# run all tests
pnpm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Tools

### nodejs 12.x

dependencies
``` bash
pnpm install vue-cli
```

project setup with
``` bash
vue create
vue add vuetify
```

### Vuese

``` bash
# generate documentation
vuese gen
```

### Commitizen

``` bash
# install
pnpm i -g commitizen
pnpm install -g cz-conventional-changelog

# Windows:
Set-Content -path "~/.czrc" -value '{ "path": "cz-conventional-changelog" }'

# Mac:
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc

# use
git cz
```