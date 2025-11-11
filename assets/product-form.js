// Product form component
if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();
      this.form = this.querySelector('form');
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
    }

    onSubmitHandler(evt) {
      evt.preventDefault();
      const submitButton = this.querySelector('[type="submit"]');
      submitButton.setAttribute('disabled', true);
      submitButton.classList.add('loading');

      const formData = new FormData(this.form);
      const config = fetchConfig('javascript');
      config.body = JSON.stringify({
        id: formData.get('id'),
        quantity: formData.get('quantity') || 1
      });

      fetch('/cart/add.js', config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            this.handleErrorMessage(response.description);
            return;
          }
          window.cartManager.getCart();
          window.cartManager.showCartDrawer();
        })
        .catch(() => {
          // Handle error silently
        })
        .finally(() => {
          submitButton.classList.remove('loading');
          submitButton.removeAttribute('disabled');
        });
    }

    handleErrorMessage() {
      // Handle error message display
    }
  });
}

function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': `application/${type}` }
  };
}
