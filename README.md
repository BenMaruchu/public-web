# open311-web-public

[![Build Status](https://travis-ci.org/BenMaruchu/public-web.svg?branch=develop)](https://travis-ci.org/BenMaruchu/public-web)

Dawasco public website for open311 issues

## Project Structure

```txt
.
├── README.md
├── config
│   ├── jest
│   │   ├── fileMock.js
│   │   └── fileTransform.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── development.js
├── package.json
├── production.js
├── public
├── src
│   ├── index.js
│   ├── setupTests.js
│   ├── components
└── package-lock.json
```

- `development.js` Server in dev environment
- `production.js` Server in production environment
- `config/webpack.config.dev.js` Webpack development configuration
- `config/webpack.config.prod.js` Webpack production configuration

## Usage

> **First install all the dependencies for development**

```sh
npm install
```

> **Launch application in development mode**

```sh
npm run dev
```

> **Testing Application**

```sh
npm run test
```

Note
Leaflet Map Testing is limited as of this writing, leaflet does not natively support headless browser and it keeps giving out  `window is not defined error`. Refer to [https://github.com/PaulLeCam/react-leaflet/issues/69](https://github.com/PaulLeCam/react-leaflet/issues/69) and [https://github.com/PaulLeCam/react-leaflet/issues/45](https://github.com/PaulLeCam/react-leaflet/issues/45)

> **Build application**

```sh
npm run build
```

> **Run application**

```sh
npm run start
```

> **Extras**

- Best fix of `npm run.lock` merge conflict

```sh
git checkout <previous commit> -- npm run.lock

npm run install
```

## Install Redux devTools Browser Extension

> **Install Extension for your browser**

1. For Google Chrome
    - [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
2. For Mozilla Firefox
    - [Mozilla Addon Store](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)
