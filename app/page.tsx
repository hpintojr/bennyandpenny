import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Benny & Penny's — A Tech Company",
  description:
    "Benny & Penny's is the development and design studio of Hamilton Pinto Jr., delivering custom API integrations, business consulting, brand and web development, and publishing solutions.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Benny & Penny's — A Tech Company",
    description:
      "Custom API integrations, business consulting, design, web, and publishing solutions by Hamilton Pinto Jr.",
  },
};

const capabilities = [
  {
    icon: "✦",
    title: "Software architecture",
    text: "Custom platforms, API integration, and systems that improve operational efficiency, data flow, and business intelligence.",
  },
  {
    icon: "◆",
    title: "Creative technology",
    text: "The eye of a designer with the discipline of an architect—brand systems, web, and digital experiences built to perform.",
  },
  {
    icon: "♥",
    title: "Brand & publishing",
    text: "From go-to-market systems to an original children's book imprint, ideas taken from concept to launch.",
  },
];

const ventures = [
  {
    title: "XBeton",
    eyebrow: "Construction Technology",
    text: "Commerce and agent-onboarding platform for an AAC and nano-graphene building-systems company. Architecture, API integration, and go-to-market systems.",
    image: "/images/work-xbeton-architecture.webp",
    imageAlt: "XBeton AAC building blocks on a modern construction site",
    url: "https://www.xbeton.com/",
  },
  {
    title: "Advantage First Financial",
    eyebrow: "Financial Services",
    text: "Lead-capture, compliance, and sales-performance infrastructure for a debt-resolution firm, built and supported end to end.",
    image: "/images/work-aff-dashboard.webp",
    imageAlt: "Financial services dashboard with performance and compliance analytics",
    url: "https://www.advantagefirst.com/",
  },
  {
    title: "Benny & Penny's Adventures",
    eyebrow: "Publishing Imprint",
    text: "An original children's medical book series and a self-owned publishing imprint. Brand, web, and production pipeline.",
    image: "/images/work-adventures-mockup.webp",
    imageAlt: "Benny and Penny's Adventures children's book collection",
    url: "https://www.bennyandpennyadventures.com/",
  },
  {
    title: "American Colonial Capital",
    eyebrow: "Capital & Finance",
    text: "Web, API, systems, brand, and launch infrastructure for an American Colonial Capital venture.",
    image: "/images/work-acc-capital.svg",
    imageAlt: "American Colonial Capital navy, red, and white private-equity brand visual",
    url: "https://acc.capital/",
  },
  {
    title: "Mercury Call Desk",
    eyebrow: "Communications",
    text: "AI-powered communications platform. Pricing, quoting, telephony, and billing systems for high-volume outbound teams.",
    image: "/images/work-mercury-telephony.webp",
    imageAlt: "Mercury Call Desk AI-powered telephony network visual",
    url: "https://mercurycalldesk.com/",
  },
  {
    title: "60+ Establishments",
    eyebrow: "Brand & Launch",
    text: "Restaurants, law firms, medical practices, and professional-service organizations opened and supported across Southern California.",
    image: "/images/work-establishments-collage.webp",
    imageAlt: "Restaurant, law office, and medical-practice environments",
    url: null,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Software Architect · Creative Technologist · Publisher</p>
            <h1 className="display">Vision, translated into real-world solutions.</h1>
            <p className="lede">
              For two decades I&apos;ve built the systems behind brands, platforms, and ventures—pairing
              the eye of a designer with the discipline of a software architect. Benny &amp; Penny&apos;s is
              the studio where that work, and my own, comes together. Now I&apos;m building my own.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/our-work">View my work</Link>
              <Link className="button button--light" href="/work-with-us">Work with me</Link>
            </div>
          </div>
          <div className="heroVisual">
            <div className="heroImageFrame">
              <Image
                src="/images/home-hero-brandmark.webp"
                alt="Benny and Penny's sculptural B and P brand mark"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 46vw"
                className="heroImage"
              />
            </div>
            <div className="visualTag">A technology &amp; creative studio with heart at the center.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">What I do</p>
              <h2 className="h2">One discipline, many registers.</h2>
            </div>
            <p className="lede">
              From construction-tech platforms to a children&apos;s book imprint, the common thread is execution.
            </p>
          </div>
          <div className="pillarGrid">
            {capabilities.map((c) => (
              <article className="card pillarCard" key={c.title}>
                <div className="iconBadge" aria-hidden="true">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Selected ventures</p>
              <h2 className="h2">The work speaks.</h2>
            </div>
            <Link className="textLink" href="/our-work">See all work</Link>
          </div>
          <div className="workGrid">
            {ventures.map((v) => {
              const isAcc = v.title === "American Colonial Capital";

              return (
                <article className="card workCard ventureCard" key={v.title}>
                  <div className="workCardMedia">
                    {isAcc ? (
                      <div className="accPortfolioVisual">
                        <Image
                          src={v.image}
                          alt={v.imageAlt}
                          fill
                          sizes="(max-width: 800px) 100vw, 33vw"
                          className="accPortfolioVisual__background"
                        />
                        <div className="accPortfolioLogo" aria-hidden="true">
                          <Image
                            src="/images/acc-logo.svg"
                            alt=""
                            fill
                            sizes="(max-width: 800px) 35vw, 11vw"
                            className="accPortfolioLogo__image"
                          />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={v.image}
                        alt={v.imageAlt}
                        fill
                        sizes="(max-width: 800px) 100vw, 33vw"
                        className="workCardImage"
                      />
                    )}
                  </div>
                  <div className="workCardBody">
                    <span className="kicker">{v.eyebrow}</span>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                    {v.url && (
                      <a className="cardLink" href={v.url} target="_blank" rel="noopener">
                        Visit site →
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="shell callout">
          <div className="calloutInner">
            <p className="eyebrow">Let&apos;s build the next one</p>
            <h2 className="h2">Have a platform, brand, or product that needs to get built right?</h2>
            <p className="lede">
              I take on a small number of aligned software, brand, and publishing engagements.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/work-with-us">Start a conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
