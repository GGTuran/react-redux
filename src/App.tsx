import { decrement, increment } from "./redux/features/CounterSlice";
import AddPostForm from "./redux/features/Posts/AddPostForm";
import PostList from "./redux/features/Posts/PostList";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className=" w-full m-5 p-5 flex justify-center items-center">
      <div className=" w-full flex-col justify-center items-center mx-auto m-20 p-25">
      <div className="flex items-center justify-center m-20 rounded-2xl w-[600px] mx-auto border border-purple-400 rounded-md bg-gray-200 p-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-blue-600 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
      </div>
      <main className="m-10 p-10 space-y-5 border border-gray-600 rounded-3xl ">
        <AddPostForm></AddPostForm>
        <PostList></PostList>
      </main>
      </div>
    </div>
  );
}

export default App;
