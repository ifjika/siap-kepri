'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ServiceItem } from '@/data/portalData';

type ThemeMode = 'light' | 'dark' | 'contrast';
type FontSize = 'small' | 'normal' | 'large';

interface PortalContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  activeServiceModal: ServiceItem | null;
  openServiceModal: (service: ServiceItem) => void;
  closeServiceModal: () => void;
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
}

const PortalContext = createContext<PortalContextType | undefined>(undefined);

export function PortalProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  useEffect(() => {
    // Apply dataset attribute to documentElement
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  const openServiceModal = (service: ServiceItem) => {
    setActiveServiceModal(service);
  };

  const closeServiceModal = () => {
    setActiveServiceModal(null);
  };

  return (
    <PortalContext.Provider
      value={{
        theme,
        setTheme,
        fontSize,
        setFontSize,
        activeServiceModal,
        openServiceModal,
        closeServiceModal,
        searchKeyword,
        setSearchKeyword,
        selectedCategory,
        setSelectedCategory,
        isChatOpen,
        setIsChatOpen
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider');
  }
  return context;
}
