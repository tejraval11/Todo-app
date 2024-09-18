import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [done, setDone] = useState("Mark As Done");
  const [color, setColor] = useState("bg-slate-400");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() && desc.trim()) {
     
      setMainTask([...mainTask, { title, desc }]);
    
      setTitle('');
      setDesc('');
    } else {
      alert('Please provide both a title and description.');
    }
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };
  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i} className="flex items-center justify-between mb-5">
            <div className="flex justify-between w-2/3">
              <h5 className="text-2xl font-semibold">{t.title}</h5>
              <h6 className="text-xl font-semibold">{t.desc}</h6>
              <div className="flex">
                <button
                  onClick={() => {
                    deleteHandler(i);
                  }}
                  className="bg-red-500 text-white font-bold px-4 py-2 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setDone("Done");
                    setColor("bg-green-500");
                  }}
                  className={`${color} text-white font-bold px-4 py-2 ml-2 rounded`}
                >
                  {done}
                </button>
              </div>
            </div>
          </li>
        </>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          className="text2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Title Here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={desc}
          className="text2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Description Here"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Add Todo
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;
