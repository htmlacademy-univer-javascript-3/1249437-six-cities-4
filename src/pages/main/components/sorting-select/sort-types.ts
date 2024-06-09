export enum SortType {
  POPULAR = 'Popular',
  LOW_PRICE_FIRST = 'Price: low to high',
  HIGH_PRICE_FIRST = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first'
}

export interface SortingSelectProps {
  onSortSelected: (sortType: SortType) => void;
}
