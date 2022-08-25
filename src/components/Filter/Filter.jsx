import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'Redux/Reducer/phonebook-slice';
import { Container, MyInput, MyP } from './styled';

function Filter() {
  const filter = useSelector(
    ({
      phonebookSlice: {
        contacts: { filter },
      },
    }) => filter
  );
  const dispatch = useDispatch();

  const handleFilter = e =>
    dispatch(changeFilter(e.currentTarget.value.toLowerCase()));

  return (
    <Container>
      <MyP>Find contacts by name</MyP>
      <MyInput
        type="text"
        onChange={handleFilter}
        placeholder="Search..."
        value={filter}
      />
    </Container>
  );
}

export default Filter;
