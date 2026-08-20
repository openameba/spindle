// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4053-27265&t=YLIDc1qkFqK1kafo-4
// component=NavigationTab
//
// Figma 上は Type variant を持つ単一のコンポーネントセットなので、
// UnderlineTab / InlineTab / CapsuleTab の3つをこの1ファイルで出し分けている。
//   - ./UnderlineTab/UnderlineTab.tsx
//   - ./InlineTab/InlineTab.tsx
//   - ./CapsuleTab/CapsuleTab.tsx
// CapsuleTab は Type が解決できなかった場合のフォールバックも兼ねる。

import figma from 'figma';

let template;
if (figma.selectedInstance.getPropertyValue('Type') === 'Under Bar') {
  const scroll = figma.selectedInstance.getEnum('Scroll', {
    Fixed: 'fixed',
    Scrollable: 'scrollable',
  });
  const selected = figma.selectedInstance.getEnum('選択アイテム', {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
  });
  const border = figma.selectedInstance.getBoolean('Border');
  template = {
    id: 'UnderlineTab',
    imports: [
      "import { UnderlineTab } from '@openameba/spindle-ui';",
      "import '@openameba/spindle-ui/NavigationTab/index.css';",
    ],
    example: figma.code`<UnderlineTab${figma.helpers.react.renderProp(
      'variant',
      scroll,
    )} options={[{ id: ${figma.helpers.react.renderPropValue(
      selected,
    )}, label: '' }]}${figma.helpers.react.renderProp(
      'defaultSelectedId',
      selected,
    )}${figma.helpers.react.renderProp('hasBorder', border)}/>`,
    metadata: { nestable: true },
  };
} else if (
  figma.selectedInstance.getPropertyValue('Type') === 'Inline Capsule'
) {
  const selected = figma.selectedInstance.getEnum('選択アイテム', {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
  });

  template = {
    id: 'InlineTab',
    imports: [
      "import { InlineTab } from '@openameba/spindle-ui/NavigationTab';",
      "import '@openameba/spindle-ui/NavigationTab/index.css';",
    ],
    example: figma.code`<InlineTab options={[{ id: ${figma.helpers.react.renderPropValue(
      selected,
    )}, label: '' }]}${figma.helpers.react.renderProp(
      'defaultSelectedId',
      selected,
    )}/>`,
    metadata: { nestable: true },
  };
} else {
  const scroll = figma.selectedInstance.getEnum('Scroll', {
    Fixed: 'fixed',
    Scrollable: 'scrollable',
  });
  const selected = figma.selectedInstance.getEnum('選択アイテム', {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
  });
  const border = figma.selectedInstance.getBoolean('Border');

  template = {
    id: 'CapsuleTab',
    imports: [
      "import { CapsuleTab } from '@openameba/spindle-ui/NavigationTab';",
      "import '@openameba/spindle-ui/NavigationTab/index.css';",
    ],
    example: figma.code`<CapsuleTab${figma.helpers.react.renderProp(
      'variant',
      scroll,
    )} options={[{ id: ${figma.helpers.react.renderPropValue(
      selected,
    )}, label: '' }]}${figma.helpers.react.renderProp(
      'defaultSelectedId',
      selected,
    )}${figma.helpers.react.renderProp('hasBorder', border)}/>`,
    metadata: { nestable: true },
  };
}

export default template;
