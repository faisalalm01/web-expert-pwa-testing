import FavoriteRestoDB from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="LikeButtonContainer></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoDB.putResto({ id: 1 });
  });
  afterEach(async () => {
    await FavoriteRestoDB.deleteResto(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoDB.getAllResto()).toEqual([]);
  });

  it('should no throw error if the unliked restaurant is no in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // hapus restaurant dari daftar yang disukai
    await FavoriteRestoDB.deleteResto(1);

    // simulasikan pengguna menekan tombol batal suka restaurant
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoDB.getAllResto()).toEqual([]);
  });
});
