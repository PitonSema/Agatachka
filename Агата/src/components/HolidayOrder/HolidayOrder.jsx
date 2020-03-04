import React, { Component } from 'react'

import './HolidayOrder.scss'
import { message } from 'antd'

class HolidayOrder extends Component {
  state = {
    name:'',
    telephon:'',
    email:'',
    date:'',
    time:'',
    holiday: '',
    countParticipant:'',
    dopInfo:''
  }

  vvod = (type, e) => {
    this.setState({
      [type]:e.target.value
    })
  }

  addOrder = () => {
    if(this.state.name !== '' || this.state.telephon !== '' || this.state.time !== '' || this.state.email !== '' || this.state.date !== '' || this.state.dopInfo !== '' || this.state.holiday !== '' || this.state.countParticipant !== ''){
      message.success('Заявка отправлена!')
    }else{ message.error('Не все данные введены')}
  }

  render(){
    return(
      <div className='main-container-HolidayOrder'  id='Review'>
        <div className='content'>
          <div className='main-header'><span>ВЫБЕРИ УДОБОНОЕ ВРЕМЯ И МЕСТО ДЛЯ ПРОВЕДЕНИЯ ПРАЗДНИКА</span></div>
          <div className='header'><span>ЗАПОЛНИТЕ ЗАЯВКУ:</span></div>
          <div className='content-form'>
            <div>
              <div className='content-form-left'><span>Ваше имя</span><input type='text' onChange={(e) => this.vvod('name',e)} value={this.state.name}/></div>
              <div className='content-form-left'><span>Телефон</span><input type='text' onChange={(e) => this.vvod('telephon',e)} value={this.state.telephon}/></div>
              <div className='content-form-left'><span>E-Mail</span><input type='text' onChange={(e) => this.vvod('email',e)} value={this.state.email}/></div>
              <div className='content-form-left'><span>Дата заказа</span><input type='date' onChange={(e) => this.vvod('date',e)} value={this.state.date}/></div>
            </div>
            <div>
              <div className='content-form-rigth'><span>Удобное время</span><input type='datetime' onChange={(e) => this.vvod('time',e)} value={this.state.time}/></div>
              <div className='content-form-rigth'><span>Праздничное мероприятие</span><input type='text' onChange={(e) => this.vvod('holiday',e)} value={this.state.holiday}/></div>
              <div className='content-form-rigth'><span>Количество участников</span><input type='text' onChange={(e) => this.vvod('countParticipant',e)} value={this.state.countParticipant}/></div>
            </div>
          </div>
          <div className='content-form-bootom'>
            <div><span>Дополнительное пожелание</span></div>
            <textarea onChange={(e) => this.vvod('dopInfo',e)} value={this.state.dopInfo}/>
            <button onClick={this.addOrder}>Отправить</button>
          </div>
        </div>
      </div>

    )
  }
}

export default HolidayOrder