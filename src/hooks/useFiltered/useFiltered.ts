import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { addToFiltered } from '../../redux/actions/filteredActions';

const useFiltered = () => {
  const [inputValue, setInputValue] = useState('');

  const state = useSelector((state: RootState) => state.postsReducer);
  const filteredState = useSelector(
    (state: RootState) => state.filteredReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (inputValue?.length === 0) {
      dispatch(addToFiltered(state));
    }

    const filteredTitle = state.filter((x) =>
      x.title.toLowerCase().includes(inputValue.toLowerCase()),
    );

    const filteredSummary = state.filter((x) =>
      x.summary.toLowerCase().includes(inputValue.toLowerCase()),
    );

    const filteredList = [...filteredTitle, ...filteredSummary];

    let uniqueFilteredList = filteredList.filter((article, index) => {
      return filteredList.indexOf(article) === index;
    });

    dispatch(addToFiltered(uniqueFilteredList));
  }, [dispatch, state, inputValue]);

  return { filteredState, setInputValue, inputValue };
};

export default useFiltered;
