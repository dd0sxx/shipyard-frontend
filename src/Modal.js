import Twitter from './assets/twitter.png'
import Discord from './assets/discord.png'
import * as Scroll from 'react-scroll'

function Modal({renderModal, setRenderModal}) {

  let Link = Scroll.Link;

  const hamburgerClick = () => {
    let rm = !renderModal
    setRenderModal(rm)
  }

  return (
      <div className="modal" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center'}} onClick={{hamburgerClick}}>
                <div className='modal-text' style={{
                    position: 'absolute',
                    padding: 15,
                    margin: 0
                }}>Back</div>
                <div style={{
                    margin: 'auto',
                    fontFamily: 'quicksand', 
                    textAlign: 'left', 
                    color: 'black',
                    fontSize: 24
                    }}>Shipyard Studios
                </div>
            </div>
            <Link to='create' smooth={true} duration={1000} className='modal-text'>Create</Link>
            <a className='modal-text' href='https://medium.com/@loganlarkin/shipyard-studio-introduction-198fcf872e21' target='_blank' style={{textDecoration: 'none'}}>About</a>
            <a href='https://twitter.com/shipyard_' target='_blank' className='background-center' style={{backgroundImage: `url("${Twitter}")`, height: 40, width: 40, margin: 'auto', textDecoration: 'none'}}/>
            <a href='https://discord.gg/NPbwsCxkHw' target='_blank' className='background-center' style={{backgroundImage: `url("${Discord}")`, height: 40, width: 40, margin: 'auto', textDecoration: 'none'}}/>
            <a href='https://hackerdao.typeform.com/shipyardNFT' target='_blank' className='round-button expand-hover quicksand' style={{height: 25, border: '1px solid Modaly', lineHeight: 1.5, fontWeight: '300', margin: 'auto', textDecoration: 'none', color: 'white'}}>Inquire</a>
      </div>
  );
}

export default Modal;