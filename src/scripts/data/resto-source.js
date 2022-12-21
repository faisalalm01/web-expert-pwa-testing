import API_ENDPOINT from '../global/api-endpoint';

class RestoSource {
  static async favoriteResto() {
    const res = await fetch(API_ENDPOINT.LIST);
    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }

  static async detailResto(id) {
    const res = await fetch(API_ENDPOINT.DETAIL(id));
    const resJson = await res.json();
    return resJson;
  }
}
export default RestoSource;
