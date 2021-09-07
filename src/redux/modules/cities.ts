//actions
const ADD_TO_CITIES = "ADD_TO_CITIES";

//types
interface AddToCitiesAction {
  type: typeof ADD_TO_CITIES;
  payload: string;
}

interface Cities {
  cities: string[];
}

const initialState: Cities = {
  cities: [],
};

//reducer
export default function citiesReducer(
  state = initialState,
  action: AddToCitiesAction
) {
  switch (action.type) {
    case ADD_TO_CITIES:
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    default:
      return state;
  }
}

//action creator
export function AddToCities(city: String) {
  return {
    type: ADD_TO_CITIES,
    payload: city,
  };
}
