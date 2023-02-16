import { type AppType } from "next/app";
import "../styles/globals.css";

if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
  import("../mocks")
    .then(async ({ setupMocks }) => {
      await setupMocks();
    })
    .catch((err) => {
      console.error(err);
    });
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
