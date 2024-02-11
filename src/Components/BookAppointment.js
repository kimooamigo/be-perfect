import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Dr.Mohammed Donia" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title font-section">
          <span>لماذا اختيار الصحة</span>
        </h3>
        <p className="ba-description font-section">
          اكتشف الأسباب التي تجعلك تختار Health Plus لاحتياجاتك الصحية. اختبر الرعاية الخبيرة والراحة والحلول المخصصة، مما يجعل صحتك أولويتنا الرئيسية. انضم إلينا في رحلة نحو صحة أفضل وحياة أسعد.
        </p>

        <p className="ba-checks ba-check-first font-section">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> أفضل الأطباء المحترفين
        </p>
        <p className="ba-checks font-section">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> الرعاية في حالات الطوارئ
        </p>
        <p className="ba-checks font-section">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> الدعم على مدار الساعة عبر الدردشة المباشرة
        </p>
        <p className="ba-checks ba-check-last font-section">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> التسجيل سهل وسريع
        </p>

        <button
          className="text-appointment-btn font-section"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> حجز موعد
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
