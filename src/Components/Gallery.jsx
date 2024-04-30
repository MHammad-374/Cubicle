import React from 'react'
import pics from '../data/pics.json'

function Gallery() {


    return (
        <section className='gallery'>
            <hr />
            <h1 className="heading">Follow us on instagram @thecubicleofficial</h1>
            <div className="pics">
                {
                    pics.map((pic) => {
                        return (
                            <>
                                <div className="g_pic"
                                    style={{ backgroundImage: `url(${pic.image})` }}
                                >
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <hr />
        </section>
    )
}

export default Gallery
