import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
}

fetchPosts()
  .then((posts) => {
    console.log(posts[0]?.title ?? "No posts found");
  })
  .catch((error: unknown) => {
    console.error("Не вдалося завантажити пости:", error);
  });
