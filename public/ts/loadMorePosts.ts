import { nextLoadState } from "./state";

export const nextPosts = async (): Promise<string> => {
  try {
    const posts = await fetch(
      `http://localhost:5000/loadNext?page=${nextLoadState.page}&offset=${nextLoadState.offset}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
