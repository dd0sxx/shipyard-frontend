import Logo from './Logo'
import Twitter from './assets/twitter.png'
import Discord from './assets/discord.png'
import * as Scroll from 'react-scroll';

function Nav() {

    const navOptionsStyle = {
        margin: 10,
        fontSize: 16,
        fontFamily: 'quicksand',
        textAlign: 'center',
        fontWeight: '300',
        textDecoration: 'none',
        color: 'rgb(42, 43, 45)'
    }

    let Link = Scroll.Link;

  return (
    <div className="Nav" style={{display: 'flex', justifyContent: 'space-between', padding: '5vh 10vw'}}>
      <Logo></Logo>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Link to='create' smooth={true} duration={1000} className='pointer nav-hover' style={navOptionsStyle} >Create</Link>
        <a className='nav-hover' href='https://medium.com/@loganklarkin/shipyard-studio-introduction-198fcf872e21' target='_blank' style={navOptionsStyle} >About</a>
        <a href='https://twitter.com/shipyard_' target='_blank' className='background-center nav-hover' style={{backgroundImage: `url("${Twitter}")`, height: 25, width: 25, margin: 10}}/>
        <a href='https://discord.gg/NPbwsCxkHw' target='_blank' className='background-center nav-hover' style={{backgroundImage: `url("${Discord}")`, height: 25, width: 25, margin: 10}}/>
        <a href='https://hackerdao.typeform.com/shipyardNFT' target='_blank' className='round-button expand-hover quicksand' style={{height: 25, border: '1px solid navy', lineHeight: 1.5, fontWeight: '300', marginLeft: 10, textDecoration: 'none', color: 'white'}}>Apply</a>
      </div>
    </div>
  );
}

export default Nav;