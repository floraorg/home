import { Component, createSignal, onMount } from 'solid-js';

interface AsciiArtComponentProps {
  imagePath: string;
  maxWidth?: number;
  maxHeight?: number;
}

const AsciiArtComponent: Component<AsciiArtComponentProps> = (props) => {
  const [asciiArt, setAsciiArt] = createSignal('');

  onMount(() => {
    const img = new Image();
    img.src = props.imagePath;
    img.onload = () => {
      setAsciiArt(imageToAscii(img, props.maxWidth ?? 500, props.maxHeight ?? 1000));
    };
  });

  const imageToAscii = (img: HTMLImageElement, maxWidth: number, maxHeight: number) => {
    const chars = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.'];
    const canvas = document.createElement('canvas');
    const aspectRatio = img.width / img.height;
    const width = Math.min(img.width, maxWidth);
    const height = Math.min(img.height, maxHeight);
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0, width, height);
    const data = ctx.getImageData(0, 0, width, height).data;
    let art = '';
    const saturation = 1;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4;
        const r = Math.min(255, data[i] * saturation);
        const g = Math.min(255, data[i + 1] * saturation);
        const b = Math.min(255, data[i + 2] * saturation);
        const a = data[i + 3];
        if (a === 0) {
          art += ' ';
        } else {
          art += chars[Math.floor((r + g + b) / 3 / 255 * (chars.length - 1))];
        }
      }
      art += '\n';
    }
    return art;
  };

  return (
    <div class="ascii-art-container text-[4px] leading-[2px] text-rose-400/50 mt-12  text-center">
      <pre class="ascii-art">{asciiArt()}</pre>
    </div>
  );
};

export default AsciiArtComponent;
