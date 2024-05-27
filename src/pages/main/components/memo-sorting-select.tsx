import React from 'react';
import SortingSelect from './sorting-select';
import { SortingSelectProps } from './sort-types';

const memoSortingSelect = React.memo<SortingSelectProps>(SortingSelect);

export default memoSortingSelect;
