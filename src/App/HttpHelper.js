
const BaseUrl = 'http://localhost';
const BasePort = 8080;

export function GetUrl(url) {
    return `${BaseUrl}:${BasePort}/${url}`;
}

/**
 * Get method
 */
export async function Get(url) {

    const Url = GetUrl(url);

    const res = await fetch(Url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    let status = res.status;
    let body = status !== 500 ? await res.json() : null;
    return { status, body };
};

/**
 * Post method
 */
export async function Post(url, newData) {

    const Url = GetUrl(url);

    const res = await fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData)
    });
    let status = res.status;

    let body = status !== 500 ? await res.json() : null;

    return { status, body };
}




