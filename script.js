// =========================
// SIAPDULUR
// =========================

// Animasi muncul saat scroll
const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
'.feature, .service-card, .info-card'
).forEach((el)=>{
    observer.observe(el);
});


// Smooth navbar active
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item=>{
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// Running text otomatis
const runningText = document.querySelector('.running-text');

if(runningText){

    const text = runningText.innerHTML;

    runningText.innerHTML =
    text + " • " + text + " • " + text;

}


// Header shadow saat scroll
window.addEventListener("scroll", ()=>{

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.05)";
    }

});
