addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  const domain = url.hostname

  // Try to serve static assets directly
  if (path !== '/') {
    try {
      const response = await fetch(`https://${domain}${path}`)
      if (response.ok) {
        return response
      }
    } catch (error) {
      // If the asset doesn't exist, fall through to serve index.html
    }
  }

  // For all other requests, serve index.html
  const indexResponse = await fetch(`https://${domain}/`)
  return new Response(indexResponse.body, {
    status: indexResponse.status,
    headers: indexResponse.headers,
  })
}