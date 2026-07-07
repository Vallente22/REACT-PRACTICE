const Entry = () => {
  return (
    <>
      <article className="journal-entry">
        <img class src="https://imgs.search.brave.com/76-wTxBmUnEhfeTWkuY0Olpp1TuPirEz3jFgboyBj54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTkx/ODk5ODIyL3Bob3Rv/L2FlcmlhbC12aWV3/LW9mLW10LWZ1amkt/ZnJvbS1vaXNoaS1w/YXJrLWF0LXN1bnNl/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9OGNvZV96NDNx/d0tfRndVVk5hbUE0/ejZZQTZrRno0SmQz/SzRodW1XSXMzUT0" alt="Mt. Fuji" />
        <div className="entry-content-container">
          <div className="entry-location-container">
            <img src="src\section-02\assets\marker.png" alt="Marker Logo" />
            <span>JAPAN</span>
            <span><a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank" rel="noopener noreferrer">View on Google Maps</a></span>
          </div>
          <div>
            <h2>Mount Fuji</h2>
            <p>12 Jan, 2021 - 24 Jan, 2021</p>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Entry;