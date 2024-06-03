import React from 'react';
import SortingSelect from './sorting-select';
import { SortingSelectProps } from './sort-types';

const MemoSortingSelect = React.memo<SortingSelectProps>(SortingSelect);

export default MemoSortingSelect;
