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
            <div className="small-text">Projects we have shipped: </div>
            <div className="flex" style={{width: '60vw', margin: 'auto', paddingTop: '5vh'}}>
            {collaborations.map(item => (
                <div>
                    <div className='background-center' style={{backgroundImage: `url("${item.img}")`, height: 150, width: 150, borderRadius: '50%'}}/>
                    <div className="small-text" style={{textAlign: 'center', marginTop: 15, width: 150, padding: 0}}>{item.name}</div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Colab