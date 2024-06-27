/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/UserSlice";


const PostAuthor = ({ userId }:any) => {

    const users = useSelector(selectAllUsers);

    const author = users.find((user) => user.id === userId);
    return (
        <span>
            by{author ? author.name : 'Unknown author '}
        </span>
    );
};

export default PostAuthor;