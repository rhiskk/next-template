import { type NextPage } from "next";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.skeleton.hello.useQuery({ text: "from API" });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-red-700 to-red-800">
        <div className="container flex flex-col items-center justify-center gap-14">
          <h1 className="border-red-900 text-6xl font-bold text-black">
            Hello world!
          </h1>
          <p className="text-2xl font-medium text-black">
            {hello.data ? hello.data.greeting : "Loading..."}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
