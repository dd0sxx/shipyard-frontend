import dd0sxx from './assets/rei.jpeg'
import Logan from './assets/Logan.jpeg'
import Shipyard from './assets/shipyard.jpeg'

function About () {

    return(
        <div className="about">
            <div className="big-text assistant">Shipyard Studios</div>
            <div className="small-text abel">We work with creators of all mediums and enable them to take control of their intellectual property and provenance by giving them true ownership of their creations. Whether you are a musician, visual artist, film-maker, or brand we give you the tools + strategy you need to begin creating in web3.</div>
            <div className="medium-text assistant">The Team:</div>
            <div className="flex" style={{width: '60vw', margin: 'auto', paddingTop: '5vh'}}>
                <div>
                    <div className='background-center' style={{backgroundImage: `url("${dd0sxx}")`, height: 150, width: 150, borderRadius: '50%'}}/>
                    <div className="small-text assistant" style={{textAlign: 'center',color: 'rgb(225, 218, 207)', marginTop: 15, width: 150, padding: 0}}>dd0sxx</div>
                    <div className="small-text abel" style={{textAlign: 'center',fontSize: 16, marginTop: 10, width: 150, padding: 0, paddingBottom: 5}}>Dev</div>
                </div>
                <div>
                    <div className='background-center' style={{backgroundImage: `url("${Logan}")`, height: 150, width: 150, borderRadius: '50%'}}/>
                    <div className="small-text assistant" style={{textAlign: 'center',color: 'rgb(225, 218, 207)', marginTop: 15, width: 150, padding: 0}}>Logan</div>
                    <div className="small-text abel" style={{textAlign: 'center',fontSize: 16, marginTop: 10, width: 150, padding: 0, paddingBottom: 5}}>dev</div>
                </div>
                <div>
                    <div className='background-center' style={{backgroundImage: `url("${Shipyard}")`, height: 150, width: 150, borderRadius: '50%'}}/>
                    <div className="small-text assistant" style={{textAlign: 'center',color: 'rgb(225, 218, 207)', marginTop: 15, width: 150, padding: 0}}>Shipyard DAO</div>
                    <div className="small-text abel" style={{textAlign: 'center',fontSize: 16, marginTop: 10, width: 150, padding: 0, paddingBottom: 5}}>Parent</div>
                </div>
            </div>
        </div>
    )
}

export default About