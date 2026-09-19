import React, { createContext, useContext, useState, useEffect } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTab, setConsultationTab] = useState('schedule'); // 'schedule' | 'form' | 'direct'
  const [consultationService, setConsultationService] = useState('');
  const [consultationTimezone, setConsultationTimezone] = useState('US Eastern (EST/EDT)');

  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);

  const openConsultation = (tab = 'schedule', service = '', timezone = '') => {
    setConsultationTab(tab);
    if (service) setConsultationService(service);
    if (timezone) setConsultationTimezone(timezone);
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  const openSecurityModal = () => {
    setIsSecurityModalOpen(true);
  };

  const closeSecurityModal = () => {
    setIsSecurityModalOpen(false);
  };

  // Lock body scroll when either modal is open
  useEffect(() => {
    if (isConsultationOpen || isSecurityModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isConsultationOpen, isSecurityModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isConsultationOpen,
        consultationTab,
        consultationService,
        consultationTimezone,
        setConsultationTab,
        openConsultation,
        closeConsultation,
        isSecurityModalOpen,
        openSecurityModal,
        closeSecurityModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
