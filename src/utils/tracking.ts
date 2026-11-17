declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

/**
 * Pushes a Google Tag Manager lead generation event after consultation form submission succeeds.
 * Does not include any personally identifiable information (PII).
 */
export function trackConsultationLeadSuccess(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'generate_lead',
    form_name: 'visa5s_consultation',
  });
}
