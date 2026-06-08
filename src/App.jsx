import { links } from "./links.js";
import profileLogo from "./assets/profile-logo.webp";
import backgroundMobile from "./assets/background-mobile.webp";
import backgroundDesktop from "./assets/background-desktop.webp";

function App() {
  return (
    <main
      className="page"
      style={{
        "--background-mobile": `url(${backgroundMobile})`,
        "--background-desktop": `url(${backgroundDesktop})`,
      }}
    >
      <section className="card" aria-label="עמוד הקישורים של יואב ונויה">
        <img className="profile-logo" src={profileLogo} alt="Hasasagim - יואב ונויה" />

        <div className="headline">
          <p className="eyebrow">HASASAGIM</p>
          <h1>יואב ונויה <span className="sunglasses">🕶️</span></h1>
        </div>

        <nav className="links" aria-label="קישורים חברתיים">
          {links.map((link) => (
            <a
              className="link-button"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              key={link.title}
              style={{ "--accent": link.accent }}
            >
              <span className="icon-wrap" aria-hidden="true">
                <img src={link.icon} alt="" />
              </span>
              <span className="link-title">{link.title}</span>
              <span className="arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M7 17L17 7M10 7h7v7" />
                </svg>
              </span>
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}

export default App;
