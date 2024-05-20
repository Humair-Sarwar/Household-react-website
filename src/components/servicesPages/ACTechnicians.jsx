import React from 'react'
import HaveQuestion from '../HaveQuestion'

const ACTechnicians = () => {
  return (
    <>
      <section id="hero" className="b-white">
        <div className="container-fluid">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 content">
                        <div className="hero-content">
                            <h1>AC tech.</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit temporibus corrupti laborum perspiciatis! Quis, molestiae.</p>
                        </div>
                        <img src="/images/shape/like.png" className="like" />
                        <img src="/images/shape/hero-circle.png" className="hero-circle" />
                        <img src="/images/shape/rotate-triangle.png" className="rotate-triangle" />

                        <img src="/images/shape/blue-circle.png" className="blue-circle" />
                        <img src="/images/shape/red-circle.png" className="red-circle" />
                        <img src="/images/shape/verticle-circle.png" className="verticle-circle" />

                    </div>
                    <div className="col-lg-6 caraousel d-flex justify-content-center align-items-end hero-service">
                        <img src="/images/ac/pngwing.com (6).png" className="hero-image" style={{width:"80%"}}/>
                        <img src="/images/shape/hero-dots.png" className="hero-dots" />
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    <section id="features">
        <div className="container-fluid">
            <div className="row position-relative p-5">
                <div className="col-lg-6 slide-right">
                    <div className="feature-img-first">
                        <img src="/images/ac/pngwing.com (22).png" className="feature-img-one feature-image" />
                    </div>
                </div>
                <div className="col-lg-6 slide-right">
                    <div className="feature-content ">

                        <div className="feature-content-one p-lg-5 text-sm-center text-md-start">
                            <h2 className="heading">AC Technician</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laborum modi beatae,
                                incidunt adipisci dolores commodi expedita. Quos molestias tempora consectetur. Vero
                                animi velit earum, quos optio rem nobis cumque facilis corrupti ipsum itaque harum.
                                Neque laboriosam quibusdam quas recusandae repudiandae sed corrupti aspernatur
                                voluptatum quasi magni nesciunt aperiam dolore qui molestiae vitae modi, inventore quos
                                voluptates maxime cumque quis optio corporis labore quo. Voluptates, dolores, voluptate
                                quo modi magnam dicta expedita minima at qui repellat dolor sunt reprehenderit sapiente
                                maiores unde illum aliquid, enim corporis soluta nobis explicabo consequatur nisi
                                libero. Rerum, porro non animi eaque facilis nisi quia.
                            </p>
                            <a href="bookservice.html" className="btn" style={{backgroundColor:"#080a3c", color:"#fff"}}>Book Now</a>

                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="w-100 b-white p-0 m-0 container-fluid mt-5">
               <HaveQuestion/>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default ACTechnicians
