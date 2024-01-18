import API from "../request/index";

export function getGoodPriceInfo() {
  return API.get({ url: "/home/goodprice" });
}

export function getHighScoreInfo() {
  return API.get({ url: "/home/highscore" });
}

export function getDiscountInfo() {
  return API.get({ url: "/home/discount" });
}

export function getRecommendInfo() {
  return API.get({ url: "/home/hotrecommenddest" });
}

export function getLongforInfo() {
  return API.get({ url: "/home/longfor" });
}

export function getPlusInfo() {
  return API.get({ url: "/home/plus" });
}
