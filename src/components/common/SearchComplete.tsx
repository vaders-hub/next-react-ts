import { useEffect, useMemo, useState, useRef, ChangeEvent } from 'react';
import { debounce } from "lodash"
import {searchTerm} from 'src/services/common'
import compStyles from 'src/styles/components.module.scss'


function SearchComplete() {
  const [characters, setCharacters] = useState<string>('');

  const search = async(term: string) => {
    console.log('criteria', term)
    return term
  }

  const searchQueue = useMemo(
    () => debounce(async (term) => {
      setCharacters(await search(term));
    }, 300)
  , [characters]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchQueue(e.target.value);
  }

  useEffect(() => {
    return () => {
      searchQueue.cancel();
    };
  }, [searchQueue]);

  return (
    <div>
      <input
        className={compStyles.defaultInput}
        type="search"
        placeholder="Enter your search"
        onChange={handleChange}
      />
      {characters}
    </div>
  );
}

export default SearchComplete