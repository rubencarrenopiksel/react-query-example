import { useCharacters } from './hooks';

export const Counter = ({ limit }) => {
  const characters = useCharacters(limit);
  return (
    <p>
      {characters.length}
    </p>
  );
}