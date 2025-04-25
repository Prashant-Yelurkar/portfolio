
import { useEffect, useRef } from "react";

export default function ImageCanvas({ src }) {
    const canvasRef = useRef(null);
    console.log(src);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const img = new Image();
        img.src = src.src;

        img.onload = () => {
            ctx.drawImage(img, 0, 0, 'auto', 'auto');
        };
    }, [src]);

    return (
        <canvas
            ref={canvasRef}
            width={"auto"}
            height={"auto"}
            onContextMenu={(e) => e.preventDefault()}
            style={{ display: "block" }}
        />
    );
}
