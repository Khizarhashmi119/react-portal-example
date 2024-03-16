import { useEffect, useRef } from "react";

function useClickOutside(handleClickOutside: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("mousedown", (event) => {
      const { target } = event;

      if (target instanceof HTMLElement) {
        const isOutside = !ref.current?.contains(target);

        if (isOutside) {
          handleClickOutside();
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

export default useClickOutside;
