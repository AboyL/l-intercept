self.addEventListener('fetch', (event) => {
  if(/favixxxxxxcon/.test(event.request.url)){
    event.respondWith(new Response('xxxxxzzz'))
  }
})