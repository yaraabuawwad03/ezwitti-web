/**
 * EZWITTI (عزوتي) — Volunteer Form Controller
 * Working frontend form validation without simulating fake backend success.
 */

document.addEventListener("DOMContentLoaded", () => {
  const volunteerForm = document.getElementById("volunteerForm");
  const formFeedback = document.getElementById("formFeedback");
  const dateInput = document.getElementById("prefDate");

  // Set minimum date to today
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  if (volunteerForm) {
    volunteerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const contact = document.getElementById("contactInfo").value.trim();
      const gender = document.querySelector('input[name="gender"]:checked');
      const prefDate = document.getElementById("prefDate").value;
      const prefTime = document.getElementById("prefTime").value.trim();

      const isArabic = document.documentElement.getAttribute("dir") === "rtl";

      // Validation
      if (!fullName) {
        showFeedback(isArabic ? "يرجى إدخال الاسم الكامل." : "Please enter your full name.", "error");
        return;
      }

      if (!contact) {
        showFeedback(isArabic ? "يرجى إدخال البريد الإلكتروني أو رقم الهاتف." : "Please enter your email or phone number.", "error");
        return;
      }

      if (!gender) {
        showFeedback(isArabic ? "يرجى تحديد الجنس." : "Please select your gender.", "error");
        return;
      }

      if (!prefDate) {
        showFeedback(isArabic ? "يرجى اختيار التاريخ المفضل للتطوع." : "Please choose your preferred date.", "error");
        return;
      }

      if (!prefTime) {
        showFeedback(isArabic ? "يرجى إدخال الوقت المفضل." : "Please enter your preferred time.", "error");
        return;
      }

      // Valid frontend submission
      // Requirement: Do not simulate successful transmission to a server without a real backend.
      const statusTitle = isArabic ? "تم التحقق من بيانات النموذج بنجاح" : "Form validated successfully";
      const statusNotice = isArabic 
        ? "ملاحظة هامة: هذا نموذج واجهة أمامية (Frontend). لم يتم إرسال البيانات إلى خادم حقيقي لعدم ربط Backend بعد. تبقى جميع طلبات التطوع الفعلية قيد الانتظار حتى مراجعتها واعتمادها من قبل فريق تنسيق عزوتي."
        : "Important Notice: This is a frontend interface. Data has not been transmitted to a live server as no backend is connected yet. Actual volunteering requests remain pending until confirmed directly with Ezwitti's coordination team.";

      formFeedback.className = "form-feedback pending";
      formFeedback.innerHTML = `
        <div style="margin-bottom: 8px; font-weight: 600; font-size: 1.05rem;">
          ${statusTitle}
        </div>
        <p style="margin-bottom: 12px; font-size: 0.95rem; line-height: 1.6;">
          ${statusNotice}
        </p>
        <div style="background: rgba(255,255,255,0.7); padding: 12px 16px; border-radius: 4px; font-size: 0.9rem; text-align: start;">
          <strong>${isArabic ? "البيانات المدخلة:" : "Submitted details:"}</strong><br>
          ${isArabic ? "الاسم:" : "Name:"} ${escapeHtml(fullName)}<br>
          ${isArabic ? "وسيلة الاتصال:" : "Contact:"} ${escapeHtml(contact)}<br>
          ${isArabic ? "الجنس:" : "Gender:"} ${gender.value === 'male' ? (isArabic ? 'ذكر' : 'Male') : (isArabic ? 'أنثى' : 'Female')}<br>
          ${isArabic ? "التاريخ المفضل:" : "Preferred Date:"} ${prefDate}<br>
          ${isArabic ? "الوقت المفضل:" : "Preferred Time:"} ${escapeHtml(prefTime)}
        </div>
      `;
      formFeedback.style.display = "block";
      formFeedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  function showFeedback(msg, type) {
    if (!formFeedback) return;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.textContent = msg;
    formFeedback.style.display = "block";
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
});
