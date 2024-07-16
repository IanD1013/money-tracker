import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  function addNewTransaction() {}

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>

      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={"+200 new samsung tv"}
          ></input>
          <input
            value={datetime}
            onChange={(ev) => setDateTime(ev.target.value)}
            type="datetime-local"
          ></input>
        </div>

        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            placeholder="description"
          ></input>
        </div>

        <button type="submit">Add new transcation</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for new TV</div>
          </div>

          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">It was time for new TV</div>
          </div>

          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It was time for new TV</div>
          </div>

          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
