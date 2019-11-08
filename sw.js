var cacheName = 'davidsonbpeapp';
var filesToCache = [
    './',
    './index.html',
    './pwa-inty/stayos/jquery.min.js',
    './pwa-inty/stayos/loading.js',
    './pwa-inty/stayos/styles.css',
    './pwa-inty/images/icons/icon-192x192.png',
    './pwa-inty/images/icons/icon-144x144.png',
    './pwa-inty/images/icons/icon-128x128.png',
    './pwa-inty/images/icons/icon-152x152.png',
    './pwa-inty/images/icons/icon-192x192.png',
    './pwa-inty/images/icons/icon-384x384.png',
    './pwa-inty/images/icons/icon-512x512.png',
    './pwa-inty/images/icons/icon-72x72.png',
    './pwa-inty/images/icons/icon-96x96.png',
    './pwa-inty/images/logo.webp',
    './manifest.json',
    './pwa-inty/images/icons/favicon.png'
  ];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
