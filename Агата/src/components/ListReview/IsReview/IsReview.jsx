import React from 'react';

import './IsReview.scss'

export default function isReview(data){
  return(
    <div className='main-container-IsReview'>
      <div className='nick'>
        <span>{data.data.name}</span>
      </div>
      <div className='review'>
        <span>{data.data.messages}</span>
      </div>
    </div>
  )
}