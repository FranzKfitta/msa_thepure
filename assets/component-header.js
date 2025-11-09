// Header component
class Header {
  constructor() {
    this.header = document.querySelector('[data-header]');
    this.menuToggle = document.querySelector('[data-menu-toggle]');
    this.menuClose = document.querySelector('[data-menu-close]');
    this.menuOverlay = document.querySelector('[data-menu-overlay]');
    this.mobileMenu = document.querySelector('[data-mobile-menu]');
    this.expandButtons = document.querySelectorAll('.mobile-menu__expand');

    this.init();
  }

  init() {
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => this.openMenu());
    }

    if (this.menuClose) {
      this.menuClose.addEventListener('click', () => this.closeMenu());
    }

    if (this.menuOverlay) {
      this.menuOverlay.addEventListener('click', () => this.closeMenu());
    }

    // Initialize mobile menu expand buttons
    this.expandButtons.forEach(button => {
      button.addEventListener('click', (e) => this.toggleSubmenu(e));
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileMenu.classList.contains('is-open')) {
        this.closeMenu();
      }
    });
  }

  openMenu() {
    this.mobileMenu.classList.add('is-open');
    this.menuOverlay.classList.add('is-open');
    this.menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.mobileMenu.classList.remove('is-open');
    this.menuOverlay.classList.remove('is-open');
    this.menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    
    // Close all submenus when closing main menu
    this.expandButtons.forEach(button => {
      button.setAttribute('aria-expanded', 'false');
      const submenu = button.nextElementSibling;
      if (submenu && submenu.classList.contains('mobile-menu__submenu')) {
        submenu.classList.remove('is-open');
      }
    });
  }

  toggleSubmenu(e) {
    const button = e.currentTarget;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const submenu = button.nextElementSibling;

    if (submenu && submenu.classList.contains('mobile-menu__submenu')) {
      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        submenu.classList.remove('is-open');
      } else {
        button.setAttribute('aria-expanded', 'true');
        submenu.classList.add('is-open');
      }
    }
  }
}

// Initialize header
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Header());
} else {
  new Header();
}
