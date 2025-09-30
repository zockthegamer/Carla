// Este es un Service Worker muy simple.
// Su principal trabajo es hacer la app "instalable".

self.addEventListener('install', (event) => {
    // Se activa cuando se instala el PWA
    console.log('Service Worker instalado.');
});

self.addEventListener('fetch', (event) => {
    // Intercepta las peticiones de red.
    // Por ahora, solo las deja pasar.
    event.respondWith(fetch(event.request));
});