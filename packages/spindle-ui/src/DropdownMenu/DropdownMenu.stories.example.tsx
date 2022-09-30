import React, { useState, useRef } from 'react';
import { actions } from '@storybook/addon-actions';

import { Button } from '../Button';
import { AllFill } from '../Icon';
import { DropdownMenu } from './DropdownMenu';

export function Text() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ ['--DropdownMenu-z-index']: 2 }}>
      <DropdownMenu.Frame>
        <Button
          aria-controls="dropdown-menu-example1"
          aria-expanded={open}
          onClick={onClick}
          ref={triggerRef}
          size="medium"
          variant="neutral"
        >
          開く
        </Button>
        <DropdownMenu.List
          id="dropdown-menu-example1"
          onClose={onClose}
          open={open}
          position="rightTop"
          triggerRef={triggerRef}
          variant="text"
        >
          <DropdownMenu.ListItem {...actions('onClick')}>
            <DropdownMenu.Title>タイトルですよ</DropdownMenu.Title>
          </DropdownMenu.ListItem>
          <DropdownMenu.ListItem {...actions('onClick')}>
            <DropdownMenu.Title>タイトルですよ</DropdownMenu.Title>
          </DropdownMenu.ListItem>
        </DropdownMenu.List>
      </DropdownMenu.Frame>
    </div>
  );
}

export function TextWithIcon() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ ['--DropdownMenu-z-index']: 2 }}>
      <DropdownMenu.Frame>
        <Button
          aria-controls="dropdown-menu-example2"
          aria-expanded={open}
          onClick={onClick}
          ref={triggerRef}
          size="medium"
          variant="neutral"
        >
          開く
        </Button>
        <DropdownMenu.List
          id="dropdown-menu-example2"
          onClose={onClose}
          open={open}
          position="rightTop"
          triggerRef={triggerRef}
          variant="textWithIcon"
        >
          <DropdownMenu.ListItem
            icon={<AllFill aria-hidden="true" />}
            {...actions('onClick')}
          >
            <DropdownMenu.Title>タイトルですよ</DropdownMenu.Title>
          </DropdownMenu.ListItem>
          <DropdownMenu.ListItem
            icon={<AllFill aria-hidden="true" />}
            {...actions('onClick')}
          >
            <DropdownMenu.Title>タイトルですよ</DropdownMenu.Title>
          </DropdownMenu.ListItem>
        </DropdownMenu.List>
      </DropdownMenu.Frame>
    </div>
  );
}

export function HeadWithIcon() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ ['--DropdownMenu-z-index']: 2 }}>
      <DropdownMenu.Frame>
        <Button
          aria-controls="dropdown-menu-example3"
          aria-expanded={open}
          onClick={onClick}
          ref={triggerRef}
          size="medium"
          variant="neutral"
        >
          開く
        </Button>
        <DropdownMenu.List
          id="dropdown-menu-example3"
          onClose={onClose}
          open={open}
          position="rightTop"
          triggerRef={triggerRef}
          variant="headWithIcon"
        >
          <DropdownMenu.ListItem
            icon={<AllFill aria-hidden="true" />}
            {...actions('onClick')}
          >
            <DropdownMenu.Title>タイトルですよ</DropdownMenu.Title>
          </DropdownMenu.ListItem>
          <DropdownMenu.ListItem
            icon={<AllFill aria-hidden="true" />}
            {...actions('onClick')}
          >
            <DropdownMenu.Title>タイトルですよ</DropdownMenu.Title>
          </DropdownMenu.ListItem>
        </DropdownMenu.List>
      </DropdownMenu.Frame>
    </div>
  );
}

export function HeadWithIconAndCaption() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ ['--DropdownMenu-z-index']: 2 }}>
      <DropdownMenu.Frame>
        <Button
          aria-controls="dropdown-menu-example4"
          aria-expanded={open}
          onClick={onClick}
          ref={triggerRef}
          size="medium"
          variant="neutral"
        >
          開く
        </Button>
        <DropdownMenu.List
          id="dropdown-menu-example4"
          onClose={onClose}
          open={open}
          position="rightTop"
          triggerRef={triggerRef}
          variant="headWithIconAndCaption"
        >
          <DropdownMenu.ListItem
            icon={<AllFill aria-hidden="true" />}
            {...actions('onClick')}
          >
            <DropdownMenu.Title>タイトルですよ</DropdownMenu.Title>
            <DropdownMenu.Caption>キャプションですよ</DropdownMenu.Caption>
          </DropdownMenu.ListItem>
          <DropdownMenu.ListItem
            icon={<AllFill aria-hidden="true" />}
            {...actions('onClick')}
          >
            <DropdownMenu.Title>タイトルですよ</DropdownMenu.Title>
            <DropdownMenu.Caption>キャプションですよ</DropdownMenu.Caption>
          </DropdownMenu.ListItem>
        </DropdownMenu.List>
      </DropdownMenu.Frame>
    </div>
  );
}

// Storybookでのpositionプロパティのバリエーション確認用
export function Position() {
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div
        style={{
          ['--DropdownMenu-z-index']: 2,
          marginTop: 80,
          marginLeft: 210,
        }}
      >
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="topRight" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: topRightを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>
      <div
        style={{
          ['--DropdownMenu-z-index']: 2,
          marginTop: 90,
          marginLeft: 105,
        }}
      >
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="topCenter" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: topCenterを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>
      <div style={{ ['--DropdownMenu-z-index']: 2, marginTop: 90 }}>
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="topLeft" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: topLeftを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>

      <div style={{ ['--DropdownMenu-z-index']: 2, marginTop: 20 }}>
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="rightTop" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: rightTopを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>
      <div style={{ ['--DropdownMenu-z-index']: 2, marginTop: 90 }}>
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="rightCenter" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: rightCenterを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>
      <div style={{ ['--DropdownMenu-z-index']: 2, marginTop: 90 }}>
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="rightBottom" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: rightBottomを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>

      <div
        style={{
          ['--DropdownMenu-z-index']: 2,
          marginTop: 90,
          marginLeft: 210,
        }}
      >
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="bottomRight" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: bottomRightを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>
      <div
        style={{
          ['--DropdownMenu-z-index']: 2,
          marginTop: 90,
          marginLeft: 110,
        }}
      >
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position
            position="bottomCenter"
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: bottomCenterを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>
      <div style={{ ['--DropdownMenu-z-index']: 2, marginTop: 90 }}>
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="bottomLeft" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: bottomLeftを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>

      <div
        style={{
          ['--DropdownMenu-z-index']: 2,
          marginTop: 90,
          marginLeft: 265,
        }}
      >
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="leftTop" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: leftTopを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>
      <div
        style={{
          ['--DropdownMenu-z-index']: 2,
          marginTop: 90,
          marginLeft: 265,
        }}
      >
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="leftCenter" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: leftCenterを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>
      <div
        style={{
          ['--DropdownMenu-z-index']: 2,
          marginTop: 90,
          marginLeft: 265,
        }}
      >
        <DropdownMenu.Frame>
          <Button ref={triggerRef} size="medium" variant="neutral">
            例
          </Button>
          <DropdownMenu.Position position="leftBottom" triggerRef={triggerRef}>
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: leftBottomを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.Position>
        </DropdownMenu.Frame>
      </div>
    </>
  );
}
