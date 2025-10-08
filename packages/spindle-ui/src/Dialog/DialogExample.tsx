import dialogPolyfill from 'dialog-polyfill';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { SubtleButton } from '../SubtleButton';
import { Dialog } from './Dialog';

import 'dialog-polyfill/dist/dialog-polyfill.css';

function useDialogpolyfill(ref: React.RefObject<HTMLDialogElement | null>) {
  useEffect(() => {
    if (ref.current) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
}

export function DialogExample() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

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
        variant="neutral"
      >
        開く
      </Button>
      <Dialog.Frame
        aria-describedby="dialog-description"
        aria-labelledby="dialog-title"
        ref={dialogRef}
        open={open}
        onCancel={handleDialogCancel}
        onClose={handleDialogClose}
      >
        <Dialog.Title id="dialog-title">タイトルですよ</Dialog.Title>
        <Dialog.Body id="dialog-description">
          ここに本文が入りますよ
        </Dialog.Body>
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

export function ButtonColumnWithSubtleButton() {
  return (
    <Dialog.StyleOnly>
      <Dialog.Title>タイトルですよ</Dialog.Title>
      <Dialog.Body>ここに本文が入りますよ</Dialog.Body>
      <Dialog.ButtonGroup direction="column">
        <Button layout="fullWidth" size="medium" type="button">
          Spindleをフォローする
        </Button>
        <SubtleButton size="medium">とじる</SubtleButton>
      </Dialog.ButtonGroup>
    </Dialog.StyleOnly>
  );
}
