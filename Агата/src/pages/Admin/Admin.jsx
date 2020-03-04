import React, { Component, Fragment } from 'react'
import { Input, Button, message, Tabs, Modal } from 'antd'
import './Admin.scss'

const { TabPane } = Tabs;

class Admin extends Component{

  state={
    valueInput:'',
    password:'12345',
    truePassword: false,
    modalVisible:false,
    id:''
  }

  componentDidMount = () => {
    this.props.OrderActions.UpdateOrder()
    this.props.ReviewActions.Update()
  }

  setModalVisible = (e,id) => {
    this.setState({ id, modalVisible: !this.state.modalVisible });
  }

  onChangeInput(e){
    this.setState({
      valueInput: e.target.value
    })
  }

  setPassword = () =>{
    if(this.state.valueInput === this.state.password){
      this.setState({
        truePassword: true
      })
      message.success('Пароль правельный!')
    }else{message.error('Пароль не правельный!')}
  }

  onDeleteOrder = () =>{
    this.props.OrderActions.deleteOrder(this.state.id)
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  onDeleteReview = (e, id) =>{
    this.props.ReviewActions.deleteReview(id);
  }

  render(){
    const { truePassword } = this.state
    const { data } = this.props.Order
    const data2 = this.props.Review.data
    return(
      <Fragment>
        { false ?<div className='Main-container-Admin'>
          <div className='Password'>
            <span>Введите пароль:</span>
            <Input type='password' onChange={(e) => this.onChangeInput(e)} />
            <Button type='ghost' onClick={this.setPassword}>Ok</Button>
          </div>
        </div>
        : <Tabs defaultActiveKey="1" onChange={''}>
            <TabPane tab="Заявки на праздники" key="1">
              <div className='Requests'>
                <div className='MainRequest'>
                  <div className='id' style={{width:'50px'}}>№</div>
                  <div className='Name' style={{width:'80px'}}>Имя</div>
                  <div className='Phone' style={{width:'100px'}}>Телефон</div>
                  <div className='Email' style={{width:'200px'}}>email</div>
                  <div className='Date' style={{width:'100px'}}>Дата</div>
                  <div className='time' style={{width:'50px'}}>Время</div>
                  <div className='holiday' style={{width:'100px'}}>Праздник</div>
                  <div className='colPeople' style={{width:'50px'}}>Кол.чел.</div>
                </div>
                {data.map((item,key)=>
                  <div className='Request' key={key} onClick={(e)=>this.setModalVisible(e,item.id)}>
                    <div className='id' style={{width:'50px'}}>{item.id}</div>
                    <div className='Name' style={{width:'80px'}}>{item.name}</div>
                    <div className='Phone' style={{width:'100px'}}>{item.telephon}</div>
                    <div className='Email' style={{width:'200px'}}>{item.email}</div>
                    <div className='Date' style={{width:'100px'}}>{item.date}</div>
                    <div className='time' style={{width:'50px'}}>{item.time}</div>
                    <div className='holiday' style={{width:'120px'}}>{item.holiday}</div>
                    <div className='colPeople' style={{width:'30px'}}>{item.countParticipant}</div>
                  </div>
                )}
              </div>
            </TabPane>
            <TabPane tab="Отзывы" key="2">
              <div className='Reviews'>
              {data2.map((item, key)=>
                <div className='Review'>
                  <div style={{display:'flex',alignItems: 'center'}}>
                    <div className='_id'>{item.id}</div>
                    <div className='Name'>{item.name}</div>
                    <div className='Masseges'>{item.messages}</div>
                  </div>
                  <Button onClick={(e)=>this.onDeleteReview(e, item.id)}>Удалить</Button>
                </div>
              )}
              </div>
            </TabPane>
          </Tabs>

        }
        <Modal
          title="Добонительные действия"
          centered
          visible={this.state.modalVisible}
          onOk={this.setModalVisible}
          onCancel={this.setModalVisible}
          footer={null}
        >
        <div>Дополнительные пожелания:</div>
        <div></div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Button onClick={this.onDeleteOrder}>Удалить</Button>
          <Button href='tel:+375255094169'>Позвонить</Button>
        </div>
          
        </Modal>
      </Fragment>
    )
  }
}

export default Admin