// Service Worker pour PWA
const CACHE_NAME = 'peerjs-chat-v48';
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
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => {
            console.log('Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          })
      ))
      .then(() => self.clients.claim())
  );
});

// Interception des requêtes - Stratégie Network First pour P2P.html
self.addEventListener('fetch', (event) => {
  const isMainPage = event.request.url.includes('P2P.html');
  
  event.respondWith(
    isMainPage
      ? // Network First pour P2P.html
        fetch(event.request)
          .then(response => {
            // Mettre à jour le cache
            caches.open(CACHE_NAME).then(cache => 
              cache.put(event.request, response.clone())
            );
            return response;
          })
          .catch(() => caches.match(event.request))
      : // Cache First pour les autres ressources
        caches.match(event.request)
          .then(response => response || fetch(event.request))
  );
});

