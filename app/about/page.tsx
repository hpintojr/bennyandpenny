import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Family",
  description: "Meet the family behind Benny & Penny and the purpose that inspires this care-centered creative brand.",
};

const values = [
  { title: "Family first", text: "The work begins with the people and moments we care about most." },
  { title: "Empathy in every detail", text: "We create with the emotional experience of children and caregivers in mind." },
  { title: "Creativity with purpose", text: "Beautiful ideas become more meaningful when they make life feel a little lighter." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <p className="eyebrow">Our Family</p>
          <h1 className="display">This brand started with our children, our calling, and a simple belief.</h1>
          <p className="lede">
            The moments children remember deserve more than a quick explanation. They deserve
            patience, language they can understand, and stories that remind them they are not alone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell featureSplit">
          <div className="featureArtwork" aria-hidden="true">
            <div className="characterPair" style={{ justifyContent: "center", marginTop: "6rem" }}>
              <div className="character character--penny">P</div>
              <div className="character character--benny">B</div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Why Benny &amp; Penny exists</p>
            <h2 className="h2">A family name turned into a family promise.</h2>
            <p className="lede">
              Benny &amp; Penny brings together our family&apos;s love of storytelling, caregiving,
              creativity, and building meaningful things. What began as a way to help children feel
              safe is becoming a larger creative home for stories, resources, and purpose-led work.
            </p>
            <p className="note">
              We are intentionally building in public, one thoughtful project at a time, with children
              and families at the heart of every decision.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <p className="eyebrow">What guides us</p>
          <h2 className="h2">Our values are part of the work.</h2>
          <div className="valuesGrid">
            {values.map((value, index) => (
              <article className="card valueCard" key={value.title}>
                <div className="iconBadge" aria-hidden="true">0{index + 1}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="shell callout">
          <div className="calloutInner">
            <p className="eyebrow">The next chapter</p>
            <h2 className="h2">We are creating a brand that children can grow up with and families can turn to.</h2>
            <div className="buttonRow">
              <Link className="button" href="/our-work">Explore our work</Link>
              <Link className="button button--light" href="/work-with-us">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
