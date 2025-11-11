class Header {
  constructor() {
    this.header = document.querySelector('[data-header]');
    this.menuToggle = document.querySelector('[data-menu-toggle]');
    this.menuClose = document.querySelector('[data-menu-close]');
    this.menuOverlay = document.querySelector('[data-menu-overlay]');
    this.mobileMenu = document.querySelector('[data-mobile-menu]');
    this.expandButtons = document.querySelectorAll('[data-expand-button]');
    this.megaMenuItems = document.querySelectorAll('[data-mega-menu]');

    this.focusTrapActive = false;
    this.lastFocusedElement = null;

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
      button.addEventListener('keydown', (e) => this.handleExpandKeydown(e));
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileMenu.classList.contains('is-open')) {
        this.closeMenu();
      }
    });

    // Add keyboard navigation for desktop mega-menu
    this.addDesktopKeyboardNav();
  }

  openMenu() {
    this.mobileMenu.classList.add('is-open');
    this.menuOverlay.classList.add('is-open');
    this.menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    this.focusTrapActive = true;
    this.lastFocusedElement = document.activeElement;
    
    const firstFocusable = this.getFirstFocusableElement(this.mobileMenu);
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  closeMenu() {
    this.mobileMenu.classList.remove('is-open');
    this.menuOverlay.classList.remove('is-open');
    this.menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    
    this.focusTrapActive = false;
    
    // Close all submenus when closing main menu
    this.expandButtons.forEach(button => {
      button.setAttribute('aria-expanded', 'false');
      const submenu = button.nextElementSibling;
      if (submenu && submenu.hasAttribute('data-submenu')) {
        submenu.classList.remove('is-open');
      }
    });
    
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
    }
  }

  toggleSubmenu(e) {
    const button = e.currentTarget;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const submenu = button.nextElementSibling;

    if (submenu && submenu.hasAttribute('data-submenu')) {
      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        submenu.classList.remove('is-open');
      } else {
        button.setAttribute('aria-expanded', 'true');
        submenu.classList.add('is-open');
        
        const firstLink = submenu.querySelector('a');
        if (firstLink) {
          firstLink.focus();
        }
      }
    }
  }

  handleExpandKeydown(e) {
    const button = e.currentTarget;
    
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        this.toggleSubmenu(e);
        break;
      case 'ArrowDown': {
        e.preventDefault();
        const submenu = button.nextElementSibling;
        if (submenu && submenu.hasAttribute('data-submenu')) {
          if (button.getAttribute('aria-expanded') === 'false') {
            this.toggleSubmenu(e);
          }
          const firstLink = submenu.querySelector('a');
          if (firstLink) {
            firstLink.focus();
          }
        }
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        button.focus();
        break;
      }
    }
  }

  addDesktopKeyboardNav() {
    const menuLinks = document.querySelectorAll('.header__menu-link');
    
    menuLinks.forEach((link, index) => {
      link.addEventListener('keydown', (e) => {
        const megaMenu = link.closest('.header__menu-item').querySelector('[data-mega-menu]');
        
        switch (e.key) {
          case 'ArrowDown': {
            e.preventDefault();
            if (megaMenu) {
              const firstLink = megaMenu.querySelector('a');
              if (firstLink) {
                firstLink.focus();
              }
            }
            break;
          }
          case 'ArrowLeft': {
            e.preventDefault();
            if (index > 0) {
              menuLinks[index - 1].focus();
            }
            break;
          }
          case 'ArrowRight': {
            e.preventDefault();
            if (index < menuLinks.length - 1) {
              menuLinks[index + 1].focus();
            }
            break;
          }
        }
      });
    });
  }

  getFirstFocusableElement(container) {
    const focusableElements = container.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    return focusableElements[0] || null;
  }

  getLastFocusableElement(container) {
    const focusableElements = container.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    return focusableElements[focusableElements.length - 1] || null;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Header());
} else {
  new Header();
}
