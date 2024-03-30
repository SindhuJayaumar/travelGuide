import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuideDetails from '../TravelGuideDetails'

import './index.css'

class TravelGuide extends Component {
  state = {
    travelGuide: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTravelGuide()
  }

  getTravelGuide = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    const fetchedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))

    this.setState({
      travelGuide: fetchedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, travelGuide} = this.state

    return (
      <div className="travel-container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="hr-line" />
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader
                type="TailSpin"
                color="#00BFFF"
                className="loader"
                height={50}
                width={50}
              />
            </div>
          ) : (
            <ul className="travel-card">
              <li className="list-items">
                {travelGuide.map(eachData => (
                  <TravelGuideDetails
                    travelDetails={eachData}
                    key={eachData.id}
                  />
                ))}
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuide
