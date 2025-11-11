/**
 * Contact Form Handler
 * 
 * Handles form validation, submission, and user feedback for the contact form.
 * Features:
 * - Real-time field validation
 * - Email format validation
 * - Required field checking
 * - AJAX form submission
 * - Success/error messaging
 * - Loading state management
 * - Graceful fallback for non-AJAX submission
 */

class ContactFormHandler {
  constructor(formElement) {
    this.form = formElement;
    this.submitButton = this.form.querySelector('[type="submit"]');
    this.successMessage = this.form.querySelector('.contact-form__message--success');
    this.errorMessage = this.form.querySelector('.contact-form__message--error');
    this.fields = {
      name: this.form.querySelector('[name="contact[name]"]'),
      email: this.form.querySelector('[name="contact[email]"]'),
      subject: this.form.querySelector('[name="contact[subject]"]'),
      body: this.form.querySelector('[name="contact[body]"]')
    };
    
    this.isSubmitting = false;

    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation on input
    Object.values(this.fields).forEach(field => {
      if (field) {
        field.addEventListener('blur', () => this.validateField(field));
        field.addEventListener('change', () => this.validateField(field));
      }
    });
  }

  /**
   * Validate a single field
   */
  validateField(field) {
    const isValid = this.checkFieldValidity(field);
    const errorElement = field.nextElementSibling;

    if (!field.value.trim()) {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
      if (errorElement && errorElement.classList.contains('contact-form__error')) {
        errorElement.textContent = document.querySelector('[data-i18n-required]')?.textContent || 'This field is required';
      }
      return false;
    }

    if (field.type === 'email' && !this.isValidEmail(field.value)) {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
      if (errorElement && errorElement.classList.contains('contact-form__error')) {
        errorElement.textContent = document.querySelector('[data-i18n-invalid-email]')?.textContent || 'Please enter a valid email address';
      }
      return false;
    }

    if (isValid) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      if (errorElement && errorElement.classList.contains('contact-form__error')) {
        errorElement.textContent = '';
      }
      return true;
    }

    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
    return false;
  }

  /**
   * Check field validity
   */
  checkFieldValidity(field) {
    if (!field.value.trim()) {
      return false;
    }
    if (field.type === 'email') {
      return this.isValidEmail(field.value);
    }
    return true;
  }

  /**
   * Validate email format
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate entire form
   */
  validateForm() {
    let isValid = true;
    Object.values(this.fields).forEach(field => {
      if (field && !this.validateField(field)) {
        isValid = false;
      }
    });
    return isValid;
  }

  /**
   * Handle form submission
   */
  async handleSubmit(e) {
    e.preventDefault();

    // Prevent duplicate submissions
    if (this.isSubmitting) {
      return;
    }

    // Hide any previous messages
    this.hideMessages();

    // Validate form
    if (!this.validateForm()) {
      this.showError();
      return;
    }

    // Set loading state
    this.isSubmitting = true;
    this.setLoadingState(true);

    try {
      const formData = new FormData(this.form);

      const response = await fetch(this.form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      });

      if (response.ok) {
        // Success - show success message and reset form
        this.form.reset();
        this.clearValidationStates();
        this.showSuccess();
      } else {
        // Error response from server
        this.showError();
      }
    } catch (error) {
      // If AJAX fails, fall back to regular form submission
      this.form.submit();
    } finally {
      this.isSubmitting = false;
      this.setLoadingState(false);
    }
  }

  /**
   * Clear validation states
   */
  clearValidationStates() {
    Object.values(this.fields).forEach(field => {
      if (field) {
        field.classList.remove('is-valid', 'is-invalid');
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('contact-form__error')) {
          errorElement.textContent = '';
        }
      }
    });
  }

  /**
   * Set loading state
   */
  setLoadingState(isLoading) {
    if (isLoading) {
      this.submitButton.disabled = true;
      const loadingText = this.submitButton.getAttribute('data-loading-text') || 'Sending...';
      this.submitButton.dataset.originalText = this.submitButton.textContent;
      this.submitButton.textContent = loadingText;
    } else {
      this.submitButton.disabled = false;
      this.submitButton.textContent = this.submitButton.dataset.originalText || 'Send Message';
    }
  }

  /**
   * Show success message
   */
  showSuccess() {
    if (this.successMessage) {
      this.successMessage.classList.add('is-visible');
      // Scroll to message
      this.successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      // Hide message after 5 seconds
      setTimeout(() => {
        this.successMessage.classList.remove('is-visible');
      }, 5000);
    }
  }

  /**
   * Show error message
   */
  showError() {
    if (this.errorMessage) {
      this.errorMessage.classList.add('is-visible');
      // Scroll to message
      this.errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      // Hide message after 5 seconds
      setTimeout(() => {
        this.errorMessage.classList.remove('is-visible');
      }, 5000);
    }
  }

  /**
   * Hide all messages
   */
  hideMessages() {
    if (this.successMessage) {
      this.successMessage.classList.remove('is-visible');
    }
    if (this.errorMessage) {
      this.errorMessage.classList.remove('is-visible');
    }
  }
}

// Initialize contact form when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    new ContactFormHandler(contactForm);
  }
});

// Also handle initialization if script loads after DOM is ready
if (document.readyState !== 'loading') {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    new ContactFormHandler(contactForm);
  }
}
