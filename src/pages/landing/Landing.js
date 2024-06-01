import React, { useState, useEffect } from "react";
import "./landing.css";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useDirection from "../../UseDirection";
import { MDBIcon } from "mdb-react-ui-kit";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tab, Nav, Row, Col, Container } from "react-bootstrap";
import videoblog from "../../assets/videoBg.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MapSection from "../../components/map/Map";
export const Landing = () => {
  useDirection();
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="hero-section">
        <div className="video-container">
          <video
            src={videoblog}
            className="video-background"
            autoPlay
            loop
            muted
          />
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{t("home_page.video_caption")}</h1>
              <p className="hero-subtitle">
                {t("home_page.video_subcaption")}
                <br />
                {t("home_page.video_description")}
              </p>
            </div>
            <div className="video-link-container">
              <a href="#!" onClick={handleShow} className="video-link">
                <MDBIcon icon="play-circle" size="3x" className="video-icon" />
              </a>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/US8ePkxYI3E?si=O-WOm5_JLUpNolQJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="container-fluid about-us" id="about-us">
        <div className="about-heading">
          <h1 data-aos="zoom-in">
            {t("about_us")} <span>{t("us")}</span>
          </h1>
        </div>
        <div className="row">
          <div className="about-img col-md-5 col-12" data-aos="zoom-in-left">
            <img
              src={require("../../assets/images/indus.jpeg")}
              alt="Industry"
            />
          </div>
          <div
            className="about-content col-md-7 col-12"
            data-aos="zoom-in-right"
          >
            <p>{t("about_us_page.our_history.content")}</p>
            {/* <a href="about" className="btn">
              Discover More
            </a> */}
            <div className="row">
              <div className="col-12">
                <Container className="custom-tabs" data-aos="zoom-in">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          {t("about_us_page.vision_and_mission.vision.title")}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          {t("about_us_page.vision_and_mission.mission.title")}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          {" "}
                          {t("about_us_page.vision_and_mission.plan.title")}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <h2 className="pt-2">
                          {t("about_us_page.vision_and_mission.vision.title")}
                        </h2>
                        <p>
                          {t("about_us_page.vision_and_mission.vision.content")}
                        </p>
                        <ul>
                          {t("about_us_page.vision_and_mission.vision.list", {
                            returnObjects: true,
                          }).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h2 className="pt-2">
                          {" "}
                          {t("about_us_page.vision_and_mission.mission.title")}
                        </h2>
                        <p>
                          {t(
                            "about_us_page.vision_and_mission.mission.content"
                          )}
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h2 className="pt-2">
                          {" "}
                          {t("about_us_page.vision_and_mission.plan.title")}
                        </h2>
                        <p>
                          {t("about_us_page.vision_and_mission.plan.content")}
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" our_clients">
        <div className="clients-heading">
          <h1 className="text-center">{t("home_page.our_brands_and_partners.title")}</h1>
        </div>
        <div className="container clients">

          <div>
            <img src={require('../../assets/images/campan.jpeg')} alt="Clients" width={200} />
          </div>
          <div>
            <img src={require('../../assets/images/campan.jpeg')} alt="Clients" width={200} />
          </div>
          <div>
            <img src={require('../../assets/images/campan.jpeg')} alt="Clients" width={200} />
          </div>
        </div>
        </div>
        <div className="about-us-section">
      <div className="container">
        <h2 className="section-title">أرقام تتحدث عنَا</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 fact">
            <h3 className="fact-title">سعتنا الإنتاجية</h3>
            <p className="fact-content">أكثر من 70 ألف وجبة يوميا</p>
          </div>
          <div className="col-md-3 col-sm-6 fact">
            <h3 className="fact-title">خبرتنا</h3>
            <p className="fact-content">50 عامًا من الخبرة وأكثر</p>
          </div>
          <div className="col-md-3 col-sm-6 fact">
            <h3 className="fact-title">مساحة مطابخنا</h3>
            <p className="fact-content"> </p> {/* Add the kitchen space here */}
          </div>
          <div className="col-md-3 col-sm-6 fact">
            <h3 className="fact-title">أماكن تواجدنا</h3>
            <p className="fact-content">
              <ul>
                <li>الرياض</li>
                <li>جدة</li>
                <li>الدمام</li>
              </ul>
            </p>
          </div>
        </div>
        <MapSection /> 
      </div>
    </div>
      <div className="our-services">
        <div className="container">
          <div className="services-heading">
            <h1>{t("services.title")}</h1>
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="service" data-aos="zoom-in">
                <img
                  src={require("../../assets/images/quality.avif")}
                  alt="Quality"
                  className="img-fluid"
                />
                <h4>{t("services.Airline")}</h4>
                <p>{t("services.Airline_description")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service" data-aos="zoom-in">
                <img
                  src={require("../../assets/images/quality.avif")}
                  alt="Quality"
                  className="img-fluid"
                />
                <h4>{t("services.Event")}</h4>
                <p>{t("services.Event_description")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service" data-aos="zoom-in">
                <img
                  src={require("../../assets/images/quality.avif")}
                  alt="Quality"
                  className="img-fluid"
                />
                <h4>{t("services.Logistics")}</h4>
                <p>{t("services.Logistics_description")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service" data-aos="zoom-in">
                <img
                  src={require("../../assets/images/quality.avif")}
                  alt="Quality"
                  className="img-fluid"
                />
                <h4>{t("services.Food")}</h4>
                <p>{t("services.Food_description")}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="container career">
        <div>
          <h3>Careers</h3>
          <p>Want to be a part of our family?</p>
        </div>
        <a href="/jobs" className="">
          Apply Now{" "}
        </a>
      </div>

      <div className="container career">
        <div>
          <h3>Contact us</h3>
          <p>{t("contact_us_page.contact_form.intro")}</p>
        </div>
        <a href="/contact_us" className="">
          Contact Us{" "}
        </a>
      </div>
    </>
  );
};
