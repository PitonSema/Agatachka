import React, { Component } from 'react'

import { message } from 'antd';

import './WriteReview.scss'


class WriteReview extends Component {
  state ={
    id:'',
    name:'',
    messages:''
  }

  onChangeInput(type,e){
    this.setState({
      [type]:e.target.value
    })
  }

  isVisibleModal = () => {
    if (this.state.name !== '' && this.state.messages !== '') {
      this.props.ReviewActions.addReview(this.props.Review.data.length, this.state.name, this.state.messages)
      message.success('Спасибо за ваш отзыв!')
      this.setState({
        id:'',
        name:'',
        messages:''
      })
    }else message.error('Введите все данные!')
   
  }

  render(){
    return(
      <div className='main-conteiner-Review'>
        <div className='content'>
          <div className='heder-review'>ОТЗЫВЫ</div>
          <span>Ваши отзывы помогают нашей компании расти и развиваться!<br/>
            Приглашаем Вас ознакомиться с отзывами клиентов,<br/>
            оценить нашу работу и оставить свои пожелания!<br/>
          </span>
          <span>Наши партнёры ценят нас и становятся нашими друзьями</span>
          <div className='Form'>
            <div>
              <input
                type='text'
                placeholder='-Имя-'
                onChange={(e) => this.onChangeInput('name', e)}
                value={this.state.name}/>
            </div>
            <div>
              <textarea 
                type='text'
                placeholder='-Сообщение-'
                onChange={(e) => this.onChangeInput('messages', e)}
                value={this.state.messages}/>
            </div>
            <button onClick={(e) => this.isVisibleModal(e)}>Отправить</button>
          </div>
        </div>
      </div>
    )
  }
}

export default WriteReview