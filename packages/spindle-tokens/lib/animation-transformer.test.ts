import {
  transformAnimation,
  transformAnimationProperty,
} from './animation-transformer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const animationResponse = require('./animation-response.json');

describe('transform Animation', () => {
  it('should transform animation properties correctly', () => {
    const variables = animationResponse;
    const transformedProperties = transformAnimationProperty(variables);

    expect(transformedProperties).toEqual({
      'Easing/Ease Out': { $type: 'cubicBezier', $value: [0, 0, 0, 1] },
      'Duration/Fast': { $type: 'transition', $value: '150ms' },
    });
  });

  it('should transform animation correctly', () => {
    const variables = animationResponse;
    const transformedProperties = transformAnimation(variables);

    expect(transformedProperties).toEqual({
      'Move/Easing': {
        $type: 'transition',
        $value: '{Animation.Easing/Ease Out}',
      },
      'Move/Duration': {
        $type: 'transition',
        $value: '{Animation.Duration/Neutral}',
      },
    });
  });
});
