import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from 'contentstack';

// Create the Stack configuration object that Live Preview SDK expects
const Stack = Contentstack.Stack({
  api_key: "blt1167fc5d742e4412",
  delivery_token: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
  environment: "poc",
  region: Contentstack.Region.US,
  live_preview: {
    preview_token: import.meta.env.VITE_CONTENTSTACK_PREVIEW_TOKEN,
    enable: true,
    host: 'rest-preview.contentstack.com'
  }
});

ContentstackLivePreview.init({
  enable: true,
  ssr: false,
  stackSdk: Stack,

  // Recommended: Enables Edit Tags
  editButton: { enable: true },
  stackDetails: {
    apiKey: "blt1167fc5d742e4412",
    environment: "poc",
    branch: "main",
  },
  clientUrlParams: {
    protocol: "https",
    host: "app.contentstack.com", // Use region-specific host if applicable
    port: 443,
  },
});

export const onEntryChange = ContentstackLivePreview.onEntryChange;
