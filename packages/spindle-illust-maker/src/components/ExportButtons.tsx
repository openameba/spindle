import { useState } from 'react';
import { Button, Toast } from '@openameba/spindle-ui';
import '@openameba/spindle-ui/Button/Button.css';
import '@openameba/spindle-ui/Toast/Toast.css';
import '@openameba/spindle-ui/IconButton/IconButton.css';

type Props = {
  exportToCanvas: () => Promise<HTMLCanvasElement>;
};

export function ExportButtons({ exportToCanvas }: Props) {
  const [toastMessage, setToastMessage] = useState('');

  const handleDownload = async () => {
    const canvas = await exportToCanvas();

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'illust.png';
      a.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  const handleCopy = async () => {
    try {
      // SafariではClipboardItemにPromise<Blob>を渡す必要がある
      const blobPromise = exportToCanvas().then(
        (canvas) =>
          new Promise<Blob>((resolve, reject) =>
            canvas.toBlob(
              (blob) => (blob ? resolve(blob) : reject(new Error('toBlob failed'))),
              'image/png',
            ),
          ),
      );
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blobPromise }),
      ]);
      setToastMessage('クリップボードにコピーしました');
    } catch {
      setToastMessage('コピーに失敗しました');
    }
  };

  return (
    <>
      <Button size="small" variant="outlined" onClick={handleCopy}>
        Copy
      </Button>
      <Button size="small" variant="contained" onClick={handleDownload}>
        Download
      </Button>
      <Toast
        active={!!toastMessage}
        variant="confirmation"
        position="bottomCenter"
        onHide={() => setToastMessage('')}
      >
        {toastMessage}
      </Toast>
    </>
  );
}
