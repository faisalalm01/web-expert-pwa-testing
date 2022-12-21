import FavoriteRestoDB from '../data/favorite-resto-idb';
import {
  createLikeButtonTemplate,
  createUnLikeButtonTemplate,
} from '../views/templates/like-button';

const LikeButtonInitiator = {
  async init({ likeContainer, data }) {
    this._likeContainer = likeContainer;
    this._resto = data.restaurant;
    await this._renderButton();
  },
  async _renderButton() {
    try {
      const { id } = this._resto;
      const restorant = await FavoriteRestoDB.getResto(id);
      if (restorant) {
        this._renderUnLike();
        console.log(restorant);
      } else {
        this._renderLike();
      }
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  _renderLike() {
    this._likeContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoDB.putResto(this._resto);
      alert('like');
      this._renderButton();
    });
  },

  _renderUnLike() {
    this._likeContainer.innerHTML = createUnLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoDB.deleteResto(this._resto.id);
      alert('unlike resto');
      this._renderButton();
    });
  },
};
export default LikeButtonInitiator;
