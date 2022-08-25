import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import phonebookOperations from 'Redux/Reducer/phonebook-operations';
import { MyForm, MyInput } from './styled.module';

const InputForm = () => {
  // Hooks
  const dispatch = useDispatch();
  const phonebook = useSelector(
    ({
      phonebookSlice: {
        contacts: { items },
      },
    }) => items
  );
  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useState('');

  // Handle functions

  const handleInputName = e => setInputName(e.currentTarget.value);
  const handleInputPhone = e => setInputPhone(e.currentTarget.value);
  const handleSubmitForm = e => {
    e.preventDefault();

    const data = newData();

    if (checkUsers(data)) {
      alert(`${data.name} is already in contacts`);
      return false;
    }

    dispatch(phonebookOperations.addUserPhonebook(data));

    if (data) {
      setInputName('');
      setInputPhone('');
    }

    return true;
  };

  // Helpers

  const newData = () => ({
    name: inputName,
    number: inputPhone,
  });

  const checkUsers = phone =>
    phonebook.find(
      ({ name }) => name.toLowerCase() === phone.name.toLowerCase()
    );

  return (
    <MyForm onSubmit={handleSubmitForm}>
      <h2>Name</h2>
      <MyInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Name surname"
        value={inputName}
        required
        onChange={handleInputName}
      />
      <h2>Phone</h2>
      <MyInput
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="+38 (099) 999-99-99"
        value={inputPhone}
        required
        onChange={handleInputPhone}
      />

      <button type="submit">Add contact</button>
    </MyForm>
  );
};

export default InputForm;
