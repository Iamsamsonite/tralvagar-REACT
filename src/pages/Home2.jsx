import React, {useReducer, useState} from 'react'
import { Dotty, Illustration, Illustrate, Rec, Traf } from '../asset'


const initialState = {count:0}

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return {count:state.count +1};
            case 'decrement':
                return {count: state.count -1};
                case 'reset':
                    return initialState;
                    default:
                        throw new Error('Unsupported action type');
    }
}
 


const Home2 = () => {
    // const [count, setCount] = useState(0);

    // const increment =()=> {
    //     setCount(count + 1);
    // }
    const[state, dispatch] = useReducer(reducer, initialState);
    const increment = () => {
        dispatch({type:'increment'});
    };
    const decrement = () => {
        dispatch ({type:'decrement'});
    };
    const reset = () => {
        dispatch({type: 'reset'});
    };
  return (
    <>
      <div className="img1">
        <img src={Dotty} alt="img" style={{width:"50px"}}/>
      </div>

       <div  className="section1 row ml-5 mb-4">
            <div className='sty pl-5 ml-5'>
                <div className="Virtual">
                    <h2 style={{font:"20px"}}>Virtual healthcare <br/>
                    for you</h2>
                </div>
        
                <div className="para">
                     <p style={{color:"#7D7987", fontSize:"12px"}}>Trafalgar provides progressive, and affordable <br/> 
                    healthcare, accessible on mobile and online <br/>
                    for everyone</p>
                </div>
                <div className="but-consult" >
                    <button style={{backgroundColor:"rgb(89, 153, 243)", font:"10px", color:"white", borderRadius:"15px", border:"none", cursor:"pointer", width:"120px", height:"30px"}}>Consult today</button>
                </div>
            </div>
            <div className="illus pl-5 ml-5">
                 <img src={Illustration} alt="img" style={{width:"500px", height:"300px"}}/>
            </div>
                

        </div>

        <div className="section3 row m-2">
            <div className="imagesec02 pl-5 ml-5">
                 <img src={Illustrate} alt="img" style={{width:"500px", height:"300px"}}/>
            </div>
            <div className="rit pl-5 ml-5 mt-5">
                <div className="rite">
                    <h4 style={{fontSize:"30"}}>Leading healthcare <br/> providers</h4>
                    <img src={Rec} alt="img" style={{width:"30px"}}/>
                </div>
                <div>
                    <p style={{fontSize:"12px", color:"#7D7987"}}>Trafalgar provides progressive, and affordable <br/>
                    healthcare, accessible on mobile and online for <br/>
                     everyone. To us, it’s not just work. We take pride <br/>
                    in the solutions we deliver</p>
                </div>
                <div>
                    <button style={{background:"white", fontSize:"10px", color:"#458FF6", borderRadius:"15px", border: "1.4px solid #458FF6", cursor:"pointer", width:"120px", height:"30px"}}>Learn more</button>
                </div>
            </div>
        </div>

        <div className="elem">
        <img src={Dotty} alt="img" style={{width:"50px", marginLeft:"1200px"}}/>
        </div>

        <div className="section4 row m-5">
            <div className="sec4-left pl-5 ml-5">
                <div>
                    <h2 style={{fontSize:"30"}}>Download our <br/> 
                    mobile apps</h2>
                </div>
                <div><img src={Rec} alt="img"  style={{width:"30px"}}/></div>
                <div>
                    <p style={{fontSize:"12px", color:"#7D7987"}}>Our dedicated patient engagement app and <br/>
                    web portal allow you to access information <br/>
                     instantaneously (no tedeous form, long calls, <br/>
                    or administrative hassle) and securely</p>
                </div>
                <div className="Download">
                    <button style={{background:"white", fontSize:"10px", color:"#458FF6", borderRadius:"15px", border: "1.4px solid #458FF6", cursor:"pointer", width:"120px", height:"30px"}}>Download</button>
                </div>
            </div>
            <div className="illu-sec03 pl-5 ml-5">
                <img src={Traf} alt="img"  style={{width:"500px", height:"300px"}}/>
            </div>
        </div>

        {/* <div>
            <p>Count: {count}</p>
            <button style={{background:"white", fontSize:"10px", color:"#458FF6", borderRadius:"15px", border: "1.4px solid #458FF6", cursor:"pointer", width:"120px", height:"30px"}} onClick={increment}>Increment</button>
        </div> */}

        <div>
            <p>Count:{state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>Reset</button>

        </div>

    </>
  )
}

export default Home2
