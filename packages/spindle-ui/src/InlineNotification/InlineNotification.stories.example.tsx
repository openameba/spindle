import React from 'react';
import { Button } from '../Button/Button';
import Information from '../Icon/Information';
import { InlineNotification } from './InlineNotification';

export function VisiblePropsSample() {
  const [visible, setVisible] = React.useState(false);
  const onClick = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div>
      <Button size="medium" variant="neutral" onClick={onClick}>
        表示を切り替える
      </Button>
      <InlineNotification.Frame variant="information" visible={visible}>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ブログの管理者が承認するまで、コメントが反映されない場合があります
        </InlineNotification.Text>
      </InlineNotification.Frame>
    </div>
  );
}
