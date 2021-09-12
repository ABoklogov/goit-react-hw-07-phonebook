import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';
import { getFilter } from '../../redux/contacts/contacts-selector';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(action.chengeFilter(e))}
      />
    </label>
  );
};

export default Filter;
