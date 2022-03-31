import React, { useEffect, useRef, useState } from 'react';
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

export function DialogExample() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = () => setOpen(true);

  const handleDialogCancel = () => setOpen(false);

  const handleDialogClose = () => setOpen(false);

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
      <Dialog.Frame
        ref={dialogRef}
        open={open}
        onCancel={handleDialogCancel}
        onClose={handleDialogClose}
      >
        <Dialog.Title>タイトルですよ</Dialog.Title>
        <Dialog.Body>ここに本文が入りますよ</Dialog.Body>
        <Dialog.ButtonGroup>
          <Button layout="fullWidth" size="medium">
            OK
          </Button>
        </Dialog.ButtonGroup>
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
        <Button layout="fullWidth" size="medium" variant="danger" type="button">
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
        <Button layout="fullWidth" size="medium" type="button">
          Spindleをフォローする
        </Button>
        <Button layout="fullWidth" size="medium" variant="neutral">
          キャンセル
        </Button>
      </Dialog.ButtonGroup>
    </Dialog.StyleOnly>
  );
}
