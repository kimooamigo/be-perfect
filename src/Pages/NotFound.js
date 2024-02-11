import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const deployedURL = window.location.href;
  const location = useLocation();

  return (
    <div>
      <h1>الصفحة غير موجودة</h1>
      <p>العنوان الذي تم طلبه {deployedURL} غير موجود على هذا الخادم.</p>
      <p>العنوان الذي تم طلبه {location.pathname} غير موجود على هذا الخادم.</p>
    </div>
  );
}

export default NotFound;
