import React, { useEffect, useRef, useState } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import { Button } from '../Button';
import { SemiModal } from './SemiModal';

import 'dialog-polyfill/dist/dialog-polyfill.css';

function useDialogpolyfill(ref: React.RefObject<HTMLDialogElement>) {
  useEffect(() => {
    if (ref.current) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
}
export function PopupModalExample() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = () => setOpen(true);

  const handleDialogCancel = () => setOpen(false);

  const handleDialogClose = () => setOpen(false);

  useDialogpolyfill(dialogRef);

  return (
    <>
      <Button aria-haspopup="true" onClick={handleOpenButtonClick}>
        モーダルを開く
      </Button>
      <SemiModal.Frame
        aria-describedby="dialog-description"
        aria-labelledby="dialog-title"
        ref={dialogRef}
        open={open}
        onCancel={handleDialogCancel}
        onClose={handleDialogClose}
      >
        <SemiModal.Header id="dialog-title">
          <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
        </SemiModal.Header>
        <SemiModal.Contents id="dialog-description">
          AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
        </SemiModal.Contents>
        <SemiModal.Footer>
          <Button>確認する</Button>
        </SemiModal.Footer>
      </SemiModal.Frame>
    </>
  );
}

export function SheetModalExample() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = () => setOpen(true);

  const handleDialogClose = () => setOpen(false);

  useDialogpolyfill(dialogRef);

  return (
    <>
      <Button aria-haspopup="true" onClick={handleOpenButtonClick}>
        モーダルを開く
      </Button>
      <SemiModal.Frame
        aria-describedby="dialog-description"
        aria-labelledby="dialog-title"
        ref={dialogRef}
        open={open}
        type="sheet"
        onClose={handleDialogClose}
      >
        <SemiModal.Header id="dialog-title">
          <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
        </SemiModal.Header>
        <SemiModal.Contents id="dialog-description">
          AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
        </SemiModal.Contents>
        <SemiModal.Footer>
          <Button>確認する</Button>
        </SemiModal.Footer>
      </SemiModal.Frame>
    </>
  );
}

export function StyleOnlyPopupLarge() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlyPopupLarge-description"
      aria-labelledby="styleOnlyPopupLarge-title"
      size="large"
      style={{ position: 'relative' }}
    >
      <SemiModal.Header id="styleOnlyPopupLarge-title">
        <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlyPopupLarge-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlyPopupMedium() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlyPopupMedium-description"
      aria-labelledby="styleOnlyPopupMedium-title"
      style={{ position: 'relative' }}
    >
      <SemiModal.Header id="styleOnlyPopupMedium-title">
        <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlyPopupMedium-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlyPopupSmall() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlyPopupSmall-description"
      aria-labelledby="styleOnlyPopupSmall-title"
      size="small"
      style={{ position: 'relative' }}
    >
      <SemiModal.Header id="styleOnlyPopupSmall-title">
        <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlyPopupSmall-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlySheetLarge() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlySheetLarge-description"
      aria-labelledby="styleOnlySheetLarge-title"
      type="sheet"
      size="large"
      style={{ position: 'relative', transform: 'translateY(0)', margin: 0 }}
    >
      <SemiModal.Header id="styleOnlySheetLarge-title">
        <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlySheetLarge-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlySheetMedium() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlySheetMedium-description"
      aria-labelledby="styleOnlySheetMedium-title"
      type="sheet"
      style={{ position: 'relative', transform: 'translateY(0)', margin: 0 }}
    >
      <SemiModal.Header id="styleOnlySheetMedium-title">
        <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlySheetMedium-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlySheetSmall() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlySheetSmall-description"
      aria-labelledby="styleOnlySheetSmall-title"
      size="small"
      type="sheet"
      style={{ position: 'relative', transform: 'translateY(0)', margin: 0 }}
    >
      <SemiModal.Header id="styleOnlySheetSmall-title">
        <SemiModal.HeaderTitle>About Ameba</SemiModal.HeaderTitle>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlySheetSmall-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}
