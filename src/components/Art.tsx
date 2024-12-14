import { Component, createSignal, onMount, onCleanup } from "solid-js";

interface AsciiArtComponentProps {
  imagePath: string;
  maxWidth?: number;
  maxHeight?: number;
}

const AsciiArtComponent: Component<AsciiArtComponentProps> = (props) => {
  const [asciiArt, setAsciiArt] = createSignal("");
  const [scale, setScale] = createSignal(1);

  const imageToAscii = (
    img: HTMLImageElement,
    maxWidth: number,
    maxHeight: number,
  ) => {
    const chars = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."];
    const canvas = document.createElement("canvas");
    const width = Math.min(img.width, maxWidth);
    const height = Math.min(img.height, maxHeight);
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0, width, height);
    const data = ctx.getImageData(0, 0, width, height).data;
    let art = "";
    const saturation = 1;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4;
        const r = Math.min(255, data[i] * saturation);
        const g = Math.min(255, data[i + 1] * saturation);
        const b = Math.min(255, data[i + 2] * saturation);
        const a = data[i + 3];
        if (a === 0) {
          art += " ";
        } else {
          art +=
            chars[Math.floor(((r + g + b) / 3 / 255) * (chars.length - 1))];
        }
      }
      art += "\n";
    }
    return art;
  };

  onMount(() => {
    const img = new Image();
    img.src = props.imagePath;
    img.onload = () => {
      setAsciiArt(
        imageToAscii(img, props.maxWidth ?? 500, props.maxHeight ?? 1000),
      );
    };

    const handleResize = () => {
      setScale(window.devicePixelRatio || 1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("zoom", handleResize);

    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("zoom", handleResize);
    });
  });

  return (
    <div
      class="ascii-art-container absolute text-center text-rose-800/90"
      style={{
        "font-size": `${2.5 / scale()}px`,
        "line-height": `${1.2 / scale()}px`,
        "letter-spacing": `0`,
        "font-family": "monospace",
        "white-space": "pre",
        display: "inline-block",
      }}
    >
      <pre
        class="ascii-art select-none"
        style={{
          margin: "0",
          padding: "0",
        }}
      >
        {asciiArt()}
      </pre>
    </div>
  );
};

export default AsciiArtComponent;
