// ===========================
// ملف JS كامل للفيديوهات
// ===========================

// قائمة الفيديوهات (كمثال 5 فيديوهات، ممكن تضيف 100 فيديو بنفس النمط)
const videoLibrary = [
    {
        id: 1,
        title: "Stepson fulfills his fantasy after the hotel makes a mistake and he shares a bed with his stepmother",
        desc: "تريند stepmom رقم 1 في 2025 - ملايين المشاهدات",
        url: "https://www.pornhub.com/embed/6924cbb6475f0",
        tags: "stepmom | milf | hotel | fantasy",
        thumb: "https://via.placeholder.com/400x300?text=Hotel+Stepmom+Fantasy"
    },
    {
        id: 2,
        title: "piano teacher's passion towards the japanese student ended in huge cumshot",
        desc: "تريند teacher/student ساخن",
        url: "https://www.pornhub.com/embed/692ce2faf27ff",
        tags: "teacher | student | japanese | cumshot",
        thumb: "https://via.placeholder.com/400x300?text=Piano+Teacher+Cumshot"
    },
    {
        id: 3,
        title: "Big-bootied MILF stepmother rides her stepson's cock in the bathtub",
        desc: "Big ass milf trending 2025",
        url: "https://www.pornhub.com/embed/69436879494a1",
        tags: "milf | big ass | bathtub",
        thumb: "https://via.placeholder.com/400x300?text=Big+Ass+Bathtub+Ride"
    },
    {
        id: 4,
        title: "Hottest couple in 2025 on PORNHUB. Amazing SEX",
        desc: "أحلى couple في 2025",
        url: "https://www.pornhub.com/embed/67b4b124517f9",
        tags: "couple | amateur | hot",
        thumb: "https://via.placeholder.com/400x300?text=Hottest+Couple+2025"
    },
    {
        id: 5,
        title: "Busty Big Step Sister Teaches New Lessons ~ Household Fantasy ~ Scott Stark",
        desc: "Busty stepsister fantasy",
        url: "https://www.pornhub.com/embed/694835b029c34",
        tags: "busty | stepsister | big tits",
        thumb: "https://via.placeholder.com/400x300?text=Busty+Stepsister+Lessons"
    }
];

// ===========================
// عرض الشبكة
// ===========================
function renderGrid() {
    const grid = document.getElementById('videoGrid');
    grid.innerHTML = '';

    videoLibrary.forEach(video => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${video.thumb}" alt="${video.title}">
            <div class="info">
                <h3>${video.title}</h3>
                <span>${video.tags}</span>
            </div>
        `;
        card.addEventListener('click', () => playVideo(video.id));
        grid.appendChild(card);
    });
}

// ===========================
// تشغيل الفيديو
// ===========================
function playVideo(id) {
    const video = videoLibrary.find(v => v.id === id);
    if (!video) return;

    document.getElementById('homePage').style.display = 'none';
    const player = document.getElementById('player');
    player.style.display = 'block';

    document.getElementById('videoFrame').src = video.url;
    document.getElementById('videoTitle').textContent = video.title;
    document.getElementById('videoDesc').textContent = video.desc;
    document.getElementById('videoTags').textContent = video.tags;

    renderRecs(id);
}

// ===========================
// عرض المقترحات
// ===========================
function renderRecs(currentId) {
    const recList = document.getElementById('recList');
    recList.innerHTML = '';

    videoLibrary
        .filter(v => v.id !== currentId)
        .slice(0, 4) // عرض 4 مقترحات
        .forEach(video => {
            const item = document.createElement('div');
            item.className = 'rec-item';
            item.innerHTML = `
                <img src="${video.thumb}" alt="${video.title}">
                <div>
                    <h4>${video.title}</h4>
                    <span>${video.tags}</span>
                </div>
            `;
            item.addEventListener('click', () => playVideo(video.id));
            recList.appendChild(item);
        });
}

// ===========================
// الرجوع للصفحة الرئيسية
// ===========================
function goHome() {
    document.getElementById('player').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('videoFrame').src = '';
}

// ===========================
// تشغيل العرض عند تحميل الصفحة
// ===========================
document.addEventListener('DOMContentLoaded', renderGrid);