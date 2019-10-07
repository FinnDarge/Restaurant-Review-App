console.log("Service Worker is registered");

// Array for the files that I want to be chached
const cacheFiles = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/js/dbhelper.js",
    "/js/main.js",
    "/js/restaurant_info.js",
    "/data/restaurants.json",
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
];

// if the cache name object doesn’t exist, create one with the cache name
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("versionOne").then(function (cache) {
            return cache.addAll(cacheFiles);
        })
    )
})

// Checking for a response from the match query 
// If true, the request already exists within. 
// If false, the request doesn’t exist within the cache and the item gets fetched.
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
            .catch((err) => console.log(err))
    )
});
