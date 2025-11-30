import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { LivePreviewStack, stackConfig } from "./contentstack";

ContentstackLivePreview.init({
  enable: true,
  ssr: false,
  stackSdk: LivePreviewStack,
  editButton: { enable: true },
  stackDetails: {
    apiKey: stackConfig.apiKey,
    environment: stackConfig.environment,
    branch: stackConfig.branch || "main"
  },
  clientUrlParams: {
    protocol: "https",
    host: "app.contentstack.com",
    port: 443,
  }
});

export const onEntryChange = ContentstackLivePreview.onEntryChange;
export const getLivePreviewHash = () => ContentstackLivePreview.hash;
export const isInLivePreview = () => ContentstackLivePreview.hash !== "";
export const getPreviewedEntryUid = () => (ContentstackLivePreview as any).config?.stackDetails?.entryUid;
export const getPreviewedContentType = () => (ContentstackLivePreview as any).config?.stackDetails?.contentTypeUid;
