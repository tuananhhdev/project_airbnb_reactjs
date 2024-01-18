import API from "../request";

export function getEntireRoomList(offset, size) {
  return API.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
