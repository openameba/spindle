import React, { useCallback, useEffect, useRef, useState } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import { Button } from '../Button';
import { Dialog } from './Dialog';

import 'dialog-polyfill/dist/dialog-polyfill.css';

function useDialogpolyfill(ref: React.RefObject<HTMLDialogElement>) {
  useEffect(() => {
    if (ref.current) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
}

export function DialogWithButtonEvent() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleDialogCancel = useCallback(() => {
    setOpen(false);
  }, []);

  const handleButtonClick = useCallback(() => {
    setOpen(false);
  }, []);

  useDialogpolyfill(dialogRef);

  return (
    <>
      <Button
        aria-haspopup="true"
        onClick={handleOpenButtonClick}
        size="medium"
      >
        Open Dialog
      </Button>
      <Dialog.Frame ref={dialogRef} open={open} onCancel={handleDialogCancel}>
        <Dialog.Title>タイトルですよ</Dialog.Title>
        <Dialog.Body>ここに本文が入りますよ</Dialog.Body>
        <Dialog.ButtonGroup>
          <Button layout="fullWidth" size="medium" onClick={handleButtonClick}>
            OK
          </Button>
        </Dialog.ButtonGroup>
      </Dialog.Frame>
    </>
  );
}

export function DialogWithForm() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleDialogCancel = useCallback(() => {
    setOpen(false);
  }, []);

  const handleFormSubmit = useCallback(() => {
    setOpen(false);
  }, []);

  useDialogpolyfill(dialogRef);

  return (
    <>
      <Button
        aria-haspopup="true"
        onClick={handleOpenButtonClick}
        size="medium"
      >
        Open Dialog
      </Button>
      <Dialog.Frame ref={dialogRef} open={open} onCancel={handleDialogCancel}>
        <form method="dialog" onSubmit={handleFormSubmit}>
          <Dialog.Title>タイトルですよ</Dialog.Title>
          <Dialog.Body>ここに本文が入りますよ</Dialog.Body>
          <Dialog.ButtonGroup direction="column">
            <Button layout="fullWidth" size="medium">
              OK
            </Button>
          </Dialog.ButtonGroup>
        </form>
      </Dialog.Frame>
    </>
  );
}

export function StyleOnly() {
  return (
    <Dialog.StyleOnly>
      <Dialog.Title>タイトルですよ</Dialog.Title>
      <Dialog.Body>ここに本文が入りますよ</Dialog.Body>
      <Dialog.ButtonGroup>
        <Button layout="fullWidth" size="medium">
          OK
        </Button>
      </Dialog.ButtonGroup>
    </Dialog.StyleOnly>
  );
}

export function ButtonRow() {
  return (
    <Dialog.StyleOnly>
      <Dialog.Title>タイトルですよ</Dialog.Title>
      <Dialog.Body>ここに本文が入りますよ</Dialog.Body>
      <Dialog.ButtonGroup>
        <Button layout="fullWidth" size="medium" variant="neutral">
          キャンセル
        </Button>
        <Button layout="fullWidth" size="medium" variant="danger">
          削除する
        </Button>
      </Dialog.ButtonGroup>
    </Dialog.StyleOnly>
  );
}

export function ButtonColumn() {
  return (
    <Dialog.StyleOnly>
      <Dialog.Title>タイトルですよ</Dialog.Title>
      <Dialog.Body>ここに本文が入りますよ</Dialog.Body>
      <Dialog.ButtonGroup direction="column">
        <Button layout="fullWidth" size="medium">
          Spindleをフォローする
        </Button>
        <Button layout="fullWidth" size="medium" variant="neutral">
          キャンセル
        </Button>
      </Dialog.ButtonGroup>
    </Dialog.StyleOnly>
  );
}
