import './Gallery.css'

export default function Gallery() {
  return (
    <section className="el-gallery" id="gallery">
      <div className="eg-header">
        <h2>Campus & Facilities</h2>
        <p>State-of-the-art infrastructure providing an enriching environment for holistic development.</p>
      </div>
      <div className="eg-track-wrapper">
        <div className="eg-track infinite-scroll">
          {/* First set of images */}
          <div className="eg-item">
            <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/20114458/laissez_faire_2026_4-1.jpeg" alt="Campus 1" />
            <div className="eg-overlay"></div>
          </div>
          <div className="eg-item">
            <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/20114506/laissez_faire_2026_7-1.jpeg" alt="Campus 2" />
            <div className="eg-overlay"></div>
          </div>
          <div className="eg-item">
            <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095946/synapse_2026_6.jpeg" alt="Campus 3" />
            <div className="eg-overlay"></div>
          </div>
          <div className="eg-item">
            <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095948/synapse_2026_7.jpeg" alt="Campus 4" />
            <div className="eg-overlay"></div>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="eg-item">
            <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/20114458/laissez_faire_2026_4-1.jpeg" alt="Campus 1" />
            <div className="eg-overlay"></div>
          </div>
          <div className="eg-item">
            <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/20114506/laissez_faire_2026_7-1.jpeg" alt="Campus 2" />
            <div className="eg-overlay"></div>
          </div>
          <div className="eg-item">
            <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095946/synapse_2026_6.jpeg" alt="Campus 3" />
            <div className="eg-overlay"></div>
          </div>
          <div className="eg-item">
            <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095948/synapse_2026_7.jpeg" alt="Campus 4" />
            <div className="eg-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
