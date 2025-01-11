import './CheckAnimation.scss';
import {useState} from 'react';

const CheckAnimation = ({open}) => {

    const [isOpen, setIsOpen] = useState(open);

    setTimeout(()=>{ 
        setIsOpen(true); 
    }, '1000');

    return(
        <>
            <svg width="60%" height="60%" viewBox="0 0 32 32">
                <circle fill="none" cx="16" cy="16" r="8" strokeDasharray="88" className={isOpen?'svgopen':''}/><path d="M8,15 l 6,6 l 10,-10" fill="none" strokeDasharray="24" className={isOpen?'svgopen':''} />
            </svg>
        </>
        
    )
}

export default CheckAnimation;