import dd0sxx from './assets/rei.jpeg'
import Logan from './assets/Logan.jpeg'
import Shipyard from './assets/shipyard.jpeg'

function About () {

    return(
        <div className="about">
            <div className="big-text assistant">Shipyard Studios</div>
            <div className="small-text abel">We work with creahrefrs of all mediums and enable them href take control of their intellectual property and provenance by giving them true ownership of their creations. Whether you are a musician, visual artist, film-maker, or brand we give you the hrefols + strategy you need href begin creating in web3.</div>
            <div className="medium-text assistant">The Team:</div>
            <div className="flex" style={{width: '60vw', margin: 'auto', padding: '5vh'}}>

                <a href="https://twitter.com/dd0sxx" style={{textDecoration: 'none'}}>
                    <div className='background-center' style={{backgroundImage: `url("${dd0sxx}")`, height: 150, width: 150, borderRadius: '50%'}}/>
                    <div className="small-text assistant" style={{textAlign: 'center',color: 'rgb(225, 218, 207)', width: 150, padding: 0, marginTop: 15}}>dd0sxx</div>
                    <div className="small-text abel" style={{textAlign: 'center',fontSize: 16, marginTop: 10, width: 150, padding: 0, paddingBottom: 5}}>Dev</div>
                </a>
                <a href="/promospace/detail" style={{textDecoration: 'none'}}>
                    <div className='background-center' style={{backgroundImage: `url("${Logan}")`, height: 150, width: 150, borderRadius: '50%'}}/>
                    <div className="small-text assistant" style={{textAlign: 'center',color: 'rgb(225, 218, 207)', width: 150, padding: 0, marginTop: 15}}>Logan</div>
                    <div className="small-text abel" style={{textAlign: 'center',fontSize: 16, marginTop: 10, width: 150, padding: 0, paddingBottom: 5}}>dev</div>
                </a>
                <a href="/promospace/detail" style={{textDecoration: 'none'}}>
                    <div className='background-center' style={{backgroundImage: `url("${Shipyard}")`, height: 150, width: 150, borderRadius: '50%'}}/>
                    <div className="small-text assistant" style={{textAlign: 'center',color: 'rgb(225, 218, 207)', width: 150, padding: 0, marginTop: 15}}>Shipyard DAO</div>
                    <div className="small-text abel" style={{textAlign: 'center',fontSize: 16, marginTop: 10, width: 150, padding: 0, paddingBottom: 5}}>Parent</div>
                </a>
            </div>
        </div>
    )
}

export default About