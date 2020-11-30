import { CONFIG } from "../config/config";

export const makeTitle = (params) => {
    var title = params.title.split("-");
    var word;
    var _final = [];
    for (var key in title) {
      word = title[key].split("");
      word[0] = word[0].toUpperCase();
      _final.push(word.join(""));
    }

    return _final.join(" ");
}

export const makeUrl = (url) => {
  url = url.toLowerCase();
  url = url.split(" ");
  return url.join("-");
}

export const lazyImageUrl = url => ({
  small: CONFIG.IMG_DIR + '/small/'+url,
  large: CONFIG.IMG_DIR + '/large/'+ url
}) 