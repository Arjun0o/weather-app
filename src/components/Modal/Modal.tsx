import React, { SyntheticEvent } from "react";
import Modal from "react-modal";

interface Props {
  onClose(e?: SyntheticEvent): void;
  open: boolean;
  children: any;
  overlayClassName?: any;
  modal?: any;
}

export const CustomModal = ({
  onClose,
  open,
  children,
  overlayClassName,
  modal,
}: Props) => {
  return (
    <Modal
      overlayClassName={overlayClassName}
      className={modal}
      isOpen={open}
      onRequestClose={onClose}
    >
      {children}
    </Modal>
  );
};
