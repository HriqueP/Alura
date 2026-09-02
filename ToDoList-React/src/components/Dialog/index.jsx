// import do hook useRef
import { useEffect, useRef } from "react";

import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  // Declaração do objeto ref inicializado como null
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", onClose);

    // Função do return que é executada quando o componente é desmontado
    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

  // Função para abrir um modal
  const openDialog = () => {
    // Chamando a função .showModal() para a prop .current (node de dialog) do objeto dialogRef
    dialogRef.current.showModal();
  };

  // Função para fechar o modal
  const closeDialog = () => {
    // Chamando a função .close() para a prop .current (node de dialog) do objeto dialogRef
    dialogRef.current.close();
  };

  // Passagem do objeto dialogRef como valor do atributo ref do node dialog do JSX
  return (
    <>
      <dialog className="dialog" ref={dialogRef}>
        <div className="btn-close-wrapper">
          <button className="btn-close" autoFocus onClick={onClose}>
            <IconClose />
          </button>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </>
  );
}
