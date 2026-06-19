import Link from "next/link";

const pillars = [
  {
    icon: "✦",
    title: "Meaningful stories",
    text: "Children’s storytelling that makes big feelings, care experiences, and brave moments easier to understand.",
  },
  {
    icon: "♥",
    title: "Care-centered creativity",
    text: "Visual experiences and family resources created with empathy, clarity, and comfort at the center.",
  },
  {
    icon: "↗",
    title: "Mission-driven work",
    text: "Thoughtful collaborations, digital projects, and brand ideas made to move people and create real connection.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Stories · Care · Creativity · Family</p>
            <h1 className="display">Building little worlds that make a meaningful difference.</h1>
            <p className="lede">
              Benny &amp; Penny is a family-built creative and care-centered brand creating
              meaningful children&apos;s stories, visual experiences, family resources, and
              mission-driven projects.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/our-work">Explore our work</Link>
              <Link className="button button--light" href="/work-with-us">Work with us</Link>
            </div>
          </div>
          <div className="heroVisual" aria-label="A playful abstract Benny and Penny world">
            <div className="storyWindow">
              <div className="characterPair" aria-hidden="true">
                <div className="character character--penny">P</div>
                <div className="character character--benny">B</div>
              </div>
            </div>
            <div className="visualTag">A creative family brand with heart at the center.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">What we are building</p>
              <h2 className="h2">A brand where imagination meets real life.</h2>
            </div>
            <p className="lede">
              We believe the most memorable creative work feels beautiful, useful, and deeply human.
            </p>
          </div>
          <div className="pillarGrid">
            {pillars.map((pillar) => (
              <article className="card pillarCard" key={pillar.title}>
                <div className="iconBadge" aria-hidden="true">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell featureSplit">
          <div className="featureArtwork" aria-hidden="true">
            <div className="bookShape"><span>Benny &amp; Penny&apos;s Adventures</span></div>
          </div>
          <div>
            <p className="eyebrow">Featured creative world</p>
            <h2 className="h2">Benny &amp; Penny&apos;s Adventures</h2>
            <p className="lede">
              Our children&apos;s story world is inspired by the moments families navigate together—especially
              the ones that call for comfort, courage, and a little more understanding.
            </p>
            <ul className="checkList">
              <li>Care-centered children&apos;s books and companion resources</li>
              <li>Storybook illustration, character worlds, and family-friendly tools</li>
              <li>A growing library created to help children feel seen and prepared</li>
            </ul>
            <div className="buttonRow">
              <Link className="button" href="/our-work">See the project</Link>
              <Link className="textLink" href="/families">Explore family resources</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Designed to grow with purpose</p>
              <h2 className="h2">Work made to connect, comfort, and inspire.</h2>
            </div>
            <Link className="textLink" href="/our-work">View everything we do</Link>
          </div>
          <div className="workGrid">
            <article className="card workCard">
              <span className="kicker">Storytelling</span>
              <h3>Children&apos;s stories &amp; publishing</h3>
              <p>Original story worlds, educational concepts, character systems, and thoughtful publishing projects.</p>
              <Link className="cardLink" href="/our-work">Discover the work →</Link>
            </article>
            <article className="card workCard">
              <span className="kicker">Creative Direction</span>
              <h3>Visual worlds &amp; digital experiences</h3>
              <p>Brand storytelling, illustration direction, websites, and visuals that carry a message with warmth and clarity.</p>
              <Link className="cardLink" href="/our-work">Discover the work →</Link>
            </article>
            <article className="card workCard">
              <span className="kicker">Family Support</span>
              <h3>Resources that meet families where they are</h3>
              <p>Guides and future tools that make difficult conversations and care experiences feel more approachable.</p>
              <Link className="cardLink" href="/families">Explore resources →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="shell callout">
          <div className="calloutInner">
            <p className="eyebrow">Let&apos;s make something meaningful</p>
            <h2 className="h2">Have a project that deserves more heart, clarity, or imagination?</h2>
            <p className="lede">We are open to aligned creative, publishing, family-resource, and mission-driven collaborations.</p>
            <div className="buttonRow">
              <Link className="button" href="/work-with-us">Start a conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
