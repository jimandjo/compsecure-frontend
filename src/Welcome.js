import React from "react"
// import { ListGroup } from "react-bootstrap"
import JimDick from "./JimDick.jpg"
import compromised from "./compromised.jpg"
import help from "./help.jpg"
import GotThis from "./GotThis.jpg"
import DoIt from "./DoIt.jpg"

function Welcome() {
    return (
        <>
       
        <div class="container col-xxl-8 px-4 py-5" >
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={JimDick} class="d-block mx-lg-auto img-fluid" alt="Jim Dick" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Jim Dick  Compsecure.us</h1>
        
        <h4 class="lead">Protect Your CyberSpace. <br /> It Belongs to You.</h4>
        {/* <h4 class="lead">Services Available:</h4> */}
        {/* <ListGroup variant="flush">
              <ListGroup.Item>Residential</ListGroup.Item>
              <ListGroup.Item>Commercial</ListGroup.Item>
              <ListGroup.Item>Organizing</ListGroup.Item>
              <ListGroup.Item>Move-In</ListGroup.Item>
              <ListGroup.Item>Move-Out </ListGroup.Item>
            </ListGroup> */}
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Jim</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>  
  {/* Second Hero */}
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={compromised} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" a href="#">Are you compromised?</h1>
        
        <h4 class="lead">If your cyberspace is compromised, you can lose more than your data, banking information, and family photos. You can lose sleep, peace, and privacy. What else would you lose if you were hacked? If you do nothing to protect your cyber world, you are at risk.</h4>
        

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          {/* <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Karlie</button> */}
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>

  {/* Third Hero */}
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={help} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" a href="#">I can help</h1>
        
        <h4 class="lead">By putting a few simple tools in place, you can secure your CyberSpace</h4>
        

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          {/* <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Karlie</button> */}
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>
{/* Forth Hero */}
<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={GotThis} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" a href="#">No more fear</h1>
        
        <h4 class="lead">I know the feeling of frustration and fear when you discover your data is in the hands of someone you do not know and is expecting you to pay them good money to fix your problem. I have been in this situation and it is not a good feeling. After gaining the courage to fire these scoundrels, I researched and secured my family’s Cyberspace using a few simple tools.</h4>
        

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          {/* <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Karlie</button> */}
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>
{/* Fifth Hero */}

<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={DoIt} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" a href="#">Start today</h1>
        
        <h4 class="lead">Replace the feeling of vulnerability with the confidence of knowing you have secured your personal data against intruders.</h4>
        

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Start Here</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>

  </>
    )
    
}

export default Welcome