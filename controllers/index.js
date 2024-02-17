const { controllerWrapper } = require('../decorators');

const listCategory = require('./filters/categories');
const listGlasses = require('./filters/glasses');
const listIngredients = require('./filters/ingredients');
const updatedSubscribe = require('./subscribes/subscribe');
const updateUser = require('./users/updateUser');

const getDrinksPopular = require('./drinks/getDrinksPopular.js');
const getDrinkById = require('./drinks/getDrinkById.js');
const getDrinksOwner = require('./drinks/getDrinksOwner.js');
const getCurrent = require('./users/getCurrent');
const getFavoriteDrinks = require('./drinks/getFavoriteDrinks');

const addToFavoritesDrinks = require('./drinks/addToFavoritesDrinks');
const removeFavoritesDrinks = require('./drinks/removeFavoritesDrinks');

const signup = require('./users/signup');
const signin = require('./users/signin');
const signout = require('./users/signout');

const addDrink = require('./drinks/addDrink');
const removeOwnerDrinksById = require('./drinks/removeOwnerDrinksById');

module.exports = {
  signup: controllerWrapper(signup),
  signin: controllerWrapper(signin),
  signout: controllerWrapper(signout),

  updatedSubscribe: controllerWrapper(updatedSubscribe),
  updateUser: controllerWrapper(updateUser),

  listCategory: controllerWrapper(listCategory),
  listGlasses: controllerWrapper(listGlasses),
  listIngredients: controllerWrapper(listIngredients),
  getDrinkById: controllerWrapper(getDrinkById),
  getCurrent: controllerWrapper(getCurrent),

  getFavoriteDrinks: controllerWrapper(getFavoriteDrinks),

  getDrinksOwner: controllerWrapper(getDrinksOwner),
  getDrinksPopular: controllerWrapper(getDrinksPopular),
  addToFavoritesDrinks: controllerWrapper(addToFavoritesDrinks),

  removeFavoritesDrinks: controllerWrapper(removeFavoritesDrinks),
  addDrink: controllerWrapper(addDrink),
  removeOwnerDrinksById: controllerWrapper(removeOwnerDrinksById),
};
