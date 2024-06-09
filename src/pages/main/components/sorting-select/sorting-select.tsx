import { FC, useEffect, useState } from 'react';
import { SortingSelectProps, SortType } from './sort-types';

const SortingSelect: FC<SortingSelectProps> = ({ onSortSelected }) => {
  const [sortType, setSortType] = useState<SortType>(SortType.POPULAR);
  const [openForm, setOpenForm] = useState<boolean>(false);

  useEffect(() => {
    onSortSelected(sortType);
  }, [onSortSelected, sortType]);

  const sortOptions = [
    SortType.POPULAR,
    SortType.LOW_PRICE_FIRST,
    SortType.HIGH_PRICE_FIRST,
    SortType.TOP_RATED_FIRST
  ];

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenForm(!openForm)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {openForm && (
        <ul className="places__options places__options--custom places__options--opened">
          {sortOptions.map((key) => (
            <li
              className={`places__option ${key === sortType ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={key}
              onClick={() => {
                setSortType(key);
                setOpenForm(false);
              }}
            >
              {key}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SortingSelect;
