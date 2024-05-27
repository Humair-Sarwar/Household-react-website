import React, { useRef } from "react";
import HaveQuestion from "./HaveQuestion";
import { useDispatch, useSelector } from "react-redux";
import { contactUsSliceActions } from "../store/contactUsDataSlices/contactUs";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import FormSubmitMsg from "./FormSubmitMsg";
import { SuccessMsgActions } from "../store/SuccessMsg";

const Contact = () => {
    const success = useSelector((store) => store.success);
    let id = v4();
    let name = useRef();
    let email = useRef();
    let description = useRef();
    let dispatch = useDispatch();
    let submitContactUsData = (e) => {
    e.preventDefault();
    dispatch(SuccessMsgActions.successMsgShow());
    setTimeout(()=>{
      dispatch(SuccessMsgActions.successMsgHide());
    },6000)
    let username = name.current.value;
    let userEmail = email.current.value;
    let userDescription = description.current.value;
    dispatch(
      contactUsSliceActions.formDataShowAll({
        id,
        username,
        userEmail,
        userDescription,
      })
        
    );  
        id = '';
        name.current.value = '';
        email.current.value = '';
        description.current.value = '';
  };
  return (
    <>
      <section id="features" className="form-section">
        <div className="container-fluid">
          <div className="row position-relative p-5">
            <div className="col-lg-6 slide-right">
              <div className="feature-img-third">
                <img
                  src="/images/contact/pngwing.com (3).png"
                  className="feature-img-three "
                  style={{ width: "70%" }}
                />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="feature-content p-1">
                <div className="mt-5">
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <div className="card">
                        <div
                          className="card-header text-white"
                          style={{ backgroundColor: "#080a3c" }}
                        ><Link to='/admin/contact-us-data' style={{color: 'white'}}>
                          Contact Us
                          </Link>
                          {success == true && <FormSubmitMsg />}
                        </div>
                        <div className="card-body">
                          <form onSubmit={submitContactUsData}>
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">
                                Name
                              </label>
                              <input
                                type="text"
                                ref={name}
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                ref={email}
                                className="form-control"
                                id="email"
                                placeholder="Your Email"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="message" className="form-label">
                                Message
                              </label>
                              <textarea
                                className="form-control"
                                ref={description}
                                id="message"
                                rows="5"
                                placeholder="Your Message"
                                style={{ minHeight: "200px" }}
                                required
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              className="btn"
                              style={{
                                backgroundColor: "#080a3c",
                                color: "#fff",
                              }}
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HaveQuestion />
        </div>
      </section>
    </>
  );
};

export default Contact;
