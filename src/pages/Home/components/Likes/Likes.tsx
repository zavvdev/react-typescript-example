import { useTranslation } from 'react-i18next';
import Namespace from 'src/i18n/namespace';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectLikesAmount } from 'src/store/likes/selectors';
import { likesActions } from 'src/store/likes/slice';
import classes from 'src/pages/Home/components/Likes/Likes.module.scss';

const Likes = () => {
  const dispatch = useAppDispatch();
  const likesAmount = useAppSelector(selectLikesAmount);
  const { t } = useTranslation(Namespace.Home);

  const handleLike = () => {
    dispatch(likesActions.increment());
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      className={classes.btn}
    >
      {t('buttons.likes')}
      <span>{likesAmount}</span>
    </button>
  );
};

export default Likes;
