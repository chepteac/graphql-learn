import {useQuery} from '@apollo/client';
import query from '../queries/current-user';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function RequireAuth() {
  const {data, loading} = useQuery(query);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !data.user) {
      navigate('/login');
    }
  }, [loading, data.user, navigate]);
}
