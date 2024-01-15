import React from "react";
import { Carousel} from 'react-bootstrap';

const Cardstr = () => {
    return (
<>
<div class="container">
    <Carousel data-bs-theme="dark">

        <Carousel.Item>
            <img className="d-block w-100" src="./images/deco1.jpg" alt="First slide" />
            <Carousel.Caption>
            <h5 style={{ color: 'white' }}>SALON AMPIRE</h5>
            <p style={{ color: 'white' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block w-100" src="./images/deco2.jpg" alt="Second slide" />
            <Carousel.Caption>
            <h5 style={{ color: 'white' }}>SALON NIRVANA</h5>
            <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100" src="./images/deco3.jpg" alt="Third slide" />
            <Carousel.Caption>
            <h5 style={{ color: 'white' }}>SALON CONTESSA</h5>
            <p style={{ color: 'white' }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
    </Carousel.Item>

</Carousel>
</div>

</>
    );
}

export default Cardstr;