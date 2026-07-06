import { Button, type ButtonProps } from "@/components/ui/Button";
import { useFormModal } from "@/components/form/FormModalContext";

/**
 * CTA que abre el popup de registro en lugar de navegar a un ancla.
 * Reemplaza a `<Button href="#reservar">` en Hero, StickyCta, Vsl y FinalCta.
 * Sin `href` → renderiza <button> con la variante accent (dorada).
 */
export function CtaButton({ onClick, ...props }: Omit<ButtonProps, "href">) {
  const { openForm } = useFormModal();
  return (
    <Button
      {...props}
      onClick={(event) => {
        openForm();
        onClick?.(event);
      }}
    />
  );
}
