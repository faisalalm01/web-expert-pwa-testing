/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestoDB from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestoDB,
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };
