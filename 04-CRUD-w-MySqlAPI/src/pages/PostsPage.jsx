import { useEffect, useState } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        // console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{JSON.stringify(post)}</div>
      ))}
    </div>
  );
};

export default PostsPage;
