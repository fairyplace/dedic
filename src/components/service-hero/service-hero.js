const gotoLinks = document.querySelectorAll('a[data-goto]')
const mobileMenuIcon = document.querySelector(".header__mobile-icon");

if (gotoLinks.length > 0){
  for (let i = 0; i < gotoLinks.length; i++) {
    gotoLinks[i].addEventListener('click', onGotoLinkClick)
  }
}

function onGotoLinkClick(e) {
  console.log("fff");
  let gotoLink = e.target

  if (!e.target.dataset.goto) gotoLink = e.target.closest('a[data-goto]')    
  

  if (gotoLink.dataset.goto && document.querySelector(gotoLink.dataset.goto)) {
    const gotoBlock = document.querySelector(gotoLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

    if (mobileMenuIcon.classList.contains('_active')) {
      document.body.classList.remove('_scroll-lock');
      mobileMenuIcon.classList.remove('_active');
      mobileMenu.classList.remove('_active');
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    });
    e.preventDefault();

  }
}
