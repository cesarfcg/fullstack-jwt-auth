const BASE_URL = "http://localhost:8080";

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}
export async function registerUser(user) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar usuário");
  }

  return response.json();
}
