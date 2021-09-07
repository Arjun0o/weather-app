// actions
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

//types
interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: string;
}

interface Favorites {
  favorites: string[];
}

const initialState: Favorites = {
  favorites: [],
};

//reducer
export default function favoritesReducer(
  state = initialState,
  action: AddToFavoritesAction
) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, ...action.payload],
      };
    default:
      return state;
  }
}

//action creator
export function AddToFavorites(city: string) {
  return {
    type: ADD_TO_FAVORITES,
    payload: city,
  };
}
