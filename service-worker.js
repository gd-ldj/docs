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
    "revision": "d1f7f5277822bf6254eccda3cb22c119"
  },
  {
    "url": "assets/css/0.styles.63e9daa3.css",
    "revision": "5d7f7f0dae7ac2dad153d02132c251d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17783390.js",
    "revision": "2306648925418cb1de8abbed92d571d0"
  },
  {
    "url": "assets/js/11.d15f2d33.js",
    "revision": "2cd209ee934346cef7b32c508a86ab60"
  },
  {
    "url": "assets/js/12.746b071a.js",
    "revision": "f3bf2b6f3d253c0d7d1a875553048adb"
  },
  {
    "url": "assets/js/13.5d60a999.js",
    "revision": "a560720aad44857d1314b421e422dcc5"
  },
  {
    "url": "assets/js/14.4aba3685.js",
    "revision": "a50fbf25add2d891a86c027c0c74300f"
  },
  {
    "url": "assets/js/2.41a8d502.js",
    "revision": "61ec9a2c9767b47fc91cf4693718c220"
  },
  {
    "url": "assets/js/3.25af511c.js",
    "revision": "e5c2f84ac06ef6c2baaf179192f25bec"
  },
  {
    "url": "assets/js/4.55eef681.js",
    "revision": "2ddc27ed0bff5b02c341d1056e794c32"
  },
  {
    "url": "assets/js/5.824e550a.js",
    "revision": "153a98f17d7fc4a8d3f46b03fa37f5f7"
  },
  {
    "url": "assets/js/6.e905a355.js",
    "revision": "6c3fb346290dbe5ced18f237c6d23b38"
  },
  {
    "url": "assets/js/7.21534fca.js",
    "revision": "8f818899c1ca29a8b8d25491828b9def"
  },
  {
    "url": "assets/js/8.57dea2e5.js",
    "revision": "2d94655b19da2ca01318a542ad82a17d"
  },
  {
    "url": "assets/js/9.63e6194a.js",
    "revision": "170159a4d8fa97aaacc8702e367c9a21"
  },
  {
    "url": "assets/js/app.aa553ffe.js",
    "revision": "2ae156c721d554d4fa2e01104af1ff25"
  },
  {
    "url": "blog/chromesearch/index.html",
    "revision": "7cdaa0f3dc27802d88dde1fdba27ead8"
  },
  {
    "url": "blog/h5ym/index.html",
    "revision": "31d57e2c205adf925b377cde68259b5f"
  },
  {
    "url": "blog/index.html",
    "revision": "9329802163a939e998f2fe3321bdb4af"
  },
  {
    "url": "blog/qdgspg/index.html",
    "revision": "ddc1c4261b9263f21f2036a9eec725ad"
  },
  {
    "url": "copy/index.html",
    "revision": "cb5b9e4ede647958af6838db38c7bc8c"
  },
  {
    "url": "copy/kyfw/index.html",
    "revision": "752eaf71b2e3215c9ee180b0bd05f148"
  },
  {
    "url": "copy/tyyh/index.html",
    "revision": "5953f259dfc3a38fe249140439b823b5"
  },
  {
    "url": "copy/zq/index.html",
    "revision": "3aad0f730f9dd1e911c5b97a550262fd"
  },
  {
    "url": "index.html",
    "revision": "3a94a890b887cec6fa92fe75c0d7403e"
  },
  {
    "url": "life/index.html",
    "revision": "eebd12ffc6b85101dd0ec16a5d03bc82"
  },
  {
    "url": "life/knlh/index.html",
    "revision": "9bbf9ae946da356f99a3d9bf97df0823"
  },
  {
    "url": "logo.jpg",
    "revision": "ffe61776e376f76675865b28023e458c"
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
