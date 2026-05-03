import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import { FaGamepad, FaLeaf } from 'react-icons/fa'
import { GiCrossedSwords, GiClover } from 'react-icons/gi'
import aboutImg from '../assets/about.png'
import './AboutSection.css'

const traits = [
  { icon: FaGamepad, label: 'Gamer Vibes', desc: 'Gaming streams with chaotic energy' },
  { icon: GiClover, label: 'Runaway Kid', desc: 'Hanya anak yang kabur dari habitatnya' },
  { icon: FiMapPin, label: 'Indonesia', desc: 'Indie VTuber from ID scene' },
  { icon: FaLeaf, label: 'SPeC', desc: 'Sekte Pemuja Cuih ☘️' },
]

export default function AboutSection() {
  return (
    <section id="about" className="about section">

      {/* Background Watermark */}
      <div className="watermark-text about__watermark">ARUSHI</div>

      <div className="container">

        {/* Staggered Section Header */}
        <div className="about__header">
          <h2 className="about__title">
            <span className="about__title-line about__title-line--1">ABOUT</span>
            <span className="about__title-line about__title-line--2">ARUSHI</span>
          </h2>
          <div className="about__subtitle-box">
            Hanya anak yang kabur dari habitatnya — just a kid who ran away from their habitat.
          </div>
        </div>

        <div className="about__content">

          {/* LEFT: Character visual cut-out */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="about__visual-bg" />
            <img src={aboutImg} alt="Arushi Caelis" className="about__visual-img" />
            <div className="about__visual-tag">DEBUT 2022</div>
          </motion.div>

          {/* RIGHT: Traits Grid */}
          <motion.div
            className="about__info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="about__traits">
              {traits.map((trait, i) => (
                <div key={i} className="about__trait-card">
                  <div className="about__trait-icon-wrap">
                    <trait.icon size={24} className="about__trait-icon" />
                  </div>
                  <div className="about__trait-text">
                    <div className="about__trait-label">{trait.label}</div>
                    <div className="about__trait-desc">{trait.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__lore">
              <p>
                An indie VTuber from Indonesia who escaped into the streaming world.
                Arushi Caelis brings gaming energy, casual chat, and wholesome chaos
                to every stream — a runaway kid who found a home with SPeC (Sekte Pemuja Cuih)!
              </p>
            </div>

            <div className="about__lore-decor">
              <span className="about__sq-decor" />
              <span className="about__sq-decor" />
              <span className="about__sq-decor" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
