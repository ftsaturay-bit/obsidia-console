export async function GET(request: Request) {
  return new Response("Get API Keys", { status: 200 });
}

export async function POST(request: Request) {
  return new Response("Generate API Key", { status: 200 });
}

export async function DELETE(request: Request) {
  return new Response("Revoke API Key", { status: 200 });
}
