import React from 'react';
import { act, renderHook as _renderHook } from '@testing-library/react';
import {
  StackNotificationManagerProvider,
  useStackNotificationManager,
  StackOffset,
  useStackInteraction,
  useRepeatedStackItem,
} from '.';
import { useStackNotificationManagerContext } from './StackNotificationManager';

const renderHook: typeof _renderHook = (cb, ops) =>
  _renderHook(cb, {
    ...ops,
    wrapper: ({ children }) => (
      <StackNotificationManagerProvider>
        {children}
      </StackNotificationManagerProvider>
    ),
  });

const testStackProps = (
  stackProps: ReturnType<typeof useStackNotificationManager>['stackProps'],
  {
    id,
    active,
    order,
    offset,
    position,
    isPreservingInternalActive,
  }: {
    id: string;
    active: boolean;
    order: number;
    offset: StackOffset[keyof StackOffset] | undefined;
    position: string;
    isPreservingInternalActive?: boolean;
  },
) => {
  expect(stackProps.id).toBe(id);
  expect(stackProps.active).toBe(active);
  expect(stackProps.order).toBe(order);
  expect(stackProps.offset).toEqual(offset);
  expect(stackProps.position).toBe(position);
  if (isPreservingInternalActive !== undefined) {
    expect(stackProps.isPreservingInternalActive).toBe(
      isPreservingInternalActive,
    );
  }
};

describe('useStackNotificationManager()', () => {
  it('should add one stack item', () => {
    const id = 'test-id';
    const position = 'topLeft';
    const { result } = renderHook(() =>
      useStackNotificationManager({ id, position }),
    );

    testStackProps(result.current.stackProps, {
      id,
      active: false,
      order: 0,
      offset: undefined,
      position,
    });

    act(() => {
      result.current.setActive(true);
    });

    testStackProps(result.current.stackProps, {
      id,
      active: true,
      order: 0,
      offset: undefined,
      position,
    });
  });

  it('should increment or decrement order when add multiple stack items', () => {
    const id1 = 'test-id-1';
    const id2 = 'test-id-2';
    const id3 = 'test-id-3';
    const position = 'topLeft';
    const { result } = renderHook(() => {
      const val1 = useStackNotificationManager({ id: id1, position });
      const val2 = useStackNotificationManager({ id: id2, position });
      const val3 = useStackNotificationManager({ id: id3, position });

      return {
        val1,
        val2,
        val3,
      };
    });

    // check initial value
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: false,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: false,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val3.stackProps, {
      id: id3,
      active: false,
      order: 0,
      offset: undefined,
      position,
    });

    // When activate result1, others should not be changed.
    act(() => {
      result.current.val1.setActive(true);
    });
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: true, // changed
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: false,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val3.stackProps, {
      id: id3,
      active: false,
      order: 0,
      offset: undefined,
      position,
    });

    // When activate result3, others should not be changed.
    // And result3's order should be incremented.
    act(() => {
      result.current.val3.setActive(true);
    });
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: true,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: false,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val3.stackProps, {
      id: id3,
      active: true, // changed
      order: 1, // changed
      offset: undefined,
      position,
    });

    // When activate result2, others should not be changed.
    // And result2's order should be incremented.
    act(() => {
      result.current.val2.setActive(true);
    });
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: true,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: true, // changed
      order: 2, // changed
      offset: undefined,
      position,
    });
    testStackProps(result.current.val3.stackProps, {
      id: id3,
      active: true,
      order: 1,
      offset: undefined,
      position,
    });

    // When deactivate result2, other's order should not be decremented.
    act(() => {
      result.current.val2.setActive(false);
    });
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: true,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: false, // changed
      order: 2,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val3.stackProps, {
      id: id3,
      active: true,
      order: 1,
      offset: undefined,
      position,
    });

    // Reset. reactivate result2 then order should not be incremented.
    act(() => {
      result.current.val2.setActive(true);
    });
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: true,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: true, // changed
      order: 2,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val3.stackProps, {
      id: id3,
      active: true,
      order: 1,
      offset: undefined,
      position,
    });

    // When deactivate result3, other's order should be decremented.
    act(() => {
      result.current.val3.setActive(false);
    });
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: true,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: true,
      order: 1, // changed
      offset: undefined,
      position,
    });
    testStackProps(result.current.val3.stackProps, {
      id: id3,
      active: false, // changed
      order: 1,
      offset: undefined,
      position,
    });
  });

  it('should not change order when other position stack is changed', () => {
    const id1 = 'test-id-1';
    const position1 = 'topLeft';
    const id2 = 'test-id-2';
    const position2 = 'bottomRight';
    const { result } = renderHook(() => {
      const val1 = useStackNotificationManager({
        id: id1,
        position: position1,
      });
      const val2 = useStackNotificationManager({
        id: id2,
        position: position2,
      });
      return {
        val1,
        val2,
      };
    });

    // check initial value
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: false,
      order: 0,
      offset: undefined,
      position: position1,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: false,
      order: 0,
      offset: undefined,
      position: position2,
    });

    act(() => {
      result.current.val1.setActive(true);
    });
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: true, // changed
      order: 0,
      offset: undefined,
      position: position1,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: false,
      order: 0,
      offset: undefined,
      position: position2,
    });

    act(() => {
      result.current.val2.setActive(true);
    });
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: true,
      order: 0,
      offset: undefined,
      position: position1,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: true, // changed
      order: 0, // should not be changed
      offset: undefined,
      position: position2,
    });
  });

  it('should change offset when invoke setOffset', () => {
    const id1 = 'test-id-1';
    const position1 = 'topLeft';
    const id2 = 'test-id-2';
    const position2 = 'bottomRight';
    const { result } = renderHook(() => {
      const val1 = useStackNotificationManager({
        id: id1,
        position: position1,
      });
      const val2 = useStackNotificationManager({
        id: id2,
        position: position2,
      });
      return {
        val1,
        val2,
      };
    });

    // check initial value
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: false,
      order: 0,
      offset: undefined,
      position: position1,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: false,
      order: 0,
      offset: undefined,
      position: position2,
    });

    act(() => {
      result.current.val1.setOffset({ left: 30 });
    });
    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: false,
      order: 0,
      offset: { left: 30 }, // changed
      position: position1,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: false,
      order: 0,
      offset: undefined, // should not be changed
      position: position2,
    });
  });

  it('should hide when stack items are over number of max stack items', () => {
    const id1 = 'test-id-1';
    const position = 'topLeft';
    const id2 = 'test-id-2';
    const id3 = 'test-id-3';
    const id4 = 'test-id-4';
    const id5 = 'test-id-5';
    const { result } = renderHook(() => {
      const val1 = useStackNotificationManager({ id: id1, position });
      const val2 = useStackNotificationManager({ id: id2, position });
      const val3 = useStackNotificationManager({ id: id3, position });
      const val4 = useStackNotificationManager({ id: id4, position });
      const val5 = useStackNotificationManager({ id: id5, position });
      return {
        val1,
        val2,
        val3,
        val4,
        val5,
      };
    });

    act(() => {
      result.current.val1.setActive(true);
      result.current.val2.setActive(true);
      result.current.val3.setActive(true);
      result.current.val4.setActive(true);
    });

    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: true,
      order: 0,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: true,
      order: 1,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val3.stackProps, {
      id: id3,
      active: true,
      order: 2,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val4.stackProps, {
      id: id4,
      active: true,
      order: 3,
      offset: undefined,
      position,
    });

    act(() => {
      result.current.val5.setActive(true);
    });

    testStackProps(result.current.val1.stackProps, {
      id: id1,
      active: false, // first item will be hidden
      order: 0,
      offset: undefined,
      position,
      isPreservingInternalActive: true, // preserve active state internally
    });
    testStackProps(result.current.val2.stackProps, {
      id: id2,
      active: true,
      order: 1,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val3.stackProps, {
      id: id3,
      active: true,
      order: 2,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val4.stackProps, {
      id: id4,
      active: true,
      order: 3,
      offset: undefined,
      position,
    });
    testStackProps(result.current.val5.stackProps, {
      id: id5,
      active: true,
      order: 4,
      offset: undefined,
      position,
    });
  });

  it('should get stack position when stack item is displayed', () => {
    const id1 = 'test-id-1';
    const position = 'topLeft';
    const id2 = 'test-id-2';
    const id3 = 'test-id-3';
    const id4 = 'test-id-4';
    const id5 = 'test-id-5';
    const { result } = renderHook(() => {
      const val1 = useStackNotificationManager({ id: id1, position });
      const val2 = useStackNotificationManager({ id: id2, position });
      const val3 = useStackNotificationManager({ id: id3, position });
      const val4 = useStackNotificationManager({ id: id4, position });
      const val5 = useStackNotificationManager({ id: id5, position });
      return {
        val1: {
          ...val1,
          setContentHeight: useStackInteraction().setContentHeight,
        },
        val2: {
          ...val2,
          setContentHeight: useStackInteraction().setContentHeight,
        },
        val3: {
          ...val3,
          setContentHeight: useStackInteraction().setContentHeight,
        },
        val4: {
          ...val4,
          setContentHeight: useStackInteraction().setContentHeight,
        },
        val5: {
          ...val5,
          setContentHeight: useStackInteraction().setContentHeight,
        },
      };
    });

    act(() => {
      result.current.val1.setActive(true);
      result.current.val2.setActive(true);
      result.current.val3.setActive(true);
      result.current.val4.setActive(true);
      result.current.val5.setActive(true);
    });

    act(() => {
      result.current.val1.setContentHeight({ id: id1, position, height: 1 });
      result.current.val2.setContentHeight({ id: id2, position, height: 1 });
      result.current.val3.setContentHeight({ id: id3, position, height: 1 });
      result.current.val5.setContentHeight({ id: id5, position, height: 1 });
    });

    expect(result.current.val1.stackProps.stackPosition).toBe(0);
    // max stack items is 4 so val1 is deactivated but val1 still has the height
    expect(
      result.current.val1.stackProps.isPreservingInternalActive,
    ).toBeTruthy();
    expect(result.current.val1.stackProps.active).toBeFalsy();

    expect(result.current.val2.stackProps.stackPosition).toBe(1);
    expect(result.current.val2.stackProps.active).toBeTruthy();
    expect(result.current.val3.stackProps.stackPosition).toBe(2);
    expect(result.current.val3.stackProps.active).toBeTruthy();
    expect(result.current.val4.stackProps.stackPosition).toBe(3);
    expect(result.current.val4.stackProps.active).toBeTruthy();
    expect(result.current.val5.stackProps.stackPosition).toBe(3);
    expect(result.current.val5.stackProps.active).toBeTruthy();
  });

  it('should remove unnecessary item when unmounting', () => {
    const id = 'test-id';
    const position = 'topLeft';
    const { result, unmount } = renderHook(() => {
      // create stack
      useStackNotificationManager({ id, position });
      return useStackNotificationManagerContext();
    });

    // check initial value
    expect(
      result.current.stackRef.current[position]?.find((item) => item.id === id),
    ).toBeDefined();

    act(() => {
      unmount();
    });

    expect(
      result.current.stackRef.current[position]?.find((item) => item.id === id),
    ).toBeUndefined();
  });
});

describe('useStackInteraction()', () => {
  it('should add one stack item', () => {
    const id1 = 'test-id';
    const id2 = 'test-id-2';
    const position = 'topLeft';

    const { result } = renderHook(() => {
      return {
        ...useStackInteraction(),
        context: useStackNotificationManagerContext(),
      };
    });

    expect(result.current.context.stackRef.current[position]).toBeUndefined();

    act(() => {
      result.current.setActive({ id: id1, position, active: true });
      result.current.setActive({ id: id2, position, active: true });
    });

    expect(result.current.context.stackRef.current[position]).toEqual([
      {
        id: id1,
        active: true,
        order: 0,
        isPreservingInternalActive: false,
        contentHeight: 0,
      },
      {
        id: id2,
        active: true,
        order: 1,
        isPreservingInternalActive: false,
        contentHeight: 0,
      },
    ]);
  });
});

describe('useRepeatedStackItem()', () => {
  it('should add and hide stack item', () => {
    const id = 'test-id';
    const position = 'topLeft';

    const { result } = renderHook(() => useRepeatedStackItem({ id, position }));

    expect(result.current.idList).toEqual([]);

    act(() => {
      result.current.append();
      result.current.append();
      result.current.append();
    });
    expect(result.current.idList).toEqual([`${id}-0`, `${id}-1`, `${id}-2`]);

    act(() => {
      result.current.onHide(`${id}-1`);
    });
    expect(result.current.idList).toEqual([`${id}-0`, `${id}-2`]);

    act(() => {
      result.current.onHide(`${id}-2`);
    });
    expect(result.current.idList).toEqual([`${id}-0`]);

    act(() => {
      result.current.onHide(`${id}-0`);
    });
    expect(result.current.idList).toEqual([]);

    act(() => {
      result.current.append();
    });
    expect(result.current.idList).toEqual([`${id}-3`]);
  });
});
