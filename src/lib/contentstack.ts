import Contentstack from 'contentstack';

const stackConfig = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY,
  deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
  region: import.meta.env.VITE_CONTENTSTACK_REGION || 'us',
  previewToken: import.meta.env.VITE_CONTENTSTACK_PREVIEW_TOKEN,
  branch: import.meta.env.VITE_CONTENTSTACK_BRANCH || 'main',
};

if (!stackConfig.apiKey || !stackConfig.deliveryToken || !stackConfig.environment) {
  console.error('Missing required Contentstack environment variables');
}

const LivePreviewStack = Contentstack.Stack({
  api_key: stackConfig.apiKey,
  delivery_token: stackConfig.deliveryToken,
  environment: stackConfig.environment,
  live_preview: {
    enable: true,
    preview_token: stackConfig.previewToken,
    host: 'rest-preview.contentstack.com',
  }
});

export const contentstackClient = LivePreviewStack;
export { LivePreviewStack, stackConfig };

export const CONTENT_TYPES = {
  GLOBAL_SETTINGS: 'global_settings',
  NAVIGATION: 'navigation',
  HERO_SECTION: 'hero_section_v2',
  FEATURE_CARD: 'feature_card',
  CORE_PRODUCT: 'core_product',
  STATISTIC: 'statistic',
  ROLE_CARD: 'role_card',
  VALUE_CARD: 'value_card',
  TEAM_MEMBER: 'team_member',
  JOB_OPENING: 'job_opening',
  FOOTER: 'footer',
} as const;

export const getEntry = async (contentType: string, uid: string) => {
  const query = LivePreviewStack.ContentType(contentType).Entry(uid);
  return await query.toJSON().fetch();
};

export const getEntries = async (contentType: string, queryParams?: Record<string, any>) => {
  let query: any = LivePreviewStack.ContentType(contentType).Query();
  
  if (queryParams) {
    Object.keys(queryParams).forEach(key => {
      query = query.where(key, queryParams[key]);
    });
  }
  
  const result = await query.toJSON().find();
  return { entries: result[0] || [] };
};

export const getEntryByField = async (contentType: string, field: string, value: string) => {
  const query = LivePreviewStack.ContentType(contentType).Query().where(field, value);
  const result = await query.toJSON().find();
  return result[0]?.[0] || null;
};

export default contentstackClient;
