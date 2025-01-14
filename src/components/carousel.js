import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/style.css';
import '../style/image.css';
import '../style/text.css';
import hospitalImage from '../assets/vector/1.png';
import dataImage from '../assets/vector/2.png';
import patientImage from '../assets/vector/3.png';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="center">
            <div className="image">
              <img src={hospitalImage} className='center'/>
            </div>
            <h3 className="carousel-h">Hospitality Management</h3>
            <p className="carousel-p">Manage your healthcare facilities with ease using our advanced hospital management system.
            Streamline your operations, improve patient care, and ensure optimal use of resources, all from a
            single platform designed for efficiency.</p>
        </div>
        <div>
            <div className="image">
              <img src={dataImage} className='center'/>
            </div>
            <h3 className="carousel-h">Keep Your Credentials</h3>
            <p className="carousel-p">Data security is crucial. Our platform ensures that all your sensitive patient information and
            healthcare data are protected with top-notch encryption. With a focus on security, we give you peace
            of mind, knowing that your information is safe at all times.</p>
        </div>
        <div className="carousel-h">
            <div className="image">
              <img src={patientImage} className='center'/>
            </div>
            <h3>Treat Patients as Valued Customers</h3>
            <p className="carousel-p">At the heart of every healthcare facility is patient care. Treat your patients like customers by
            providing exceptional service and a personalized experience. Our tools allow you to easily track and
            improve patient satisfaction, ensuring they always feel valued and cared for.</p>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
