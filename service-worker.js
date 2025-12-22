// Service Worker pour PWA
const CACHE_NAME = 'peerjs-chat-v41';
const urlsToCache = [
  '/messagerie/P2P.html',
  '/messagerie/',
  'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  // Forcer l'activation immédiate
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert (v36)');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  // Prendre le contrôle immédiatement
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Interception des requêtes - Stratégie Network First pour P2P.html
self.addEventListener('fetch', (event) => {
  // Pour P2P.html, toujours essayer le réseau d'abord
  if (event.request.url.includes('P2P.html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Mettre à jour le cache avec la nouvelle version
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // En cas d'échec réseau, utiliser le cache
          return caches.match(event.request);
        })
    );
  } else {
    // Pour les autres ressources, utiliser le cache d'abord
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  }
});
