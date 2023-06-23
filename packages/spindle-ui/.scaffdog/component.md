---
name: 'component'
root: 'src/'
output: '**/*'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import React from 'react';

type Props = {};

const BLOCK_NAME = 'spui-{{ inputs.name | pascal }}';

export const {{ inputs.name | pascal }}: React.FC<Props> = ({}) => {
  return (
    <div className={BLOCK_NAME}></div>
  );
};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.css`

```css
.spui-{{ inputs.name | pascal }} {}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.mdx`

```
import { Meta, Story, Source } from '@storybook/addon-docs/blocks';
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

# {{ inputs.name | pascal }}

<Meta title="{{ inputs.name | pascal }}" component={ {{ inputs.name | pascal }} } />

<Source
  language='javascript'
  code={`import { {{ inputs.name | pascal }} } from '@openameba/spindle-ui'`}
/>

<Source
  language='css'
  code={`@import './node_modules/@openameba/spindle-ui/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.css'`}
/>

<Source
  language='html'
  code={`<link rel="stylesheet" href="https://unpkg.com/@openameba/spindle-ui/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.css">`}
/>

## Normal

<Preview withSource="open">
  <Story name="Normal">
    <{{ inputs.name | pascal }} />
  </Story>
</Preview>

<Source
  code={``}
/>

<Source
  language='html'
  code={``}
/>
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```typescript
import React from 'react';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals';

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

describe('<{{ inputs.name | pascal }} />', () => {
  test('', () => {
    render(<{{ inputs.name | pascal }} />);

    // expect().toEqual();
  });
});
```

# `./index.ts`

```typescript
{{ read output.abs }}export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';
```

# `./index.css`

```css
{{ read output.abs }}@import './{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.css';
```
