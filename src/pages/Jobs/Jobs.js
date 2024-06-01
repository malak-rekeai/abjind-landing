import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useDirection from "../../UseDirection";
import "./jobs.css";

export const Jobs = () => {
  useDirection();
  const { t, i18n } = useTranslation();

  return (
    <>
    
    <div className="join">
        <h1 className="join-title">Join Us</h1>
    </div>
    <div className="container careers" id="careers" >
            <div className="row" >
                <div className="col-md-6 careers-image" >
                    <h1>{t("careers_page.title", "Default Title")}</h1>
                    <p>{t("careers_page.intro", "Default introduction text if translation is missing.")}</p>
                    <img src={require("../../assets/images/careers.avif")} alt="Careers" className="img-fluid" />
                </div>
                <div className="col-md-6 careers-content" >
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">{t("careers_page.form.name")}</label>
                            <input type="text" className="form-control" id="name" placeholder=" " />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t("careers_page.form.email")}</label>
                            <input type="email" className="form-control" id="email" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">{t("careers_page.form.phone_number")}</label>
                            <input type="tel" className="form-control" id="phone" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">{t("careers_page.form.position")}</label>
                            <input type="text" className="form-control" id="location" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="experience">{t("careers_page.form.experiences")}</label>
                            <textarea className="form-control" id="experience" rows="3" placeholder=""></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">إرسال</button>
                    </form>
                </div>
            </div>
        </div>

        
        </>

  );
};
