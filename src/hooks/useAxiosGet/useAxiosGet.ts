import { useEffect, useState } from 'react';
import { axios } from '../../helpers';
import { AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToPosts } from '../../redux/actions/postsActions';
import { AppDispatch, RootState } from '../../redux/store/store';

const useAxiosGet = () => {
  const dispatch = useDispatch<AppDispatch>();

  const state = useSelector((state: RootState) => state.postsReducer);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  const [limit, setLimit] = useState(100);

  useEffect(() => {
    axios
      .get(`/v3/articles?_limit=${limit}`)
      .then((data: AxiosResponse) => {
        dispatch(addToPosts(data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, limit]);

  return { state, error, isLoading, setLoading, limit, setLimit };
};

export default useAxiosGet;
