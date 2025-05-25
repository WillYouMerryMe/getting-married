import { useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

type ToggleableState = { isToggle: boolean; [key: string]: any };

export const useIsToggleHandler = <T extends ToggleableState>(
  setState: SetterOrUpdater<T>
) => {
  return useCallback(() => {
    setState((prev) => ({
      ...prev,
      isToggle: !prev.isToggle,
    }));
  }, [setState]);
};
