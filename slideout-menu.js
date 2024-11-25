document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var slideoutMenu = document.querySelector('.slideout-menu');
  
    menuToggle.addEventListener('click', function() {
      if (slideoutMenu.style.left === '-250px') {
        slideoutMenu.style.left = '0';
      } else {
        slideoutMenu.style.left = '-250px';
      }
    });
  });
  