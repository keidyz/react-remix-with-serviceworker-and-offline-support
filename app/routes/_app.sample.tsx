import { LoaderFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs, useLoaderData, useNavigate } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  console.log("running sample server loader")
  return { message: "from sample server loader" }
};

export const clientLoader = async ({
  serverLoader,
}: ClientLoaderFunctionArgs) => {
  console.log("running sample client loader")
  const serverData = await serverLoader();
  return serverData;
};

clientLoader.hydrate=true

export default function Route() {
  const navigate = useNavigate();
  const loaderData = useLoaderData();

  return (
    <div>
      <div>In _App.sample</div>
      <div>{`Loader data: ${JSON.stringify(loaderData)}`}</div>
      <button onClick={() => navigate("/")}>Go to the index route</button>
    </div>
  );
}