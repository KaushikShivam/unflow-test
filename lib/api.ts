import axios from "axios";
import { StationData, StationTimingData } from "./interfaces";

export const getStations = async (): Promise<StationData[]> => {
  try {
    const response = await axios.get<StationData[]>("/api/stations");
    return response.data;
  } catch (error) {
    return [];
    // TODO: Handle error
  }
};

export const getTrainTimes = async (
  station: string
): Promise<StationTimingData[]> => {
  try {
    const response = await axios.get<StationTimingData[]>(
      `api/train-times?station=${station}`
    );
    return response.data;
  } catch (error) {
    return [];
    // TODO: Handle error
  }
};
