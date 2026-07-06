import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Estado global del popup de registro. Cualquier CTA puede abrirlo con `openForm()`
 * (ver CtaButton) y el <FormModal/> lo consume para mostrarse/ocultarse.
 */
interface FormModalValue {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const FormModalContext = createContext<FormModalValue | null>(null);

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openForm = useCallback(() => setIsOpen(true), []);
  const closeForm = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openForm, closeForm }),
    [isOpen, openForm, closeForm]
  );

  return (
    <FormModalContext.Provider value={value}>
      {children}
    </FormModalContext.Provider>
  );
}

export function useFormModal() {
  const ctx = useContext(FormModalContext);
  if (!ctx) {
    throw new Error("useFormModal debe usarse dentro de <FormModalProvider>");
  }
  return ctx;
}
