import { HttpStatusCode } from "@solidjs/start";

export default function Error404() {
  return (
    <>
      <p class="p-8 text-center">404 not found</p>
      <HttpStatusCode code={404} />
    </>
  );
}
