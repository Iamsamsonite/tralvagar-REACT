import React from 'react'
import { Rec, Group, Group1, Mask, Arrow, Rectangle, Card, Card1, Card2, Vector1 } from '../asset'

const Contact = () => {
  return (
    <>
        <div className="section5">
          <div className="secy5" style={{width:"50px"}}>
            <img src={Group} alt=""/>
          </div>

          <div className="sec5 pt-5" style={{backgroundColor:"#458FF6", borderRadius: "10px", marginLeft:"150px", marginRight:"150px", height:"350px"}}>
            <div className="cent" style={{textAlign:"center", color:"white"}}>
              <h4>What our customer are saying</h4>
              <img src={Rectangle} alt="img"/>
            </div>
            <div className="simp row" style={{marginLeft:"150px", marginTop:"30px", }}>
              <div className="sim" >
                <div className="mask">
                  <img src={Mask} alt=""/> 
                </div>
              <div className="name mt-2" style={{color:"white"}}>
                  <p> <b>Edward Newgate</b> <br/> Founder Circle</p>
                    <p></p>
              </div>
            </div>
            <div className="pop" style={{marginLeft:"320px", marginTop:"20px", color:"white", fontSize:"12px"}}>
                <p>“Our dedicated patient engagement app and <br/>
                web portal allow you to access information <br/>
                instantaneously (no tedeous form, long calls, <br/>
                or administrative hassle) and securely”</p>
            </div>

            <div className="sey5" >
            <img style={{width:"50px" }} src={Group1} alt="img"/>
          </div>
        </div>
           </div>  
   </div>
    <div className="navarrow" style={{textAlign:"center", marginTop:"20px"}}>
      <img src={Arrow} alt=""/>
    </div>
    
{/* card */}
        <div className="sec6 mt-5"style={{textAlign:"center"}}>
            <h4>Check out our latest article</h4>
            <img src={Rec} alt="" style={{marginBottom:"10px", width:"30px"}}/>
        </div>
    <div className="card-group" style={{ marginLeft:"200px", gap:"30px",width:"850px",  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", backgroundColor: "#ffffff"}}>
       
  <div className="card  ">
    <img style={{borderRadius:"10px 10px 0px 0px", width: "263px"}}src={Card} className="card-img-top" alt="img"/>
    <div className="card-body">
      <h5 className="card-title">Disease detection, check <br/>
      up in the laboratory</h5>
      <p className="card-text"  style={{fontSize:"12px"}}>In this case, the role of the health <br/> laboratory is very important to do <br/>
      a disease detection...</p>
      <a style={{fontSize:"10px"}}href="Readmore">Read more...</a>
    </div>
  </div>
  
  <div className="card">
    <img style={{borderRadius:"10px 10px 0px 0px", width: "263px"}}src={Card1} className="card-img-top" alt="img"/>
    <div className="card-body">
      <h5 className="card-title">Herbal medicines that are <br/>
      safe for consumption</h5>
      <p className="card-text" style={{fontSize:"12px"}}>Herbal medicine is very widely used <br/>
      at this time because of its very good <br/>for your health...</p>
      <a style={{fontSize:"10px"}}href="Readmore">Read more...</a>
    </div>
  </div>
  <div className="card" style={{width:"200px"}}>
        <img style={{borderRadius:"10px 10px 0px 0px", width: "263px"}}src={Card2} className="card-img-top" alt="img"/>
     <div className="card-body">
      <h5 className="card-title">Natural care for healthy <br/>
      facial skin</h5>
      <p className="card-text" style={{fontSize:"12px"}}>A healthy lifestyle should start from <br/>
                    now and also for your skin health. <br/>
                    There are some...</p>
      <a style={{fontSize:"10px"}}href="Readmore">Read more....</a>
    </div>
  </div>
  
</div>
{/* <div className="vector1">
            <img style={{position:"absolute", top:"2490px", width:"400px", left:"860px", zIndex:"-1"}} src={Vector1} alt=""/>
        </div> */}

<div className="view mt-3" style={{textAlign:"center"}} >
            <button style={{ background:"white", fontSize:"10px", color:"#458FF6", borderRadius:"15px", border: "1.4px solid #458FF6", cursor:"pointer", width:"120px", height:"30px",}}>View all</button>
        </div>
    
    </>
    
    
  )
}

export default Contact
