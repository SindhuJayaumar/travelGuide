import './index.css'

const TravelGuideDetails = props => {
  const {travelDetails} = props
  const {name, imageUrl, description} = travelDetails

  return (
    <div className="travel-card">
      <li>
        <img src={imageUrl} alt={name} className="image" />
        <h1 className="headings">{name}</h1>
        <p className="content">{description}</p>
      </li>
    </div>
  )
}

export default TravelGuideDetails
