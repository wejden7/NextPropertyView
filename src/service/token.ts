import Cookies from "js-cookie";
import { CheckToken, RefreshToken } from "@/service/auth";
import type { NextRequest } from "next/server";

type props = {
  token: string | undefined;
  refrechtoken: string;
};

const getToken = async ({ token, refrechtoken }: props) => {
  return new Promise<string>((resolve, reject) => {
    CheckToken(token)
      .then((result) => result)
      .catch((error) => RefreshToken(refrechtoken!))
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

export const getClientToken = async () => {
  const token = Cookies.get("token");
  const refrechtoken = Cookies.get("refreshToken");

  return new Promise<string>((resolve, reject) => {
    if (refrechtoken) {
      getToken({ token, refrechtoken })
        .then((result) => {
          Cookies.set("token", result, { expires: 7 });
          resolve(result);
        })
        .catch(() => reject());
    } else reject();
  });
};

export const getServerToken = async (request: NextRequest) => {
  const token = request.cookies.get("token")?.value;
  const refrechtoken = request.cookies.get("refreshToken")?.value;

  return new Promise<string>((resolve, reject) => {
    if (refrechtoken) {
      getToken({ token, refrechtoken })
        .then((result) => {
          request.cookies.set("token", result);
          resolve(result);
        })
        .catch(() => reject());
    } else reject();
  });
};
