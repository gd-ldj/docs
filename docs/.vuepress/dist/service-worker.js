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
    "revision": "6bb3be43bc05d82bf3090883ccaafd2b"
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
    "url": "assets/js/10.d357c810.js",
    "revision": "b8b0c5777b97f0762a4e9474d675cd1e"
  },
  {
    "url": "assets/js/11.412d3f93.js",
    "revision": "22cf950f6d4aede90f7b8304e8206e23"
  },
  {
    "url": "assets/js/2.ffa447b6.js",
    "revision": "1f5d4c9e375b52947e2f4ab644908970"
  },
  {
    "url": "assets/js/3.ec02a4a4.js",
    "revision": "e3e727e3c07db2088586c76d7ee18aa2"
  },
  {
    "url": "assets/js/4.2278017d.js",
    "revision": "ffd235ee44da96d82db3a8643d9a04d2"
  },
  {
    "url": "assets/js/5.3fff3c01.js",
    "revision": "5323b89893a8647d3b17581f49a38d13"
  },
  {
    "url": "assets/js/6.2b8c73dd.js",
    "revision": "5b5a02e5d99190864453c88cf3e18b35"
  },
  {
    "url": "assets/js/7.33381fa1.js",
    "revision": "a26354327b4e18d27fac27fed72e78ec"
  },
  {
    "url": "assets/js/8.a776b911.js",
    "revision": "200afbe9a2b729367a4926941c7cd121"
  },
  {
    "url": "assets/js/9.0a8fdec5.js",
    "revision": "6509d0f580aa3fca073d412bc28e663c"
  },
  {
    "url": "assets/js/app.3a6dcf03.js",
    "revision": "729e11fba7d7fdcf5335409cd258ba71"
  },
  {
    "url": "blog/chromesearch/index.html",
    "revision": "6a96cda671c80e4120d4d1f3d4cee962"
  },
  {
    "url": "blog/h5ym/index.html",
    "revision": "df2ba651a47e298f45b2ab8c09d52d48"
  },
  {
    "url": "blog/qdgspg/index.html",
    "revision": "9ac1e77b5a58a1f8668ae2b866993630"
  },
  {
    "url": "copy/index.html",
    "revision": "ae465f8dbf9abc2928bcc3cd05bfebd1"
  },
  {
    "url": "copy/test.html",
    "revision": "19d126765e9f20cae2c26d5c6d5c199b"
  },
  {
    "url": "index.html",
    "revision": "97cfae4b3911ff168290f03668bc735f"
  },
  {
    "url": "life/index.html",
    "revision": "e6f9a71ef5d651ab40aa213b26e02a4b"
  },
  {
    "url": "life/test.html",
    "revision": "a443bf658651e9602226f7dc29d606cb"
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
