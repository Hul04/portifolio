function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
      icon.classList.remove('active');
    } else {
      menu.style.display = 'block';
      icon.classList.add('active');
    }
  }
  
