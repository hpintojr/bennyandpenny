import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adventures",
  description:
    "Benny & Penny's Adventures — Medical Books for Brave Little Hearts. A ten-part children's medical book series and the self-owned publishing imprint behind Benny & Penny's, A Tech Company.",
};

const highlights = [
  {
    title: "A children's medical book series",
    text: "Care-centered stories that help young readers feel prepared and brave for medical experiences—written by the author, produced end to end in-house.",
  },
  {
    title: "A self-owned imprint",
    text: "Brand, web storefront, digital delivery, and a full print, e-book, and audio production pipeline, built and operated as our own publishing venture.",
  },
  {
    title: "Part of the studio",
    text: "The imprint is the namesake and creative heart of Benny & Penny's—proof of the same build-it-right discipline applied to my own work.",
  },
];

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
            <h1 className="display">Benny &amp; Penny&apos;s Adventures.</h1>
            <p className="seriesTagline">Medical Books for Brave Little Hearts</p>
            <p className="lede">
              A ten-part children&apos;s book series that turns real medical experiences into gentle,
              age-appropriate stories—giving families the words, comfort, and confidence to face them
              together. It&apos;s the publishing imprint at the heart of the studio, with its own brand,
              storefront, and production pipeline.
            </p>
            <div className="buttonRow">
              <a className="button" href="https://www.bennyandpennyadventures.com/" target="_blank" rel="noopener">
                Visit the storefront →
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
            {books.map((b) => (
              <li className="bookCard" key={b.n}>
                <span className="bookNum" aria-hidden="true">{b.n}</span>
                <span className="bookCard__body">
                  <h3>{b.title}</h3>
                  <p>{b.topic}</p>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="resourceGrid">
            {highlights.map((h) => (
              <article className="card resourceCard" key={h.title}>
                <div className="iconBadge" aria-hidden="true">♥</div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
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
              <a className="button" href="https://www.bennyandpennyadventures.com/" target="_blank" rel="noopener">
                Go to the storefront →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
