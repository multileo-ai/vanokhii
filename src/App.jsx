import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setIsSent(true);
  };

  return (
    <div className="main-viewport">
      {/* Background Infinite Scroller */}
      <div className="bg-scrolling-text">
        VANOKHI — TRADITION — HERITAGE — VANOKHI — TRADITION — HERITAGE —
      </div>

      <header className="logo-header">Vanokhi</header>

      <main className="hero-content">
        <p className="tagline">A CURATED EXPERIENCE IS FORMING <br /> IN THE MAKING</p>

        <h1>
          <span className="line">Website</span>
          <span className="italic">Coming Soon</span>
        </h1>

        <div className="notify-section">
          {!isSent ? (
            <>
              <span className="input-label">Request an invitation</span>

              <form onSubmit={handleSubmit} className="input-container">
                <input
                  type="email"
                  placeholder="Enter your Gmail address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="submit-btn">
                  Notify
                </button>
              </form>
            </>
          ) : (
            <div className="success-ui" style={{ textAlign: "center" }}>
              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--van-tan)",
                  fontSize: "1.2rem",
                }}
              >
                Thank you.
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "2px",
                  marginTop: "5px",
                }}
              >
                THE LEGACY AWAITS YOU.
              </p>
            </div>
          )}
        </div>

        {/* Instagram Button */}
        <div className="social-container">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </main>

      <footer className="footer-text">&copy; 2025 VANOKHI STUDIO • PUNE</footer>
    </div>
  );
}

export default App;
