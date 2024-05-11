import React from 'react';
import './invitecard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import vid1 from "./Assets/Video.webm"
import img1 from "../src/Assets/noun-time-6768567.png";
import img2 from "../src/Assets/noun-chruch-5505991.png";
import img3 from "../src/Assets/noun-date-4017641.png";
import img4 from "../src/Assets/noun-hall-gate-3862038.png";
import sid1 from "../src/Assets/slider-1.png";
import sid2 from "../src/Assets/slider-2.png";
import sid3 from "../src/Assets/slider-3.png";
import sid4 from "../src/Assets/silder-4.png";
import sid5 from "../src/Assets/slider-5.png";
import sid6 from "../src/Assets/slider-6.png";
import des1 from "./Assets/des-3.png"
import savethedate from "../src/Assets/save the date.png"
import logo from "./Assets/logo/Logo.png"

const InvitationCard = () => {



    useEffect(() => {
        AOS.init();
    }, []);
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    const openMap = (url) => {
        window.open(url, '_blank');
    };

    const images = [

        <img src={sid1} alt="Image 5" key={0} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />, // Adjust the borderRadius value as needed
        <img src={sid2} alt="Image 6" key={1} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />,
        <img src={sid3} alt="Image 7" key={2} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />,
        <img src={sid4} alt="Image 8" key={3} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />,
        <img src={sid5} alt="Image 7" key={4} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />,
        <img src={sid6} alt="Image 8" key={5} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />

    ];

    return (
        <div className="card-container">
            <div className="banner" />

            <div className="image-slider">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            {image}
                        </div>
                    ))}
                </Slider>
            </div>



            {/* Save the Date Video Section */}
            <div className="video-section" >
                <h3 className='tit-1'>The best thing to hold onto in life is each other</h3>
            </div>

            {/* <videooo? */}
            <video width="100%" controls data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <source src={vid1} type="video/mp4" />

                Your browser does not support the video tag.
            </video>

            <div>
                <img src={des1} />
            </div>
            {/* Event Details Section */}
            <div className="event-details">
                <h4 className="event-heading">Event Info</h4>
                <div className="event-info">
                    {/* Event date */}
                    <div className="event-info-item" data-aos="zoom-in-up" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img3} alt="Event Date" />
                        <p className="event-date">May 19, 2024</p>
                    </div>
                    {/* Event time */}
                    <div className="event-info-item" data-aos="zoom-in-up" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img1} alt="Event Time" />
                        <p className="event-time">11:00 AM to 3:00 PM</p>
                    </div>
                    {/* Event location - Church */}
                    <div className="event-info-item" data-aos="zoom-in-up" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img2} alt="Church" />
                        <p className="event-location">ST. James Church </p>
                        <button onClick={() => openMap('https://maps.app.goo.gl/dUKmHJVwtgQxd9tW8')} > {/* Set the duration to 2000 milliseconds (2 seconds) */}
                            Location
                        </button>
                    </div>
                    {/* Event location - Hall */}
                    <div className="event-info-item" data-aos="zoom-in-up" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img4} alt="Hall" />
                        <p className="event-location">Fathima Sultan Auditorium</p>
                        <button onClick={() => openMap('https://maps.app.goo.gl/EM5Uy2bE2fHAALs78')} > {/* Set the duration to 2000 milliseconds (2 seconds) */}
                            Location
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <img src={savethedate} alt="Save the Date" className="save-the-date-image" />

            </div>
            <footer>
              
                    <div class="footer-logo">
                        <img src={logo} alt="Logo" class="logo-image" />
                    </div>

            </footer>


        </div>

    );
};

export default InvitationCard;
