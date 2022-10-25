import React from 'react'

export default function About(props) {
    // const enableDark = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             borderRadius: '5px'
    //         });
    //         setBtn("Enable Light Mode");
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             borderRadius: '5px'
    //         });
    //         setBtn("Enable Dark Mode");
    //     }
    // }
    // const [btn, setBtn] = useState("Enable Dark Mode");
    // const disableDark = () => {
    //     let setDesign = {
    //         color: '',
    //         backgroundColor: '',
    //         borderRadius: ''
    //     }
    //     setMyStyle(setDesign);
    // }
    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color: 'black',
    //         backgroundColor: 'white',
    //         borderRadius: '5px'
    //     }
    // )
    return (
        <div className='container p-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h3 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                {/* <button className='btn btn-dark me-3' onClick={enableDark}>{btn}</button> */}
                {/* <button className='btn btn-secondary' onClick={disableDark}>Disable Dark Mode</button> */}
                {/* <button className="form-check form-switch btn btn-secondary ps-5" style={myStyle}>
                    <input className="form-check-input" type="checkbox" role="switch" onClick={enableDark} />
                    <label className="form-check-label">{btn}</label>
                </button> */}
            </div>
        </div>
    )
}
