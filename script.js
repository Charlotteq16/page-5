
window.addEventListener('scroll', function() {
    var wBorder = document.querySelector('.w-border');
    var scrollPos = window.scrollY;

    var triggerPos = 2900;

    if (scrollPos > triggerPos) {
        wBorder.style.position = 'fixed';
        wBorder.style.top = (4 - (scrollPos - triggerPos)) + 'px';
    } else {
        wBorder.style.position = 'fixed';
        wBorder.style.top = '4%'; 
    }
});

window.onscroll = function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

 
    if (scrollPosition > 2900) {
        header.style.backgroundColor = 'rgb(235, 212, 197)';
    } else {
        header.style.backgroundColor = 'rgb(60, 43, 43)';
    }
};