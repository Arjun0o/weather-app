import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import axios from "axios";

const WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

//actions
const GET_WEATHER_UPDATES = "GET_WEATHER_UPDATES";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const ADD_TO_CITIES = "ADD_TO_CITIES";
const ADD_ACTIVE_CITY = "ADD_ACTIVE_CITY";

//types
interface GetWeatherUpdatesAction {
  type: typeof GET_WEATHER_UPDATES;
  payload: WeatherProps;
}

interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: WeatherProps;
}

interface AddToCitiesAction {
  type: typeof ADD_TO_CITIES;
  payload: WeatherProps;
}

interface AddActiveCityAction {
  type: typeof ADD_ACTIVE_CITY;
  payload: string;
}

interface WeatherProps {
  id?: number;
  name?: string;
  coords?: {
    lng: number;
    lat: number;
  };
  main?: {
    humidity: number | null;
    temp: number;
    feels_like: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
  };
}

interface Props {
  weather?: WeatherProps;
  cities?: any;
  activeCity?: string;
  favorites?: any;
}

const initialState: Props = {
  weather: {
    id: 0,
    name: "",
    coords: {
      lng: 0,
      lat: 0,
    },
    main: {
      humidity: 0,
      temp: 0,
      feels_like: 0,
      pressure: 0,
      temp_min: 0,
      temp_max: 0,
    },
  },
  cities: [],
  activeCity: "",
  favorites: [],
};

type IAction =
  | GetWeatherUpdatesAction
  | AddToCitiesAction
  | AddActiveCityAction
  | AddToFavoritesAction;

//reducer
export default function weatherReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case GET_WEATHER_UPDATES:
      return {
        ...state,
        weather: action.payload,
      };
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
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
}

//action creator
export function GetWeatherUpdates(data: Props) {
  return {
    type: GET_WEATHER_UPDATES,
    payload: data,
  };
}
export function AddToFavorites(city: WeatherProps) {
  return {
    type: ADD_TO_FAVORITES,
    payload: city,
  };
}
export function AddToCities(city: WeatherProps) {
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

//side effects
export const getWeatherInfo = (
  city: string
): ThunkAction<void, {}, {}, Action> => {
  return async (dispatch: ThunkDispatch<{}, {}, Action>): Promise<void> => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
      );

      const cityData = {
        weather: {
          id: data.id,
          name: data.name,
          coords: data?.coord,
          main: data?.main,
        },
      };
      dispatch(GetWeatherUpdates(cityData));
    } catch (e) {
      const { message } = e.response.data;
      alert(message);
    }
  };
};

export const addCities = (city: string): ThunkAction<void, {}, {}, Action> => {
  return async (dispatch: ThunkDispatch<{}, {}, Action>): Promise<void> => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
      );
      const cityData = {
        id: data.id,
        name: data.name,
        coords: data?.coord,
        main: data?.main,
      };
      dispatch(AddToCities(cityData));
    } catch (e) {
      const { message } = e.response.data;
      alert(message);
    }
  };
};

export const addFavorites = (
  city: string
): ThunkAction<void, {}, {}, Action> => {
  return async (dispatch: ThunkDispatch<{}, {}, Action>): Promise<void> => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
      );

      const cityData = {
        id: data.id,
        name: data.name,
        coords: data?.coord,
        main: data?.main,
      };
      dispatch(AddToFavorites(cityData));
    } catch (e) {
      const { message } = e.response.data;
      alert(message);
    }
  };
};
