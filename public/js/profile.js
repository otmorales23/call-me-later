const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#contact-name').value.trim();
  const phone = document.querySelector('#contact-number').value.trim();
  const description = document.querySelector('#contact-notes').value.trim();

  if (name && phone && description) {
    const response = await fetch(`/api/contacts`, {
      method: 'POST',
      body: JSON.stringify({ name, phone, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create contact');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/contacts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete contact');
    }
  }
};

document
  .querySelector('.new-contact-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.contact-list')
  .addEventListener('click', delButtonHandler);
