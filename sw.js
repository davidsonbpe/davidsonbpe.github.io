var cacheName = 'davidsonbpeapp';
var filesToCache = [
    './',
    './index.html',
    './d-framework/stayos/jquery.min.js',
    './d-framework/stayos/loading.js',
    './d-framework/stayos/styles.css',
    './d-framework/images/logo.webp',
    './d-framework/icon/slide-image.jpg',
    './d-framework/icon/512.png',
    './d-framework/icon/192.png',
    './d-framework/icon/144.png',
    './d-framework/icon/96.png',
    './d-framework/icon/72.png',
    './d-framework/icon/48.png',
    './d-framework/icon/36.png',
    './manifest.json'
  ];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
