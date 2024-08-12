// export const GET = async () => {
//   return Response.json({
//     time: new Date().toLocaleTimeString(),
//   })
// }
// this will show time only at first render. If I update the page I'll see the previous time which was provide at first render

export const dynamic = "force-dynamic";

export const GET = async () => {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  })
}