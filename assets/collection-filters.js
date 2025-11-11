// Collection filters
class FacetFiltersForm extends HTMLElement {
  constructor() {
    super();
    this.form = this.querySelector('form');
    this.debouncedOnSubmit = debounce((event) => {
      this.onSubmitHandler(event);
    }, 500);

    this.form.addEventListener('input', this.debouncedOnSubmit.bind(this));

    // Mobile filter toggle
    this.setupMobileFilterToggle();
  }

  setupMobileFilterToggle() {
    const filterToggle = document.querySelector('[data-filter-toggle]');
    const facetsWrapper = document.querySelector('.facets-wrapper');

    if (!filterToggle || !facetsWrapper) return;

    // Show/hide filter drawer on mobile
    filterToggle.addEventListener('click', () => {
      facetsWrapper.classList.toggle('active');
      document.body.style.overflow = facetsWrapper.classList.contains('active') ? 'hidden' : '';
    });

    // Close filter drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (facetsWrapper.classList.contains('active') && 
          !facetsWrapper.contains(e.target) && 
          !filterToggle.contains(e.target)) {
        facetsWrapper.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close filter drawer when applying filters
    this.form.addEventListener('input', () => {
      if (window.innerWidth < 600) {
        facetsWrapper.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData(this.form);
    const searchParams = new URLSearchParams(formData);
    window.location.href = `${window.location.pathname}?${searchParams.toString()}`;
  }
}

customElements.define('facet-filters-form', FacetFiltersForm);

// Collection view toggle
function updateViewMode(productGrid, mode) {
  const buttons = document.querySelectorAll('[data-view-mode]');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.viewMode === mode);
  });
  
  if (mode === 'list') {
    productGrid.classList.add('product-grid--list-view');
  } else {
    productGrid.classList.remove('product-grid--list-view');
  }
}

function setupViewToggle() {
  const viewToggle = document.querySelector('[data-view-toggle]');
  const productGrid = document.querySelector('.product-grid');
  
  if (viewToggle && productGrid) {
    const viewButtons = viewToggle.querySelectorAll('[data-view-mode]');
    
    // Load saved view mode from localStorage
    const savedViewMode = localStorage.getItem('collection-view-mode') || 'grid';
    updateViewMode(productGrid, savedViewMode);
    
    viewButtons.forEach(button => {
      button.addEventListener('click', () => {
        const viewMode = button.dataset.viewMode;
        updateViewMode(productGrid, viewMode);
        localStorage.setItem('collection-view-mode', viewMode);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', setupViewToggle);

// Collection sorting
document.addEventListener('DOMContentLoaded', () => {
  const sortSelect = document.querySelector('[data-collection-sort]');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const url = new URL(window.location.href);
      url.searchParams.set('sort_by', e.target.value);
      window.location.href = url.toString();
    });
  }
});

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}
