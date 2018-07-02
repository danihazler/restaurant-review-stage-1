self.addEventListener('install', function(e){
  console.log("[ServiceWorker] Installed")
})
self.addEventListener('activate', function(e){
  console.log("[ServiceWorker] Active")
})
self.addEventListener('fetch', function(e){
  console.log("[ServiceWorker] Fetching", e.request.url)
})
