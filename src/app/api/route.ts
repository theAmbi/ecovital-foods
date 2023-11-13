import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const requestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;
    const apiKey = process.env.API_KEY;
    const audienceId = process.env.AUDIENCE_ID;

    try {
      const response = await axios.post(
        `https://${
          apiKey?.split("-")[1]
        }.api.mailchimp.com/3.0/lists/${audienceId}/members`,
        {
          email_address: email,
          status: "subscribed",
        },

        {
          headers: {
            Authorization: `Basic ${Buffer.from(`apiKey:${apiKey}`).toString(
              "base64"
            )}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        res.status(200).json({ success: true });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Unable to subscribe user!" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "An error occurred." });
    }
  } else {
    res.status(405).end();
  }
};

export default requestHandler;
