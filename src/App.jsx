// import { useGetPostsQuery, useCreatePostsMutation } from "./services/JsonPlaceholderAPI"
// import { useState } from "react"

// function App() {
//   const [newPost, setNewPost] = useState({title: '', body: '', id: 99999});

//   const { data = [], error, isLoading } = useGetPostsQuery()
//   const [createPost, {isLoading: isCreating, error: createError}] = useCreatePostsMutation()


//   if (isLoading) return <p>Loading...</p>

//   if (createError) return <p>There was an error creating the post</p>

//   if (error) return <p>There was an error </p>

//   const handelCreatePost = async () => {
//     await createPost(newPost);
//     setNewPost({title: '', body: '', id: 99999});
//   }
//   return (
//     <>
//       <div>
//         <input type="text" placeholder="Title" onChange={(e) => setNewPost((prev) => ({...prev, title: e.target.value}))}/>
//         <input type="text" placeholder="Body" onChange={(e) => setNewPost((prev) => ({...prev, body: e.target.value}))} />
//         <button onClick={handelCreatePost} disabled={isCreating}>create post</button>
//       </div>

//       {data.map((post) => (
//         <div key={post.id} className="post">
//           <h3>{post.title}</h3>
//           <p>{post.body}</p>
//         </div>
//       ))} 
//     </>
//   )
// }

// export default App

import { useState } from "react";
import {
  useGetPostsQuery,
  useCreatePostsMutation,
} from "./services/JsonPlaceholderAPI";

function App() {
  const { data = [], isLoading, error } = useGetPostsQuery();
  const [createPost] = useCreatePostsMutation();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreatePost = async () => {
    if (!title || !body) return;

    await createPost({
      title,
      body,
      userId: 1,
    });

    setTitle("");
    setBody("");
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There was an error loading posts.</p>;

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button onClick={handleCreatePost}>Create Post</button>

      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
