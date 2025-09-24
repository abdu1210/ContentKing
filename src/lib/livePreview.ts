import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { LivePreviewStack } from "./contentstack";

ContentstackLivePreview.init({
    enable: true,
    ssr: false,
    stackSdk: LivePreviewStack,
    stackDetails: {
        apiKey: "blt1167fc5d742e4412",
        environment: "poc"
    },
    clientUrlParams: {
        protocol: "https",
        host: "app.contentstack.com",
        port: 443,
    }
});

// Debug Live Preview context
console.log("🔍 Live Preview Context:", {
    hash: ContentstackLivePreview.hash,
    windowType: ContentstackLivePreview.config?.windowType,
    contentType: ContentstackLivePreview.config?.stackDetails?.contentTypeUid,
    entryUid: ContentstackLivePreview.config?.stackDetails?.entryUid,
    environment: ContentstackLivePreview.config?.stackDetails?.environment,
    ssr: ContentstackLivePreview.config?.ssr,
    enable: ContentstackLivePreview.config?.enable,
    mode: ContentstackLivePreview.config?.mode
});

// Export onEntryChange method for use in components
export const onEntryChange = ContentstackLivePreview.onEntryChange;

// Export helper functions for components
export const getLivePreviewHash = () => ContentstackLivePreview.hash;
export const getLivePreviewConfig = () => ContentstackLivePreview.config;
export const isInLivePreview = () => ContentstackLivePreview.hash !== "";
export const getWindowType = () => ContentstackLivePreview.config?.windowType || "independent";
