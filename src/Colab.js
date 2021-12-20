import Creature from './assets/creature.jpeg'
import Oilys from './assets/oilys.png'
import Strange from './assets/strange.jpeg'

function Colab () {

    let collaborations = [
        {name: 'Creature World NFT', creator: 'Danny Cole', img: Creature},
        {name: 'Oilys', creator: 'Logan Larkin', img: Oilys},
        {name: 'Lost Souls', creator: 'Strange', img: Strange},
    ]
    
    return (
        <div className="colab">
            <div className="small-text abel">Projects we have shipped: </div>
            <div className="flex" style={{width: '60vw', margin: 'auto', paddingTop: '5vh'}}>
            {collaborations.map(item => (
                <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                    <div className='background-center' style={{backgroundImage: `url("${item.img}")`, height: 150, width: 150, borderRadius: '50%'}}/>
                    <div className="small-text assistant" style={{textAlign: 'center',color: 'rgb(225, 218, 207)', marginTop: 15, width: 200, padding: 0}}>{item.name}</div>
                    <div className="small-text abel" style={{textAlign: 'center',fontSize: 16, marginTop: 10, width: 150, padding: 0}}>by {item.creator}</div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Colab