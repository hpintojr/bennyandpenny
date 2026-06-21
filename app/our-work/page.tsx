import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected ventures and platforms by Hamilton Pinto Jr. — XBeton, Advantage First Financial, American Colonial Capital, Benny & Penny Adventures, Mercury Call Desk, and 60+ launched establishments.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    url: "/our-work",
    title: "Work by Benny & Penny — A Tech Company",
    description:
      "Selected platforms, ventures, brand systems, and publishing work by Hamilton Pinto Jr.",
  },
};

const ventures = [
  {
    title: "XBeton",
    label: "Construction Technology",
    description:
      "Commerce and agent-onboarding platform for an AAC and nano-graphene building-systems company. Platform architecture, API integration, and go-to-market systems.",
    role: "Platform architecture · Integrations",
    tags: ["Architecture", "APIs", "Commerce", "Go-to-market"],
    image: "/images/work-xbeton-architecture.webp",
    imageAlt: "XBeton AAC building blocks on a modern construction site",
    url: "https://www.xbeton.com/",
  },
  {
    title: "Advantage First Financial",
    label: "Financial Services",
    description:
      "Lead-capture, compliance, and sales-performance infrastructure for a debt-resolution firm, built and supported end to end.",
    role: "Systems · Compliance · BI",
    tags: ["Systems", "Compliance", "Business intelligence"],
    image: "/images/work-aff-dashboard.webp",
    imageAlt: "Financial services dashboard with performance and compliance analytics",
    url: "https://www.advantagefirst.com/",
  },
  {
    title: "Benny & Penny Adventures",
    label: "Publishing Imprint",
    description:
      "An original children's medical book series and the launch of a self-owned publishing imprint. Brand, web, and production pipeline.",
    role: "Founder · Publisher · Design",
    tags: ["Brand", "Web", "Publishing"],
    image: "/images/work-adventures-mockup.webp",
    imageAlt: "Benny and Penny Adventures children's book collection",
    url: "https://www.bennyandpennyadventures.com/",
  },
  {
    title: "American Colonial Capital",
    label: "Capital & Finance",
    description:
      "Web, API, systems, brand, and launch infrastructure for an American Colonial Capital venture.",
    role: "Web · APIs · Systems · Brand · Launch",
    tags: ["Web", "APIs", "Systems", "Brand", "Launch"],
    image: "/images/work-acc-capital.svg",
    imageAlt: "American Colonial Capital navy, red, and white private-equity brand visual",
    url: "https://acc.capital/",
  },
  {
    title: "Mercury Call Desk",
    label: "Communications",
    description:
      "AI-powered communications platform. Pricing, quoting, telephony, and billing systems for high-volume outbound teams.",
    role: "Product · Architecture",
    tags: ["Product", "Telephony", "Billing"],
    image: "/images/work-mercury-telephony.webp",
    imageAlt: "Mercury Call Desk AI-powered telephony network visual",
    url: "https://mercurycalldesk.com/",
  },
  {
    title: "60+ Establishments",
    label: "Brand & Launch",
    description:
      "Restaurants, law firms, medical practices, and professional-service organizations opened and supported across Southern California.",
    role: "Visual communications · Web",
    tags: ["Branding", "Web", "Launch"],
    image: "/images/work-establishments-collage.webp",
    imageAlt: "Restaurant, law office, and medical-practice environments",
    url: null,
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <p className="eyebrow">Work</p>
          <h1 className="display">Two decades of building the systems behind brands.</h1>
          <p className="lede">
            A selection of platforms, ventures, and brands I&apos;ve architected, built, and supported—
            spanning construction technology, financial services, communications, and publishing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="workGrid workGrid--feature">
            {ventures.map((venture) => {
              const isAcc = venture.title === "American Colonial Capital";
              const isAff = venture.title === "Advantage First Financial";

              return (
                <article className="card workCard ventureCard" key={venture.title}>
                  <div className="workCardMedia">
                    {isAcc ? (
                      <div className="accPortfolioVisual">
                        <Image
                          src={venture.image}
                          alt={venture.imageAlt}
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
                    ) : isAff ? (
                      <div className="affPortfolioVisual">
                        <Image
                          src={venture.image}
                          alt={venture.imageAlt}
                          fill
                          sizes="(max-width: 800px) 100vw, 33vw"
                          className="affPortfolioVisual__background"
                        />
                        <div className="affPortfolioLogo" aria-hidden="true">
                          <Image
                            src="/images/AFF_Logo.png"
                            alt=""
                            fill
                            sizes="(max-width: 800px) 52vw, 17vw"
                            className="affPortfolioLogo__image"
                          />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={venture.image}
                        alt={venture.imageAlt}
                        fill
                        sizes="(max-width: 800px) 100vw, 33vw"
                        className="workCardImage"
                      />
                    )}
                  </div>
                  <div className="workCardBody">
                    <span className="kicker">{venture.label}</span>
                    <h3>{venture.title}</h3>
                    <p>{venture.description}</p>
                    <p className="roleLine">{venture.role}</p>
                    <div className="tagList">
                      {venture.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                    {venture.url && (
                      <a className="cardLink" href={venture.url} target="_blank" rel="noopener noreferrer">
                        Visit {venture.title}<span aria-hidden="true"> →</span><span className="visuallyHidden"> (opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell pageIntro">
          <div>
            <p className="eyebrow">The newest chapter</p>
            <div className="adventuresBrand adventuresBrand--compact">
              <h2 className="adventuresBrand__name">
                Benny &amp; Penny<span className="visuallyHidden"> Adventures</span>
              </h2>
              <div className="adventuresBrand__adventures" aria-hidden="true">
                <span>♥</span>
                <span>Adventures</span>
                <span>♥</span>
              </div>
              <p className="adventuresBrand__tagline">Medical Books for Brave Little Hearts</p>
            </div>
          </div>
          <div>
            <p className="lede">
              My own imprint: an original children&apos;s medical book series created with my wife, the author.
              It&apos;s the namesake of this studio and the venture I&apos;m building from the ground up.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/families">Explore the imprint</Link>
              <Link className="button button--light" href="/work-with-us">Work with me</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
