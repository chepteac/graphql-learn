import {useQuery} from '@apollo/client';
import query from '../queries/current-user';

export default function Header() {
  const {data} = useQuery(query);
  console.log('data:', data);

  return <div>Header</div>;
}
