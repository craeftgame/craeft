self.addEventListener("install", (event) => {
    console.log("Service Worker installing.");
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker activating.");
});

self.addEventListener("fetch", (event) => {
    console.log("Fetching:", event.request.url);
    event.respondWith(fetch(event.request));
});
