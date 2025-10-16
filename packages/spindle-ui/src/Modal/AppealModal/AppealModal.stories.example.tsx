import dialogPolyfill from 'dialog-polyfill';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../../Button';
import { LinkButton } from '../../LinkButton';
import { AppealModal } from './AppealModal';

import 'dialog-polyfill/dist/dialog-polyfill.css';
import { Checkbox } from '../../Form';

function useDialogpolyfill(ref: React.RefObject<HTMLDialogElement | null>) {
  useEffect(() => {
    if (ref.current) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
}

export function AppealModalExample() {
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
        size="medium"
        variant="neutral"
        onClick={handleOpenButtonClick}
      >
        開く
      </Button>
      <AppealModal.Frame
        aria-describedby="dialog-description"
        aria-labelledby="dialog-title"
        ref={dialogRef}
        open={open}
        size="medium"
        onCancel={handleDialogCancel}
        onClose={handleDialogClose}
      >
        <AppealModal.Image>
          <picture>
            <source
              srcSet="https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/4d28a6ed12194558a76ee4adfbab4e3b/ogp.png?w=1280&h=672&fm=webp&q=85"
              media="(min-width: 768px)"
            ></source>
            <img
              alt=""
              style={{ height: 'auto', width: '100%' }}
              width="640"
              height="336"
              src="https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/e2526e7bfa494168a2e547cfe55ac89f/top_mv.jpg?w=640&h=336&fit=clamp&fm=webp&q=85"
            />
          </picture>
        </AppealModal.Image>
        <AppealModal.Title id="dialog-title">About Ameba</AppealModal.Title>
        <AppealModal.Body id="dialog-description">
          AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
        </AppealModal.Body>
        <AppealModal.ButtonGroup>
          <LinkButton
            href="https://about.ameba.jp/"
            layout="fullWidth"
            size="medium"
          >
            サイトを見る
          </LinkButton>
        </AppealModal.ButtonGroup>
      </AppealModal.Frame>
    </>
  );
}

export function StyleOnly() {
  return (
    <AppealModal.StyleOnly
      aria-describedby="styleonly-description"
      aria-labelledby="styleonly-title"
    >
      <AppealModal.Image>
        <img
          alt=""
          style={{ height: 'auto', width: '100%' }}
          width="640"
          height="336"
          src="https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/e2526e7bfa494168a2e547cfe55ac89f/top_mv.jpg?w=640&h=336&fit=crop&fm=webp&q=85"
        />
      </AppealModal.Image>
      <AppealModal.Title id="styleonly-title">About Ameba</AppealModal.Title>
      <AppealModal.Body id="styleonly-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </AppealModal.Body>
      <AppealModal.ButtonGroup>
        <LinkButton
          href="https://about.ameba.jp/"
          layout="fullWidth"
          size="medium"
        >
          サイトを見る
        </LinkButton>
      </AppealModal.ButtonGroup>
    </AppealModal.StyleOnly>
  );
}

export function StyleOnlyMedium() {
  return (
    <AppealModal.StyleOnly
      aria-describedby="styleonlymedium-description"
      aria-labelledby="styleonlymedium-title"
      size="medium"
    >
      <AppealModal.Image>
        <img
          alt=""
          style={{ height: 'auto', width: '100%' }}
          width="640"
          height="336"
          src="https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/e2526e7bfa494168a2e547cfe55ac89f/top_mv.jpg?w=640&h=336&fit=crop&fm=webp&q=85"
        />
      </AppealModal.Image>
      <AppealModal.Title id="styleonlymedium-title">
        About Ameba
      </AppealModal.Title>
      <AppealModal.Body id="styleonlymedium-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </AppealModal.Body>
      <AppealModal.ButtonGroup>
        <LinkButton
          href="https://about.ameba.jp/"
          layout="fullWidth"
          size="medium"
        >
          サイトを見る
        </LinkButton>
      </AppealModal.ButtonGroup>
    </AppealModal.StyleOnly>
  );
}

export function StyleOnlySmall() {
  return (
    <AppealModal.StyleOnly
      aria-describedby="styleonlysmall-description"
      aria-labelledby="styleonlysmall-title"
      size="small"
    >
      <AppealModal.Image>
        <img
          alt=""
          style={{ height: 'auto', width: '100%' }}
          width="640"
          height="336"
          src="https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/e2526e7bfa494168a2e547cfe55ac89f/top_mv.jpg?w=640&h=336&fit=crop&fm=webp&q=85"
        />
      </AppealModal.Image>
      <AppealModal.Title id="styleonlysmall-title">
        About Ameba
      </AppealModal.Title>
      <AppealModal.Body id="styleonlysmall-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </AppealModal.Body>
      <AppealModal.ButtonGroup>
        <LinkButton
          href="https://about.ameba.jp/"
          layout="fullWidth"
          size="medium"
        >
          サイトを見る
        </LinkButton>
      </AppealModal.ButtonGroup>
    </AppealModal.StyleOnly>
  );
}

export function StyleOnlyCustomized() {
  return (
    <AppealModal.StyleOnly
      aria-describedby="styleonlycustomized-description"
      aria-labelledby="styleonlycustomized-title"
      size="medium"
    >
      <AppealModal.Image>
        <img
          alt=""
          style={{ height: 'auto', width: '100%' }}
          width="640"
          height="336"
          src="https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/e2526e7bfa494168a2e547cfe55ac89f/top_mv.jpg?w=640&h=336&fit=crop&fm=webp&q=85"
        />
      </AppealModal.Image>
      <AppealModal.Title id="styleonlycustomized-title">
        About Ameba
      </AppealModal.Title>
      <AppealModal.Body id="styleonlycustomized-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </AppealModal.Body>
      <AppealModal.ButtonGroup>
        <LinkButton
          href="https://about.ameba.jp/"
          layout="fullWidth"
          size="medium"
        >
          サイトを見る
        </LinkButton>
        <p
          style={{ alignItems: 'center', display: 'flex', margin: '24px 0 0' }}
        >
          <Checkbox id="nodisplay" />
          <label htmlFor="nodisplay" style={{ marginLeft: '8px' }}>
            次回から表示しない
          </label>
        </p>
      </AppealModal.ButtonGroup>
    </AppealModal.StyleOnly>
  );
}
