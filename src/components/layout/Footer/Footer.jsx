import React from "react";

function Footer() {
  return (
    <footer className="qc-footer">
      <div className="qc-container">
        <div className="qc-footer__grid">
          {/* Brand & Socials */}
          <div className="qc-footer__brand">
            <div className="qc-footer__logo">
              <FaCut className="qc-footer__logo-icon" />
              <span className="qc-footer__logo-text">QueueCut</span>
            </div>
            <p className="qc-footer__description">
              The next generation of grooming. Find, book, and skip the line at
              the best local specialists.
            </p>
            <div className="qc-footer__socials">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="qc-footer__nav">
              <h4 className="qc-footer__nav-title">{section.title}</h4>
              <ul className="qc-footer__list">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="qc-footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="qc-footer__bottom">
          <hr className="qc-footer__divider" />
          <p className="qc-footer__copy">
            © {new Date().getFullYear()} QueueCut Inc. Innovation in every cut.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
