import { nextLoadState } from "./state";

const endpointURL = "https://postit-jui9.onrender.com";

export const nextPosts = async (): Promise<string> => {
  try {
    const posts = await fetch(
      `${endpointURL}/loadNext?page=${nextLoadState.page}&offset=${nextLoadState.offset}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": endpointURL,
        },
      }
    );

    if (!posts.ok) return "";

    const htmlContent = await posts.text();

    nextLoadState.offset = nextLoadState.offset + 10;
    nextLoadState.page++;

    console.log(htmlContent);

    return htmlContent;
  } catch (error) {
    console.log(error);
    return "";
  }
};
