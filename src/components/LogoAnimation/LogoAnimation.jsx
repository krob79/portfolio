import './LogoAnimation.scss';

const LogoAnimation = () => {

    return (
        <div id="animation_logo" className="animation_center">
            <svg id="animation_tracelogo" viewBox="0 -70 266 465">
                <path d="M 195.07786,339.37251 V 220.63119 l -61.72675,-44.76665 61.65915,-50.24593 0.13908,-118.912458 -142.302462,0.0449 0.24785,106.911758 c -0.11589,0.0489 0.27122,0.019 47.359732,-35.665033 l 0.19696,-23.560972 h 47.66824 l -0.11321,47.181705 c -0.0403,0.0361 -94.711192,71.39668 -94.711192,71.39668 l 94.617922,71.56558 -0.0942,95.02 -47.82259,-0.15634 0.2138,-71.24989 c 0,0 -0.0242,0.25609 -47.356212,-35.4104 l -0.13927,106.75068 H 5.5099285 L 5.3706585,6.697512" className="animation_logo_path_style animation_logo_path"></path>
                {/* <!-- <polyline points="24.11 1.01 1 1.01 1.01 189.62 26.49 189.9 26.49 129.33 54.3 150.72 53.99 190.87 81.05 190.87 81.29 136.94 26.66 96.08 80.97 56.1 80.97 28.25 53.82 28.25 53.82 41.81 27.37 62.89 27.37 1.01 108.65 1 108.65 69.03 67.82 96.12 108.65 123.29 109.3 190.93 84.61 190.93" className="logo_path" style="fill:none;stroke:#b5b5b6;stroke-miterlimit:10;stroke-width:1px"></polyline> --> */}
            </svg>
            <svg id="animation_glowlogo" data-name="Layer 12" xmlns="http://www.w3.org/2000/svg" viewBox="0 -70 266 465" colorInterpolationFilters="sRGB">
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
                <polygon className="animation_kshape" points="4.6,7.7,4.8,340.6,52.2,340.6,52.3,233.8,76,251.5,99.7,269.2,99.5,340.5,147.3,340.6,147.4,245.6,52.8,174,100.1,138.3,147.5,102.6,147.6,55.5,99.9,55.5,99.7,79,70,101.3,52.4,114.7,52.4,7.7,4.6,7.7"></polygon>
                <polygon className="animation_rshape" points="52.4,7.9,52.4,114.2,99.8,79,99.5,55.2,147.2,55.1,147.4,102.5,99.8,138.4,52.4,174,147.4,245.8,147.5,340.6,194.9,340.4,194.9,221.7,133.2,176.9,194.8,126.7,195,7.8,52.4,7.9,52.1,233.4,52.4,340.6,99.9,340.4,99.8,269.4,52.1,233.4"></polygon>
            </svg>
        </div>
    )

}

export default LogoAnimation;