var cacheName = "afterclass-v1";
var cacheFiles = [
    "index.html",
    "img/ic.png",
    "img/ic2.png",
];

self.addEventListener('install', function(e) {
    console.log("[ServiceWorker] Installed");

    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[ServiceWorker] Caching cacheFiles");
            return cache.addAll(cacheFiles);
        })
    );
});