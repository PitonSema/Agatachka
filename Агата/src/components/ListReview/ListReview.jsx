import React, { Component } from 'react';

import IsReview from './IsReview'

import './ListReview.scss'

class ListReview extends Component{
  state={
    data: []
  }

  componentDidMount = () => {
    this.props.ReviewActions.Update()
  }

  render(){
    const { data } = this.props.Review
    return(
      <div className='main-container-ListReview' style={{display: data.length !== 0 ? 'flex': 'none'}}>
        <div style={{overflow: 'auto', padding:'5px 10px', maxHeight:'385px'}}>
        {data.map((item, key)=>
          <IsReview key={key} data={item}/>
        )}
        </div>
      </div>
    )
  }
}

export default ListReview