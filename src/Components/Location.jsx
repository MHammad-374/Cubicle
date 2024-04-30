import React from 'react'

function Location() {
    return (
        <section className='location'>
            <div className="address">
                <h1 className="heading">Our Store</h1>
                <p className="text">TheCubicle.com Cube Showroom</p>
                <p className="text">8 Westchester Plaza <br />Suite 184</p>
                <p className="text">Elmsford NY, 10523</p>
                <p className="text">United States</p>
                <p className="text">We love visitors! Please contact us to schedule a visit.</p>
                <button type="button" className='btn contact_btn'>Contact Us</button>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.9419461758666!2d-73.81192552497905!3d41.07026161560746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2956c2e2d60fb%3A0xebbabfab02824746!2sTheCubicle.com%20Cube%20Showroom!5e0!3m2!1sen!2s!4v1713770135202!5m2!1sen!2s" width="700" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Location
