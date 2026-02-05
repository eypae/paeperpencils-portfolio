'use client';
import { useEffect, useRef } from 'react';
import React from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLImageElement>(null);
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current!;
        let rafId: number;

        // Track mouse
        const move = (e: MouseEvent) => {
            pos.current.x = e.clientX;
            pos.current.y = e.clientY;
        };

        // Render loop: zero lag
        const render = () => {
            // Adjust offsets so tip is aligned
            // Example: for 32x32 px PNG, tip at top-center
            const offsetX = 16; // center horizontally
            const offsetY = 4;  // tip is near top
            cursor.style.transform = `translate3d(${ pos.current.x - offsetX }px, ${ pos.current.y - offsetY }px, 0)`;
            rafId = requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', move);
        render();

        return () => {
            window.removeEventListener('mousemove', move);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <img
            ref={ cursorRef }
            src="/images/cursor.png"
            className="fixed top-0 left-0 z-[9999] pointer-events-none w-8 h-8"
            style={ { transform: 'translate3d(-50%, -50%, 0)' } }
            alt="Custom cursor"
        />
    );
};
export default CustomCursor;
