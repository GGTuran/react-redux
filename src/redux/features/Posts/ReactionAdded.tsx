import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕',
};



const ReactionAdded = ({ post }) => {

    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return(
            <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() => 
                dispatch(reactionAdded({ postId: post.id, reaction: name  }))
            }
            >
                {emoji} {post.reaction[name]}
            </button>
        )
    })

  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionAdded