export interface StationXmlData {
  ArrayOfObjStation: {
    objStation: {
      StationCode: { _text: string };
      StationDesc: { _text: string };
      StationId: { _text: string };
    }[];
  };
}

export interface StationData {
  code: string;
  description: string;
  id: string;
}

export interface StationTimingXmlData {
  ArrayOfObjStationData: {
    objStationData: {
      Destination: { _text: string };
      Destinationtime: { _text: string };
      Direction: { _text: string };
      Duein: { _text: string };
      Exparrival: { _text: string };
      Expdepart: { _text: string };
      Lastlocation: { _text: string };
      Late: { _text: string };
      Locationtype: { _text: string };
      Origin: { _text: string };
      Origintime: { _text: string };
      Querytime: { _text: string };
      Scharrival: { _text: string };
      Schdepart: { _text: string };
      Servertime: { _text: string };
      Stationcode: { _text: string };
      Stationfullname: { _text: string };
      Status: { _text: string };
      Traincode: { _text: string };
      Traindate: { _text: string };
      Traintype: { _text: string };
    }[];
  };
}

export interface StationTimingData {
  destination: string;
  destinationTime: string;
  direction: string;
  dueIn: string;
  expArrival: string;
  expDepart: string;
  lastLocation: string;
  late: string;
  locationType: string;
  origin: string;
  originTime: string;
  queryTime: string;
  schArrival: string;
  schDepart: string;
  serverTime: string;
  stationcode: string;
  stationFullName: string;
  status: string;
  traincode: string;
  trainDate: string;
  trainType: string;
}

export interface Message {
  user: boolean;
  content: {
    text: string;
    button?: string;
  }[];
}
