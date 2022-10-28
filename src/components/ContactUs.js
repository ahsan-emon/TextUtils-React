import React from 'react'

export default function ContactUs(props) {
    return (
        <>
            <section className="contact-us" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743' }}>
                <div className='row'>
                    <div className="col-md-6 contact-left">
                    </div>
                    <div className="col-md-6 contact-right get-offers" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743' }}>
                        <div className="extra-padding">
                            <div className="contact-right-text">
                                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>get amazing offers</h1>
                                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo.</p>
                            </div>
                            <form action="">
                                <div className="first-last-name">
                                    <input style={{ color: props.mode === 'light' ? 'black' : 'white' }} type="text" placeholder="First Name" />
                                    <input style={{ color: props.mode === 'light' ? 'black' : 'white' }} type="text" placeholder="Last Name" />
                                </div>
                                <input style={{ color: props.mode === 'light' ? 'black' : 'white' }} type="email" placeholder="E-mail" />
                                <textarea style={{ color: props.mode === 'light' ? 'black' : 'white' }} name="" id="" placeholder="Message"></textarea>
                                <div className="text-center">
                                    <input style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="btn common-btn" type="submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
