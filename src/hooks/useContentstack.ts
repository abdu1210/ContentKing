import { useQuery } from '@tanstack/react-query';
import { getEntries, getEntryByField, CONTENT_TYPES } from '@/lib/contentstack';
import type {
  GlobalSettings,
  Navigation,
  HeroSection,
  FeatureCard,
  CoreProduct,
  Statistic,
  RoleCard,
  ValueCard,
  TeamMember,
  JobOpening,
  Footer,
} from '@/types/contentstack';

// Generic hook for fetching multiple entries
function useContentstackEntries<T>(
  contentType: keyof typeof CONTENT_TYPES,
  query?: any,
  queryKey?: string[]
) {
  return useQuery({
    queryKey: queryKey || [contentType, query],
    queryFn: async () => {
      const result = await getEntries(CONTENT_TYPES[contentType], query);
      return result?.entries as T[] | null;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,   // 10 minutes (formerly cacheTime)
  });
}

// Generic hook for fetching a single entry by field
function useContentstackEntryByField<T>(
  contentType: keyof typeof CONTENT_TYPES,
  field: string,
  value: string,
  queryKey?: string[]
) {
  return useQuery({
    queryKey: queryKey || [contentType, field, value],
    queryFn: async () => {
      const result = await getEntryByField(CONTENT_TYPES[contentType], field, value);
      return result as T | null;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,   // 10 minutes
    enabled: !!value, // Only run query if value is provided
  });
}

// Specific hooks for each content type

export const useGlobalSettings = () => {
  return useContentstackEntries<GlobalSettings>('GLOBAL_SETTINGS', {}, ['global_settings']);
};

export const useNavigation = () => {
  return useContentstackEntries<Navigation>('NAVIGATION', {}, ['navigation']);
};

export const useHeroSections = () => {
  return useContentstackEntries<HeroSection>('HERO_SECTION', {}, ['hero_sections']);
};

export const useHeroSectionBySlug = (pageSlug: string) => {
  return useContentstackEntryByField<HeroSection>('HERO_SECTION', 'page_slug', pageSlug, ['hero_section', 'by_slug', pageSlug]);
};

export const useFeatureCards = (category?: string) => {
  return useContentstackEntries<FeatureCard>('FEATURE_CARD', {}, ['feature_cards', category]);
};

export const useCoreProducts = () => {
  return useContentstackEntries<CoreProduct>('CORE_PRODUCT', {}, ['core_products']);
};

export const useStatistics = (category?: string) => {
  return useContentstackEntries<Statistic>('STATISTIC', {}, ['statistics', category]);
};

export const useRoleCards = () => {
  return useContentstackEntries<RoleCard>('ROLE_CARD', {}, ['role_cards']);
};

export const useValueCards = () => {
  return useContentstackEntries<ValueCard>('VALUE_CARD', {}, ['value_cards']);
};

export const useTeamMembers = () => {
  return useContentstackEntries<TeamMember>('TEAM_MEMBER', {}, ['team_members']);
};

export const useJobOpenings = () => {
  return useContentstackEntries<JobOpening>('JOB_OPENING', {}, ['job_openings']);
};

export const useFooter = () => {
  return useContentstackEntries<Footer>('FOOTER', {}, ['footer']);
};