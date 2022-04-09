//importScripts('sw-toolbox.js');
const staticCacheName = "cache-v1"

const assets = [
    "/",
    "/index.php"
]

//mise en cache
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets)
        } )
    )
});