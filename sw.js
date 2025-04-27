const CACHE_NAME = 'quiniela-cache-v1';
const urlsToCache = [
  '/quiniela/index.html',
  '/quiniela/aaaa-removebg-preview.png',
  '/quiniela/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
