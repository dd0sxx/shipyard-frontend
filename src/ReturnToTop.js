import * as Scroll from 'react-scroll';

function ReturnToTop ({rttColor, setRttColor}) {

    var scroll    = Scroll.animateScroll;
    
    const handleClick = () => {
        setRttColor('transparent')
        scroll.scrollToTop()
    }

    return (
        <div  className="return-to-top" style={{
        height: '20px',
        width: '200px',
        position: 'sticky',
        top: '90vh',
        left: '90vw',
        fontFamily: 'quicksand',
        transition: '1s',
        color: rttColor,
        cursor: 'pointer'
        }}
        onClick={handleClick}
        >Return To Top ↑ </div>
    );
}

export default ReturnToTop;
