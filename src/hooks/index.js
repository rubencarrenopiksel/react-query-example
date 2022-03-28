import { useQuery } from 'react-query';
import { getLOTRCharacters } from '../api';

export const useCharacters = (limit) => {
  const { data: characters } = useQuery({
    queryKey: ['characters', limit],
    queryFn: () => getLOTRCharacters(limit), 
    initialData: [],
  });
  return characters;
}
