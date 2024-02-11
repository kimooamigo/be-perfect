import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section font-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>ما نقدمه</span>
        </h3>
        <p className="info-description">
          نقدم الرعاية الصحية إلى متناول يديك، ونقدم مجموعة شاملة من الخدمات الطبية حسب الطلب مصممة وفقًا لاحتياجاتك. تتيح لك منصتنا الاتصال بأطباء متخصصين عبر الإنترنت يقدمون النصائح الطبية الخبيرة، ويصدرون الوصفات الطبية عبر الإنترنت، ويقدمون التعبئة السريعة كلما احتجت إليها.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="رعاية الطوارئ"
          description="تم تصميم خدمة رعاية الطوارئ لدينا لتكون دعمك الموثوق في الحالات الحرجة. سواء كانت حالة مرضية مفاجئة أو إصابة أو أي قلق طبي يتطلب اهتمامًا فوريًا، فإن فريقنا من المتخصصين في مجال الرعاية الصحية متاحون على مدار الساعة لتقديم رعاية سريعة وفعالة."
          icon={faTruckMedical}
        />

        <InformationCard
          title="أمراض القلب"
          description="يستخدم فريقنا المؤلف من أطباء القلب والخبراء الطبيين ذوي الخبرة التكنولوجيا الحديثة لتقييم صحة القلب الخاصة بك وتصميم خطط علاجية شخصية. من الفحوصات الشاملة إلى التدخلات المتقدمة، نحن ملتزمون بمساعدتك على الحفاظ على قلب صحي وعيش حياة ممتعة."
          icon={faHeartPulse}
        />

        <InformationCard
          title="رعاية الأسنان"
          description="ابتسم بثقة مع خدمات رعاية الأسنان الخاصة بنا التي تلبي جميع احتياجات صحة الفم الخاصة بك. يقدم أطباؤنا الماهرين مجموعة واسعة من العلاجات، بدءًا من الفحوصات الروتينية والتنظيفات إلى الإجراءات التجميلية والعلاجات الترميمية."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
