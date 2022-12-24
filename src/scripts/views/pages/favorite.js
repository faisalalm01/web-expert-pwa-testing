import FavoriteRestoDB from '../../data/favorite-resto-idb';
import restoCard from '../templates/resto-card';

const Favorite = {
  async render() {
    return `
        <div class="container">
    <h2 class="title-container">Favorite Resto</h2>
    <section id="fav-resto"></section>
</div>
        `;
  },

  async afterRender() {
    const data = await FavoriteRestoDB.getAllResto();
    const favResto = document.querySelector('#fav-resto');

    if (data.length === 0) {
      favResto.innerHTML = `
        Belum Ada Resorant favorite, Klik Tombol Favorite Pada Resorant
        `;
    }

    data.forEach((resto) => {
      favResto.innerHTML += restoCard(resto);
    });
  },
};

export default Favorite;
