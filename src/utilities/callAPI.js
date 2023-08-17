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
