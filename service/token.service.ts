const getLocalAccessToken = () => {
  let accessToken = null;
  if (localStorage.getItem("token") !== null) {
    console.log("Token exist");
    accessToken = JSON.parse(localStorage.getItem("token") ?? "");
  }

  return accessToken;
};

const setLocalAccessToken = (token: string) => {
  localStorage.setItem("token", JSON.stringify(token));
};

const removeLocalAccessToken = () => {
  localStorage.removeItem("token");
};

const TokenService = {
  getLocalAccessToken,
  setLocalAccessToken,
  removeLocalAccessToken,
};

export default TokenService;
