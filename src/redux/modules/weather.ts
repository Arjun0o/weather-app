import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import axios from "axios";

const WEATHER_API_KEY = "fbbc5458489286efe446af162e2def9e";
//actions
const GET_WEATHER_UPDATES = "GET_WEATHER_UPDATES";

//types
interface GetWeatherUpdatesAction {
  type: typeof GET_WEATHER_UPDATES;
  payload: City;
}

interface City {
  id: number;
  name: string;
  coords: {
    lng: number;
    lat: number;
  };
  main: {
    humidity: number | null;
    temp: number;
    feels_like: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
  };
  loading: boolean;
}

const initialState: City = {
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
  loading: false,
};

//reducer
export default function weatherReducer(
  state = initialState,
  action: GetWeatherUpdatesAction
) {
  switch (action.type) {
    case GET_WEATHER_UPDATES:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

//action creator
export function GetWeatherUpdates(data: City) {
  return {
    type: GET_WEATHER_UPDATES,
    payload: data,
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
        id: data.id,
        name: data.name,
        coords: data?.coord,
        main: data?.main,
        loading: true,
      };
      dispatch(GetWeatherUpdates(cityData));
    } catch (e) {
      const { message } = e.response.data;
      alert(message);
    }
  };
};
