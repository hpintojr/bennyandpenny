import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adventures",
  description:
    "Benny & Penny's Adventures — Medical Books for Brave Little Hearts. A ten-part children's medical book series and the self-owned publishing imprint behind Benny & Penny's, A Tech Company.",
  alternates: { canonical: "/families" },
  openGraph: {
    url: "/families",
    title: "Benny & Penny's Adventures — Medical Books for Brave Little Hearts",
    description:
      "A ten-part children’s medical book series that helps families approach real medical experiences with comfort and confidence.",
  },
};

const highlights = [
  {
    icon: "book",
    title: "A children's medical book series",
    text: "Care-centered stories that help young readers feel prepared and brave for medical experiences—written by the author, produced end to end in-house.",
  },
  {
    icon: "imprint",
    title: "A self-owned imprint",
    text: "Brand, web storefront, digital delivery, and a full print, e-book, and audio production pipeline, built and operated as our own publishing venture.",
  },
  {
    icon: "studio",
    title: "Part of the studio",
    text: "The imprint is the namesake and creative heart of Benny & Penny's—proof of the same build-it-right discipline applied to my own work.",
  },
];

function HighlightIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "book") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M12 6.5C10.5 5 8 4.5 4 4.7v13c4-.2 6.5.3 8 1.8" />
        <path d="M12 6.5C13.5 5 16 4.5 20 4.7v13c-4-.2-6.5.3-8 1.8" />
      </svg>
    );
  }

  if (name === "imprint") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M9 11V8a3 3 0 0 1 6 0v3l1.5 3.5h-9L9 11Z" />
        <rect x="4.5" y="16.5" width="15" height="3" rx="1" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden="true">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M18.5 15.5l.6 1.6 1.6.6-1.6.6 1.6-.6.6-1.6-.6-1.6-1.6-.6 1.6-.6z" />
    </svg>
  );
}

const books = [
  { n: 1, title: "Home Infusion Day", topic: "Home infusions" },
  { n: 2, title: "Port Access Adventure", topic: "Access ports" },
  { n: 3, title: "PICC Line Adventure", topic: "PICC lines" },
  { n: 4, title: "Subcutaneous Infusion Adventure", topic: "Subcutaneous infusion" },
  { n: 5, title: "Special Line Adventure", topic: "Central & special lines" },
  { n: 6, title: "Lab Draw Adventure", topic: "Lab draws" },
  { n: 7, title: "MRI Adventure", topic: "MRI scans" },
  { n: 8, title: "Hospital Sleepover", topic: "Hospital stays" },
  { n: 9, title: "Ambulance Adventure", topic: "Ambulance rides" },
  { n: 10, title: "Surgery Day", topic: "Surgery day" },
];

export default function AdventuresPage() {
  return (
    <>
      <section className="pageHero pageHero--split">
        <div className="shell pageHeroSplit">
          <div>
            <p className="eyebrow">Featured imprint · Ten-part series</p>
            <div className="adventuresBrand">
              <h1 className="adventuresBrand__name">
                Benny &amp; Penny&apos;s<span className="visuallyHidden"> Adventures</span>
              </h1>
              <div className="adventuresBrand__adventures" aria-hidden="true">
                <span>♥</span>
                <span>Adventures</span>
                <span>♥</span>
              </div>
              <p className="adventuresBrand__tagline">Medical Books for Brave Little Hearts</p>
            </div>
            <p className="lede">
              A ten-part children&apos;s book series that turns real medical experiences into gentle,
              age-appropriate stories—giving families the words, comfort, and confidence to face them
              together. It&apos;s the publishing imprint at the heart of the studio, with its own brand,
              storefront, and production pipeline.
            </p>
            <div className="buttonRow">
              <a
                className="button"
                href="https://www.bennyandpennyadventures.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Benny &amp; Penny&apos;s Adventures storefront<span aria-hidden="true"> →</span><span className="visuallyHidden"> (opens in a new tab)</span>
              </a>
              <Link className="button button--light" href="/our-work">Back to all work</Link>
            </div>
          </div>
          <div className="imprintHeroVisual">
            <Image
              src="/images/work-adventures-mockup.webp"
              alt="Benny and Penny's Adventures children's book collection"
              fill
              sizes="(max-width: 800px) 100vw, 42vw"
              className="imprintHeroImage"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell pageIntro">
          <div>
            <p className="eyebrow">About the series</p>
            <h2 className="h2">Big medical moments, made small and brave.</h2>
          </div>
          <div>
            <p className="lede">
              Each story explains a medical experience with warmth and accurate, child-safe wording, and
              leaves every reader with the same reassurance: you are safe, you are supported, and you are
              brave. Written for ages 3–8, each book is a focused, beautifully illustrated 32-page story
              built around one real experience a child and their family might face.
            </p>
            <div className="seriesFacts">
              <div className="seriesFact"><span className="seriesFact__num">10</span><span className="seriesFact__label">Books in the series</span></div>
              <div className="seriesFact"><span className="seriesFact__num">3–8</span><span className="seriesFact__label">Reader ages</span></div>
              <div className="seriesFact"><span className="seriesFact__num">32</span><span className="seriesFact__label">Pages per story</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">The collection</p>
              <h2 className="h2">Ten stories, one brave little heart at a time.</h2>
            </div>
            <p className="lede">
              Ten stories across the moments children and families navigate most.
            </p>
          </div>
          <ol className="bookGrid">
            {books.map((book) => (
              <li className="bookCard" key={book.n}>
                <span className="bookNum" aria-hidden="true">{book.n}</span>
                <div className="bookCard__body">
                  <h3>{book.title}</h3>
                  <p>{book.topic}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">The imprint</p>
              <h2 className="h2">Built with the same care as the stories.</h2>
            </div>
            <p className="lede">
              Three things make Benny &amp; Penny&apos;s Adventures more than a book—it&apos;s a brand,
              a pipeline, and a promise.
            </p>
          </div>
          <div className="pillarGrid">
            {highlights.map((highlight) => (
              <article className="card pillarCard" key={highlight.title}>
                <div className="iconBadge" aria-hidden="true">
                  <HighlightIcon name={highlight.icon} />
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="shell callout">
          <div className="calloutInner">
            <p className="eyebrow">Where to find it</p>
            <h2 className="h2">The full collection lives at bennyandpennyadventures.com.</h2>
            <p className="lede">
              The catalog, digital library, and ordering experience are handled by the dedicated
              storefront. This page is the imprint&apos;s home within the studio portfolio.
            </p>
            <div className="buttonRow">
              <a
                className="button"
                href="https://www.bennyandpennyadventures.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Benny &amp; Penny&apos;s Adventures storefront<span aria-hidden="true"> →</span><span className="visuallyHidden"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
