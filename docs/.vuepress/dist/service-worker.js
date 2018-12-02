/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "88c484c2fc2f3a4d56f279a8a07e94da"
  },
  {
    "url": "article/index.html",
    "revision": "4731939c1d24b2a542374023eae53a15"
  },
  {
    "url": "article/test.html",
    "revision": "dc952bf65a01253f0508f7f8ddf21a02"
  },
  {
    "url": "assets/css/0.styles.8e637759.css",
    "revision": "bdb4792ebb348b60deb05146e5390b51"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.e8c14d44.js",
    "revision": "95ac714a09f0a91e0082ea76caf276af"
  },
  {
    "url": "assets/js/3.3dc9d7cd.js",
    "revision": "bb8ba28a7e366fad6315821e0b6599f1"
  },
  {
    "url": "assets/js/4.15d3d685.js",
    "revision": "ae31703d8b74c4a08082f9d10f127932"
  },
  {
    "url": "assets/js/5.d2691f19.js",
    "revision": "4a0c42d2986fa1a39bf33d8bdd9e3a4c"
  },
  {
    "url": "assets/js/6.c777e8b1.js",
    "revision": "cc4c87db129ca07311d014abbe85dcf4"
  },
  {
    "url": "assets/js/7.e30cf9f2.js",
    "revision": "e7f9368d73ff653110064a560e66fae1"
  },
  {
    "url": "assets/js/8.b1a0ec13.js",
    "revision": "161e773d5423c9c22d81336b5d5f25fb"
  },
  {
    "url": "assets/js/app.044e6cab.js",
    "revision": "e2b2f3a9a29747d8b6d97d1a645fced9"
  },
  {
    "url": "index.html",
    "revision": "a709fcac5592963e2aa7d66dbc7a4bf0"
  },
  {
    "url": "logo.jpg",
    "revision": "ffe61776e376f76675865b28023e458c"
  },
  {
    "url": "note/index.html",
    "revision": "044b9f54a1e3c1a022d8c520982f0773"
  },
  {
    "url": "note/test.html",
    "revision": "2b0ea2803a10f003e263ce22da1dbcbe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
