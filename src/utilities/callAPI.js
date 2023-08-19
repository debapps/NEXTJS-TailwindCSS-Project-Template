// Get the API HOST from environment variable.
const apiHost = process.env.NEXT_PUBLIC_API_HOST;

export async function apiGET(
    endPoint,
    cacheOption = { next: { revalidate: 30 } }
) {
    // Build the URL.
    const url = apiHost + endPoint;

    // Fetch the post
    let response = await fetch(url, cacheOption).then((res) => res.json());

    // Return the response.
    return response;
}

export async function apiPOST(endPoint, story) {
    // Build the URL.
    const url = apiHost + endPoint;

    // Set the API options.
    const options = {
        method: "POST",
        mode: "cors",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(story),
    };

    try {
        // Call the API.
        let response = await fetch(url, options);

        // Returns the response.
        const status = response.status;
        const message = await response.json();
        const reply = {
            status,
            ...message,
        };

        return reply;
    } catch (error) {
        return error;
    }
}

export async function apiDELETE(endPoint) {
    // Build the URL.
    const url = apiHost + endPoint;

    // Set the API option.
    const options = {
        method: "DELETE",
        mode: "cors",
        headers: new Headers({ "Content-Type": "application/json" }),
    };

    try {
        // Call the API.
        let response = await fetch(url, options);

        // Returns the response.
        const status = response.status;
        const message = await response.json();
        const reply = {
            status,
            ...message,
        };

        return reply;
    } catch (error) {
        return error;
    }
}
