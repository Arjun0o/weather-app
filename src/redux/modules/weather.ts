import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import axios from "axios";

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
  wind: { speed: number | null };
  main: {
    humidity: number | null;
    temp: number;
    feels_like: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
  };
  loading: false;
}

const initialState: City = {
  id: 0,
  name: "",
  wind: { speed: 0 },
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
        state: action.payload,
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
export const getweatherInfo = (
  city: string
): ThunkAction<void, {}, {}, Action> => {
  return async (dispatch: ThunkDispatch<{}, {}, Action>): Promise<void> => {
    try {
      const { data } = await axios(
        `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
};
