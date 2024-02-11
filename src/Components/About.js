import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="مجموعة الأطباء" className="about-image1" />
      </div>

      <div className="about-text-content  font-section">
        <h3 className="about-title font-section">
          <span>من نحن</span>
        </h3>
        <p className="about-description  font-section">
          مرحبًا بك في Be Perfect مع دكتور محمد دنيا، شريكك الموثوق للرعاية الصحية المتاحة والشخصية. يقدم أطباؤنا الخبراء استشارات عبر الإنترنت وخدمات متخصصة، مع التركيز على صحتك. انضم إلينا في هذه الرحلة نحو صحة أفضل لك.
        </p>

        <h4 className="about-text-title  font-section">حلولك</h4>

        <SolutionStep
          title="اختر متخصصًا"
          description="ابحث عن متخصصك المثالي واحجز بسهولة في Be Perfect مع دكتور محمد دنيا. يولي الأطباء الخبراء اهتمامًا خاصًا بصحتك، ويقدمون الرعاية المخصصة."
        />

        <SolutionStep
          title="حدد موعدًا"
          description="اختر التاريخ والوقت الذي يناسبك، ودع فريقنا المخصص من المهنيين الطبيين يضمن رفاهيتك برعاية شخصية."
        />

        <SolutionStep
          title="احصل على حلولك"
          description="أطباؤنا ومتخصصونا ذوو الخبرة هنا لتقديم النصائح الخبيرة وخطط العلاج المخصصة، لمساعدتك في تحقيق أفضل صحة ممكنة."
        />
      </div>
    </div>
  );
}

export default About;
