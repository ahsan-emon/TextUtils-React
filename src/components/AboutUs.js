import React from 'react'
import pic1 from '../images/about-us-women-img.png'
import pic2 from '../images/contact-us-img.png'

export default function AboutUs(props) {
    return (
        <>
            <section className="about-us common-1" id="about" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743' }}>
                <div className="container">
                    <div className="row text-center section-title wow fadeInUp">
                        <div className="col">
                            <span></span>
                            <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>About us</h1>
                            <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    <div className="row gy-4 align-items-center about-us-content">
                        <div className="col-md-6 wow fadeInLeft">
                            <div className="owl-carousel about-carousel">
                                <img className={pic1} alt="" />
                                <img className="img-fluid building" src={pic2} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 about-us-text wow fadeInRight">
                            <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Why We Are the Best For Your Business.</h2>
                            <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <button className="btn common-btn read-btn">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
