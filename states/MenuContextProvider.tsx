import React, { createContext, useState } from 'react';

export interface MenuContextProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const MenuContext = createContext<MenuContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

interface Props {
    children: React.ReactNode;
  }

export const MenuProvider: React.FC<Props> = ({
  children,
}: {
    children: React.ReactNode;
  }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};