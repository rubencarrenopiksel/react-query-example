import { useEffect, useState } from 'react';
import { getLOTRCharacters } from './api';

export const List = ({ limit }) => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    getLOTRCharacters(limit).then((newCharacters) => setCharacters(newCharacters));
  }, [limit]);

  return (
    <div>
      <ul>
        {characters.map(character => <li key={character._id}>{character.name}</li>)}
      </ul>
    </div>
  );
}