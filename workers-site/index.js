export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle API routes (optional)
    if (url.pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ message: "Hello from API" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log(request);
    // Try serving static assets
    let response = await env.ASSETS.fetch(request);

    console.log(response);
    // If asset not found, serve index.html (for SPA routing)
    if (response.status === 404) {
      const indexRequest = new Request(`${url.origin}/index.html`, request);
      response = await env.ASSETS.fetch(indexRequest);
    }

    return response;
  },
};
