self.addEventListener("fetch", (event) => {
    console.log("[service-worker.js] Intercepting fetch event", event.request)
    event.respondWith(
        caches.match(event.request).then(async (response) => {
          const toReturn = response || await fetch(event.request);
          if(!response) {
            event.waitUntil(
                caches.open('test-cache').then((cache) => {
                    cache.add(event.request.url).catch(_=>console.error(`can't load ${event.request.url} to cache`))
                }).catch((err) => console.log("ugabuga sw error", err))
            );
          }
          return toReturn;
        })
      );
    return;
});

self.addEventListener("install", () => {
    console.log("[service-worker.js] Installing service worker")
    return;
});

self.addEventListener("activate", () => {
    console.log("[service-worker.js] Activated service worker")
    return;
});