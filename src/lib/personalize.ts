import Personalize from '@contentstack/personalize-edge-sdk';

const projectUid = import.meta.env.VITE_CONTENTSTACK_PERSONALIZE_PROJECT_UID;

let sdkInstance: any = null;
let initPromise: Promise<boolean> | null = null;

export const initializePersonalize = async (): Promise<boolean> => {
  if (sdkInstance) return true;
  if (initPromise) return initPromise;

  if (!projectUid) {
    console.warn('Personalize Project UID not configured');
    return false;
  }

  initPromise = (async () => {
    try {
      sdkInstance = await Personalize.init(projectUid);
      return true;
    } catch (error) {
      console.error('Personalize initialization failed:', error);
      return false;
    }
  })();

  return initPromise;
};

export const isPersonalizeReady = () => sdkInstance !== null;

export const getExperiences = () => {
  if (!sdkInstance) return [];
  return sdkInstance.getExperiences();
};

export const getVariant = (experienceShortId: string) => {
  if (!sdkInstance) return null;
  
  try {
    const experiences = sdkInstance.getExperiences();
    const experience = experiences?.find((exp: any) => exp.shortUid === experienceShortId);
    
    if (!experience) return null;
    
    return {
      experience_short_id: experience.shortUid,
      variant_short_id: experience.activeVariantShortUid,
      ...experience
    };
  } catch {
    return null;
  }
};

export const setUserAttribute = (key: string, value: any) => {
  if (!sdkInstance) return;
  try {
    sdkInstance.set(key, value);
  } catch {}
};

export const triggerImpression = (experienceShortId: string, variantShortId: string) => {
  if (!sdkInstance) return;
  try {
    sdkInstance.triggerImpression(experienceShortId, variantShortId);
  } catch {}
};

export const triggerEvent = (eventKey: string, properties?: Record<string, any>) => {
  if (!sdkInstance) return;
  try {
    sdkInstance.triggerEvent(eventKey, properties);
  } catch {}
};

export const triggerConversion = (experienceShortId: string, properties?: Record<string, any>) => {
  triggerEvent('conversion', { experience: experienceShortId, ...properties });
};

export default {
  initializePersonalize,
  getExperiences,
  getVariant,
  setUserAttribute,
  triggerImpression,
  triggerEvent,
  triggerConversion,
};
