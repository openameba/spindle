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
          position="right"
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
          position="right"
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
          position="right"
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
          position="right"
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
