//引入刚才的http.js文件
import https from "@/utils/request";

//获取轮播（type写死）
export const getBanner = function (): Promise<any> {
  return https.get("/banner/banner?type=2");
};

// 获取歌单
export const getPlayList = function (): Promise<any> {
  return https.get("/personalized?limit=5");
};

// 获取歌单详情
type getPlayListDetId = {
  id: number;
};
export const getPlayListDet = function (
  params: getPlayListDetId
): Promise<any> {
  return https.get("/playlist/detail", params);
};

// 获取歌单详情
interface getMusicListType {
  id: number;
  limit?: number;
  offset?: number;
}
export const getMusicList = function (params: getMusicListType): Promise<any> {
  return https.get("playlist/track/all", params);
};
// 获取歌曲详情
export const getMusicDet = function (ids: number): Promise<any> {
  return https.get(`/song/url/v1?id=${ids}&level=exhigh`);
};

// 获取歌词
export const getLyrics = function (ids: number): Promise<any> {
  return https.get(`/lyric?id=${ids}`);
};
