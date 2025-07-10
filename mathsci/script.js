let currentLanguage = 'th'; // เริ่มต้นที่ภาษาไทย

// ฟังก์ชันสำหรับเปลี่ยนภาษา
function switchLanguage() {
    if (currentLanguage === 'th') {
        currentLanguage = 'en'; // เปลี่ยนเป็นภาษาอังกฤษ
        document.getElementById('languageButton').textContent = 'Switch to Thai'; // เปลี่ยนป้ายบนปุ่ม
        setEnglishText();
    } else {
        currentLanguage = 'th'; // เปลี่ยนกลับเป็นภาษาไทย
        document.getElementById('languageButton').textContent = 'Switch to English'; // เปลี่ยนป้ายบนปุ่ม
        setThaiText();
    }
}

// ฟังก์ชันที่เปลี่ยนข้อความทั้งหมดให้เป็นภาษาอังกฤษ
function setEnglishText() {
    document.getElementById('title').textContent = 'MathSci Mastermind';
    document.getElementById('intro').textContent = 'Learn mathematics and science with AI';
    document.getElementById('homeText').textContent = 'Welcome to MathSci Mastermind!';
    document.getElementById('homeIntro').textContent = 'Learn mathematics and science through AI';
    document.getElementById('mathHeader').textContent = 'Mathematics';
    document.getElementById('scienceHeader').textContent = 'Science';
    document.getElementById('aboutHeader').textContent = 'About the Team';
    document.getElementById('aboutText').textContent = 'Created by the MathSci Mastermind development team';
    document.getElementById('footerText').textContent = 'MathSci Mastermind Development Team';
    document.getElementById('mathButton').textContent = 'Start Analyzing Mathematical Problems';
    document.getElementById('scienceButton').textContent = 'Start Analyzing Scientific Problems';
}

// ฟังก์ชันที่เปลี่ยนข้อความทั้งหมดให้เป็นภาษาไทย
function setThaiText() {
    document.getElementById('title').textContent = 'MathSci Mastermind';
    document.getElementById('intro').textContent = 'เรียนรู้คณิตศาสตร์และวิทยาศาสตร์ด้วย AI';
    document.getElementById('homeText').textContent = 'MathSci Mastermind';
    document.getElementById('homeIntro').textContent = 'เรียนรู้คณิตศาสตร์และวิทยาศาสตร์ผ่าน AI';
    document.getElementById('mathHeader').textContent = 'คณิตศาสตร์';
    document.getElementById('scienceHeader').textContent = 'วิทยาศาสตร์';
    document.getElementById('aboutHeader').textContent = 'คณะผู้จัดทำ';
    document.getElementById('aboutText').textContent = 'สร้างโดยทีมพัฒนา MathSci Mastermind';
    document.getElementById('footerText').textContent = 'กลุ่มสาระการเรียนรู้คณิตศาสตร์ โรงเรียนท่าตะโกพิทยาคม';
    document.getElementById('mathButton').textContent = 'เริ่มวิเคราะห์ปัญหาทางคณิตศาสตร์';
    document.getElementById('scienceButton').textContent = 'เริ่มวิเคราะห์ปัญหาทางวิทยาศาสตร์';
}