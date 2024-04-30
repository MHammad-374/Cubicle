import React from 'react'
import main from '../data/main.json'
import Gallery from './Gallery'
import Location from './Location'
function Main() {
    return (
        <main>
            {
                main.map((elem) => {
                    return (
                        <>
                            <hr style={{ width: "1280px", margin: "auto" }} />
                            <section className="main_sec">
                                <h1 className="base_heading">{elem.name}</h1>
                                <div className="cards">
                                    {
                                        elem.products.map((product) => {
                                            return (
                                                <>
                                                    <div className="card">
                                                        <img src={product.images[0]} className="card_img card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <p className="card-text card-title">{product.title}</p>
                                                            <h5 className="card-price">$ {product.price}</h5>
                                                            <p className="card-text">{product.reviews} reviews</p>
                                                            <hr />
                                                            <button type="button" className='btn buy_btn'>BUY</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </section>
                        </>
                    )
                })
            }
            <Gallery />
            <Location />
        </main>
    )
}

export default Main
