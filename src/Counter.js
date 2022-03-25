import { useEffect, useState } from 'react';
import { getLOTRCharacters } from './api';

export const Counter = ({ limit }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getLOTRCharacters(limit).then((newCharacters) => setCharacters(newCharacters));
  }, [limit]);

  return (
    <p>
      {characters.length}
    </p>
  );
}