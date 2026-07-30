"use client";

import React, { useMemo, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  scrub?: boolean | number;
  delay?: number;
  tag?: React.ElementType;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1.2,
  ease = 'power3.out',
  scrollStart = 'top bottom-=20%',
  scrollEnd = 'bottom center',
  stagger = 0.02,
  scrub = false,
  delay = 0,
  tag: Tag = 'h2',
}) => {
  const containerRef = useRef<any>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/\s+/)) {
        return <span key={index}>{word}</span>;
      }
      return (
        <span className="inline-block" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const charElements = el.querySelectorAll('.inline-block');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        y: 40,
        scaleY: 1.1,
        transformOrigin: 'bottom center'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        y: 0,
        scaleY: 1,
        stagger: stagger,
        delay: delay,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: scrub,
          once: !scrub
        }
      }
    );
  }, {
    dependencies: [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, scrub, delay, children],
    scope: containerRef
  });

  return (
    <Tag ref={containerRef} className={`my-2 flex flex-wrap ${containerClassName}`}>
      <span className={`inline-block ${textClassName}`}>{splitText}</span>
    </Tag>
  );
};

export default ScrollFloat;
