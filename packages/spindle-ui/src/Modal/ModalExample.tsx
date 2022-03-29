import React, { useCallback, useRef, useState } from 'react';
import { Button } from '../Button';
import { Modal, Size } from './Modal';

export function ModalExample({ size }: { size: Size }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleDialogCancel = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Button
        aria-haspopup="true"
        onClick={handleOpenButtonClick}
        size="medium"
      >
        Open Modal
      </Button>
      <Modal.Frame
        ref={dialogRef}
        open={open}
        size={size}
        onCancel={handleDialogCancel}
        onClose={handleClose}
      >
        <Modal.Header onClose={handleClose}>
          <Modal.Title>
            タイトルですよ<Modal.TitleCaption>キャプション</Modal.TitleCaption>
          </Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <p style={{ height: '1000px', margin: '0 0 36px' }}>コンテンツは自由に入れられます</p>
        </Modal.Content>
      </Modal.Frame>
    </>
  );
}
