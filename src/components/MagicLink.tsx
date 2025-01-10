import { Component, createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";

interface MagicLinkProps {
  href: string;
  previewImage: string;
  children: any;
}

const MagicLink: Component<MagicLinkProps> = (props) => {
  const [showPreview, setShowPreview] = createSignal(false);
  const [position, setPosition] = createSignal({ x: 0, y: 0 });
  let linkRef: HTMLAnchorElement | undefined;

  const handleMouseEnter = () => {
    if (!linkRef) return;
    const rect = linkRef.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + 30,
    });
    setShowPreview(true);
  };

  return (
    <>
      <a ref={linkRef} href={props.href} class="link hover:underline relative" onMouseEnter={handleMouseEnter} onMouseLeave={() => setShowPreview(false)}>
        {props.children}
      </a>

      <Show when={showPreview()}>
        <Portal>
          <div
            class="fixed z-50 transform transition -translate-x-1/2 pointer-events-none"
            style={{
              left: `${position().x}px`,
              top: `${position().y}px`,
              transition: "opacity 0.2s ease-in-out",
              opacity: showPreview() ? "1" : "0",
            }}>
            <div class="bg-neutral-900 p-1 rounded-lg shadow-2xl">
              <img src={props.previewImage} alt="Preview" class="rounded w-96 h-auto" style="max-height: 12rem" />
            </div>
          </div>
        </Portal>
      </Show>
    </>
  );
};

export default MagicLink;
