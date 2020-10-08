import React from 'react';
import { Link } from 'react-router-dom'
import Fb from './Assets/facebook-f-brands.svg'
import Logo from './Assets/logo2.svg'

class Nav extends React.Component {
    body = null
    constructor(props, state) {
        super(props, state)
        this.body = document.querySelector('body')
        this.state = {
          isFullScreen: false,
        }
      }

    toggleFullScreen = () => {
        this.setState({
          isFullScreen: !this.state.isFullScreen
        })
      }
    
      hideFullScreen = (e) => {
        this.setState({
          isFullScreen: false
        })
      }

    render() {
        const { isFullScreen } = this.state

  return (
    <nav>
        <div className="grid-container">
            <div className="grid-x  grid-margin-x align-middle ">
                <div className="cell auto">
                    <Link  to='/' className="logo" onClick={this.hideFullScreen}>
                    <img src={Logo} alt='ABC Terapii Dziecka Logotyp'/></Link>
                </div>
                <div className="cell shrink text-right">
                    <ul className={`menu ${isFullScreen ? 'visible' : 'hidden'}`}>
                        <Link  to='/' onClick={this.hideFullScreen}>
                           <h6>Strona główna</h6> 
                        </Link>
                        <Link  to='/terapie' onClick={this.hideFullScreen}>
                        <h6>Terapie</h6> 
                        </Link>
                        <Link  to='/pracownicy' onClick={this.hideFullScreen}>
                        <h6>Pracownicy</h6> 
                        </Link>
                        <Link  to='/cennik' onClick={this.hideFullScreen}>
                        <h6>Cennik</h6> 
                        </Link>
                        <Link  to='/kontakt' onClick={this.hideFullScreen}>
                        <h6>Kontakt</h6> 
                        </Link>
                        <Link  to='/regulamin' onClick={this.hideFullScreen}>
                        <h6>Regulamin</h6> 
                        </Link>
                        <li>
                        <a href="https://www.facebook.com/abcterapiidzieckapl">
                        <img alt="Facebook link" style={{height:'1.5rem'}} src={Fb}/>
                        </a>
                        </li>
                    </ul>
                    <button className="toggle-fullscreen button secondary hollow medium" onClick={this.toggleFullScreen}>
              <span>menu</span>
            </button>
                </div>
        </div>
        </div>
    </nav>
  );
    }
}

export default Nav;
