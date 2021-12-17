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
    <div className="Nav" style={{display: 'flex', justifyContent: 'space-between', padding: '5vh 10vw'}}>
      <Logo></Logo>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div className='pointer' style={navOptionsStyle}>Creators</div>
        <div className='pointer' style={navOptionsStyle}>Developers</div>
        <div className='pointer' style={navOptionsStyle}>Collabs</div>
        <a href='https://twitter.com/shipyard_' target='_blank' className='background-center' style={{backgroundImage: `url("${Twitter}")`, height: 25, width: 25, margin: 10}}/>
        <a href='' target='_blank' className='background-center' style={{backgroundImage: `url("${Discord}")`, height: 25, width: 25, margin: 10}}/>
        <div className='round-button'>

        </div>
      </div>
    </div>
  );
}

export default Nav;