import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;

    const options = {
      method: "POST",
      body: new URLSearchParams("grant_type=client_credentials"),
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      options
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
