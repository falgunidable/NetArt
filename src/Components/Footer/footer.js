import './footer.css';
import Phone from '../../assets/phone.png';
import Facebook from '../../assets/facebook.png';
import Globe from '../../assets/globe.png';

function Footer(){
    return(
        <div style={{padding:'10px'}}>
            <div className="flex-container1">
                <div><img src={Phone} alt="phone"/> Toll free <b>1800 200 1234</b></div>
                <div><img src={Facebook} alt="fb"/> www.facebook.com/cripumps</div>
                <div><img src={Globe} alt="website"/> www.crigroups.com</div>   
            </div>
        </div>
    );
}
export default Footer;