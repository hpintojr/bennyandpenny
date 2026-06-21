export const runtime = "edge";

/**
 * A direct static-art proxy for link-preview clients.
 *
 * The public WebP is already the approved social artwork. Returning its raw
 * bytes avoids asking browser share clients to render a generated image before
 * they can build a preview card.
 */
export async function GET(request: Request) {
  const sourceUrl = new URL("/images/og-social-background.webp", request.url);
  const source = await fetch(sourceUrl, { cache: "force-cache" });

  if (!source.ok || !source.body) {
    return new Response("Social preview image unavailable.", { status: 502 });
  }

  return new Response(source.body, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=0, s-maxage=31536000, stale-while-revalidate=604800",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
