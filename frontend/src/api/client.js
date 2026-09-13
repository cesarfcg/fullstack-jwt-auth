const BASE_URL = "http://localhost:8080";

export async function registerUser(user) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (response.status === 409) {
    throw new Error("Usuário já cadastrado.");
  }
  if (!response.ok) {
    throw new Error("Erro ao cadastrar usuário");
  }

  return response.json();
}
export async function authenticateUser(credentials) {
  const basicAuth = btoa(`${credentials.username}:${credentials.password}`);
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Erro ao autenticar usuário");
  }

  return response.text();
}
export async function getUsers() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Não foi possível acessar a lista de users.");
  }

  return response.json();
}
export async function getUser() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Não foi possível acessar o perfil do usuário.");
  }

  return response.json();
}
