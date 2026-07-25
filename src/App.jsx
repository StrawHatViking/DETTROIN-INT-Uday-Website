import './App.css'

function App() {
  return (
    <div className="magazine-layout">
      {/* Top Navigation Bar */}
      <nav className="mag-nav">
        <div className="mag-nav-left">
          <span className="mag-brand">Vasant Valley</span>
        </div>
        <div className="mag-nav-center">
          <div className="nav-links">
            <a href="#philosophy">Philosophy</a>
            <a href="#admissions">Admissions</a>
            <a href="#academics">Academics</a>
            <a href="#community">Community</a>
          </div>
        </div>
        <div className="mag-nav-right">
          <a href="#apply" className="nav-apply">Apply Now</a>
        </div>
      </nav>

      {/* Hero Grid Section */}
      <header className="mag-hero">
        
        {/* Left Typography Panel */}
        <div className="mag-hero-left">
          <div className="mag-hero-tagline">
            <span>Est. 1990</span>
            <span className="divider"></span>
            <span>New Delhi, India</span>
          </div>
          
          <h1 className="mag-hero-title">
            <span className="word-block">Value.</span>
            <span className="word-block italic">Vision.</span>
            <span className="word-block">Vigour.</span>
          </h1>

          <div className="mag-hero-bottom-left">
            <p className="mag-hero-desc">
              Encouraging students to push the boundaries of current understanding and set benchmarks in the field of education since our inception.
            </p>
            <button className="btn-magazine">Discover</button>
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="mag-hero-right">
          <div className="mag-hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
              alt="Academic Excellence" 
              className="mag-hero-img"
            />
          </div>
          <div className="mag-hero-vertical-text">
            <span>Excellence in Deed</span>
          </div>
        </div>
      </header>

      {/* Dummy space to show grid continues */}
      <section className="mag-marquee">
        <div className="marquee-content">
          <span>Admissions Open 2026</span>
          <span className="dot">•</span>
          <span>Value. Vision. Vigour.</span>
          <span className="dot">•</span>
          <span>Ranked #1 Day School</span>
          <span className="dot">•</span>
        </div>
      </section>
    </div>
  )
}

export default App
