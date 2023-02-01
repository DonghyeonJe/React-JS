// import Button from "./Button";
// import styles from "./App.module.css";

import { useState, useEffect } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("Im here!");
//   });
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    console.log("CALL THE API.....");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me </button>
    </div>
    //   // <div>
    //   //   <h1 className={styles.title}>Welcome back!</h1>
    //   //   <Button text={"Continue"} />
    //   //   <Button className={styles.btn} text={"red"} />
    //   // </div>
  );
}

export default App;
