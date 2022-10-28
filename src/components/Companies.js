import React from 'react'
import com1 from '../images/kyan.png'
import com2 from '../images/atica.png'
import com3 from '../images/kanba.png'
import com4 from '../images/ztos.png'

export default function Companies(props) {
    return (
        <>
            <section className="companies-talking-about">
                <div className="container wow fadeInUp">
                    <div className="row text-center">
                        <div className="col">
                            <h6 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>They are talking about us</h6>
                        </div>
                        <div className="row align-items-center justify-content-center companies-name">
                            <div className="col-6 col-md-4 col-lg-3">
                                <a className="company-logo" style={{ opacity: props.mode === 'light' ? '0.12' : '0.5' }} href="/"><img className="img-fluid" src={com1} alt="" /></a>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <a className="company-logo" style={{ opacity: props.mode === 'light' ? '0.12' : '0.5' }} href="/"><img className="img-fluid" src={com2} alt="" /></a>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <a className="company-logo" style={{ opacity: props.mode === 'light' ? '0.12' : '0.5' }} href="/"><img className="img-fluid" src={com3} alt="" /></a>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <a className="company-logo" style={{ opacity: props.mode === 'light' ? '0.12' : '0.5' }} href="/"><img className="img-fluid" src={com4} alt="" /></a>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <a className="company-logo" style={{ opacity: props.mode === 'light' ? '0.12' : '0.5' }} href="/"><img className="img-fluid" src={com4} alt="" /></a>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <a className="company-logo" style={{ opacity: props.mode === 'light' ? '0.12' : '0.5' }} href="/"><img className="img-fluid other-size" src={com3} alt="" /></a>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <a className="company-logo" style={{ opacity: props.mode === 'light' ? '0.12' : '0.5' }} href="/"><img className="img-fluid other-size" src={com2} alt="" /></a>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <a className="company-logo" style={{ opacity: props.mode === 'light' ? '0.12' : '0.5' }} href="/"><img className="img-fluid other-size" src={com1} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
