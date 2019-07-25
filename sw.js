;
const CACHE_NAME = 'v1_pwa-inty-Server',
  urlsToCache = [
    './',
    './index.html',
    './pwa-inty/stayos/jquery.min.js',
    './pwa-inty/stayos/loading.js',
    './pwa-inty/stayos/styles.css',
    './pwa-inty/images/icons/icon-192x192.png',
    './pwa-inty/images/icons/icon-144x144.png',
    './pwa-inty/images/logo.webp',
    './pwa-inty/images/icons/favicon.png'
  ]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          return res
        }
        return fetch(e.request)
      })
  )
})
