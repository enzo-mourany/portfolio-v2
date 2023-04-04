import { createContext, useState } from 'react';

interface EmailPageContextProps {
  isEmailPageOpen: boolean;
  setIsEmailPageOpen: (isEmailPageOpen: boolean) => void;
}

export const EmailPageContext = createContext<EmailPageContextProps>({
  isEmailPageOpen: false,
  setIsEmailPageOpen: () => {}
});

interface EmailPageProviderProps {
  children: React.ReactNode;
}

export const EmailPageProvider: React.FC<EmailPageProviderProps> = ({ children }) => {
  const [isEmailPageOpen, setIsEmailPageOpen] = useState<boolean>(false);

  return (
    <EmailPageContext.Provider value={{ isEmailPageOpen, setIsEmailPageOpen }}>
      {children}
    </EmailPageContext.Provider>
  );
};
