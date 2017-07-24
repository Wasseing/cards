import { GiphyConfig as Config} from "./";
import { XHTTP, APIUtils } from "../";

export class GiphyApi {
    static END_POINTS = {
        getGifFromTag: `/v1/gifs/random`
    };

    static getGifFromTag(tag) {
        return XHTTP(Config.host + GiphyApi.END_POINTS.getGifFromTag + "?" + APIUtils.toQueryString({tag:tag,api_key:Config.api_key,}),
        {
            method: "get",
        });
    }
}
