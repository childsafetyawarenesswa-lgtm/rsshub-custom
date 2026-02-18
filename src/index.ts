export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("Worker is live", {
      headers: { "content-type": "text/plain" },
    });
  },
};
