import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import Places from '../components/Places'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    let newArray = this.state.selectedId.concat([id])
    this.setState({ selectedId: newArray })
  }

  render() {
    let places = this.props.data.places.map(place => {
      let classString;
      if(this.state.selectedId.includes(place.id)) {
        classString = 'selected'
      }

      let onClick = () => this.handleClick(place.id)

      return(
        <Places
          key={place.id}
          id={place.id}
          name={place.name}
          handleClick={onClick}
          classString={classString}
        />
      )
    })

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
          </div>
          <ul>
            {places}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
