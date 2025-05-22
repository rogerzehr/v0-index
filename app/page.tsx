import MobileMenu from "@/components/mobile-menu"
import PodcastPlayer from "@/components/podcast-player"
import VideoPlayer from "@/components/video-player"
import { ChevronRight, Zap, Lightbulb, Package } from "lucide-react"

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <img src="/royal-spark-logo.png" alt="Royal Spark Logo" className="logo" />
            <span className="logo-text">Royal Spark</span>
          </div>
          <nav className="desktop-nav">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#podcasts" className="nav-link">
              Podcasts
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="hero-glow"></div>
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-logo-container">
                <img src="/royal-spark-logo.png" alt="Royal Spark Logo" className="hero-logo" />
              </div>
              <h1 className="hero-title">Igniting Innovation for Tomorrow</h1>
              <p className="hero-description">
                Royal Spark Innovation Lab brings cutting-edge technology and creative solutions to shape the missions
                of the 100 ARW & 352 SOW.
              </p>
              <div className="hero-buttons">
                <button className="primary-button">
                  Explore Our Work
                  <ChevronRight className="chevron-right" />
                </button>
              </div>
            </div>
            <VideoPlayer />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Cutting-Edge Features</h2>
              <p className="section-description">
                Discover how Royal Spark Innovation Lab is revolutionizing technology and innovation.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Zap className="feature-icon" />
                </div>
                <h3 className="feature-title">Advanced AI Integration</h3>
                <p className="feature-description">
                  Leverage cutting-edge artificial intelligence to automate processes and gain valuable insights from
                  your squadron's data.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-container lightbulb">
                  <Lightbulb className="feature-icon" />
                </div>
                <h3 className="feature-title">Innovation Workshops</h3>
                <p className="feature-description">
                  Collaborative sessions designed to spark creativity and develop groundbreaking solutions to complex
                  problems.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Package className="feature-icon" />
                </div>
                <h3 className="feature-title">Digital Transformation</h3>
                <p className="feature-description">
                  Comprehensive strategies to help squadrons evolve and thrive in the digital age through technology
                  adoption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcasts" className="podcast-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Innovation Podcasts</h2>
              <p className="section-description">
                Listen to our thought-provoking discussions on the latest trends and breakthroughs in technology and
                innovation.
              </p>
            </div>
            <div className="podcast-container">
              <PodcastPlayer />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="section-container">
            <div className="cta-card">
              <div className="cta-background"></div>
              <div className="cta-content">
                <div className="cta-logo-container">
                  <img src="/royal-spark-logo.png" alt="Royal Spark Logo" className="cta-logo" />
                </div>
                <h2 className="cta-title">Ready to Spark Innovation?</h2>
                <p className="cta-description">
                  Join Royal Spark Innovation Lab and be part of the future. Let's create groundbreaking solutions
                  together.
                </p>
                <div className="cta-buttons">
                  <a href="mailto:100ARW.RoyalSpark@us.af.mil?subject=Ambassador Inquiry" className="primary-button">
                    Ambassador
                  </a>
                  <a href="mailto:100ARW.RoyalSpark@us.af.mil?subject=Fellow Inquiry" className="primary-button">
                    Fellow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
