import UrlParser from '../../routes/url_parser';
import RestoSource from '../../data/resto-source';
import restoDetail from '../templates/resto-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="container">
    <div id="likeButtonContainer" class="like"></div>
    <div id="main-container" tabindex="0">
        <h2 class="title-container">Detail Restorant</h2>
        <section id="detail-resto"></section>
    </div>
</div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    // const mainCont = document.querySelector('#main-containaer');
    const detalCont = document.querySelector('#detail-resto');

    // mainCont.style.display = 'none';

    try {
      const data = await RestoSource.detailResto(url.id);

      console.info(data);
      detalCont.innerHTML += restoDetail(data.restaurant);

      LikeButtonInitiator.init({
        likeContainer: document.querySelector('#likeButtonContainer'),
        data,
      });
      console.log(LikeButtonInitiator.likeContainer);
      // mainCont.style.display = 'block';
    } catch (error) {
      console.error(error);

      // mainCont.style.display = 'block';
      detalCont.innerHTML = `Error: ${error.message}`;
    }
  },
};
export default Detail;
