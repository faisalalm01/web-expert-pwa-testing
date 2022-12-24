import RestoSource from '../../data/resto-source';
import restoCard from '../templates/resto-card';

const Home = {
  async render() {
    return `
        <div class="container">
    <div id="main-container">
        <h1 tabindex="0" class="main-content__title">Explore Restoran</h1>
        <section id="explore-restaurant"></section>
    </div>
</div>
        `;
  },

  async afterRender() {
    const mainCont = document.querySelector('#main-container');
    const listContiner = document.querySelector('#explore-restaurant');

    mainCont.style.display = 'none';
    try {
      const data = await RestoSource.favoriteResto();

      data.restaurants.forEach((restaurant) => {
        listContiner.innerHTML += restoCard(restaurant);
      });
      mainCont.style.display = 'block';
    } catch (error) {
      console.error(error);
      mainCont.style.display = 'block';
      listContiner.innerHTML = `Error: ${error.message}`;
    }
  },
};

export default Home;
