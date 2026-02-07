'use client';
import { useEffect, useRef, useState } from 'react';
import React from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLImageElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const [isClickable, setIsClickable] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current!;
        let rafId: number;

        // Track mouse
        const move = (e: MouseEvent) => {
            pos.current.x = e.clientX;
            pos.current.y = e.clientY;
        };

        // Detect hover on clickable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check if the element itself or any parent is a link/button/clickable
            if (target.closest('a, button,[role="button"]')) {
                setIsClickable(true);
            } else {
                setIsClickable(false);
            }
        };

        const handleMouseOut = () => setIsClickable(false);

        // Render loop: update cursor position
        const render = () => {
            const offsetX = 16; // center horizontally
            const offsetY = 4; // center vertically
            cursor.style.transform = `translate3d(${ pos.current.x - offsetX }px, ${ pos.current.y - offsetY }px, 0)`;
            rafId = requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);
        render();

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <img
            ref={ cursorRef }
            src={ isClickable ? '/images/pointer.png' : '/images/cursor.png' }
            className="fixed top-0 left-0 z-9999 pointer-events-none w-8 h-8"
            style={ { transform: 'translate3d(-50%, -50%, 0)' } }
            alt="Custom cursor"
        />
    );
};

export default CustomCursor;