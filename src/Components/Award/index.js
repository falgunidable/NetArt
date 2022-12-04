import './style.css';
import Image1 from '../../assets/1.png';
import Image2 from '../../assets/2.png';

function Award(){
    return(
        <>       
            <div className="flex-container">
                <div className="flex-item-left">
                    <img id="img1" src={Image1} alt="trophy" />
                </div>
                <div className="flex-item-right">
                    <p style={{fontSize:'13px',fontWeight:'bolder'}}>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                    <p>
                        <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                        </ul>
                    </p>
                    <div style={{textAlign:'center'}}>
                    <img id="img2" src={Image2} alt="photograph"/></div>
                    <p>Government of India has awarded the <span style={{fontSize:'13px',fontWeight:'bolder'}}>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>
        </>
    );
}
export default Award;
