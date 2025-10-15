import React, {
  createContext,
  type Dispatch,
  type FC,
  type MutableRefObject,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useContext,
  useReducer,
  useRef,
  useState,
} from 'react';

export type ManagedStackItem = {
  /**
   * This is identifier of the item.
   * This value should unique in the stack.
   */
  id: string;
  /**
   * This indicates whether the item is active or not.
   */
  active: boolean;
  /**
   * This indicates how many components are stacked so far.
   * This value continues to increase until the browser session ends.
   */
  order: number;
  /**
   * This is used when deactivate the component internally.
   * For example, the component can trigger the closing animation by changing this props.
   * And it can set the `active` props to false by using `setActive` after the closing animation is finished.
   */
  isPreservingInternalActive: boolean;
  /**
   * The height of notification component.
   * Height includes padding, borders and margins size.
   */
  contentHeight: number;
};

export type StackPosition = `${'top' | 'bottom'}${'Left' | 'Center' | 'Right'}`;

export type ManagedStack<P extends StackPosition = StackPosition> = {
  [K in P]?: ManagedStackItem[];
};

type OffsetPosition = 'top' | 'bottom' | 'right' | 'left';

export type StackPositionOffset<P extends OffsetPosition = OffsetPosition> = {
  [K in P]: number;
};

export type StackOffset<P extends StackPosition = StackPosition> = {
  [K in P]?: {
    [K in keyof StackPositionOffset]?: StackPositionOffset[K];
  };
};

export type StackNotificationManagerProperties<
  P extends StackPosition = StackPosition,
> = ManagedStackItem & {
  /**
   * This indicates position where this item is stacked.
   */
  position: P;
  /**
   * Offset from the edge of the window to the first item.
   */
  offset: StackOffset[P];
  /**
   * This indicates the position where this item is placed in the stack.
   */
  stackPosition: number;
  /**
   * This is used to get components' height.
   * Height includes padding, borders and margins size.
   */
  setContentHeight: (height: number) => void;
};

export type StackNotificationManagerProps<
  P extends StackPosition = StackPosition,
> = {
  [K in keyof StackNotificationManagerProperties<P>]?: StackNotificationManagerProperties<P>[K];
};

export type StackNotificationComponentProps<
  Props extends object = object,
  Position extends StackPosition = StackPosition,
> = StackNotificationManagerProps<Position> & Props;

type StackNotificationManagerContextValue<
  P extends StackPosition = StackPosition,
> = {
  stackRef: MutableRefObject<ManagedStack<P>>;
  setStack: (cb: (prev: ManagedStack) => ManagedStack) => void;
  offset: StackOffset<P>;
  setOffset: Dispatch<SetStateAction<StackOffset<P>>>;
};

const StackNotificationManagerContext =
  createContext<StackNotificationManagerContextValue | null>(null);

export const useStackNotificationManagerContext = () => {
  const context = useContext(StackNotificationManagerContext);
  if (context === null) {
    throw new Error(
      'useStackNotificationManagerContext must be used within a StackNotificationManagerProvider',
    );
  }
  return context;
};

type StackNotificationManagerProviderProps = {
  children: ReactNode;
};

export const StackNotificationManagerProvider: FC<
  StackNotificationManagerProviderProps
> = ({ children }: StackNotificationManagerProviderProps) => {
  // To clear unnecessary stack items in unmount process, we need to use useRef.
  const [, forceRender] = useReducer(() => ({}), {});
  const stackRef = useRef<ManagedStack>({});
  const setStack = useCallback((cb: (prev: ManagedStack) => ManagedStack) => {
    stackRef.current = cb(stackRef.current);
    forceRender();
  }, []);

  const [offset, setOffset] = useState<StackOffset>({});

  return (
    <StackNotificationManagerContext.Provider
      value={{ stackRef, setStack, offset, setOffset }}
    >
      {children}
    </StackNotificationManagerContext.Provider>
  );
};
