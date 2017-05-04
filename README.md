# Warning

This logger is under active development and hasn't yet reached its final form.

It may not be fully compatible with current versions of Angular.

# Ngx-logger
[![Build Status][travis-badge]][travis-badge-url]

This is a simple library to log in Angular 

Features:
- a simple logger service
- a simple log consumer which log in console
- unit tests for the library
- a demo application 

Common tasks are present as npm scripts:

- `npm start` to run a live-reload server with the demo app
- `npm run test` to test in watch mode, or `npm run test:once` to only run once
- `npm run build` to build the library
- `npm run lint` to lint 
- `npm run clean` to clean
- `npm run integration` to run the integration e2e tests
- `npm install ./relative/path/to/lib` after `npm run build` to test locally in another app

[travis-badge]: https://travis-ci.org/julienbourgain/angular-ngx-logger.svg?branch=master
[travis-badge-url]: https://travis-ci.org/julienbourgain/angular-ngx-logger
