import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notFoundPage">
      <div className="notFoundShell">
        <div className="notFoundFrame">
          <div className="notFoundGrid" aria-hidden="true" />
          <div className="notFoundMonogram" aria-hidden="true">
            <span className="notFoundB">B</span>
            <span className="notFoundP">P</span>
          </div>
          <div className="notFoundContent">
            <p className="notFoundKicker">Error reference · 404</p>
            <h1>That route slipped into the void.</h1>
            <p>The page you requested is unavailable, but the studio is still very much online.</p>
            <div className="notFoundActions">
              <Link className="notFoundButton" href="/">Return home</Link>
              <Link className="notFoundTextLink" href="/our-work">Explore the work <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .notFoundPage {
          padding: clamp(1.1rem, 3vw, 2.8rem) 0 clamp(2.3rem, 5vw, 4.6rem);
          overflow: hidden;
          background: #10191a;
        }
        .notFoundShell { width: min(1380px, calc(100% - 2.5rem)); margin: 0 auto; }
        .notFoundFrame {
          position: relative;
          min-height: min(43rem, calc(100svh - 8.2rem));
          overflow: hidden;
          border: 1px solid rgba(202, 231, 222, .22);
          border-radius: clamp(1.25rem, 2.2vw, 2rem);
          background:
            radial-gradient(circle at 48% 23%, rgba(113, 232, 211, .2), transparent 18%),
            radial-gradient(circle at 18% 88%, rgba(196, 113, 77, .22), transparent 30%),
            linear-gradient(135deg, #121c1d 0%, #263333 58%, #11191a 100%);
          box-shadow: 0 28px 90px rgba(0, 0, 0, .34);
        }
        .notFoundGrid {
          position: absolute; inset: 0;
          opacity: .46;
          background-image:
            linear-gradient(rgba(226, 184, 150, .16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 184, 150, .16) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(90deg, #000, transparent 84%);
        }
        .notFoundMonogram {
          position: absolute;
          left: clamp(1.1rem, 7vw, 7.5rem);
          top: 50%;
          display: flex;
          align-items: center;
          transform: translateY(-50%);
          font-family: Georgia, serif;
          font-size: clamp(12rem, 31vw, 32rem);
          font-weight: 700;
          line-height: .7;
          letter-spacing: -.23em;
          user-select: none;
        }
        .notFoundB {
          position: relative;
          z-index: 1;
          color: #bc7655;
          text-shadow: 0 14px 0 rgba(71, 37, 27, .62), 0 28px 42px rgba(0, 0, 0, .38);
        }
        .notFoundP {
          margin-left: -.07em;
          color: rgba(122, 241, 219, .56);
          text-shadow: 0 14px 0 rgba(34, 103, 95, .58), 0 28px 42px rgba(0, 0, 0, .38);
          -webkit-text-stroke: 1px rgba(207, 255, 243, .46);
        }
        .notFoundContent {
          position: absolute;
          z-index: 1;
          right: clamp(1rem, 5vw, 5.5rem);
          top: 50%;
          width: min(33rem, 44%);
          transform: translateY(-50%);
          padding: clamp(1.2rem, 2.6vw, 2rem);
          border: 1px solid rgba(214, 245, 237, .22);
          border-radius: 1.2rem;
          background: linear-gradient(145deg, rgba(12, 25, 25, .8), rgba(12, 20, 21, .58));
          color: #fbf7ef;
          box-shadow: 0 16px 38px rgba(0, 0, 0, .22);
          backdrop-filter: blur(18px);
        }
        .notFoundKicker {
          margin: 0 0 .65rem;
          color: #9edbd0;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .notFoundContent h1 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.55rem);
          line-height: .99;
          letter-spacing: -.045em;
        }
        .notFoundContent > p:not(.notFoundKicker) {
          margin: 1rem 0 0;
          color: rgba(251, 247, 239, .8);
          font-size: 1rem;
        }
        .notFoundActions { display: flex; flex-wrap: wrap; align-items: center; gap: .9rem 1.1rem; margin-top: 1.4rem; }
        .notFoundButton {
          display: inline-flex; align-items: center; justify-content: center;
          min-height: 2.8rem; padding: .7rem 1rem; border-radius: 999px;
          background: #b4ecdf; color: #123c3a; font-size: .9rem; font-weight: 800;
          transition: transform .18s ease, background .18s ease;
        }
        .notFoundButton:hover { background: #e7fff8; transform: translateY(-2px); }
        .notFoundTextLink { color: #f8eee0; font-size: .9rem; font-weight: 700; text-decoration: underline; text-underline-offset: .24em; }
        @media (max-width: 840px) {
          .notFoundFrame { min-height: 42rem; }
          .notFoundMonogram { left: 50%; top: 28%; transform: translate(-50%, -50%); font-size: clamp(12rem, 56vw, 23rem); }
          .notFoundContent { right: .75rem; left: .75rem; top: auto; bottom: .75rem; width: auto; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) { .notFoundButton { transition: none; } }
      `}</style>
    </section>
  );
}
