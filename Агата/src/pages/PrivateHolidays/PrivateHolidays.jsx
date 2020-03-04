import React, { Component } from 'react'
import { Header } from '../../components'

class PrivateHoliday extends Component {

  render(){
    return(
      <div>
      <Header openPage={this.props.history.location.pathname}/>
        PrivateHoliday
      </div>
    )
  }
}

export default PrivateHoliday