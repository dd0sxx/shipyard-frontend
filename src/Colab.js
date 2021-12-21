import Creature from './assets/creature.jpeg'
import Oilys from './assets/oilys.png'
import Strange from './assets/strange.jpeg'
import Twitter from './assets/twitter-tan.png'
import Etherscan from './assets/etherscan-tan.png'

function Colab () {

    let collaborations = [
        {name: 'Creature World NFT', creator: 'Danny Cole', img: Creature, etherscan: 'https://etherscan.io/address/0xc92ceddfb8dd984a89fb494c376f9a48b999aafc', twitter: 'https://twitter.com/creatureNFT'},
        {name: 'Oilys', creator: 'Logan Larkin', img: Oilys, etherscan: 'https://etherscan.io/address/0x49623caec21b1ff5d04d7bf7b71531369a69bce4', twitter: 'https://twitter.com/logan_larkin'},
        {name: 'Lost Souls', creator: 'Strange', img: Strange, etherscan: 'https://etherscan.io/address/0xd9af5e6f1f4ca776d763c5701d016a6a1fa68d7b', twitter: 'https://twitter.com/_StrangeW0rld_'},
    ]
    
    return (
        <div className="colab">
            <div className="medium-text assistant">Projects we have shipped: </div>
            <div className="flex" style={{width: '60vw', margin: 'auto', paddingTop: '5vh'}}>
            {collaborations.map(item => (
                <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                    <div className='background-center circle' style={{backgroundImage: `url("${item.img}")`, borderRadius: '50%'}}/>
                    <div className="small-text assistant circle-text" style={{textAlign: 'center',color: 'rgb(225, 218, 207)', marginTop: 15, padding: 0}}>{item.name}</div>
                    <div className="small-text abel circle-text" style={{textAlign: 'center', marginTop: 10, padding: 0, paddingBottom: 5}}>by {item.creator}</div>
                    <div className='flex'>
                        <a href={item.etherscan} target='_blank' className='background-center colab-link' style={{backgroundImage: `url("${Etherscan}")`, margin: 10}}/>
                        <a href={item.twitter} target='_blank' className='background-center colab-link' style={{backgroundImage: `url("${Twitter}")`, margin: 10}}/>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Colab