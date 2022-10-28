import React from 'react'

export default function ExpertiseSection(props) {
    return (
        <>
            <section className="our-work common-1" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="container">
                    <div className="row text-center section-title">
                        <div className="col">
                            <span></span>
                            <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>what we do</h1>
                            <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    <div className="row gy-4">
                        <div className="col-md-4 text-center">
                            <div className="work-card" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743' }}>
                                <span></span>
                                <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Web Design</h3>
                                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="work-card" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743' }}>
                                <span></span>
                                <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>UI/UX Design</h3>
                                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="work-card" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743' }}>
                                <span></span>
                                <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>WordPress Design</h3>
                                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="work-card" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743' }}>
                                <span></span>
                                <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Shopify Development</h3>
                                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="work-card" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743' }}>
                                <span></span>
                                <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Graphic Design</h3>
                                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <button className="btn common-btn explore-btn">explore more</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
