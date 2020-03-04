import React, { Component } from 'react'

import { Modal, message } from 'antd'

import {
  WriteReview,
  ListReview,
  Footer,
  Header
} from '../../components'

import './Home.scss'

class Home extends Component{
  state = {
    modalVisible: false,
    id:'',
    name:'',
    telephon:'',
    email:'',
    date:'',
    time:'',
    holiday: '',
    countParticipant:'',
    dopInfo:''
  }

  componentDidMount = () => {
    this.props.OrderActions.UpdateOrder()
  }

  vvod = (type, e) => {
    this.setState({
      [type]:e.target.value
    })
  }

  addOrder = (id) => {
    if(this.state.name !== '' && 
    this.state.telephon !== '' && 
    this.state.time !== '' 
    && this.state.email !== '' 
    && this.state.date !== '' 
    && this.state.dopInfo !== '' 
    && this.state.holiday !== '' 
    && this.state.countParticipant !== ''){
      console.log(id)
      message.success('Заявка отправлена!')
      this.setState({ modalVisible: !this.state.modalVisible });
      this.props.OrderActions.addOrder(
        id,
        this.state.name,
        this.state.telephon,
        this.state.time,
        this.state.email,
        this.state.date,
        this.state.dopInfo,
        this.state.holiday,
        this.state.countParticipant
      )
    }else{ message.error('Не все данные введены')}
  }

  setModalVisible(modal1Visible) {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render(){
    return(
      <div className='ContainerHome'>
        <Header openPage={this.props.history.location.pathname}/>
        <div className='main-conteiner-Banner'>
          <div className='content-Banner'>
            <div className='header'>ВЕСЕЛЬЕ<br/> ГДЕ БЫ МЫ НЕ БЫЛИ</div>
            <div className='text'>С нами вы можете быть уверены,<br/>что ваше торжество пройдет безупречно</div>
            <div className='text'>Мы знаем как из этой жизни<br/>сделать праздник</div>
            <a onClick={() => this.setModalVisible(true)}>Написать нам</a>
          </div>
        </div>
        <div className='main-conteiner-InfoBlock'>
          <div className='InfoBlock-left'>

            <div className='content'>
              <div style={{display: 'flex',justifyContent: 'center'}}>
                <div style={{maxWidth: '650px'}}>
                  <div className='info-logotype'>
                    <div className='logotype'>НАША КОМПАНИЯ</div>
                    <span><div style={{color:'rgb(238, 18, 18)',fontWeight:'700', fontSize:25+'px'}}>-ЭТО</div>ОПЫТНАЯ, ПЕРСПЕКТИВНАЯ ОРГАНИЗАЦИЯ,<br/>КОТОРАЯ ОКАЗВАЕТ УСЛУГИ КОМПЛЕКСНОГО<br/>ОБСЛУЖИВАНИЯ РАЗЛИЧНЫХ МЕРОПРИЯТИЙ<br/>И ПРАЗДНИКОВ</span>
                  </div>
                  <div className='main-info'>
                    <span>Наша компания является одним из лидеров на рынке<br/>индустрии.</span><br/>
                    <span style={{color:'rgb(238, 18, 18)',fontWeight:'700'}}>Почему выбирают именно нас?</span><br/>
                    Мы создаем события, о которых наши клиенты с гордостью рассказывают<br/>
                    своим друзьям и коллегам.<br/>
                    Мы стремимся креативно раскрыть и творчески подойти к<br/>
                    каждому событию.<br/>
                    У нас опыт проведения мероприятий, профессиональные<br/>
                    артисты и аниматьры.<br/>
                    Мы знаем как должен выглядеть настоящий праздник!<br/>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
          <div className='InfoBlock-rigth'>
            <div className='InfoBlock-rigth-top'>
              <div className='info'>
                <span>ПОДБОР ЛУЧШЕГО МЕСТА ПРОВЕДЕНИЯ</span>
                <div>ПОДРОБНЕЕ</div>
              </div>
            </div>
            <div className='InfoBlock-rigth-center'>
              <div className='info'>
                <span>ПОДБОР ЛУЧШЕГО МЕСТА ПРОВЕДЕНИЯ</span>
                <div>ПОДРОБНЕЕ</div>
              </div>
            </div>
            <div className='InfoBlock-rigth-bottom'>
              <div className='info'>
                <span>ПОДБОР ЛУЧШЕГО МЕСТА ПРОВЕДЕНИЯ</span>
                <div>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>
        </div>
        <WriteReview/>
        <ListReview/>
        <Footer/>

        <Modal
          style={{color:'white'}}
          title="ВЫБЕРИ УДОБОНОЕ ВРЕМЯ И МЕСТО ДЛЯ ПРОВЕДЕНИЯ ПРАЗДНИКА"
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
          width='900px'
          footer
        >
          <div className='content-form'>
            <div>
              <div className='content-form-left'><span>Ваше имя</span><input type='text' onChange={(e) => this.vvod('name',e)} value={this.state.name}/></div>
              <div className='content-form-left'><span>Телефон</span><input type='text' onChange={(e) => this.vvod('telephon',e)} value={this.state.telephon}/></div>
              <div className='content-form-left'><span>E-Mail</span><input type='text' onChange={(e) => this.vvod('email',e)} value={this.state.email}/></div>

            </div>
            <div>
              <div className='content-form-rigth'><span>Удобное время</span><input type='datetime' onChange={(e) => this.vvod('time',e)} value={this.state.time}/></div>
              <div className='content-form-rigth'>
                <span>Праздничное мероприятие</span>
                <select onChange={(e) => this.vvod('holiday',e)}>
                  <option defaultValue>Выберите мероприятие</option>
                  <option>Свадьба</option>
                  <option>День рождения</option>
                  <option>Карпоротив</option>
                  <option>Новый Год</option>
                  <option>Юбелей</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className='content-form-left'><span>Дата заказа</span><input type='date' onChange={(e) => this.vvod('date',e)} value={this.state.date}/></div>
              <div className='content-form-rigth'><span>Количество участников</span><input type='text' onChange={(e) => this.vvod('countParticipant',e)} value={this.state.countParticipant}/></div>
            </div>
          </div>
          <div className='content-form-bootom'>
            <div><span>Дополнительное пожелание</span></div>
            <textarea onChange={(e) => this.vvod('dopInfo',e)} value={this.state.dopInfo}/>
            <button onClick={()=>this.addOrder(this.props.Order.data.length)}>Отправить</button>
          </div>
        </Modal>

      </div>
    )
  }
}

export default Home