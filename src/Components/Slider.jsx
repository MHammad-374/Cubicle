import React from 'react'

function Slider() {
    return (
        <>
            <div className="slider_content">
                <div id="carouselExampleAutoplaying" className="carousel slide slider" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.thecubicle.com/cdn/shop/files/vincube_banner.jpg?v=1709746053&width=1280" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.thecubicle.com/cdn/shop/files/gan14_maglev_pro_banner2.jpg?v=1712592824&width=1280" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.thecubicle.com/cdn/shop/files/lucky_scrmable_banner_copy.jpg?v=1712332139&width=1280" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.thecubicle.com/cdn/shop/files/backpack_banner3_wip.jpg?v=1708025490&width=1280" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.thecubicle.com/cdn/shop/files/cubiclerewardsbanner_1296x_c84c109b-d626-4121-a46a-23ecfb03d97a.webp?v=1661383479&width=1280" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev btn-lr" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next btn-lr" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
        </>
    )
}

export default Slider
