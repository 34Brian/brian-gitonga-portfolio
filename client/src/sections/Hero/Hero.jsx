import "./hero.css";

const PHOTO = "/designer.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-stage">

        <div className="hero-asterisk" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>

        <h1 className="hero-headline hero-headline-back">
          <span>SOFTWARE</span>
          <span>ENGINEER</span>
        </h1>

        <img
          className="hero-person"
          src={PHOTO}
          alt="Brian Gitonga"
        />

        <h1
          className="hero-headline hero-headline-front"
          aria-hidden="true"
        >
          <span>SOFTWARE</span>
          <span>ENGINEER</span>
        </h1>

        <a
          href="#about"
          className="hero-scroll"
          aria-label="Scroll to about section"
        >
          <svg viewBox="0 0 120 120" className="hero-scroll-ring">
            <defs>
              <path
                id="hero-circle-path"
                d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
              />
            </defs>

            <text>
              <textPath href="#hero-circle-path">
                SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
              </textPath>
            </text>
          </svg>

          <span className="hero-mouse">
            <b />
          </span>
        </a>

      </div>
    </section>
  );
}