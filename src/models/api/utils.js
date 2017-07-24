export class APIUtils {
    static toQueryString(obj) {
        var parts = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(i + "=" + obj[i]);
            }
        }
        return parts.join("&");
    }
}
