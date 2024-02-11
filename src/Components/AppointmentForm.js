import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import logoImg from "../Assets/logo.png";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "الاسم مطلوب";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "يجب أن يكون الإسم 8 أحرف على الأقل";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "رقم الهاتف المحمول مطلوب";
    } else if (patientNumber.trim().length !== 11) {
      errors.patientNumber = "يجب أن يكون رقم الهاتف مكون من 11 أرقام";
    }

    if (patientGender === "default") {
      errors.patientGender = "رجاءا حدد الجنس";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "وقت الحجز مطلوب";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "يرجى اختيار وقت أكبر من الوقت الحالي";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "يرجى اختيار طريقة الحجز";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("تم تحديد الموعد!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <a className="logo" href="/Health-Plus">
          <img src={logoImg} alt="be perfect" />
        </a>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>احجز موعدًا عبر الإنترنت</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            الاسم الكامل :
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>

          <br />
          <label>
            رقم هاتف :
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <br />
          <label>
            نوع الجنس:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">اختر</option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
              <option value="private">سأخبر الطبيب فقط</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>

          <br />
          <label>
            وقت الموعد المفضل:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && (
              <p className="error-message">{formErrors.appointmentTime}</p>
            )}
          </label>

          <br />
          <label>
            طريقة الاتصال:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">اختر</option>
              <option value="voice">مكالمة صوتية</option>
              <option value="video">مكالمة فيديو</option>
            </select>
            {formErrors.preferredMode && (
              <p className="error-message">{formErrors.preferredMode}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            تأكيد الموعد
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            تم إرسال تفاصيل الموعد إلى رقم هاتف المريض عبر الرسائل القصيرة.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2024 BE PERFECT جميع الحقوق محفوظة</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
