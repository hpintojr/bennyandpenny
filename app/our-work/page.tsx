import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected ventures and platforms by Hamilton Pinto Jr. — XBeton, Advantage First Financial, American Colonial Capital, Benny & Penny's Adventures, Mercury Call Desk, and 60+ launched establishments.",
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
    title: "Benny & Penny's Adventures",
    label: "Publishing Imprint",
    description:
      "An original children's medical book series and the launch of a self-owned publishing imprint. Brand, web, and production pipeline.",
    role: "Founder · Publisher · Design",
    tags: ["Brand", "Web", "Publishing"],
    image: "/images/work-adventures-mockup.webp",
    imageAlt: "Benny and Penny's Adventures children's book collection",
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
            {ventures.map((v) => (
              <article className="card workCard ventureCard" key={v.title}>
                <div className="workCardMedia">
                  <Image
                    src={v.image}
                    alt={v.imageAlt}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    className="workCardImage"
                  />
                  {v.title === "American Colonial Capital" && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "10%",
                        left: "8%",
                        width: "36%",
                        aspectRatio: "175.38 / 104.41",
                        zIndex: 2,
                      }}
                    >
                      <Image
                        src="/images/acc-logo.svg"
                        alt=""
                        fill
                        sizes="(max-width: 800px) 38vw, 12vw"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                </div>
                <div className="workCardBody">
                  <span className="kicker">{v.label}</span>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                  <p className="roleLine">{v.role}</p>
                  <div className="tagList">
                    {v.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  {v.url && (
                    <a className="cardLink" href={v.url} target="_blank" rel="noopener">
                      Visit site →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell pageIntro">
          <div>
            <p className="eyebrow">The newest chapter</p>
            <div className="adventuresBrand adventuresBrand--compact" aria-label="Benny and Penny's Adventures — Medical Books for Brave Little Hearts">
              <h2 className="adventuresBrand__name">Benny &amp; Penny&apos;s</h2>
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
