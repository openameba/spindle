import React, { useState, useRef } from 'react';

import { QuestionmarkCircleFill } from '../Icon';
import { Toggletip } from './Toggletip';

export function TopRight() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onMouseOver = () => {
    setOpen(true);
  };
  const onMouseOut = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '88px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Toggletip.Frame>
          <div
            style={{ anchorName: '--toggletip1' }}
            aria-controls="toggletip-menu-example1"
            aria-expanded={open}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            ref={triggerRef}
            id="toggletip1"
          >
            <QuestionmarkCircleFill width={24} height={24} />
          </div>
          <Toggletip.Body
            onClose={onMouseOut}
            open={open}
            triggerRef={triggerRef}
            position="topRight"
            variant="text"
          >
            <Toggletip.Label>ここに補足の説明を表示</Toggletip.Label>
          </Toggletip.Body>
        </Toggletip.Frame>
      </div>
    </div>
  );
}

export function TopCenter() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onMouseOver = () => {
    setOpen(true);
  };
  const onMouseOut = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '88px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Toggletip.Frame>
          <div
            style={{ anchorName: '--toggletip2' }}
            aria-controls="toggletip-menu-example2"
            aria-expanded={open}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            ref={triggerRef}
            id="toggletip2"
          >
            <QuestionmarkCircleFill width={24} height={24} />
          </div>
          <Toggletip.Body
            onClose={onMouseOut}
            open={open}
            triggerRef={triggerRef}
            position="topCenter"
            variant="text"
          >
            <Toggletip.Label>ここに補足の説明を表示</Toggletip.Label>
          </Toggletip.Body>
        </Toggletip.Frame>
      </div>
    </div>
  );
}

export function TopLeft() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onMouseOver = () => {
    setOpen(true);
  };
  const onMouseOut = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '88px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Toggletip.Frame>
          <div
            style={{ anchorName: '--toggletip3' }}
            aria-controls="toggletip-menu-example3"
            aria-expanded={open}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            ref={triggerRef}
            id="toggletip3"
          >
            <QuestionmarkCircleFill width={24} height={24} />
          </div>
          <Toggletip.Body
            onClose={onMouseOut}
            open={open}
            triggerRef={triggerRef}
            position="topLeft"
            variant="text"
          >
            <Toggletip.Label>ここに補足の説明を表示</Toggletip.Label>
          </Toggletip.Body>
        </Toggletip.Frame>
      </div>
    </div>
  );
}

export function BottomRight() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onMouseOver = () => {
    setOpen(true);
  };
  const onMouseOut = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '88px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Toggletip.Frame>
          <div
            style={{ anchorName: '--toggletip4' }}
            aria-controls="toggletip-menu-example4"
            aria-expanded={open}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            ref={triggerRef}
            id="toggletip4"
          >
            <QuestionmarkCircleFill width={24} height={24} />
          </div>
          <Toggletip.Body
            onClose={onMouseOut}
            open={open}
            triggerRef={triggerRef}
            position="bottomRight"
            variant="text"
          >
            <Toggletip.Label>ここに補足の説明を表示</Toggletip.Label>
          </Toggletip.Body>
        </Toggletip.Frame>
      </div>
    </div>
  );
}

export function BottomCenter() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onMouseOver = () => {
    setOpen(true);
  };
  const onMouseOut = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '88px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Toggletip.Frame>
          <div
            style={{ anchorName: '--toggletip5' }}
            aria-controls="toggletip-menu-example5"
            aria-expanded={open}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            ref={triggerRef}
            id="toggletip5"
          >
            <QuestionmarkCircleFill width={24} height={24} />
          </div>
          <Toggletip.Body
            onClose={onMouseOut}
            open={open}
            triggerRef={triggerRef}
            position="bottomCenter"
            variant="text"
          >
            <Toggletip.Label>ここに補足の説明を表示</Toggletip.Label>
          </Toggletip.Body>
        </Toggletip.Frame>
      </div>
    </div>
  );
}

export function BottomLeft() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onMouseOver = () => {
    setOpen(true);
  };
  const onMouseOut = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '88px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Toggletip.Frame>
          <div
            style={{ anchorName: '--toggletip6' }}
            aria-controls="toggletip-menu-example6"
            aria-expanded={open}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            ref={triggerRef}
            id="toggletip6"
          >
            <QuestionmarkCircleFill width={24} height={24} />
          </div>
          <Toggletip.Body
            onClose={onMouseOut}
            open={open}
            triggerRef={triggerRef}
            position="bottomLeft"
            variant="text"
          >
            <Toggletip.Label>ここに補足の説明を表示</Toggletip.Label>
          </Toggletip.Body>
        </Toggletip.Frame>
      </div>
    </div>
  );
}
