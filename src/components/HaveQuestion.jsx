import React from 'react'
import { Link } from 'react-router-dom'

const HaveQuestion = () => {
  return (
    <>
      <div className="w-100 b-white p-0 m-0 container-fluid">
                <div id="contact-cta-box">
                    <div className="row">
                        <div className="col-md-9 contact-col">
                            <h5>Have any question about us?</h5>
                            <p>Don't be Shy, Say Hi!</p>
                        </div>
                        <div className="col-md-3 contact-col">
                            <Link to="/contact-us">
                                <button>
                                    <i className="fa-solid " style={{color:"#fff", fontSize:"20px"}}
                                        href="contact.html"></i>
                                        <span className="mx-1" style={{fontSize:"25px", color:"#fff", 
                                        fontWeight:"bolder"}}>Hi!</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default HaveQuestion
