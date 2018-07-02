let cacheName = 'cache_v3';
let cacheFiles = [
  './',
  'index.html',
  '.css/styles.css',
  '.css/responsive.css',
  'img/Casa_Enrique.jpg',
  'img/Emily.jpg',
  '.js/dbhelper.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  'https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,500,600',
  'https://fonts.googleapis.com/css?family=Montserrat:600'
];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll(cacheFiles);
  }).catch(err => {
    console.log("Cache has not been added.");
  }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.map(thisCacheName => {
        if (thisCacheName !== cacheName) {
          return caches.delete(thisCacheName);
        }
      }))
    }).catch(err => {
      console.log("Old cache was not deleted.");
    })
  );
});

self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.resquest)
    .then(response => {
      return response || fetch(e.request);
  }));
});
