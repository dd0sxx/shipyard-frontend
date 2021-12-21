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
        // left: '90vw', in css file for media query
        fontFamily: 'quicksand',
        transition: '1s',
        color: rttColor,
        cursor: 'pointer',
        padding: 20,
        zIndex: 99
        }}
        onClick={handleClick}
        >Return To Top ↑ </div>
    );
}

export default ReturnToTop;
