function Colab () {

    let collaborations = [
        {name: 'Creature World NFT', creator: 'Danny Cole', img: './assets/creature.jpeg'},
        {name: 'Oilys', creator: 'Logan Larkin', img: ''},
        {name: 'Lost Souls', creator: 'Strange', img: './assets/strange.jpeg'},
    ]
    
    return (
        <div className="colab">
            <div className="small-text">Projects we have shipped: </div>
            <div className="flex" style={{width: '50vw', margin: 'auto'}}>
            {collaborations.map(item => (
                <div className='background-center' style={{backgroundImage: `url("${item.img}")`, height: 50, width: 50, border: '1px solid pink'}}/>
                ))}
                </div>
        </div>
    )
}

export default Colab