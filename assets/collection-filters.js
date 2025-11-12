class FacetFiltersForm extends HTMLElement {
  constructor() {
    super();
    this.form = this.querySelector('form');
    this.closeMobileFilters = () => {};
    this.storedBodyOverflow = '';

    if (!this.form) {
      return;
    }

    this.debouncedOnSubmit = debounce(() => {
      this.onSubmitHandler();
    }, 400);

    this.form.addEventListener('input', () => {
      this.debouncedOnSubmit();
    });

    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.onSubmitHandler();
    });

    this.setupFilterDropdowns();
    this.setupMobileFilterToggle();
  }

  setupFilterDropdowns() {
    const filterButtons = this.querySelectorAll('[data-filter-button]');

    if (!filterButtons.length) {
      return;
    }

    filterButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = button.closest('[data-filter]');
        if (!filter) {
          return;
        }

        const isOpen = filter.classList.contains('is-open');
        this.closeAllFilters();

        if (!isOpen) {
          filter.classList.add('is-open');
          button.setAttribute('aria-expanded', 'true');
        }
      });
    });

    this.addEventListener('click', (event) => {
      if (event.target.closest('[data-filter-button]') || event.target.closest('[data-filter-dropdown]')) {
        return;
      }

      this.closeAllFilters();
    });

    document.addEventListener('click', (event) => {
      if (!this.contains(event.target)) {
        this.closeAllFilters();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeAllFilters();
        this.closeMobileFilters();
      }
    });
  }

  closeAllFilters() {
    this.querySelectorAll('[data-filter].is-open').forEach((filter) => {
      filter.classList.remove('is-open');
      const trigger = filter.querySelector('[data-filter-button]');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  setupMobileFilterToggle() {
    const trigger = document.querySelector('[data-mobile-filter-trigger]');
    const container = document.querySelector('[data-filters-container]');
    const closeButton = document.querySelector('[data-mobile-filter-close]');
    const overlay = document.querySelector('[data-filters-overlay]');

    if (!trigger || !container) {
      return;
    }

    let isOpen = false;

    const lockBodyScroll = () => {
      this.storedBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.body.classList.add('collection-filters-open');
    };

    const restoreBodyScroll = () => {
      document.body.style.overflow = this.storedBodyOverflow || '';
      document.body.classList.remove('collection-filters-open');
      this.storedBodyOverflow = '';
    };

    const openFilters = () => {
      if (window.innerWidth > 599 || isOpen) {
        return;
      }
      this.closeAllFilters();
      container.classList.add('is-active');
      if (overlay) {
        overlay.classList.add('is-active');
      }
      trigger.setAttribute('aria-expanded', 'true');
      isOpen = true;
      lockBodyScroll();
    };

    const closeFilters = () => {
      const wasOpen = isOpen;
      isOpen = false;
      container.classList.remove('is-active');
      if (overlay) {
        overlay.classList.remove('is-active');
      }
      trigger.setAttribute('aria-expanded', 'false');

      if (wasOpen) {
        restoreBodyScroll();
      }

      this.closeAllFilters();
    };

    this.closeMobileFilters = closeFilters;

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      openFilters();
    });

    if (closeButton) {
      closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        closeFilters();
      });
    }

    if (overlay) {
      overlay.addEventListener('click', closeFilters);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 599) {
        closeFilters();
      }
    });
  }

  onSubmitHandler() {
    const formData = new FormData(this.form);
    const searchParams = new URLSearchParams(formData);
    this.closeMobileFilters();
    window.location.href = `${window.location.pathname}?${searchParams.toString()}`;
  }
}

customElements.define('facet-filters-form', FacetFiltersForm);

function setupSortDropdown() {
  const sortContainer = document.querySelector('[data-sort]');
  if (!sortContainer) {
    return;
  }

  const toggle = sortContainer.querySelector('[data-sort-toggle]');
  const dropdown = sortContainer.querySelector('[data-sort-dropdown]');
  const options = dropdown ? dropdown.querySelectorAll('[data-sort-value]') : [];

  if (!toggle || !dropdown || !options.length) {
    return;
  }

  const currentSort = toggle.getAttribute('data-current-sort');

  options.forEach((option) => {
    if (option.getAttribute('data-sort-value') === currentSort) {
      option.classList.add('is-active');
    }
  });

  const closeDropdown = () => {
    sortContainer.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = sortContainer.classList.contains('is-open');

    document.querySelectorAll('[data-sort]').forEach((container) => {
      container.classList.remove('is-open');
      const button = container.querySelector('[data-sort-toggle]');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
    });

    if (!isOpen) {
      sortContainer.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      closeDropdown();
    }
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const value = option.getAttribute('data-sort-value');
      if (!value) {
        return;
      }

      const url = new URL(window.location.href);
      url.searchParams.set('sort_by', value);
      window.location.href = url.toString();
    });
  });

  document.addEventListener('click', (event) => {
    if (!sortContainer.contains(event.target) && event.target !== toggle) {
      closeDropdown();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDropdown();
    }
  });
}

document.addEventListener('DOMContentLoaded', setupSortDropdown);

function debounce(fn, wait) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, wait);
  };
}
