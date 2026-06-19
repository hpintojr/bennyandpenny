import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore the creative worlds, family resources, digital experiences, and mission-driven work behind Benny & Penny.",
};

const workAreas = [
  {
    title: "Benny & Penny's Adventures",
    label: "Children's storytelling",
    description: "A care-centered children's story world that helps young readers feel more prepared, understood, and brave during unfamiliar experiences.",
    tags: ["Books", "Characters", "Illustration", "Family guides"],
  },
  {
    title: "Visual worlds & creative direction",
    label: "Creative identity",
    description: "Brand systems, visual language, story-led creative direction, and digital experiences with feeling, clarity, and a point of view.",
    tags: ["Branding", "Visual direction", "Web", "Content"],
  },
  {
    title: "Family resources",
    label: "Care-centered tools",
    description: "Practical, compassionate resources designed to help caregivers explain, prepare for, and move through difficult moments with children.",
    tags: ["Parent guides", "Education", "Advocacy", "Support"],
  },
  {
    title: "Mission-led collaborations",
    label: "Partnerships",
    description: "Aligned work with organizations, creators, care teams, and brands that are building something positive for children and families.",
    tags: ["Partnerships", "Campaigns", "Creative strategy", "Impact"],
  },
];

export default function OurWorkPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <p className="eyebrow">Our Work</p>
          <h1 className="display">Creative work with a real reason behind it.</h1>
          <p className="lede">
            Benny &amp; Penny is a growing portfolio of care-centered stories, visual experiences,
            family resources, and collaborative projects made to create connection.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="workGrid">
            {workAreas.map((area) => (
              <article className="card workCard" key={area.title}>
                <span className="kicker">{area.label}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="tagList">
                  {area.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell pageIntro">
          <div>
            <p className="eyebrow">The first chapter</p>
            <h2 className="h2">A story world built from real family experience.</h2>
          </div>
          <div>
            <p className="lede">
              Benny &amp; Penny&apos;s Adventures is the project at the center of this brand. It turns
              healthcare and other unfamiliar childhood moments into gentle, age-appropriate stories
              that give families language, comfort, and confidence.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/families">See the family vision</Link>
              <Link className="button button--light" href="/work-with-us">Partner with us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
