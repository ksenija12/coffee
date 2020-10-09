// клик на кнопку



const btn = document.querySelectorAll(".vertical-accordeon__item-btn");
let selectPar='', selectText='';

btn.forEach(el => {
    el.addEventListener("mousedown", function(event){
        const target = event.currentTarget;
        target.classList.add("shadow");
    });
    el.addEventListener("mouseup", function(event){
        const target = event.currentTarget;
        if (target.classList.contains("shadow")) target.classList.remove("shadow")
    });
    el.addEventListener("click", function(event) {
        const target = event.currentTarget;
        if (target.classList.contains("vertical-accordeon__item-btn_menu")) {
            selectPar = ".vertical-accordeon__item-text";
            selectText = '.vertical-accordeon__item-descrip';
        } else {
            selectPar = ".vertical-accordeon__item";
            selectText = '.vertical-accordeon__item-text'
        }
        const parent = target.closest(selectPar);
        const text = parent.querySelectorAll(selectText);

        text.forEach(el => {
            el.classList.toggle("item_active");

            if (el.classList.contains("item_active")) {
                target.innerText = "-";
            } else {
                target.innerText = "+";
            };
        });
    
    });
    
});















const tittleClick = document.querySelector(".title");

tittleClick.addEventListener("click", function(event) {
    const target = event.currentTarget;
    const parent = target.closest(".container");
    parent.classList.toggle("pusk");

    const menu = document.querySelector(".vertical-accordeon");
    const btn = document.querySelectorAll(".vertical-accordeon__item-btn");
    if (parent.classList.contains("pusk")) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
        const close = document.querySelectorAll(".item_active")
        btn.forEach(el => {
            el.innerText = "+";
        });
        close.forEach(el => {
            el.classList.remove("item_active");
        });
    };
    
});

