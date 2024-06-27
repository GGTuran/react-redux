/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./PostSlice";
import { selectAllUsers } from "../users/UserSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e:any) => setTitle(e.target.value);
  const onContentChanged = (e:any) => setContent(e.target.value);
  const onAuthorChanged = (e:any) => setUserId(e.target.value);


  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(userId);

  const userOptions: any = users.map((user: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
    <option key={user.id} value={users.id}>{user.name}</option>
  ))
  return (
    <section className="h-full p-10 text-center">
      <h2 className="text-3xl m-2">Add a New Post</h2>
      <form className="flex flex-col ">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          className="w-[500px] h-[35px] rounded-xl mx-auto bg-slate-200"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select className="w-[500px] h-[35px] rounded-xl mx-auto bg-slate-200" id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
        className="w-[500px] h-[200px] mx-auto bg-slate-200"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button disabled={!canSave} type="button" className="w-[130px] mx-auto rounded-xl m-3 p-3 bg-blue-400 rounded-lg " onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
