import Image3 from '../../assets/3.png';
import './style.css';

function ImageText(){
    return(
        <div>
            <p style={{fontSize:'13px',marginTop:'15px'}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <div style={{textAlign:'center'}}><img id="img3" src={Image3} alt="pipes" /></div>   
            <p style={{fontSize:'13px'}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
            <hr id="hrtag" />
            <p style={{fontWeight:'bolder',fontSize:'13px'}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
            <p style={{fontSize:'13px',paddingLeft:'30px',paddingRight:'30px'}}> CHEMICALS & PROCESS <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> POWER <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> WATER & WASTE WATER <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> OILS & GAS <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> PHARMA <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> SUGARS & DISTILLERIES <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> PAPER & PULP <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> MARINE & DEFENCE <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> METAL & MINING <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> FOOD & BEVERAGE <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> PETROCHEMICAL & REFINERIES <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> SOLAR <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> BUILDING <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> HVAC <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> FIRE FIGHTING <span style={{color:'#ec3237',fontSize:'20px'}}>|</span> AGRICULTURE & RESIDENTIAL</p>
        </div>
    );
}
export default ImageText;