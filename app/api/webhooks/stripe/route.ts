export async function POST(request: Request) {
  // Empty POST route handler for Stripe webhooks
  return new Response("Webhook received", { status: 200 });
}
