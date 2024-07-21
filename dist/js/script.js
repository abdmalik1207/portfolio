// Navbar Fixed
window.onscroll = function () {
 const header = document.querySelector('header');
 const fixedNav = header.offsetTop;

 if (window.pageYOffset > fixedNav) {
  header.classList.add('navbar-fixed');
 } else {
  header.classList.remove('navbar-fixed');
 }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
 hamburger.classList.toggle('hamburger-active');
 navMenu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const introText = "Hey, I'm <b class='text-danger'>Abd Malik</b>";
    const jobText = "Web Developer";
    const introElement = document.getElementById("intro");
    const jobElement = document.getElementById("job");

    let introIndex = 0;
    let jobIndex = 0;
    let currentIntroText = "";
    let currentJobText = "";

    function typeIntro() {
        if (introIndex < introText.length) {
            currentIntroText += introText[introIndex] === '<' ? introText.slice(introIndex, introText.indexOf('>', introIndex) + 1) : introText[introIndex];
            introIndex += introText[introIndex] === '<' ? introText.indexOf('>', introIndex) + 1 - introIndex : 1;
            introElement.innerHTML = currentIntroText;
            setTimeout(typeIntro, 100);
        } else {
            setTimeout(typeJob, 500); // Delay before starting the second text
        }
    }

    function typeJob() {
        if (jobIndex < jobText.length) {
            currentJobText += jobText[jobIndex];
            jobElement.innerHTML = currentJobText;
            jobIndex++;
            setTimeout(typeJob, 100);
        }
    }

    typeIntro();
});
