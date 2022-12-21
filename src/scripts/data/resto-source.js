import API_ENDPOINT from '../global/api-endpoint';

class RestoSource {
  static async favoriteResto() {
    const res = await fetch(API_ENDPOINT.LIST);
    // const resJson = await res.json();
    return res.restaurants;
  }

  static async detailResto(id) {
    const res = await fetch(API_ENDPOINT.DETAIL(id));
    const resJson = await res.json();
    return resJson.restaurants;
  }
}
export default RestoSource;
