import { decrement, increment } from "./redux/features/CounterSlice";
import AddPostForm from "./redux/features/Posts/AddPostForm";
import PostList from "./redux/features/Posts/PostList";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-400 rounded-md bg-gray-200 p-10">
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
      <main className="m-10 p-10 border border-gray-600 rounded-3xl ">
        <AddPostForm></AddPostForm>
        <PostList></PostList>
      </main>
    </div>
  );
}

export default App;
