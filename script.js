// ===== HERO TEXT ANIMATION =====
const texts = [
"🚚 Semua Kebutuhanmu Kami Antar",
"🛒 Belanja Tinggal Klik",
"📦 Titip Barang Jadi Mudah",
"⚡ Cepat • Aman • Terpercaya",
"📍 Ambulu & Sekitarnya"
];

let i = 0;
const animasi = document.createElement("div");
animasi.style.marginTop = "10px";
animasi.style.fontWeight = "600";
animasi.style.color = "#11c8a0";

document.querySelector(".hero-left").appendChild(animasi);

function changeText() {
animasi.style.opacity = 0;

setTimeout(() => {
animasi.innerText = texts[i];
animasi.style.opacity = 1;
i = (i + 1) % texts.length;
}, 300);
}

changeText();
setInterval(changeText, 2500);


// ===== SMOOTH SCROLL NAV =====
document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function(e) {
const targetId = this.getAttribute("href");

if(targetId.startsWith("#")) {
e.preventDefault();

const target = document.querySelector(targetId);

if(target) {
window.scrollTo({
top: target.offsetTop - 80,
behavior: "smooth"
});
}
}
});
});


// ===== SCROLL ANIMATION (FADE IN) =====
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}
});
}, {
threshold: 0.1
});

document.querySelectorAll(".feature, .service-card, .info-card").forEach(el => {
el.style.opacity = 0;
el.style.transform = "translateY(20px)";
el.style.transition = "0.6s ease";
observer.observe(el);
});


// ===== FLOAT WA BOUNCE EFFECT =====
const wa = document.querySelector(".floating-wa");

setInterval(() => {
wa.style.transform = "scale(1.1)";
setTimeout(() => {
wa.style.transform = "scale(1)";
}, 200);
}, 3000);
