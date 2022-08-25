import React, {
  createContext,
  Dispatch,
  FC,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useCallback,
  useReducer,
  useRef,
  useState,
} from 'react';

export type ManagedStackItem = {
  id: string;
  active: boolean;
  order: number;
  isPreservingInternalActive: boolean;
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
  const context = React.useContext(StackNotificationManagerContext);
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
> = ({ children }) => {
  // To clear unnecessary stack items in unmount process, we need to use useRef.
  const [, forceRender] = useReducer(() => ({}), {});
  const stackRef = useRef<ManagedStack>({});
  const setStack = useCallback(
    (cb: (prev: ManagedStack) => ManagedStack) => {
      stackRef.current = cb(stackRef.current);
      forceRender();
    },
    [forceRender],
  );

  const [offset, setOffset] = useState<StackOffset>({});

  return (
    <StackNotificationManagerContext.Provider
      value={{ stackRef, setStack, offset, setOffset }}
    >
      {children}
    </StackNotificationManagerContext.Provider>
  );
};
