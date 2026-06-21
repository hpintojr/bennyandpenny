export default function Head() {
  const socialImage = "https://www.bennyandpenny.com/images/og-social-background.webp?rev=20260621-static";

  return (
    <>
      <link rel="image_src" href={socialImage} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:secure_url" content={socialImage} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Benny & Penny's — A Tech Company" />
      <meta name="twitter:image" content={socialImage} />
    </>
  );
}
