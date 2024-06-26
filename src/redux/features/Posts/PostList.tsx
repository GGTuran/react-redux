import { useAppSelector } from "../../hook";


const PostList = () => {
    const posts = useAppSelector(state => state.post);

    const renderedPosts = posts.map(post =>(
        <article className="border border-slate-600 text-2xl m-10 rounded-lg p-10" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
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