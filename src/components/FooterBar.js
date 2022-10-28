import React from 'react'

export default function FooterBar(props) {
    return (
        <>
            <footer className='footerPos' style={{ backgroundColor: props.mode === 'light' ? '#999' : '#04192a' }}>
                <div className="container py-4">
                    <div className="row">
                        <div className="col text-white text-center">
                            <p>© Copyright 2022. All rights Reserved to Emon</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
