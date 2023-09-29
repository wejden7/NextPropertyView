import Cookies from "js-cookie";
import api from "@/utils/api";

type props = {
  email: string;
  password: string;
};

export const loginApi = (data: props) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
  };

  return new Promise<User>((resolve, reject) =>
    api
      .post("/login", data, { headers })
      .then((result) => {
        Cookies.set("token", result.data.token, { expires: 7 });
        Cookies.set("refreshToken", result.data.refreshToken, { expires: 7 });
        resolve(result.data.user);
      })
      .catch((error) => reject(error))
  );
};

type registerProps = {
  email: string;
  password: string;
  name: String;
  telephone_number: String;
  id_number: String;
  role: number;
};

export const signUp = (data: registerProps) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
  };

  return new Promise((resolve, reject) =>
    api
      .post("/register", data, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => reject(error))
  );
};

export const forgetPassword = (data: { email: string }) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
  };

  return new Promise((resolve, reject) =>
    api
      .post("/forgot-password", data, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => reject(error))
  );
};

type resetProps = {
  token: string;
  password: string;
};

export const resetPassword = (data: resetProps) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
  };

  return new Promise((resolve, reject) =>
    api
      .post("/reset-password", data, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => reject(error))
  );
};

export const CheckToken = (token: string | undefined) => {
  console.log("CheckToken start");

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };

  const option: RequestInit = { headers, cache: "no-store" };
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  return new Promise<string>(async (resolve, reject) => {
    if (!token) {
      reject(false);
      return;
    }
    const response = await fetch(url + "/api/check-token", option);

    if (!response.ok) {
      reject(false);
      return;
    }

    const data = await response.json();
    console.log("CheckToken start 2");
    resolve(token);
  });
};

export const RefreshToken = (refreshToken: string) => {
  console.log("RefreshToken start");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
  };

  const data = { token: refreshToken };

  const option: RequestInit = {
    method: "POST",
    headers,
    cache: "no-store",
    body: JSON.stringify(data),
  };
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  return new Promise<string>(async (resolve, reject) => {
    const response = await fetch(url + "/api/refresh-token", option);

    if (!response.ok) {
      reject(false);
      return;
    }

    const data = await response.json();
    console.log("RefreshToken start 1");

    resolve(data?.accessToken);
  });
};

export const isAdmin = (token: string) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };

  const option: RequestInit = { headers, cache: "no-store" };
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  return new Promise(async (resolve, reject) => {
    const response = await fetch(url + "/api/isadmin", option);

    if (!response.ok) {
      reject(false);
      return;
    }

    const data = await response.json();

    resolve(data);
  });
};

export const getUserApi = (token: string) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };

  const option: RequestInit = { method: "GET", headers, cache: "no-store" };
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  return new Promise<User>(async (resolve, reject) => {
    const response = await fetch(url + "/api/profile", option);

    if (!response.ok) {
      reject(false);
      return;
    }

    const data = await response.json();

    resolve(data);
  });
};

export const updateUserApi = (data: any, token: string) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };

  const option: RequestInit = {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
    cache: "no-store",
  };
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  return new Promise<User>(async (resolve, reject) => {
    const response = await fetch(url + "/api/profile", option);

    if (!response.ok) {
      reject(false);
      return;
    }
    const {user} = await response.json();
   
    resolve(user);
  });
};
