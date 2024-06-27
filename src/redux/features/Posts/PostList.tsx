import { useAppSelector } from "../../hook";
import PostAuthor from "./PostAuthor";

import TimeAgo from "./TimeAgo";


const PostList = () => {
    const posts = useAppSelector(state => state.post);

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post =>(
        <article className="border border-slate-600 text-2xl m-10 rounded-lg p-10" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
                <PostAuthor userId ={post.userId}></PostAuthor>
                <TimeAgo timestamp={post.date}></TimeAgo>
            </p>
            {/* <ReactionAdded post={post}></ReactionAdded> */}
        </article>
    ))
    return (
        <div>
            <h2 className="text-3xl text-center">Posts</h2>
            {renderedPosts}
        </div>
    );
};

export default PostList;