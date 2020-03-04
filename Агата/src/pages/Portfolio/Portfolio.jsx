import React, { Component } from 'react'
import { Header } from '../../components'

class Portfolio extends Component{
  render(){
    return(
      <div>
        <Header openPage={this.props.history.location.pathname}/>
        Portfolio
      </div>
    )
  }
}

export default Portfolio