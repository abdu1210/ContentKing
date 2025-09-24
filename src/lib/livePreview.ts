import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { contentstackClient } from './contentstack';

// Use the existing configured client for Live Preview

ContentstackLivePreview.init({
  enable: true,
  ssr: false,
  stackSdk: contentstackClient,

  // Recommended: Enables Edit Tags
  editButton: { enable: true },
  stackDetails: {
    apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY,
    environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
    branch: "main",
  },
  clientUrlParams: {
    protocol: "https",
    host: "app.contentstack.com", // Use region-specific host if applicable
    port: 443,
  },
});

export const onEntryChange = ContentstackLivePreview.onEntryChange;
