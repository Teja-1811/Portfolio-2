show = () => {
    let hide = document.querySelector("#hide");
    let show = document.querySelector("#show");
    hide.classList.toggle("d-none")
    show.classList.toggle("d-none");

}

greeting = () => {
    const greet = document.querySelector("#greeting");
    const time = new Date();

    if (time.getHours() < 12) {
        greet.innerHTML = "Good Morning!";
    } else if (time.getHours() < 16) {
        greet.innerHTML = "Good Afternoon!";
    } else if (time.getHours() < 22) {
        greet.innerHTML = "Good Evening!";
    } else {
        greet.innerHTML = "Good Night!";
    }
}

check = () => {
    const cd = document.querySelector("#check");
    const icon1 = document.querySelector("#icon-1");
    const icon2 = document.querySelector("#icon-2");
    const greet = document.querySelector(".greeting");
    const menu = document.querySelector(".nav-btn");
    const about = document.querySelector(".about");
    const edu = document.querySelector(".education");
    const work = document.querySelector(".work");
    const project = document.querySelector(".project");
    const contact = document.querySelector(".contact");
    let contents = [about, edu, work, project, contact];
    for (let i = 0; i < contents.length; i++) {
        j = contents[i];
        j.classList.toggle("bg-light");
    }
    menu.classList.toggle("text-light");

    if (cd.checked == false) {
        cd.checked = true;
        icon1.style = "display: none";
        icon2.style = "color: #222430";
        icon2.style = "display: block";
        greet.style = "background-color: #222430; color: #f7f7f7";
        for (let i = 0; i < contents.length; i++) {
            j = contents[i];
            j.classList.add("bg-dark");
        }
    } else {
        cd.checked = false;
        icon1.style = "display: block; color: #f7f7f7";
        icon2.style = "display: none";
        greet.style = "background-color: #f7f7f7; color: #222430";
        for (let i = 0; i < contents.length; i++) {
            j = contents[i];
            j.classList.remove("bg-dark");
        }
    }
}

navbar = () => {
    const navbar = document.querySelector(".navbar");
    const list = document.querySelector("#list");
    const close = document.querySelector("#close");
    navbar.classList.toggle("d-block")
    list.classList.toggle("d-none");
    close.classList.toggle("d-none");
}