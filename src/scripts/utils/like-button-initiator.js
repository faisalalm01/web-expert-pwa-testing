import FavoriteRestoDB from '../data/favorite-resto-idb';
import {
  createLikeButtonTemplate,
  createUnLikeButtonTemplate,
} from '../views/templates/like-button';

const LikeButtonInitiator = {
  async init({ LikeButtonContainer, restaurant }) {
    this._LikeButtonContainer = LikeButtonContainer;
    this._resto = restaurant;
    await this._renderButton();
  },
  async _renderButton() {
    try {
      const { id } = this._resto;

      const restorant = await FavoriteRestoDB.getResto(id);
      if (restorant) {
        this._renderLike();
      } else {
        this._renderUnLike();
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  _renderLike() {
    this._LikeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoDB.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderUnLike() {
    this._LikeButtonContainer.innerHTML = createUnLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoDB.deleteResto(this._resto.id);
      alert('unlike resto');
      this._renderButton();
    });
  },
};
export default LikeButtonInitiator;
