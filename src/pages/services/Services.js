import React from "react";
import "./services.css";
import { useTranslation } from "react-i18next";
import useDirection from "../../UseDirection";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MDBIcon } from "mdb-react-ui-kit";

export const Services = () => {
 
    useDirection();
    const { t, i18n } = useTranslation();
    const serviceData = [
      {
        imgSrc: require("../../assets/images/quality.avif"),
        title: t("about_us_page.why_abul_jadayel.experience"),
        content: t("about_us_page.why_abul_jadayel.content_experience"),
      },
      {
        imgSrc: require("../../assets/images/quality.avif"),
        title: t("about_us_page.why_abul_jadayel.exceed_standards"),
        content: t("about_us_page.why_abul_jadayel.content_exceed_standards"),
      },
      {
        imgSrc: require("../../assets/images/quality.avif"),
        title: t("about_us_page.why_abul_jadayel.Innovating"),
        content: t("about_us_page.why_abul_jadayel.content_Innovating"),
      },
      {
        imgSrc: require("../../assets/images/quality.avif"),
        title: t("about_us_page.customized_services.title"),
        content: t("about_us_page.customized_services.content"),
      },
    ];
  return (
    <>
      <div className="services">
        <h1 className="service-title">Services</h1>
      </div>
      <div className="services-whyabj">
        <h1>{t("about_us_page.why_abul_jadayel.title")}</h1>
      </div>
      <div className="container-fluid">
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
          {serviceData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card">
                <div className="img-service">
                  <img src={service.imgSrc} alt="Service" className="img-fluid" />
                </div>
                <div className="content-service">
                  <h4>{service.title}</h4>
                  <p>{service.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container-fluid why-abj" id="why-abj">
        <div className="why-heading">
          <h1 > {t("about_us_page.why_abul_jadayel.title")}</h1>
        </div>
        <div className="container services">
        <div className="">
          <h1 className="">{t("services.title")}</h1>
        </div>
        <div className="cards-container">
          <div className="card">
            <MDBIcon icon="utensils" size="2x" className="icons mb-3" />
            <h4> {t("services.Airline")}</h4>
            <p>{t("services.Airline_description")}</p>
          </div>
          <div className="card">
            <MDBIcon icon="bread-slice" size="2x" className="icons mb-3" />
            <h4>{t("services.Event")}</h4>
            <p>{t("services.Event_description")}</p>
          </div>
          <div className="card">
            <MDBIcon icon="apple-alt" size="1x" className="icons mb-3" />
            <h4> {t("services.Logistics")}</h4>
            <p>{t("services.Logistics_description")}</p>
          </div>
        </div>
      </div>
        
        </div>
    </>
  );
};
