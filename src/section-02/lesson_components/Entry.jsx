const Entry = (props) => {
  return (
    <>
      <article className="journal-entry">
        <img 
          src={props.entry.img.src} 
          alt={props.entry.img.alt} 
        />
        <div className="entry-content-container">
          <div className="entry-location-container">
            <img 
              src="src\section-02\assets\marker.png" 
              alt="Marker Logo" 
            />
            <span>
              {props.entry.country}
            </span>
            <a href={props.entry.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          </div>
          <div>
            <h2>{props.entry.title}</h2>
            <p>{props.entry.dates}</p>
            <p>{props.entry.text}</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Entry;