import { itsActsAsFavoriteRestoModel } from './contract/favoriteRestaurantContract';
import FavoriteRestoDB from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoDB.getAllResto()).forEach(async (restaurant) => {
      await FavoriteRestoDB.deleteResto(restaurant.id);
    });
  });
  itsActsAsFavoriteRestoModel(FavoriteRestoDB);
});
