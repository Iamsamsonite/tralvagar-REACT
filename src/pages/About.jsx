import React from 'react'
import { Rec, Vector, Frame, Frame2, Frame3, Frame4, Frame5, Frame6 } from '../asset'



const About = () => {
  return (
    <>
      <div className="our-service mt-5" style={{textAlign:"center"}}>
            <h4 style={{fontSize:"20px"}}>Our services</h4>
            <div className="rec m-0">
                <img src={Rec} alt="img" style={{width:"30px"}}/>
            </div>
            <p style={{fontSize:"12px", color:"#7D7987"}}>We provide to you the best choiches for you. Adjust it to your health 
                needs and make sure your undergo treatment <br/> with our highly qualified doctors you 
                can consult with us which type of service is suitable for your health</p>
      </div>
      
      <div className="vec">
          <img src={Vector} alt="img" style={{width:"600px", position:"absolute"}}/>
      </div>
      
      <div className='cards m-5' >
        <div className="row mb-4">
          <div className="col-sm-4 mb-5">
            <div className="card" style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"78%", border:"1px solid #ffffff", borderRadius:"20px", padding:"10px", position:"relation" }}>
              <div className="card-body" style={{width:"280px", height:"190px"}}>
                <img src={Frame} alt="img" style={{width:"50px", padding: "0px 10px 0px 10px"}}/>
                <h5 className="card-title my-2" style={{fontSize:"20px"}}>Search doctor</h5>
                <p className="card-text" style={{color: "#7D7987", fontSize: "12px", lineHeight: "17px"}}>Choose your doctor from thousands
               of specialist, general, and trusted hospitals
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-1"></div> */}

          <div className="col-sm-4 mb-5">
            <div className="card" style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"78%", border:"1px solid #ffffff", borderRadius:"20px", padding:"10px", position:"relation" }}>
              <div className="card-body" style={{width:"280px", height:"190px"}}>
                  <img src={Frame2} alt="img" style={{width:"50px", padding: "0px 10px 0px 10px"}}/>
                  <h5 className="card-title my-2" style={{fontSize:"20px"}}> Online pharmacy </h5>
                  <p className="card-text" style={{color: "#7D7987", fontSize: "12px", lineHeight: "17px"}}>Buy  your medicines with our <br/> mobile application with a simple <br/>
                  delivery system</p>
            
              </div>
            </div>
          </div>
          {/* <div className="col-sm-1"></div> */}

          <div className="col-sm-4 mb-5">
            <div className="card" style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"78%", border:"1px solid #ffffff", borderRadius:"20px", padding:"10px", position:"relation" }}>
              <div className="card-body" style={{width:"280px", height:"190px"}}>
                <img src={Frame3} alt="img" style={{width:"50px", padding: "0px 10px 0px 10px"}}/>
                <h5 className="card-title my-2" style={{fontSize:"20px"}}>Consultation</h5>
                <p className="card-text" style={{color: "#7D7987", fontSize: "12px", lineHeight: "17px"}}>Free consultation with our trusted <br/>
                doctors and get the best <br/> recomendations</p>
             
              </div>
            </div>
          </div>
          {/* <div className="col-sm-1"></div> */}

          <div className="row">
            <div className="col-sm-4 pl-4">
              <div className="card" style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"78%", border:"1px solid #ffffff", borderRadius:"20px", padding:"10px", position:"relation" }}>
                <div className="card-body" style={{width:"490px", height:"190px"}}>
                  <img src={Frame4} alt="img" style={{width:"50px", padding: "0px 10px 0px 10px"}}/>
                  <h5 className="card-title my-2" style={{fontSize:"20px"}}>Details info</h5>
                  <p className="card-text" style={{color: "#7D7987", fontSize: "12px", lineHeight: "17px"}}>Free consultation with our trusted <br/>
                  doctors and get the best <br/> recomendations
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-1"></div> */}

            <div className="col-sm-4">
              <div className="card" style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"78%", border:"1px solid #ffffff", borderRadius:"20px", padding:"10px", position:"relation" }}>
                <div className="card-body" style={{width:"280px", height:"190px"}}>
                  <img src={Frame5} alt="img" style={{width:"50px", padding: "0px 10px 0px 10px"}}/>
                  <h5 className="card-title mt-2 my2" style={{fontSize:"20px"}}> Emergency care </h5>
                  <p className="card-text" style={{color: "#7D7987", fontSize: "12px", lineHeight: "17px"}}>You can get 24/7 urgent care for <br/>
                    yourself or your children and your <br/>
                    lovely family</p>
            
                </div>
              </div>
            </div>
            {/* <div className="col-sm-1"></div> */}

            <div className="col-sm-4">
              <div className="card" style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"78%", border:"1px solid #ffffff", borderRadius:"20px", padding:"10px", position:"relation" }}>
                <div className="card-body" style={{width:"280px", height:"190px"}}>
                  <img src={Frame6} alt="img" style={{width:"50px", padding: "0px 10px 0px 10px"}}/>
                  <h5 className="card-title my-2" style={{fontSize:"20px"}}>Tracking</h5>
                  <p className="card-text" style={{color: "#7D7987", fontSize: "12px", lineHeight: "17px"}}>Track and save your medical history <br/> and health data </p>
             
                </div>
              </div>
            </div>
            {/* <div className="col-sm-1"></div> */}
      </div>
      </div>
      </div>
      <div class="learn-but" style={{textAlign:"center"}}>
            <button style={{ backgroundColor: "#ffffff", border: "1.4px solid #458FF6", color: "#458FF6", borderRadius: "20px", width:"90px", height: "35px", fontSize: "10px"}}>Learn more</button>
        </div>
        
    </>
      
  )
}

export default About
