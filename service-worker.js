
self.addEventListener('install', event => {
    console.log('Service Worker instalowany');
});

self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});
