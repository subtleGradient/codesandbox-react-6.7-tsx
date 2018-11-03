// put me in your global.d.ts file

declare module "react" {
  /**
   * Returns a stateful value, and a function to update it.
   */
  function useState<TValue>(
    initialState: TValue | (() => TValue),
  ): [TValue, (value: TValue | ((prevValue: TValue) => TValue)) => void];

  /**
   * Accepts a function that contains imperative, possibly effectful code.
   */
  function useEffect(
    didUpdate: () => void | (() => void),
    inputs?: any[],
  ): void;

  /**
   * Accepts a context object and returns the current context value, as given by the nearest context provider for the given context.
   */
  function useContext<TValue>(context: React.Context<TValue>): TValue;

  type TUseReducerAction = { type: string; payload?: any };

  /**
   * An alternative to useState. Accepts a reducer and returns the current state paired with a dispatch method.
   */
  function useReducer<TValue>(
    reducer: (value: TValue, action: TUseReducerAction) => TValue,
    initialState: TValue,
    initialAction?: TUseReducerAction,
  ): [TValue, (action: TUseReducerAction) => void];

  /**
   * Returns a memoized callback.
   */
  function useCallback<TFn extends () => any>(fn: TFn, inputs?: any[]): TFn;

  /**
   * Returns a memoized value.
   */
  function useMemo<TValue>(fn: () => TValue, inputs?: any[]): TValue;

  /**
   * useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
   */
  function useRef<TValue>(initialValue: TValue): React.RefObject<TValue>;

  /**
   * useImperativeMethods customizes the instance value that is exposed to parent components when using ref.
   * useImperativeMethods should be used with forwardRef.
   */
  function useImperativeMethods<TValue>(
    ref: React.RefObject<TValue>,
    createInstance: () => { [key: string]: Function },
    inputs?: any[],
  ): void;

  /**
   * useMutationEffect fires synchronously during the same phase that React performs its DOM mutations, before sibling components have been updated. Use this to perform custom DOM mutations.
   */
  function useMutationEffect(
    didUpdate: () => void | (() => void),
    inputs?: any[],
  ): void;

  /**
   * useLayoutEffect fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
   */
  function useLayoutEffect(
    didUpdate: () => void | (() => void),
    inputs?: any[],
  ): void;
}
