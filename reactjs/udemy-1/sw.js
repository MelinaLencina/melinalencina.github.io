const CACHE_ELEMENTS = [
    "./", 
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js"
]

const CACHE_NAME = "v1_cache_contador_react"

self.addEventListener("install", (e) => {
    e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
        cache.addAll(CACHE_ELEMENTS).then(() => {
            self.skipWaiting()
        }).catch(er => console.log(er));
    })
    )
});

self.addEventListener("activate", (e) => {

    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cacheName => {
                return cacheWhitelist.indexOf(cacheName) === -1 && caches.delete(cacheName);
            }))
        })
    )
});