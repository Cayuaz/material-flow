const BASE_URL = "https://material-flow.onrender.com";

export async function apiFetch(endpoint: string, options?: RequestInit) {
  const url = `${BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    return false;
  }

  return response.json();
}
