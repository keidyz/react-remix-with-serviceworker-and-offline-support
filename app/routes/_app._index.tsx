import { LoaderFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs, useLoaderData, useNavigate } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  console.log("running index server loader")
  return { message: "from index server loader" }
};

export const clientLoader = async ({
  serverLoader,
}: ClientLoaderFunctionArgs) => {
  console.log("running index client loader")
  const serverData = await serverLoader();
  return serverData;
};

clientLoader.hydrate=true

export default function Route() {
  const loaderData = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <div>In _App._index</div>
      <div>{`Loader data: ${JSON.stringify(loaderData)}`}</div>
      <button onClick={() => navigate("/sample")}>Go to the sample route</button>
    </div>
  );
}