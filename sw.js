const CACHE_NAME = 'quiniela-cache-v1';
const urlsToCache = [
  '/quiniela/',  // ← Si tu carpeta está en http://tudominio.com/quiniela/
  'index.html',
  'aaaa-removebg-preview.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
