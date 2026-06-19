import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Families",
  description: "Explore the care-centered family-resource vision behind Benny & Penny, including future guides, stories, and practical support.",
};

const resources = [
  {
    title: "Talk-to-your-child guides",
    text: "Gentle language and story-based prompts for caregivers preparing children for new, confusing, or emotional experiences.",
  },
  {
    title: "Care experience companions",
    text: "Future story-led materials designed around medical visits, treatments, hospital stays, and the feelings that come with them.",
  },
  {
    title: "A trusted resource path",
    text: "A growing place for practical family support, advocacy pathways, and tools that make it easier to take the next step.",
  },
  {
    title: "Bravery through familiarity",
    text: "Creative resources that help children recognize what is happening, ask questions, and feel less alone in the process.",
  },
];

export default function FamiliesPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <p className="eyebrow">For Families</p>
          <h1 className="display">More than stories. A softer way to prepare for hard moments.</h1>
          <p className="lede">
            Benny &amp; Penny is being built to support the people who explain the big things,
            hold the little hands, and make children feel safe along the way.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell pageIntro">
          <div>
            <p className="eyebrow">Our family-resource vision</p>
            <h2 className="h2">Help families find words, comfort, and a next step.</h2>
          </div>
          <p className="lede">
            The resource library is growing alongside the Benny &amp; Penny story world. It will
            bring together age-appropriate preparation tools, caregiver guidance, and trusted
            support pathways in one welcoming place.
          </p>
        </div>
        <div className="shell resourceGrid">
          {resources.map((resource) => (
            <article className="card resourceCard" key={resource.title}>
              <div className="iconBadge" aria-hidden="true">♥</div>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--blush">
        <div className="shell callout">
          <div className="calloutInner">
            <p className="eyebrow">Coming as we grow</p>
            <h2 className="h2">A trusted place for stories, preparation, and family support.</h2>
            <p className="lede">
              We are building this with care. New resources will be announced as each story and
              companion guide is ready to share.
            </p>
            <div className="buttonRow">
              <Link className="button" href="mailto:hello@bennyandpenny.com?subject=Benny%20%26%20Penny%20Family%20Resources">Ask about the resource vision</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
