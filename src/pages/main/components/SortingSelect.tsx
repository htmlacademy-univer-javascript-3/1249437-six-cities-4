import { FC, useEffect, useState } from 'react';
import { SortType } from './SortTypes';

export interface SortingSelectProps {
    onSortSelected: (sortType: SortType) => void;
}

const SortingSelect: FC<SortingSelectProps> = ({ onSortSelected }) => {
  const [sortType, setSortType] = useState<SortType>(SortType.POPULAR);
  const [openForm, setOpenForm] = useState<boolean>(false);

  useEffect(() => {
    onSortSelected(sortType);
  }, [sortType, onSortSelected]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenForm(!openForm)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {openForm ? (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortType).map((key) => (
            <li className="places__option"
              tabIndex={0} key={key}
              onClick={() => {
                setSortType(key);
                setOpenForm(false);
              }}
            >
              {key}
            </li>
          ))}
        </ul>
      ) : (
        <div />
      )}
    </form>
  );
};

export default SortingSelect;
