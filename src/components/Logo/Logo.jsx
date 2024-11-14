import './Logo.scss';

const Logo = () => {

    return(
        <div id="logo" className="center">
            <svg id="glowlogo" data-name="Layer 12" xmlns="http://www.w3.org/2000/svg" viewBox="0 -70 266 465" colorInterpolationFilters="sRGB">
                    <defs>
                        <filter id="red-glow" filterUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        {/* <!-- blur the text at different levels--> */}
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur5"></feGaussianBlur>
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur10"></feGaussianBlur>
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur20"></feGaussianBlur>
                        <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30"></feGaussianBlur>
                        <feGaussianBlur in="SourceGraphic" stdDeviation="50" result="blur50"></feGaussianBlur>
                        {/* <!-- merge all the blurs except for the first one --> */}
                        <feMerge result="blur-merged">
                            <feMergeNode in="blur10"></feMergeNode>
                            <feMergeNode in="blur20"></feMergeNode>
                            <feMergeNode in="blur30"></feMergeNode>
                            <feMergeNode in="blur50"></feMergeNode>
                        </feMerge>
                        {/* <!-- recolour the merged blurs red--> */}
                        <feColorMatrix result="red-blur" in="blur-merged" type="matrix" values="1 0 0 0 0
                                                0 0.06 0 0 0
                                                0 0 0.44 0 0
                                                0 0 0 1 0"></feColorMatrix>
                        <feMerge>
                            {/* <!-- largest blurs coloured red --> */}
                            <feMergeNode in="red-blur"></feMergeNode>  
                            {/* <!-- smallest blur left white -->      */}
                            <feMergeNode in="blur5"></feMergeNode> 
                            {/* <!-- original white text -->          */}
                            <feMergeNode in="SourceGraphic"></feMergeNode>  
                        </feMerge>
                        </filter>
                    </defs>
                    <polygon className="kshape" points="4.6,7.7,4.8,340.6,52.2,340.6,52.3,233.8,76,251.5,99.7,269.2,99.5,340.5,147.3,340.6,147.4,245.6,52.8,174,100.1,138.3,147.5,102.6,147.6,55.5,99.9,55.5,99.7,79,70,101.3,52.4,114.7,52.4,7.7,4.6,7.7"></polygon>
                    <polygon className="rshape" points="52.4,7.9,52.4,114.2,99.8,79,99.5,55.2,147.2,55.1,147.4,102.5,99.8,138.4,52.4,174,147.4,245.8,147.5,340.6,194.9,340.4,194.9,221.7,133.2,176.9,194.8,126.7,195,7.8,52.4,7.9,52.1,233.4,52.4,340.6,99.9,340.4,99.8,269.4,52.1,233.4"></polygon>
                </svg>
        </div>
    )

}

export default Logo;