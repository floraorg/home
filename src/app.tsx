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
              <a href="/">
                <img src="https://sakura.rex.wf/linear/flora.tf" class="w-10 rounded-full" />
              </a>
              <a class="text-neutral-300 hover:text-neutral-100" href="/blog">
                blog
              </a>
            </div>
            <a class="text-neutral-300 hover:text-neutral-100" href="https://github.com/floraorg">
              github
            </a>
          </div>
          <div class="w-full h-[1px] my-4 bg-neutral-700"></div>
          <div class="grow">
            <Suspense>{props.children}</Suspense>
          </div>
          <div class="w-full h-[1px] my-4 bg-neutral-700"></div>
          <div class="flex w-full items-center justify-between">
            <a class="text-neutral-300 hover:text-neutral-100" href="https://github.com/floraorg">
              floraorg
            </a>
          </div>
        </main>
      )}>
      <FileRoutes />
    </Router>
  );
}
