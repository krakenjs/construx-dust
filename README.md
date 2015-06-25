# construx-dust

Lead Maintainer: [Matt Edelman](https://github.com/grawk)

[![Build Status](https://travis-ci.org/krakenjs/construx-dust.svg?branch=master)](https://travis-ci.org/krakenjs/construx-dust)
[![NPM version](https://badge.fury.io/js/construx-dust.png)](http://badge.fury.io/js/construx-dust)

[construx](https://github.com/krakenjs/construx) plugin for JIT-compiling dust resources during development of [express](http://expressjs.com/) applications.

## Usage

### Install

```shell
$ npm install --save-dev construx-dust
```

### Configure

Where you configure your construx plugins:

```json
{
  "template": {
    "module": "construx-dust",
    "files": "/templates/**/*.js",
    "base": "templates",
    "i18n": "config:i18n"
  }
}
```

_Note: See [construx README](https://github.com/krakenjs/construx/blob/master/README.md) for general usage of construx_

