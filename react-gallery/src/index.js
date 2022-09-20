import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { usePromiseTracker } from "react-promise-tracker";
import "./css/index.css";
import App from "./Components/App";

// const LoadingIndicator = (props) => {
//   const { promiseInProgress } = usePromiseTracker();
//   return (
//     promiseInProgress && (
//       <div className="loader">
//         <img
//           src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
//           alt="Loading..."
//         />
//       </div>
//     )
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
