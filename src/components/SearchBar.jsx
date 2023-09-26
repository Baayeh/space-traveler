/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import {
  debounceTime, distinctUntilChanged, fromEvent, map,
} from 'rxjs';

const SearchBar = ({
  capsules,
  setFilteredCapsules,
}) => {
  const searchRef = useRef();

  useEffect(() => {
    if (searchRef) {
      fromEvent(searchRef.current, 'keyup')
        .pipe(
          map((event) => (event.target)?.value),
          debounceTime(500),
          distinctUntilChanged(),
        )
        .subscribe((value) => {
          const data = capsules?.filter(
            (capsule) => capsule.capsule_id.toLowerCase().includes(value.toLowerCase())
              || capsule.capsule_serial.toLowerCase().includes(value.toLowerCase()),
          );

          data && setFilteredCapsules(data);
        });
    }
  }, [capsules]);

  return (
    <div className="w-full">
      <label htmlFor="searchBar" />
      <input
        ref={searchRef}
        type="search"
        name="searchBar"
        id="searchBar"
        placeholder="Search by Capsule ID or serial number"
        className="w-full lg:w-[20rem] p-3 rounded-md bg-transparent outline-none border"
      />
    </div>
  );
};

export default SearchBar;
