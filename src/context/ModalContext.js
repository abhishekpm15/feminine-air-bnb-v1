import React, { createContext, useState } from "react";

const ModalContextProvider = createContext();

const ModalContext = ({children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const values = {
    handleCancel,
    handleOk,
    showModal,
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <ModalContextProvider.Provider value={values}>{children}</ModalContextProvider.Provider>
  );
};

export default ModalContext;
export {ModalContextProvider}