"use server";

import { cookies } from "next/headers";

export async function createCookie(session?: string) {
  if (session) {
    cookies().set({
      name: "name",
      value: session,
      httpOnly: true,
      secure: true,
      path: "/",
    });
  }
}

export async function deleteCookie() {
  cookies().set({
    name: "session",
    value: "",
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: -1,
  });
}
