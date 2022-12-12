import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import convert from "xml-js";
import { StationData, StationXmlData } from "../../lib/interfaces";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<StationData[]>
) => {
  const response = await axios.get(
    "http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML_WithStationType?StationType=D",
    {
      headers: {
        Accept: "application/xml",
      },
    }
  );

  const data = convert.xml2json(response.data, { compact: true });
  const parsedData: StationXmlData = JSON.parse(data);
  const responseData: StationData[] =
    parsedData.ArrayOfObjStation.objStation.map((i) => ({
      code: i.StationCode._text,
      description: i.StationDesc._text,
      id: i.StationId._text,
    }));

  res.status(200).json(responseData);
};

export default handler;
