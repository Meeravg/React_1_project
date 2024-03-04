import React from 'react'
import './Farma.css' 
import './Footer' 
import Footer from './Footer'

import Slider_1 from './Slider_1'
import Slider_2 from './Slider_2'
const Farma = () => {
  return (
    <div>
         
        <div className='firstDiv'>
            <img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" alt="" />

            <div className='secondDiv'>
                <img className='battery' src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0" alt="" /><span className='span1'>Express delivery to</span>
                <div className='div4'><h3>400001 Mumbai</h3></div> 
            </div>
             
            <div className='div5'>
                <button className='button1'> <span><i className='bx bx-mobile-alt'></i></span> Download App</button>
                <a className='A1' href="">  <span><i className='bx bx-user'></i></span>   Hello, Log in</a>
                <a className='A1' href=""> <span><i className='bx bxs-offer'></i></span>   Offers</a>
                <a className='A1' href=""> <span><i className='bx bx-cart'></i></span>  Cart</a>
            </div>
        </div>

        <hr />
        <br />

        <div className='navbar'>
            <a href="https://pharmeasy.in/online-medicine-order?src=homecard" className="item" >Medicine</a>
            <a href="https://pharmeasy.in/diagnostics?src=homecard" className="item">Lab Tests</a>
            <a href="https://pharmeasy.in/health-care?src=homecard" className="item">Healthcare</a>
            <a href="https://pharmeasy.in/blog/" className="item">Health Blogs</a>
            <a href="https://pharmeasy.in/plus?src=homecard" className="item">PLUS</a>
            <a href="https://pharmeasy.in/offers?src=homecard" className="item">Offers</a>
            <a href="https://pharmeasy.in/health-care/9066?src=homecard" className="item">Value Store</a>
           
        </div>

        <br />
        <hr />
        <br />

        <h2 className='h12'>What are you looking for?</h2>
        <br />
        <input type="text" className="searchbox" id="" placeholder='Search products'/><span><button className='button2'>Search</button></span>
        <br />
        <br />
        <br />

        <div className='data1'>
            <a href="https://pharmeasy.in/online-medicine-order?src=homecard">
           <div  className="info">
                <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" alt="" />
                <hr className='hr2' />
                <h4 >Medicine</h4>
                <h5>UPTO 27% OFF</h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/diagnostics?src=homecard">
           <div className="info">
                <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" alt="" />
                <hr className='hr2' />
                <h4>Lat Tests</h4>
                <h5>UPTO 70% OFF</h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/health-care?src=homecard">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>Healthcare</h4>
                <h5>UPTO 60% OFF</h5>
           </div>
           </a>
            <a href="https://pharmeasy.in/blog/">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>Health Blogs</h4>
                <h5></h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/plus?src=homecard">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>PLUS</h4>
                <h5>SAVE 5% EXTRA</h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/offers?src=homecard">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>Offers</h4>
                <h5></h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/health-care/9066?src=homecard">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>Value Store</h4>
                <h5>UPTO 50% OFF</h5>
           </div>
           </a>
        </div>

        
        <br />
        <br />
        <Slider_2/>





        <br />
        <br />
        <div className="orderbox">
            <div className="orderDiv1">
                <div className='orderinfo'>
                    <img src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0" alt="" />
                    <h4>Order with Prescription</h4>
                </div>
                <p>Upload prescription and we will deliver your medicines</p>
                <button>Upload</button>
              
            </div>
           
            <div className="orderDiv2">
                <p>How does this work?</p>
                <div className='orderDivbuttons1'>
                    <div className='boxes'>1 </div>
                    <p className='Para'>Upload a photo of your prescription</p>
                </div>
                <div className='orderDivbuttons1'>
                    <div className='boxes'>2 </div>
                    <p className='Para'>Add delivery address and place the order</p>
                </div>
            </div>

            <div className="orderDiv3">
                <div className='orderDivbuttons1'>
                    <div className='boxes'>3</div>
                    <p className='Para'>We will call you to confirm the medicines</p>
                </div>
                <div className='orderDivbuttons1'>
                    <div className='boxes'>4 </div>
                    <p className='Para'>Now, sit back! your medicines will get delivered at your doorstep</p>
                </div>
            </div>
            
        </div>
        <br />
        


        <br />
        <br />

        <Slider_1/>


    <br />
    <br />

    <Footer/>
        
    </div>
  )
}

export default Farma