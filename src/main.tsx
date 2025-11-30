import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializePersonalize } from "./lib/personalize";

initializePersonalize();

createRoot(document.getElementById("root")!).render(<App />);
