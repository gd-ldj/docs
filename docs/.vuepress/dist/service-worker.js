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
    "revision": "633168dbb37925d37a427c990375232b"
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
    "url": "assets/js/app.1274310c.js",
    "revision": "cd21e8fa449a27b6496d1b908c1be88c"
  },
  {
    "url": "blog/chromesearch/index.html",
    "revision": "342ab5ea15707404487b141e342937aa"
  },
  {
    "url": "blog/h5ym/index.html",
    "revision": "973f78c26c9b960a7ae38a5bf55ba37a"
  },
  {
    "url": "blog/index.html",
    "revision": "b8a6ab3f77608f20252eac89288ff2a3"
  },
  {
    "url": "blog/qdgspg/index.html",
    "revision": "07b264d38c175c357ff232dd43f46a75"
  },
  {
    "url": "copy/index.html",
    "revision": "35dd5bd65e17529ef012d770d23b19a5"
  },
  {
    "url": "copy/kyfw/index.html",
    "revision": "da2be03e32459c6ad980e71313027efc"
  },
  {
    "url": "copy/tyyh/index.html",
    "revision": "67403715726e92c2fd312d23a8d0f13e"
  },
  {
    "url": "copy/zq/index.html",
    "revision": "c135904d18b62aed8fbcdf58c5fd2c9c"
  },
  {
    "url": "index.html",
    "revision": "8df8e2b6270ed7cd10ec7fdd4bf555ef"
  },
  {
    "url": "life/index.html",
    "revision": "efb9c72abe89fd1b7471f33118777eba"
  },
  {
    "url": "life/knlh/index.html",
    "revision": "96ba27dba030200e001cfb464b2c965d"
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
