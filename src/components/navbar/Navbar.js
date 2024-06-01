import React, { useEffect, useState} from "react";
import "./navbar.css";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import useDirection from '../../UseDirection';
import { useAnimation, motion } from "framer-motion";

export const Navbar = () => {


  
  const [scrolled, setScrolled] = useState(false);


  useDirection();
  const { t, i18n } = useTranslation();

  const controls = useAnimation();
  const scopeRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (scopeRef.current) {
      observer.observe(scopeRef.current);
    }

    return () => {
      if (scopeRef.current) {
        observer.unobserve(scopeRef.current);
      }
    };
  }, [controls]);

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    const windowHeight = window.innerHeight;
    if (offset > windowHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
<nav className={`navbar container navbar-expand-lg fixed-top ${navbarClasses.join(' ')} `}>
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          <img className="nav-img" src={require("../../assets/images/Transparent logo-01-01 (1).png")} alt="logo" width={150}/>
        </a>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <motion.ul
              className="navbar-nav justify-content-center flex-grow-1 pe-3"
              ref={scopeRef}
              initial="hidden"
              animate={controls}
              variants={animationVariants}
            >
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  {t('home')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  {t('services.title')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  {t('about_us')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/jobs">
                  {t('careers')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact_us">
                  {t('call_us')}
                </a>
              </li>
              <li className="nav-item">
                {i18n.language === 'ar' && (
                  <a className="nav-link" href="#" onClick={() => { i18n.changeLanguage('en'); }}>
                    English
                  </a>
                )}
              </li>
              <li className="nav-item">
                {i18n.language === 'en' && (
                  <a className="nav-link" href="#" onClick={() => { i18n.changeLanguage('ar'); }}>
                    العربية
                  </a>
                )}
              </li>
            </motion.ul>
          </div>
        </div>
        <div>
          <a className="login-btn mx-2" href="#">
            {t('login')}
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
