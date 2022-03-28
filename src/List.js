import { useCharacters } from './hooks';

export const List = ({ limit }) => {
  const characters = useCharacters(limit);

  return (
    <div>
      <ul>
        {characters.map(character => <li key={character._id}>{character.name}</li>)}
      </ul>
    </div>
  );
}