import './Contact.scss';
import CheckAnimation from './CheckAnimation'; 
const EmailSentAnimation = ()=>{

    return(
        <>
            <div className="confirm-panel">
                <CheckAnimation open={false}/>
            </div>

        </>
    )



}

export default EmailSentAnimation