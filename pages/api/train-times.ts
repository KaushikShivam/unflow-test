import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import convert from "xml-js";
import {
  StationTimingData,
  StationTimingXmlData,
} from "../../lib/interfaces";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<StationTimingData[]>
) => {
  if (!req.query.station) throw new Error("No station supplied");
  const response = await axios.get(
    `http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=${req.query.station}`,
    {
      headers: {
        Accept: "application/xml",
      },
    }
  );

  const data = convert.xml2json(response.data, { compact: true });
  const parsedData: StationTimingXmlData = JSON.parse(data);
  const responseData: StationTimingData[] =
    parsedData.ArrayOfObjStationData.objStationData.map((i) => ({
      destination: i.Destination._text,
      destinationTime: i.Destinationtime._text,
      direction: i.Direction._text,
      dueIn: i.Duein._text,
      expArrival: i.Exparrival._text,
      expDepart: i.Expdepart._text,
      lastLocation: i.Lastlocation._text,
      late: i.Late._text,
      locationType: i.Locationtype._text,
      origin: i.Origin._text,
      originTime: i.Origintime._text,
      queryTime: i.Querytime._text,
      schArrival: i.Scharrival._text,
      schDepart: i.Schdepart._text,
      serverTime: i.Servertime._text,
      stationcode: i.Stationcode._text,
      stationFullName: i.Stationfullname._text,
      status: i.Status._text,
      traincode: i.Traincode._text,
      trainDate: i.Traindate._text,
      trainType: i.Traintype._text,
    }));
  res.status(200).json(responseData.slice(0, 3)); // Only sending the first three stations as requested
};

export default handler;
