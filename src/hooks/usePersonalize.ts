import { useState, useEffect, useCallback } from 'react';
import { initializePersonalize, getVariant, triggerImpression } from '@/lib/personalize';
import { getEntry, LivePreviewStack } from '@/lib/contentstack';
import { onEntryChange, isInLivePreview } from '@/lib/livePreview';

interface UsePersonalizeResult {
  entry: any;
  variant: any;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

const VARIANT_MAP: Record<string, string> = {
  '0': 'csd6f365a43548cd63',
  '1': 'cs7df46723295da352',
};

export const usePersonalize = (
  experienceId: string,
  contentType: string,
  defaultEntryUid: string,
  autoTrackImpression: boolean = true
): UsePersonalizeResult => {
  const [entry, setEntry] = useState<any>(null);
  const [variant, setVariant] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchContent = useCallback(async (isRefetch: boolean = false) => {
    try {
      if (!isRefetch) setLoading(true);
      setError(null);

      const livePreviewMode = isInLivePreview();

      if (!isRefetch && !livePreviewMode) {
        await initializePersonalize();
      }

      const variantData = livePreviewMode ? null : getVariant(experienceId);
      setVariant(variantData);

      let fetchedEntry;

      if (livePreviewMode) {
        try {
          const query = LivePreviewStack.ContentType(contentType).Entry(defaultEntryUid);
          fetchedEntry = await query.toJSON().fetch();
        } catch {}
      } else {
        const variantShortId = variantData?.variant_short_id;
        const hasVariant = variantShortId !== undefined && variantShortId !== null;
        const variantUid = hasVariant ? VARIANT_MAP[String(variantShortId)] : undefined;
        
        const apiKey = import.meta.env.VITE_CONTENTSTACK_API_KEY;
        const deliveryToken = import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN;
        const environment = import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT;
        
        const url = `https://cdn.contentstack.io/v3/content_types/${contentType}/entries/${defaultEntryUid}?environment=${environment}&locale=en-us`;
        
        const headers: Record<string, string> = {
          'api_key': apiKey,
          'access_token': deliveryToken,
        };
        
        if (variantUid) {
          headers['x-cs-variant-uid'] = variantUid;
        }
        
        try {
          const response = await fetch(url, { headers });
          if (response.ok) {
            const data = await response.json();
            fetchedEntry = data.entry;
          }
        } catch {}
      }
      
      if (fetchedEntry) {
        setEntry(fetchedEntry);
      }

      if (!isRefetch && !livePreviewMode && variantData && autoTrackImpression) {
        triggerImpression(experienceId, variantData.variant_short_id);
      }

    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Failed to load content');
      setError(errorObj);

      try {
        const fallbackEntry = await getEntry(contentType, defaultEntryUid);
        setEntry(fallbackEntry);
      } catch {}
    } finally {
      setLoading(false);
    }
  }, [experienceId, contentType, defaultEntryUid, autoTrackImpression]);

  const refetch = useCallback(async () => {
    await fetchContent(true);
  }, [fetchContent]);

  useEffect(() => {
    fetchContent(false);
  }, [fetchContent]);

  useEffect(() => {
    const handleEntryChange = (...args: any[]) => {
      const updatedData = args[0];
      
      if (updatedData && typeof updatedData === 'object' && Object.keys(updatedData).length > 0) {
        setEntry(updatedData);
      } else {
        fetchContent(true);
      }
    };
    
    onEntryChange(handleEntryChange);
  }, [fetchContent]);

  return { entry, variant, loading, error, refetch };
};

export const usePersonalizeVariant = (experienceId: string) => {
  const [variant, setVariant] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const variantData = getVariant(experienceId);
      setVariant(variantData);
    } catch {}
    finally {
      setLoading(false);
    }
  }, [experienceId]);

  return { variant, loading };
};
