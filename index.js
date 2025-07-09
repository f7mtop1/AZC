const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // يستخدم المنفذ الذي يحدده Replit تلقائياً أو 3000 كافتراضي

// هذا السطر مهم جداً!
// يجعل جميع الملفات الموجودة في المجلد الحالي (مثل ملفات HTML و CSS)
// متاحة للمتصفح كـ "ملفات ثابتة" يمكن الوصول إليها مباشرة عبر URL.
app.use(express.static(path.join(__dirname, '/')));

// تحديد المسار الرئيسي '/'
// عندما يفتح المستخدم رابط موقعك، سيتم إرسال ملف index.html له.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// يمكنك إضافة مسارات محددة للصفحات الأخرى هنا.
// بالرغم من أن `express.static` يتعامل مع تقديم هذه الملفات تلقائياً،
// فإن تحديدها صراحةً يمكن أن يكون مفيداً للتخصيص المستقبلي أو لتوضيح المسارات.
app.get('/iphone.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'iphone.html'));
});

app.get('/android.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'android.html'));
});

app.get('/asian.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'asian.html'));
});

// تشغيل الخادم والاستماع على المنفذ المحدد.
// عند تشغيل المشروع، ستظهر هذه الرسالة في نافذة الـ Console بـ Replit.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Open your Replit URL to see the website.');
});