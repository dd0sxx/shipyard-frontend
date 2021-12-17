import Logo from './Logo'
import Twitter from './assets/twitter.png'
import Discord from './assets/discord.png'


function Nav() {

    const navOptionsStyle = {
        margin: 10,
        fontSize: 16,
        fontFamily: 'helvetica',
        textAlign: 'center',
        fontWeight: '300'
    }
  return (
    <div className="Nav" style={{display: 'flex', justifyContent: 'space-between', padding: '5vh'}}>
      <Logo></Logo>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={navOptionsStyle}>Creators</div>
        <div style={navOptionsStyle}>Developers</div>
        <div style={navOptionsStyle}>Collabs</div>
        <div style={navOptionsStyle}>Contact</div>
        <div className='background-center' style={{backgroundImage: `url("${Twitter}")`, height: 15, width: 15}}></div>
        <div className='background-center' style={{backgroundImage: `url("${Discord}")`, height: 15, width: 15}}></div>
      </div>
    </div>
  );
}

export default Nav;