import React, { useRef } from 'react';
import { actions } from '@storybook/addon-actions';

import { Button } from '../Button';
import { AllFill } from '../Icon';
import { DropdownMenu } from './DropdownMenu';

export function Text() {
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <DropdownMenu.Frame>
        <Button
          ref={triggerRef}
          size="medium"
          variant="neutral"
          popoverTarget="dropdown-menu-example1"
          id="dropdown-menu-example1-anchor"
          style={{ anchorName: '--dropdown-menu-example1-anchor' }}
        >
          開く
        </Button>
        <DropdownMenu.List
          id="dropdown-menu-example1"
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
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <DropdownMenu.Frame>
        <Button
          ref={triggerRef}
          size="medium"
          variant="neutral"
          popoverTarget="dropdown-menu-example2"
          id="dropdown-menu-example2-anchor"
          style={{ anchorName: '--dropdown-menu-example2-anchor' }}
        >
          開く
        </Button>
        <DropdownMenu.List
          id="dropdown-menu-example2"
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
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <DropdownMenu.Frame>
        <Button
          onClick={() => {}}
          ref={triggerRef}
          size="medium"
          variant="neutral"
          popoverTarget="dropdown-menu-example3"
          id="dropdown-menu-example3-anchor"
          style={{ anchorName: '--dropdown-menu-example3-anchor' }}
        >
          開く
        </Button>
        <DropdownMenu.List
          id="dropdown-menu-example3"
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
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <DropdownMenu.Frame>
        <Button
          onClick={() => {}}
          ref={triggerRef}
          size="medium"
          variant="neutral"
          popoverTarget="dropdown-menu-example4"
          id="dropdown-menu-example4-anchor"
          style={{ anchorName: '--dropdown-menu-example4-anchor' }}
        >
          開く
        </Button>
        <DropdownMenu.List
          id="dropdown-menu-example4"
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
  const triggerRefTopRight = useRef<HTMLButtonElement>(null);
  const triggerRefTopCenter = useRef<HTMLButtonElement>(null);
  const triggerRefTopLeft = useRef<HTMLButtonElement>(null);
  const triggerRefRightTop = useRef<HTMLButtonElement>(null);
  const triggerRefRightCenter = useRef<HTMLButtonElement>(null);
  const triggerRefRightBottom = useRef<HTMLButtonElement>(null);
  const triggerRefBottomRight = useRef<HTMLButtonElement>(null);
  const triggerRefBottomCenter = useRef<HTMLButtonElement>(null);
  const triggerRefBottomLeft = useRef<HTMLButtonElement>(null);
  const triggerRefLeftTop = useRef<HTMLButtonElement>(null);
  const triggerRefLeftCenter = useRef<HTMLButtonElement>(null);
  const triggerRefLeftBottom = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div
        style={{
          marginTop: 80,
          marginLeft: 210,
        }}
      >
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefTopRight}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-topRight"
            id="dropdown-menu-example-topRight-anchor"
            style={{ anchorName: '--dropdown-menu-example-topRight-anchor' }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-topRight"
            position="topRight"
            triggerRef={triggerRefTopRight}
            open
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: topRightを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>
      <div
        style={{
          marginTop: 90,
          marginLeft: 105,
        }}
      >
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefTopCenter}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-topCenter"
            id="dropdown-menu-example-topCenter-anchor"
            style={{
              anchorName: '--dropdown-menu-example-topCenter-anchor',
            }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-topCenter"
            open
            position="topCenter"
            triggerRef={triggerRefTopCenter}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: topCenterを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>
      <div style={{ marginTop: 90 }}>
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefTopLeft}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-topLeft"
            id="dropdown-menu-example-topLeft-anchor"
            style={{ anchorName: '--dropdown-menu-example-topLeft-anchor' }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-topLeft"
            position="topLeft"
            triggerRef={triggerRefTopLeft}
            open
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: topLeftを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>

      <div style={{ marginTop: 20 }}>
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefRightTop}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-rightTop"
            id="dropdown-menu-example-rightTop-anchor"
            style={{ anchorName: '--dropdown-menu-example-rightTop-anchor' }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-rightTop"
            open
            position="rightTop"
            triggerRef={triggerRefRightTop}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: rightTopを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>
      <div style={{ marginTop: 90 }}>
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefRightCenter}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-rightCenter"
            id="dropdown-menu-example-rightCenter-anchor"
            style={{
              anchorName: '--dropdown-menu-example-rightCenter-anchor',
            }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-rightCenter"
            open
            position="rightCenter"
            triggerRef={triggerRefRightCenter}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: rightCenterを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>
      <div style={{ marginTop: 90 }}>
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefRightBottom}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-rightBottom"
            id="dropdown-menu-example-rightBottom-anchor"
            style={{
              anchorName: '--dropdown-menu-example-rightBottom-anchor',
            }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-rightBottom-anchor"
            open
            position="rightBottom"
            triggerRef={triggerRefRightBottom}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: rightBottomを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>

      <div
        style={{
          marginTop: 90,
          marginLeft: 210,
        }}
      >
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefBottomRight}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-bottomRight"
            id="dropdown-menu-example-bottomRight-anchor"
            style={{
              anchorName: '--dropdown-menu-example-bottomRight-anchor',
            }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-bottomRight"
            open
            position="bottomRight"
            triggerRef={triggerRefBottomRight}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: bottomRightを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>
      <div
        style={{
          marginTop: 90,
          marginLeft: 110,
        }}
      >
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefBottomCenter}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-bottomCenter"
            id="dropdown-menu-example-bottomCenter-anchor"
            style={{
              anchorName: '--dropdown-menu-example-bottomCenter-anchor',
            }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-bottomCenter-anchor"
            open
            position="bottomCenter"
            triggerRef={triggerRefBottomCenter}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: bottomCenterを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>
      <div style={{ marginTop: 90 }}>
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefBottomLeft}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-bottomLeft"
            id="dropdown-menu-example-bottomLeft-anchor"
            style={{
              anchorName: '--dropdown-menu-example-bottomLeft-anchor',
            }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-bottomLeft"
            open
            position="bottomLeft"
            triggerRef={triggerRefBottomLeft}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: bottomLeftを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>

      <div
        style={{
          marginTop: 90,
          marginLeft: 265,
        }}
      >
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefLeftTop}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-leftTop"
            id="dropdown-menu-example-leftTop-anchor"
            style={{ anchorName: '--dropdown-menu-example-leftTop-anchor' }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-leftTop"
            open
            position="leftTop"
            triggerRef={triggerRefLeftTop}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>position: leftTopを指定</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>
      <div
        style={{
          marginTop: 90,
          marginLeft: 265,
        }}
      >
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefLeftCenter}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-leftCenter"
            id="dropdown-menu-example-leftCenter-anchor"
            style={{
              anchorName: '--dropdown-menu-example-leftCenter-anchor',
            }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-leftCenter"
            open
            position="leftCenter"
            triggerRef={triggerRefLeftCenter}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: leftCenterを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>
      <div
        style={{
          marginTop: 90,
          marginLeft: 265,
        }}
      >
        <DropdownMenu.Frame>
          <Button
            ref={triggerRefLeftBottom}
            size="medium"
            variant="neutral"
            popoverTarget="dropdown-menu-example-leftBottom"
            id="dropdown-menu-example-leftBottom-anchor"
            style={{
              anchorName: '--dropdown-menu-example-leftBottom-anchor',
            }}
          >
            例
          </Button>
          <DropdownMenu.List
            id="dropdown-menu-example-leftBottom"
            open
            position="leftBottom"
            triggerRef={triggerRefLeftBottom}
            popover="manual"
          >
            <DropdownMenu.ListItem {...actions('onClick')}>
              <DropdownMenu.Title>
                position: leftBottomを指定
              </DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </div>
    </>
  );
}
