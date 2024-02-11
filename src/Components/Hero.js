import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline font-section">❤️ BE PERFECT</p>
          <h2 className="text-title font-section">
            ثقة عملائنا هي دائما هدفنا إحجز الأن عبر الإنترنت وتمتع بخدماتنا.
          </h2>
          <p className="text-descritpion  font-section">
            تحدث إلينا الأن عبر الإنترنت واحصل على المشورة الطبية والوصفات الطبية عبر الإنترنت،
            الغيارات والملاحظات الطبية في غضون دقائق. الرعاية الصحية عند الطلب
            الخدمات في متناول الجميع.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> إحجز الأن
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>14k+</p>
              <p>استقبال عملاء</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>دكاترة خبراء</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>سنين من الخبرة</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
