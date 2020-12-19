class Form {
  constructor (opt = {}) {
    const { formId, formItemId, formSubmitButtonId, formLinkedItemId = 'js-form-linked' } = opt;
    this.formId = formId;
    this.formItemId = formItemId;
    this.formSubmitButtonId = formSubmitButtonId;
    this.formLinkedItemId = formLinkedItemId;
  }

  init () {
    this.bindEvents();
  }

  bindEvents () {
    $(document).on('submit', this.formId, event => {
      const currentFormSubmitButton = $(event.currentTarget).find(this.formSubmitButtonId);
      if (currentFormSubmitButton.hasClass('is-disabled')) return false;
    });

    $(document).on('click', this.formSubmitButtonId, event => {
      if ($(event.currentTarget).hasClass('is-disabled')) return false;
    });

    $(document).on('keyup', this.formItemId, event => {
      this.checkEmpty(event);
    });
  }

  checkEmpty (event) {
    const currentForm = $(event.currentTarget).parents(this.formId);
    const currentFormItem = currentForm.find(this.formItemId);
    const currentFormSubmitButton = currentForm.find(this.formSubmitButtonId);
    const currentFormLinkedItemId = currentForm.find(this.formLinkedItemId);

    for (const item of currentFormItem) {
      if (item.value === '') {
        currentFormSubmitButton.addClass('is-disabled');
        currentFormLinkedItemId.removeClass('is-complete');
        return false;
      }
    }

    currentFormSubmitButton.removeClass('is-disabled');
    currentFormLinkedItemId.addClass('is-complete');
  }
}

export default Form;
