import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";
import logoImg from "../Assets/logo.png";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <a className="logo" href="/Health-Plus">
          <img src={logoImg} alt="be perfect" />
        </a>
      </h1>

      <div className="legal-text-content font-section">
        <p className="legal-title font-section">معلومات عامة</p>
        <p className="legal-description font-section">
          مرحبًا بك في Be Perfect، منصة الرعاية الصحية عبر الإنترنت الموثوق بها. مهمتنا هي توفير خدمات الرعاية الصحية المتاحة والمخصصة للأفراد الذين يبحثون عن النصائح الطبية الخبيرة والعلاج. من خلال استخدام منصتنا، فإنك توافق على الشروط المحددة في سياسة الخصوصية وشروط الخدمة لدينا.
        </p>

        <p className="legal-title font-section">سياسة الخصوصية</p>
        <p className="legal-description font-section">
          تعتبر خصوصيتك أمرًا بالغ الأهمية بالنسبة لنا. توضح سياسة الخصوصية لدينا كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية والطبية. نحن نضمن معالجة البيانات بشكل آمن، ويمكنك الوثوق بأن معلوماتك يتم التعامل معها بسرية تامة.
        </p>

        <p className="legal-title font-section">شروط الخدمة</p>
        <p className="legal-description font-section">
          عند استخدام Be Perfect، فإنك توافق على شروط الخدمة لدينا. ويشمل ذلك الإرشادات لاستخدام منصتنا، والتفاعل مع الأطباء، ومسؤوليات الطرفين. من الضروري فهم هذه الشروط لضمان تجربة سلسة لجميع المستخدمين.
        </p>

        <p className="legal-title font-section">الاستشارات</p>
        <p className="legal-description font-section">
          تربطك منصتنا بأطباء خبراء يقدمون استشارات طبية عبر الإنترنت. هذه الاستشارات ليست بديلاً عن الزيارات الطبية الشخصية ولكنها تعتبر خيارًا مريحًا للحصول على نصائح طبية ووصفات وتوجيهات. من الضروري تقديم معلومات دقيقة وكاملة لتلقي أفضل رعاية ممكنة.
        </p>

        <p className="legal-title font-section">كيفية العمل</p>
        <p className="legal-description font-section">
          تم تصميم Be Perfect لتبسيط الوصول إلى الرعاية الصحية. يمكنك اختيار متخصص، وجدولة موعد، والمشاركة في استشارة افتراضية. يقدم خبراؤنا نصائح مخصصة وخطط علاج تتناسب مع احتياجاتك. يرجى تذكر أن الحالات الطارئة تتطلب رعاية طبية فورية ويجب توجيهها إلى مرفقك الطبي المحلي.
        </p>
      </div>

      <div className="legal-footer font-section">
        <p>© 2024 BE PERFECT جميع الحقوق محفوظة</p>
      </div>
    </div>
  );
}

export default LegalDocs;
