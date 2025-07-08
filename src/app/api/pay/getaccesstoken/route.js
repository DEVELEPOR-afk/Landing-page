import axios from "axios";

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${process.env.PAYPAL_BASEURL}/v1/oauth2/token`,
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: process.env.PAYPAL_CLIENTID,
          password: process.env.PAYPAL_SECRET,
        },
      }
    );
    return response.data.access_token;
  } catch (err) {
    console.error(err.response?.data || err);
    throw new Error("Error getting access token");
  }
};

export default getAccessToken;
