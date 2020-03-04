import React, { Component } from 'react'
import { Header } from '../../components'

class CorporateHolidays extends Component{
  render(){
    return(
      <div>
        <Header openPage={this.props.history.location.pathname}/>
        PIton
      </div>
    )
  }
}

export default CorporateHolidays