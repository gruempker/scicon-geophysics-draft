(() => {
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');
  const header = document.querySelector('[data-header]');

  if (button && menu) {
    const closeMenu = (returnFocus = false) => {
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('.sr-only').textContent = 'Open navigation';
      menu.hidden = true;
      document.body.classList.remove('menu-open');
      if (returnFocus) button.focus();
    };

    const openMenu = () => {
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('.sr-only').textContent = 'Close navigation';
      menu.hidden = false;
      document.body.classList.add('menu-open');
      menu.querySelector('a')?.focus();
    };

    button.addEventListener('click', () => {
      button.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && button.getAttribute('aria-expanded') === 'true') closeMenu();
    });
  }

  if (header) {
    const setHeaderState = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

})();
