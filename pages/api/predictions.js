import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";

export default async function handler(req, res) {
  try {
    const { lat, lon } = req.query;

    if (lat && lon) {
      const response = await fetch(
        `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`
      );
      const data = await response.json();

      /**
       * array of { duration: number (secs), risetime: timestamp }
       */
      const processedData = data.response.map((item) => ({
        duration: item.duration, //seconds
        risetime: format(
          fromUnixTime(item.risetime),
          // "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
          "MM/dd/yyyy HH:mm:ss"
        ), // from unix to date
      }));

      // Get data from your database
      res.status(200).json({
        error: null,
        data: processedData,
      });
    } else {
      res.status(500).json({
        error: "No lat or lon specified",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
}
