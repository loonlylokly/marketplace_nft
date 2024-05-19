import { useLayoutEffect, useRef, useState } from 'react';

export function useNow(
  updateInterval: number,
  enabled: boolean,
  cb: (time: number) => void
): number | undefined {
  const cbRef = useRef(cb);
  cbRef.current = cb;
  const [now, setNow] = useState<number>(Date.now());

  useLayoutEffect(() => {
    if (!enabled) return;

    setNow(Date.now());
    cbRef.current?.(Date.now());

    const interval = setInterval(() => {
      setNow(Date.now());
      cbRef.current?.(Date.now());
    }, updateInterval);

    return () => {
      clearInterval(interval);
    };
  }, [updateInterval, enabled]);

  return now;
}
