export async function GET() {
  const res =  {
    message: "A success message is getting logged!",
  };
  return new Response(JSON.stringify({res}));
}
