import { Component, createSignal, createEffect } from 'solid-js';

interface AsciiArtConverterProps {
  filename: string;
}

const AsciiArtConverter: Component<AsciiArtConverterProps> = (props) => {
  const [ascii, setAscii] = createSignal<string>('');
  let canvasRef: HTMLCanvasElement | undefined;

  const toGrayScale = (r: number, g: number, b: number, a: number): number | null => {
    // Return null for transparent pixels (alpha < 0.1)
    if (a < 25.5) { // 25.5 is 10% of 255
      return null;
    }
    return 0.21 * r + 0.72 * g + 0.07 * b;
  };

  const getFontRatio = (): number => {
    const pre = document.createElement('pre');
    pre.style.display = 'inline';
    pre.textContent = ' ';
    document.body.appendChild(pre);
    const { width, height } = pre.getBoundingClientRect();
    document.body.removeChild(pre);
    return height / width;
  };

  const convertToGrayScales = (
    context: CanvasRenderingContext2D, 
    width: number, 
    height: number
  ): (number | null)[] => {
    const imageData = context.getImageData(0, 0, width, height);
    const grayScales: (number | null)[] = [];
    
    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      const a = imageData.data[i + 3];
      const grayScale = toGrayScale(r, g, b, a);
      
      if (grayScale !== null) {
        imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;
      }
      grayScales.push(grayScale);
    }
    
    context.putImageData(imageData, 0, 0);
    return grayScales;
  };

  const MAXIMUM_WIDTH = 80;
  const MAXIMUM_HEIGHT = 80;

  const clampDimensions = (width: number, height: number): [number, number] => {
    const rectifiedWidth = Math.floor(getFontRatio() * width);
    if (height > MAXIMUM_HEIGHT) {
      const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);
      return [reducedWidth, MAXIMUM_HEIGHT];
    }
    if (width > MAXIMUM_WIDTH) {
      const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);
      return [MAXIMUM_WIDTH, reducedHeight];
    }
    return [rectifiedWidth, height];
  };

  const grayRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
  const rampLength = grayRamp.length;

  const getCharacterForGrayScale = (grayScale: number | null): string => {
    if (grayScale === null) {
      return ' '; // Return blank space for transparent pixels
    }
    return grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];
  };

  const drawAscii = (grayScales: (number | null)[], width: number): void => {
    const ascii = grayScales.reduce((asciiImage: string, grayScale: number | null, index: number) => {
      let nextChars = getCharacterForGrayScale(grayScale);
      if ((index + 1) % width === 0) {
        nextChars += '\n';
      }
      return asciiImage + nextChars;
    }, '');
    setAscii(ascii);
  };

  const processImage = (imageSrc: string): void => {
    const image = new Image();
    image.onload = () => {
      if (!canvasRef) return;
      
      const context = canvasRef.getContext('2d');
      if (!context) {
        console.error('Could not get 2D context from canvas');
        return;
      }

      const [width, height] = clampDimensions(image.width, image.height);
      canvasRef.width = width;
      canvasRef.height = height;
      
      // Clear canvas with transparent background
      context.clearRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);
      
      const grayScales = convertToGrayScales(context, width, height);
      drawAscii(grayScales, width);
    };

    image.onerror = (error) => {
      console.error('Error loading image:', error);
    };

    image.src = imageSrc;
  };

  createEffect(() => {
    if (props.filename) {
      processImage(props.filename);
    }
  });

  return (
    <div>
      <canvas 
        ref={canvasRef} 
        style={{ display: 'none' }}
      />
      <pre 
        style={{ 
          "font-family": "monospace",
          "line-height": "1",
          "letter-spacing": "0",
          "font-size": "5.6px",
          "white-space": "pre",
          "background": "transparent"
        }}

        class='text-rose-600 select-none'
      >
        {ascii()}
      </pre>
    </div>
  );
};

export default AsciiArtConverter;