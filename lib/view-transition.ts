/** Navegação com View Transitions API quando disponível (Chrome, Safari recente). */
export function navigateWithTransition(navigate: () => void) {
  if (typeof document === "undefined") {
    navigate();
    return;
  }

  const doc = document as Document & {
    startViewTransition?: (callback: () => void) => { finished: Promise<void> };
  };

  if (doc.startViewTransition) {
    doc.startViewTransition(() => navigate());
    return;
  }

  navigate();
}
