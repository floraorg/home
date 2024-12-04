import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {Suspense} from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <main class="main min-h-screen flex flex-col">
          <div class="flex w-full items-center justify-between">
            <div class="flex text-neutral-300 gap-4 items-center">
              <a href="/" class="group">
                <img src="https://sakura.rex.wf/linear/flora.tf" class="w-10 rounded-full transition-transform duration-200 group-hover:scale-110" alt="Flora logo" />
              </a>
              <a class="text-neutral-300 hover:text-neutral-100 transition-colors duration-200" href="/blog">
                blog
              </a>
            </div>
            <a class="text-neutral-300 hover:text-neutral-100 transition-colors duration-200" href="https://github.com/floraorg">
              github
            </a>
          </div>
          <div class="divider"></div>
          <div class="grow mdx-content">
            <Suspense fallback={<div class="flex items-center justify-center min-h-screen"></div>}>{props.children}</Suspense>
          </div>
          <div class="divider"></div>
          <div class="flex w-full items-center justify-between">
            <div class="flex w-full items-center justify-between">
              <a class="text-neutral-300 hover:text-neutral-100 transition-colors duration-200" href="https://github.com/floraorg">
                floraorg
              </a>
              {/* idk change this, built with ❤️ by ___ maybe */}
              <span class="text-neutral-300">built with ❤️</span>
            </div>
          </div>
        </main>
      )}>
      <FileRoutes />
    </Router>
  );
}
