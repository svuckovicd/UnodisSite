

const infoProjct = [
    {

        imeObj: 'Milenium Plaza Centar Area Abuja',
        investitor: 'Princ Abubakar Audu',
        vrstaradova: 'Izrada aluminijske i staklene fasade',
        godina: '2014',
        img: [
            'img/work/centar/b.jpg'
        ]

    },
    {

        imeObj: 'Serob Legacy Hotel',
        investitor: 'Serob Legacy',
        vrstaradova: 'Projektovanje i izgradnja',
        godina: '2013/14',
        img: [
            'img/work/hotel/a.jpg',
            'img/work/hotel/b.png',
            'img/work/hotel/c.jpg',
        ]
    },
    {

        imeObj: 'Stambeno naselje Manhatan Abuja ',
        investitor: 'Adron',
        vrstaradova: 'Projektovanje i izgrandja',
        godina: '2016/19',
        img: [
            'img/work/ad/a.jpg',
            'img/work/ad/b.jpg',
            'img/work/ad/c.jpg',
            'img/work/ad/d.jpg'



        ]
    },
    {

        imeObj: 'Fabrika pirinca Imota',
        investitor: 'Gouvrement Lagos',
        vrstaradova: 'Izgrandja/ Radovi u toku',
        godina: '2018/19',
        img: [
            'img/work/rice/a.jpg',
            'img/work/rice/b.png'

        ]
    },
    {

        imeObj: 'Euro Dom',
        investitor: 'Euro Dom',
        vrstaradova: 'Projektovanje i izgradnja',
        godina: '2008',
        img: [
            'img/work/project-2/projc-1.jpg'
        ]
    },
    {

        imeObj: 'Rezidencija',
        investitor: 'Davidovic Nenad',
        vrstaradova: 'Projektovanje i izgradnja',
        godina: '2005',
        img: [
            'img/work/project-2/projc-2.jpg'


        ]

    },
    {

        imeObj: 'Bakana Restoran Pancevo',
        investitor: 'Bakana Petar',
        vrstaradova: 'Projektovanje i izgradnja rustika',
        godina: '2008',
        img: [

            'img/work/fontana/a.jpg',
            'img/work/fontana/b.jpg',
            'img/work/fontana/c.jpg',
            'img/work/fontana/d.jpg'
        ]
    },
    {
        imeObj: 'Salon i Servis',
        investitor: 'Mica Volkswagen',
        vrstaradova: 'Projektovanje i izvodjenje radova',
        godina: '2005/6',
        img: [

            'img/work/project-2/projc-3.jpg'

        ]
    }




]


const projc = document.querySelector('.projects');
const clickInfo = document.querySelectorAll('.projects .text-hover a');
const hrefA = document.querySelectorAll('.projects-card .text-hover a');


clickInfo.forEach(viemInfo => viemInfo.addEventListener('click', infoClick));
function infoClick(e) {
    e.preventDefault()
    let x = e.target.dataset.num;




    let bd = document.querySelector('body')
    bd.innerHTML = `
    <header class="main-header">
    <div class="header-main">
        <div class="logo">
            <div class="img">
            <a href="index.html">
            <img src="img/logo/logo.svg" alt="">
        </a>
            </div>
            <div class="logo-text">
                <span>UNODIS</span> <span> SISTEM</span>
            </div>
        </div>
  

    </div>
    <div class=" banner">
        <div class="layout">
            <h1 class="lg-heading">${infoProjct[x - 1].imeObj}</h1>
            <span><a href="index.html">Početna</a>/ <a href="project.html">Projekti</a> <a href="project.html">/${infoProjct[x - 1].imeObj}</a></span>

        </div>
        <div class="img">
            <img src="img/logo/logo.svg" alt="">
        
        </div>

    </div>
    </header>
    <main class="home" id='projcs'>
        <div class="left-side">
         <div class='img' style='display:grid'>
         </div>
        
        </div>

        
        <div class="right-side">
        <h4>IME OBJEKTA</h4>
        <p>${infoProjct[x - 1].imeObj} </p>
        <h4 class="lg-heading">Ime projekta </h4>
        <p>${infoProjct[x - 1].investitor} </p>
        <h4 class="lg-heading">Vrsta radova </h4>
        <p>${infoProjct[x - 1].vrstaradova} </p>
        <h4 class="lg-heading">Godina </h4>

        <p>${infoProjct[x - 1].godina} </p>
           
    </main>
   


        `
    let div = bd.querySelector('main');


    for (let i of infoProjct[x - 1].img) {
        let img = document.createElement('IMG');
        img.setAttribute('src', i);
        div.querySelector('.left-side .img').appendChild(img);
    }

    window.addEventListener('keydown', close);
    div.addEventListener('click', close);
    function close(e) {
        if (e.target.tagName == 'IMG') {

            return;


        }
        div.remove()

    }
    // document.querySelector('body').appendChild(div);



}





