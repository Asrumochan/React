import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-400 ">
      <form className="w-8/12 h-56 bg-slate-600 flex flex-col shadow-xl">
        <h1 className="mx-auto my-3 font-serif text-cyan-200 font-extrabold text-2xl">
          Login
        </h1>
        <label className="block text-cyan-50 mx-1">Email:</label>
        <input
          className="border-1 rounded border-none mx-1 focus:outline-none  bg-slate-300 text-slate-900"
          type="text"
        />
        <label className="block text-cyan-50 mx-1">Password:</label>
        <input
          className="border-1 rounded border-none mx-1 focus:outline-none focus:ring-0 bg-slate-300 text-slate-900"
          type="text"
        />
        <button
          type="submit"
          className="text-fuchsia-200 bg-orange-500 w-1/4 mx-auto my-5 rounded-full p-1 hover:bg-orange-400 hover:text-pink-100 shadow-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
