import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description: "Start a conversation with Benny & Penny about creative collaborations, publishing, family resources, or mission-driven projects.",
};

const collaborationTypes = [
  "Children's publishing and story projects",
  "Family resources and care-centered education",
  "Creative direction, storytelling, and visual identity",
  "Digital experiences, brand launches, and content",
  "Aligned partnerships, advocacy, and community initiatives",
];

export default function WorkWithUsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <p className="eyebrow">Work With Us</p>
          <h1 className="display">Let&apos;s make something that people can feel.</h1>
          <p className="lede">
            We welcome conversations with people, organizations, and brands who care about
            meaningful storytelling, family connection, and creative work with a purpose.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell contactGrid">
          <div className="contactPanel contactPanel--dark">
            <p className="eyebrow">Best fit</p>
            <h2 className="h2">We are especially excited by work that helps people.</h2>
            <ul className="contactList">
              {collaborationTypes.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
          <div className="contactPanel">
            <p className="eyebrow">Start here</p>
            <h2 className="h2">Tell us what you are building.</h2>
            <p className="lede">
              Send a brief note with your name, organization, project idea, timeline, and the best way to reach you.
            </p>
            <a className="button" href="mailto:hello@bennyandpenny.com?subject=Benny%20%26%20Penny%20Collaboration%20Inquiry">
              Email Benny &amp; Penny
            </a>
            <p className="note">
              Contact-form delivery will be added when the domain email and preferred lead-routing workflow are finalized.
              Until then, this direct email route keeps every inquiry personal and reliable.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell pageIntro">
          <div>
            <p className="eyebrow">What to expect</p>
            <h2 className="h2">Thoughtful communication from the first conversation.</h2>
          </div>
          <p className="lede">
            We will listen for the heart of the project first, then determine whether there is a clear and aligned way to build it together.
          </p>
        </div>
      </section>
    </>
  );
}
