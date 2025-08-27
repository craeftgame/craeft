import React, { ReactNode, useCallback, useEffect } from "react";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
  children: ReactNode | ReactNode[];
}

export default function Modal({ isActive, onClose, children }: ModalProps) {
  const close = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const keyPressed = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        event.preventDefault();
      }
    },
    [close],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPressed);

    return () => {
      document.removeEventListener("keydown", keyPressed);
    };
  }, [keyPressed]);

  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={close} />

      <div className="modal-content">{children}</div>

      <button
        className="modal-close is-large"
        onClick={close}
        aria-label="close"
      ></button>
    </div>
  );
}
