
export function XHTTP(url, params) {
    return new Promise((resolve, reject) => {
        fetch(url, params)
            .then(response => {
                if (response.status < 400) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}
