import React from "react"
import { FaHeart, FaGithub, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__social">
        <a
          href="https://github.com/RianTavares/pokedex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="48" color="#fff" />
        </a>
        <a
          href="https://www.instagram.com/riantavareson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="48" color="#fff" />
        </a>
      </section>
      <div className="footer__draw">
        <div className="footer__draw__circle1">
          <div className="footer__draw__circle1__circle2">
            <div className="footer__draw__circle1__circle2__inner" />
          </div>
        </div>
        <div className="footer__draw__line" />
      </div>

      <section className="footer__copyright">
        <p>
          {" "}
          Made with <FaHeart color="#c52018" /> by&nbsp;
          <a
            href="https://riantavares.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rian Tavares
          </a>
        </p>
      </section>
    </footer>
  )
}

export default Footer
