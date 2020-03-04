import React, { Component } from 'react'

import './Header.scss'

class Header extends Component{
    render(){
    const { openPage } = this.props
    return(
      <div className='main-conteiner-Heder'>
        <nav>
          <a className={openPage==='/' && 'menuActiv'} href='/'>ГЛАВНАЯ</a>
          <a className={openPage==='/corporate-holidays' && 'menuActiv'} href='/corporate-holidays'>КОРПОРАТИВНЕ ПРАЗДНИКИ</a>
          <a className={openPage==='/private-holidays' && 'menuActiv'} href='/private-holidays'>ЧАСТНЫЕ ПРАЗДНИКИ</a>
          <a className={openPage==='/artists' && 'menuActiv'} href='/artists'>АРТИСТЫ</a>
          <a className={openPage==='/portfolio' && 'menuActiv'} href='/portfolio'>ПОРТФОЛИО</a>
        </nav>
        <a href='tel:+375255094169'>Контакты: +375 (25) 509 41 69</a>
      </div>
    )
  }
}

export default Header