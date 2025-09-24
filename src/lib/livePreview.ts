import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { fetchPreviewData } from './contentstack';

// Initialize Live Preview for Preview Service
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

// Enhanced onEntryChange that uses Preview Service
export const onEntryChange = (callback: () => void) => {
  return ContentstackLivePreview.onEntryChange(callback);
};

// Function to get live preview hash from URL or ContentstackLivePreview
export const getLivePreviewHash = () => {
  // Try to get hash from URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  const hash = urlParams.get('live_preview') || urlParams.get('preview_hash');
  
  if (hash) {
    console.log('🔍 Live Preview hash found:', hash);
    return hash;
  }
  
  // Fallback: Try to get from ContentstackLivePreview if available
  try {
    // @ts-ignore - accessing internal API
    const previewHash = ContentstackLivePreview?.previewHash || window?.contentstack_live_preview?.hash;
    if (previewHash) {
      console.log('🔍 Live Preview hash from SDK:', previewHash);
      return previewHash;
    }
  } catch (e) {
    // Silent fail
  }
  
  console.log('📡 No Live Preview hash found, using regular CDN');
  return null;
};

console.log("🔄 Live Preview initialized with Preview Service support");

// Export fetchPreviewData for components to use
export { fetchPreviewData };
