import Logo from './Logo'
import Twitter from './assets/twitter.png'
import Discord from './assets/discord.png'
import Hamburger from './assets/hamburger.png'
import * as Scroll from 'react-scroll';

function Nav({windowWidth, renderModal, setRenderModal}) {

  const hamburgerClick = () => {
    let rm = !renderModal
    setRenderModal(rm)
  }

  let Link = Scroll.Link;

  return (
      <div className="Nav" style={{display: 'flex', justifyContent: 'space-between'}}>
        <Logo></Logo>
        {windowWidth < 581 ? 
          <div className='hamburger background-center' 
          onClick={hamburgerClick}  
          style={{backgroundImage: `url("${Hamburger}")`}}>
          </div>
        :
          <div className='right-nav' style={{display: 'flex', alignItems: 'center'}}>
            <Link to='create' smooth={true} duration={1000} className='pointer nav-hover nav-text' >Create</Link>
            <a className='nav-hover nav-text' href='https://medium.com/@loganlarkin/shipyard-studio-introduction-198fcf872e21' target='_blank' >About</a>
            <a href='https://twitter.com/shipyard_' target='_blank' className='background-center nav-hover' style={{backgroundImage: `url("${Twitter}")`, height: 25, width: 25, margin: 10}}/>
            <a href='https://discord.gg/NPbwsCxkHw' target='_blank' className='background-center nav-hover' style={{backgroundImage: `url("${Discord}")`, height: 25, width: 25, margin: 10}}/>
            <a href='https://hackerdao.typeform.com/shipyardNFT' target='_blank' className='round-button expand-hover quicksand' style={{height: 25, border: '1px solid navy', lineHeight: 1.5, fontWeight: '300', marginLeft: 10, textDecoration: 'none', color: 'white'}}>Inquire</a>
          </div>
        }
      </div>
  );
}

export default Nav;