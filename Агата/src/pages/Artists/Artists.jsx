import React, { Component } from 'react'
import { Header } from '../../components'

class Artists extends Component{
  render(){
    return(
      <div>
        <Header openPage={this.props.history.location.pathname}/>
        Artists
      </div>
    )
  }
}

export default Artists