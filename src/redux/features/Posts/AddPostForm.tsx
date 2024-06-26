/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./PostSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTitleChanged = (e:any) => setTitle(e.target.value);
  const onContentChanged = (e:any) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section className="h-full m-5 p-10 text-center">
      <h2 className="text-3xl ">Add a New Post</h2>
      <form className="flex flex-col ">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" className="m-3 p-3 bg-blue-400 rounded-lg " onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
