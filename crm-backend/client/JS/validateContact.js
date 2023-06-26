export const validateClientContact = (contactType, contactInput) => {
  const writeValue = document.getElementById('writeName');
  const onlyNumbers = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  const onlyEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const onInputValue = input => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--color-gray-suit)';
      writeValue.textContent = '';
    });

    input.oncut = input.oncopy = input.onpaste = () => {
      input.style.borderColor = 'var(--color-gray-suit)';
      writeValue.textContent = '';
    };
  };

  const showErrorMessage = (message, block, input) => {
    block.textContent = message;
    input.style.borderColor = 'var(--color-burnt-sienna)'
  };

  onInputValue(contactInput);

  if (!contactInput.value) {
    showErrorMessage('Заполните все поля контактов!', writeValue, contactInput);
    return false;
  }

  switch (contactType.innerHTML) {
    case 'Телефон':
      if (!onlyNumbers.test(contactInput.value)) {
        showErrorMessage('Неверный формат номера телефона!', writeValue, contactInput);
        return false;
      }
      return true;

    case 'Email':
      if (!onlyEmail.test(contactInput.value)) {
        showErrorMessage('Неправильный формат Email!', writeValue, contactInput);
        return false;
      }
      return true;

    default:
      return true;
  }
}
