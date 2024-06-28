import React from 'react'
import Navbar from './Navbar'
import RegisterForm from './RegisterForm'

const HomePage = () => {
    return (
        <div>
            <Navbar/>
        
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
            
                <div className="row g-3">
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
  <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
  <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
  <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
