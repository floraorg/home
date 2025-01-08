import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <main class="min-h-screen bg-neutral-950">
          <Suspense>{props.children}</Suspense>
          <div class="retro absolute top-0 left-0 h-full w-full pointer-events-none"></div>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
