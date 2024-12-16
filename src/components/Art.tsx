import { Component, createSignal, onMount, onCleanup } from "solid-js";

interface AsciiArtComponentProps {
  imagePath: string;
  maxWidth?: number;
  maxHeight?: number;
}

const AsciiArtComponent: Component<AsciiArtComponentProps> = (props) => {
  const chars = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."];
  const [asciiArt, setAsciiArt] = createSignal("");
  const [scale, setScale] = createSignal(1);
  const [windowWidth, setWindowWidth] = createSignal(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  const imageToAscii = (
    img: HTMLImageElement,
    maxWidth: number,
    maxHeight: number,
  ) => {
    const canvas = new OffscreenCanvas(
      Math.min(img.width, maxWidth),
      Math.min(img.height, maxHeight),
    );
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let art = "";
    const step = 1;
    const saturation = 1.2;

    for (let y = 0; y < canvas.height; y += step) {
      let rowArt = "";
      for (let x = 0; x < canvas.width; x += step) {
        const i = (y * canvas.width + x) * 4;
        const r = Math.min(255, data[i] * saturation);
        const g = Math.min(255, data[i + 1] * saturation);
        const b = Math.min(255, data[i + 2] * saturation);
        const a = data[i + 3];

        if (a === 0) {
          rowArt += " ";
        } else {
          // More nuanced brightness calculation
          const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          const charIndex = Math.floor(brightness * (chars.length - 1));
          rowArt += chars[charIndex];
        }
      }
      art += rowArt + "\n";
    }

    return art;
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      const img = new Image();
      img.src = props.imagePath;
      img.onload = () => {
        setAsciiArt(
          imageToAscii(img, props.maxWidth ?? 500, props.maxHeight ?? 1000),
        );
      };

      const handleResize = () => {
        setScale(window.devicePixelRatio || 1);
        setWindowWidth(window.innerWidth);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      window.addEventListener("zoom", handleResize);

      onCleanup(() => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("zoom", handleResize);
      });
    }
  });

  // Responsive font sizing logic
  const calculateFontSize = () => {
    const width = windowWidth();
    if (width < 640) {
      return `${2.3 / scale()}px`;
    } else if (width < 768) {
      return `${2.4 / scale()}px`;
    }
    return `${2.5 / scale()}px`;
  };

  return (
    <div
      class="ascii-art-container absolute text-center text-rose-500 md:text-rose-600/90 overflow-hidden"
      style={{
        "font-size": calculateFontSize(),
        "line-height": `${1.2 / scale()}px`,
        "letter-spacing": `0`,
        "font-family": "monospace",
        "white-space": "pre",
        "max-width": "100%",
        "overflow-x": "auto",
        display: "inline-block",
      }}
    >
      <pre
        class="ascii-art select-none overflow-hidden"
        style={{
          margin: "0",
          padding: "0",
          "min-width": "100%",
        }}
      >
        {asciiArt()}
      </pre>
    </div>
  );
};

export default AsciiArtComponent;
