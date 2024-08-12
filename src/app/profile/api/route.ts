import { NextRequest } from "next/server";
import { headers } from "next/headers";
// import { cookies } from "next/headers";

export const GET = async (request: NextRequest, { params }: {params: { id: string }}) => {
  const requestHeader = new Headers(request.headers);
  const headerList = headers();

  const theme = request.cookies.get("theme");
  console.log('theme cookie', theme);

  // cookies().set("result", "20"); // another eg how to set and get the cookies
  // cookies().get("result")

  return new Response(
    "<h1>Profile Api data</h1>",
    {
      headers: {
        "Content-type": "text/html",
        "Set-cookie": "theme=dark"
      }
    }
  );
}