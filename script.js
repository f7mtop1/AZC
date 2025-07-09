document.addEventListener('DOMContentLoaded', function() {
    // الحصول على زر القائمة (Toggle Button) من HTML باستخدام الـ ID الخاص به
    const menuToggle = document.getElementById('menuToggle');

    // الحصول على الشريط الجانبي (Sidebar) من HTML باستخدام الـ ID الخاص به
    const sidebar = document.getElementById('sidebar');

    // الحصول على عنصر الـ body (لإضافة كلاس يساعد في تحريك المحتوى)
    const body = document.body;

    // التحقق للتأكد من أن العناصر موجودة في الصفحة قبل محاولة التعامل معها
    if (menuToggle && sidebar) {
        // إضافة مستمع لحدث "الضغط" على زر القائمة
        menuToggle.addEventListener('click', function() {
            // تبديل الكلاس 'active' على الشريط الجانبي.
            // إذا كان الكلاس موجوداً، يتم إزالته (وتختفي القائمة).
            // إذا لم يكن موجوداً، يتم إضافته (وتظهر القائمة).
            sidebar.classList.toggle('active');

            // تبديل الكلاس 'sidebar-open' على عنصر الـ body.
            // هذا الكلاس يستخدم في CSS لتحريك المحتوى الرئيسي
            // عندما تكون القائمة مفتوحة.
            body.classList.toggle('sidebar-open');
        });
    }
});