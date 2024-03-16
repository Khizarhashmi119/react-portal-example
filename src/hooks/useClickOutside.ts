import { useEffect, useRef } from "react";

function useClickOutside(handleClickOutside: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.addEventListener("click", (event) => {
      const { target } = event;

      if (target instanceof HTMLElement) {
        const isOutside = !target.closest(".modal");

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
