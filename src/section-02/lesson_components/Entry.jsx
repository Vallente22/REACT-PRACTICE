const Entry = (props) => {
  return (
    <>
      <article className="journal-entry">
        <img 
          src={props.img.src} 
          alt={props.img.alt} 
        />
        <div className="entry-content-container">
          <div className="entry-location-container">
            <img 
              src="src\section-02\assets\marker.png" 
              alt="Marker Logo" 
            />
            <span>
              {props.country}
            </span>
            <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          </div>
          
          <div>
            <h2>{props.title}</h2>
            <p>{props.dates}</p>
            <p>{props.text}</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Entry;