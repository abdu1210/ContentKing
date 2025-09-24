import ContentstackLivePreview from "@contentstack/live-preview-utils";

// Initialize Live Preview without stackSdk to test if the service recognition is the issue
ContentstackLivePreview.init({
  enable: true,
  ssr: false,
  
  // Recommended: Enables Edit Tags
  editButton: { enable: true },
  stackDetails: {
    apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY,
    environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
    branch: "main",
  },
  clientUrlParams: {
    protocol: "https",
    host: "app.contentstack.com",
    port: 443,
  },
});

console.log("🔄 Live Preview initialized without stackSdk for testing");

export const onEntryChange = ContentstackLivePreview.onEntryChange;
