//actions
const ADD_TO_CITIES = "ADD_TO_CITIES";
const ADD_ACTIVE_CITY = "ADD_ACTIVE_CITY";

//types
interface AddToCitiesAction {
  type: typeof ADD_TO_CITIES;
  payload: string;
}

interface AddActiveCityAction {
  type: typeof ADD_ACTIVE_CITY;
  payload: string;
}

interface Cities {
  cities: string[];
  activeCity: string;
}

const initialState: Cities = {
  cities: [],
  activeCity: "",
};

type IAction = AddActiveCityAction | AddToCitiesAction;

//reducer
export default function citiesReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ADD_TO_CITIES:
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case ADD_ACTIVE_CITY:
      return {
        ...state,
        activeCity: action.payload,
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

export function AddActiveCity(city: String) {
  return {
    type: ADD_ACTIVE_CITY,
    payload: city,
  };
}
