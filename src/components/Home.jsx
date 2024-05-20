import React, { useState } from "react";
import { FaFire } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { FaSink } from "react-icons/fa6";
import { SiCcleaner } from "react-icons/si";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { MdEngineering } from "react-icons/md";
import { FcEngineering } from "react-icons/fc";
import { GiCook } from "react-icons/gi";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import HaveQuestion from "./HaveQuestion";
import { Link } from "react-router-dom";
import CircularIndeterminate from "./Admin/dashboard/Loader";

const Home = () => {
  const [load, updateLoad] = useState(true);
  setTimeout(() => {
    updateLoad(false);
  }, 2000);
  return (
    <>
      {load == true ? (
        <CircularIndeterminate />
      ) : (
        <>
          {" "}
          <section id="hero" className="b-white">
            <div className="container-fluid">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 content">
                    <div className="hero-content">
                      <h1>Household</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit temporibus corrupti laborum perspiciatis! Quis,
                        molestiae.
                      </p>
                    </div>
                    <img src="/images/shape/like.png" className="like" />
                    <img
                      src="/images/shape/hero-circle.png"
                      className="hero-circle"
                    />
                    <img
                      src="/images/shape/rotate-triangle.png"
                      className="rotate-triangle"
                    />

                    <img
                      src="/images/shape/blue-circle.png"
                      className="blue-circle"
                    />
                    <img
                      src="/images/shape/red-circle.png"
                      className="red-circle"
                    />
                    <img
                      src="/images/shape/verticle-circle.png"
                      className="verticle-circle"
                    />
                  </div>
                  <div className="col-lg-6 caraousel d-flex justify-content-center align-items-end">
                    <img
                      src="/images/index/pngwing.com (13).png"
                      className="hero-image"
                      width="80%"
                    />
                    <img
                      src="/images/shape/hero-dots.png"
                      className="hero-dots"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="services">
            <div className=" container-fluid color-gray">
              <div className="container">
                <h2 className="text-center heading">Our Services</h2>
                <div className="row">
                  <div className="col-md-4">
                    <Link to="/services/welder">
                      <div className="card service-card-one service-Kard">
                        <i className="fa-solid  b-blue">
                          <FaFire />
                        </i>

                        <h4>Welder</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi nesciunt inventore ab earum
                          sint nihil, labore sed tenetur nulla, repellendus est
                          quos corporis quam voluptatum modi quia dolore alias
                          magnam necessitatibus! Dolorem incidunt dolores earum
                          minus sequi rerum ipsum molestias. Iusto, doloribus
                          facere.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/services/electrician">
                      <div className="card service-card-two service-Kard">
                        <i className="fa-solid b-yellow">
                          <MdElectricBolt />
                        </i>
                        <h4>Electrician</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi nesciunt inventore ab earum
                          sint nihil, labore sed tenetur nulla, repellendus est
                          quos corporis quam voluptatum modi quia dolore alias
                          magnam necessitatibus! Dolorem incidunt dolores earum
                          minus sequi rerum ipsum molestias. Iusto, doloribus
                          facere.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/services/plumber">
                      <div className="card service-card-three service-Kard">
                        <i className="fa-solid b-dark-purple">
                          <FaSink />
                        </i>
                        <h4>Plumber</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi nesciunt inventore ab earum
                          sint nihil, labore sed tenetur nulla, repellendus est
                          quos corporis quam voluptatum modi quia dolore alias
                          magnam necessitatibus! Dolorem incidunt dolores earum
                          minus sequi rerum ipsum molestias. Iusto, doloribus
                          facere.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/services/cleaner">
                      <div className="card service-card-one service-Kard">
                        <i className="fa-solid b-blue">
                          <SiCcleaner />
                        </i>
                        <h4>Cleaner</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi nesciunt inventore ab earum
                          sint nihil, labore sed tenetur nulla, repellendus est
                          quos corporis quam voluptatum modi quia dolore alias
                          magnam necessitatibus! Dolorem incidunt dolores earum
                          minus sequi rerum ipsum molestias. Iusto, doloribus
                          facere.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/services/mad-servent">
                      <div className="card service-card-two service-Kard">
                        <i className="fa-solid b-yellow">
                          <FaPersonDotsFromLine />
                        </i>
                        <h4>Mad Servant</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi nesciunt inventore ab earum
                          sint nihil, labore sed tenetur nulla, repellendus est
                          quos corporis quam voluptatum modi quia dolore alias
                          magnam necessitatibus! Dolorem incidunt dolores earum
                          minus sequi rerum ipsum molestias. Iusto, doloribus
                          facere.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/services/construction-worker">
                      <div className="card service-card-three service-Kard">
                        <i className="fa-solid b-dark-purple">
                          <GrUserWorker />
                        </i>
                        <h4>Construction Worker</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi nesciunt inventore ab earum
                          sint nihil, labore sed tenetur nulla, repellendus est
                          quos corporis quam voluptatum modi quia dolore alias
                          magnam necessitatibus! Dolorem incidunt dolores earum
                          minus sequi rerum ipsum molestias. Iusto, doloribus
                          facere.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/services/ac-technicians">
                      <div className="card service-card-one service-Kard">
                        <i className="fa-solid b-blue">
                          <MdEngineering />
                        </i>
                        <h4>Ac Technician</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi nesciunt inventore ab earum
                          sint nihil, labore sed tenetur nulla, repellendus est
                          quos corporis quam voluptatum modi quia dolore alias
                          magnam necessitatibus! Dolorem incidunt dolores earum
                          minus sequi rerum ipsum molestias. Iusto, doloribus
                          facere.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/services/mechanical-worker">
                      <div className="card service-card-two service-Kard">
                        <i className="fa-solid b-yellow">
                          <FcEngineering />
                        </i>
                        <h4>Mechanical Worker</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi nesciunt inventore ab earum
                          sint nihil, labore sed tenetur nulla, repellendus est
                          quos corporis quam voluptatum modi quia dolore alias
                          magnam necessitatibus! Dolorem incidunt dolores earum
                          minus sequi rerum ipsum molestias. Iusto, doloribus
                          facere.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/services/cook">
                      <div className="card service-card-three service-Kard">
                        <i className="fa-solid b-dark-purple">
                          <GiCook />
                        </i>
                        <h4>Cook</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi nesciunt inventore ab earum
                          sint nihil, labore sed tenetur nulla, repellendus est
                          quos corporis quam voluptatum modi quia dolore alias
                          magnam necessitatibus! Dolorem incidunt dolores earum
                          minus sequi rerum ipsum molestias. Iusto, doloribus
                          facere.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="second-section">
                <h2 className="heading responsive-heading text-center">
                  WE BUILD YOUR BRAND HOW YOU ENVISION​
                </h2>
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img
                      src="/images/index/pngwing.com (16).png"
                      className="feature m-auto"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <div className="col-md-6 pt-5 position-relative">
                    <div className="service-box">
                      <div className="service-logo">
                        <i className="fa-solid b-aqua">
                          <BsTelephoneOutboundFill />
                        </i>
                      </div>
                      <div className="service-content">
                        <h4 className="px-3">Fast and Optimized</h4>
                        <p className="px-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Accusamus consectetur ex accusantium repellendus
                          distinctio odio esse laudantium. Saepe sequi error
                          reiciendis, deleniti nobis necessitatibus odio?
                        </p>
                      </div>
                    </div>
                    <div className="service-box">
                      <div className="service-logo">
                        <i className="fa-solid b-primary">
                          <FaGift />
                        </i>
                      </div>
                      <div className="service-content">
                        <h4 className="px-3">Marketing Solutions</h4>
                        <p className="px-3">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Praesentium nostrum impedit reiciendis ea eum
                          molestiae aliquid in, nulla natus, autem, laboriosam
                          saepe voluptates. Libero.
                        </p>
                      </div>
                    </div>
                    <div className="service-box">
                      <div className="service-logo">
                        <i className="fa-solid b-orange">
                          <FaCode />
                        </i>
                      </div>
                      <div className="service-content">
                        <h4 className="px-3">Time Solving</h4>
                        <p className="px-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequuntur, mollitia. Numquam nemo rem libero
                          ab sapiente optio tenetur modi iste sint. Doloribus ea
                          optio fugit minus eligendi.
                        </p>
                      </div>
                    </div>
                    <img src="/images/shape/cross.png" className="cross" />
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
                    <img
                      src="/images/aboutt/pngwing.com (8).png"
                      className="feature-img-one "
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 slide-right">
                  <div className="feature-content ">
                    <div className="feature-content-one p-lg-5 text-sm-center text-md-start">
                      <h2 className="heading">Who We Are?</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio laborum modi beatae, incidunt adipisci dolores
                        commodi expedita. Quos molestias tempora consectetur.
                        Vero animi velit earum, quos optio rem nobis cumque
                        facilis corrupti ipsum itaque harum. Neque laboriosam
                        quibusdam quas recusandae repudiandae sed corrupti
                        aspernatur voluptatum quasi magni nesciunt aperiam
                        dolore qui molestiae vitae modi, inventore quos
                        voluptates maxime cumque quis optio corporis labore quo.
                        Voluptates, dolores, voluptate quo modi magnam dicta
                        expedita minima at qui repellat dolor sunt reprehenderit
                        sapiente maiores unde illum aliquid, enim corporis
                        soluta nobis explicabo consequatur nisi libero. Rerum,
                        porro non animi eaque facilis nisi quia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row position-relative  p-5">
                <div className="col-lg-6 slide-right">
                  <div className="feature-content">
                    <div className=" feature-content-two p-lg-5 text-sm-center text-md-start">
                      <h2 className="heading mt-lg-5">Why Choose Us?</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio molestiae dolor quas error, repudiandae,
                        voluptatibus dicta dignissimos earum, ad laboriosam
                        placeat? Nihil deserunt nostrum, architecto veritatis
                        hic consectetur a, nemo culpa temporibus consequatur
                        earum odit assumenda provident accusamus similique dolor
                        reiciendis enim, laboriosam ipsam fuga eligendi quos
                        soluta animi vitae. Ratione hic magnam vitae nihil, nam
                        ipsa obcaecati cupiditate deserunt. Aperiam quae dolores
                        totam accusamus nulla sit quaerat, ex facilis recusandae
                        a voluptatibus hic, culpa labore doloribus enim, earum
                        officia pariatur. Natus fugit a, ea numquam ullam eum
                        saepe porro minima, ex perferendis, cupiditate
                        reprehenderit. Perspiciatis, consectetur facilis non
                        vitae a sunt excepturi voluptas quae. Minus harum
                        repudiandae quia provident aliquam quo quisquam
                        suscipit? Sequi, explicabo ipsum. Laborum, optio
                        blanditiis?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 slide-right">
                  <div className="feature-img-second">
                    <img
                      src="/images/index/pngwing.com (15).png"
                      className="feature-img-two"
                    />
                  </div>
                </div>
              </div>

              <div className="row position-relative p-5">
                <div className="col-lg-6 slide-right">
                  <div className="feature-img-third">
                    <img
                      src="/images/aboutt/pngwing.com (7).png"
                      className="feature-img-three "
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 slide-right">
                  <div className="feature-content">
                    <div className="feature-content-three p-lg-5 text-sm-center text-md-start">
                      <h2 className="heading">Who We Are?</h2>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ullam error ut in minus asperiores? Aperiam sint
                        veritatis repellendus iure recusandae officia beatae
                        molestiae corporis nostrum at ipsum alias labore
                        consectetur debitis, illo impedit? Consectetur quas
                        animi ut at deserunt, odio suscipit, fuga obcaecati
                        debitis labore sint! Laboriosam eos totam delectus odio,
                        molestias aliquid omnis consectetur corrupti hic rem
                        recusandae doloribus et aut quia nam! Cupiditate commodi
                        numquam eveniet maxime? Quis a atque vel vero doloribus
                        vitae, alias harum numquam corporis. Eum quo commodi
                        nulla enim dolores qui placeat officia dolor quod eius
                        neque consectetur, suscipit incidunt. Delectus similique
                        sequi animi cumque tempore. Vero eos veniam corrupti
                        blanditiis nobis quos impedit. Molestiae, nihil. Autem
                        necessitatibus porro, temporibus ad nam maxime.
                        Distinctio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <HaveQuestion />
            </div>
          </section>
          <a className="whatsApp-btn" href="https://wa.me/+923024540201">
            <img src="/images/whatsapp/pngwing.com (15).png" />
          </a>
        </>
      )}
    </>
  );
};

export default Home;
