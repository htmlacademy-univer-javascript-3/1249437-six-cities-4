import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGIN_URL } from '../../const/links';
import { useAppDispatch } from '../../state';
import { selectAuthStatus } from '../../state/selectors';
import { AuthStatus } from '../../types/auth-status';
import { FavoriteStatus } from '../../types/favorite-status';
import { changeFavoriteStatus } from '../../state/offer/offer-actions';

const DEFAULT_STYLE_GROUP = 'place-card';
const FAVORITE_BUTTON_CLASS = 'place-card__bookmark-button--active';
const DEFAULT_WIDTH = 18;
const DEFAULT_HEIGHT = 19;

export interface FavoriteButtonProps {
  isFavorite: boolean;
  id: string;
  stylePrefix?: string;
  width?: number;
  height?: number;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ isFavorite, id, stylePrefix, width, height }) => {
  const dispatch = useAppDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const navigate = useNavigate();

  const onFavoriteClick = (favorite: boolean, offerId: string) => {
    if (authStatus === AuthStatus.NotAuthorized) {
      navigate(LOGIN_URL);
      return;
    }
    const newStatus = favorite ? FavoriteStatus.USUAL : FavoriteStatus.FAVORITE;
    dispatch(changeFavoriteStatus({ offerId, newStatus }));
  };

  return (
    <button
      className={`${stylePrefix ? stylePrefix : DEFAULT_STYLE_GROUP}__bookmark-button button ${isFavorite ? FAVORITE_BUTTON_CLASS : ''}`}
      type="button"
      onClick={() => onFavoriteClick(isFavorite, id)}
    >
      <svg className="place-card__bookmark-icon" width={width ? width : DEFAULT_WIDTH} height={height ? height : DEFAULT_HEIGHT}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        To bookmarks
      </span>
    </button>
  );
};

export default FavoriteButton;
