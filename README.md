# Minimal repro

For <https://github.com/angular/angular/issues/55396>

* `yarn install`
* `yarn build && node --inspect dist/ssr/server/server.mjs``

No leak compared to webpack based : <https://github.com/JeanMeche/ssr/tree/ssr-leak-webpack-builder>
