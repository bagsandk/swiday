import { useQuery } from 'react-query';
import { GET_ME } from 'service/me';

export default function useMe() {
    const { data, isLoading, error } = useQuery('ME', GET_ME, { retry: false });
    const me = error ? null : data && data.data;
    return { me, loading: isLoading };
}
