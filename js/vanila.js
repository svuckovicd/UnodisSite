// ============NAVBAR TOGGLE ==============
// select dom items 
const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar');
const navItems = document.querySelectorAll('.nav-bar li');
const btnLine = document.querySelectorAll('.btnline');
const body = document.body;

let showItems = false;

function navToggle() {
    console.log(this)
    if (!showItems) {

        menuBtn.classList.add('closed')
        navItems.forEach(item => item.classList.add('text'));
        navBar.classList.add('showed')
        btnLine.forEach(line => line.classList.add('closed'));
        body.classList.add('bg-img');
        showItems = true;
    } else {
        menuBtn.classList.remove('closed')
        navItems.forEach(item => item.classList.remove('text'));
        navBar.classList.remove('showed')
        btnLine.forEach(line => line.classList.remove('closed'));
        body.classList.remove('bg-img');
        showItems = false;

    }


}
menuBtn.addEventListener('click', navToggle);







// ======================== SCROLL ANIMATION ==================================



const nav = document.querySelector(".header-main"),
    main = document.querySelector('main'),
    secDel = document.querySelector('.delatnost'),
    projcShow = document.querySelector('.projects'),
    about = document.querySelector('.section-3'),
    partner = document.querySelector('.partner'),
    mainAbout = document.querySelector('.about');

//navigation
let navTop = nav.offsetTop + 10;

let mainTop = main.offsetTop - nav.clientHeight;

//del
let delTop = secDel.offsetTop - nav.clientHeight;

let procjTop = projcShow.offsetTop - nav.clientHeight;

let aboutTop = about.offsetTop - nav.clientHeight;
let partTop = partner.offsetTop - nav.clientHeight;

function stickyNav() {
    // ============ STICKY NAV ======   

    if (window.scrollY >= navTop) {
        nav.classList.add('fix-nav');

    } else {
        nav.classList.remove('fix-nav');

    }
    // ==========MAIN ANIMATION =================

    let cards = main.querySelectorAll('.cards .card');
    if (window.scrollY >= mainTop) {
        cards.forEach(card => card.classList.add('text'));
    }
    // =============== SECTION DELATNOST ===================
    let li = secDel.querySelectorAll('.text-holder li');
    if (window.scrollY >= delTop) {
        li.forEach(el => el.classList.add('text'));
    }
    //=========== SECTION PROJECT ======================
    if (window.scrollY >= procjTop) {

        projcShow.classList.add('actived');
    }
    // ================= ABOUT ME ==================
    if (window.scrollY >= aboutTop) {

        about.querySelector('article').classList.add('actived');
    }
    // ============= PARTNERI ==========
    if (window.scrollY >= partTop) {

        partner.classList.add('actived');
    }
    // ====== ABOUT TEAM H2 Width ==== 


}

window.addEventListener('scroll', stickyNav);
//=========================== FILTER PROJEKTI =============================

const filter = document.querySelectorAll('#filter li');
let cards = document.querySelectorAll('.projects-card .card');

filter.forEach(li => li.addEventListener('click', filterList));

function filterList(e) {
    filter.forEach(li => li.classList.remove('actived'))
    cards.forEach(card => {
        card.style.display = 'none';
        if (this.dataset.srb == card.dataset.srb) {

            card.style.display = 'block';
            this.classList.add('actived');

        }
        if (this.dataset.nig == card.dataset.nig) {
            card.style.display = 'block';
            this.classList.add('actived');



        }
        if (this.dataset.all == card.dataset.all) {

            card.style.display = 'block';
            this.classList.add('actived');
        }



    })

}

