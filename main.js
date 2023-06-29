const experience = document.querySelector('.experience');
const chevron_bas = document.querySelector('.chevron_bas');


experience.style.display = "none";
chevron_bas.addEventListener('click' , ()=>{
    if(experience.style.display === "none"){
        experience.style.display = "Block";
        experience.style.border = "2px solid #387773"
        chevron_bas.src="./img/icons8-chevron-haut-48.png";
    }else{
        experience.style.display = "none";
        chevron_bas.src = "./img/icons8-chevron-bas-48.png"

    }
})

const projet = document.querySelector('.projet');
const chevron_bas1 = document.querySelector('.chevron_bas1');

projet.style.display = "none";
chevron_bas1.addEventListener('click' , ()=>{
    if(projet.style.display === "none"){
        projet.style.display = "Block";
        projet.style.border = " 2px solid #387773"
        chevron_bas1.src="./img/icons8-chevron-haut-48.png";
    }else{
        projet.style.display = "none";
        chevron_bas1.src = "./img/icons8-chevron-bas-48.png"

    }
})


const btn_projet = document.querySelector(".btn_projet")
const btn_exper = document.querySelector('.btn_exper');
const title_comp = document.querySelector('.title_comp');
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        title_comp.classList.toggle("h1_title", entry.isIntersecting);
        btn_exper.classList.toggle("ex_button", entry.isIntersecting);
        btn_projet.classList.toggle("pro_button", entry.isIntersecting);
});
    }); 
cards.forEach(card => {
    observer.observe(card);
});
