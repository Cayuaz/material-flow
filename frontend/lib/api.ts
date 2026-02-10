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
    // const errorData = await response.json();
    // throw new Error(errorData.message || "Erro na requisição");
    return false;
  }

  return response.json(); // Já retorna o objeto pronto
}
//ex:
// const response = await apiFetch("/materials", {
//   method: "POST", // Precisa ser string
//   body: JSON.stringify(data), // Corrigido o typo do stringify
// });
