import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const divHtml = document.querySelector("#root");
const root = createRoot(divHtml);
root.render(<App />);
