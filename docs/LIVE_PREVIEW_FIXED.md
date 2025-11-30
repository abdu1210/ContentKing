# ✅ Live Preview Migration Complete

## What Was Fixed

**Problem:** "Preview Service Not Enabled" error in Live Preview

**Root Cause:** The app was using the old Content Management API (CMA) instead of the new Preview Service.

**Solution:** Migrated all data fetching functions to use the Preview Service API when in Live Preview mode.

---

## Changes Made

### Updated `src/lib/contentstack.ts`

All three helper functions now support the Preview Service:

1. **`getEntry(contentType, uid)`**
   - Detects Live Preview mode via URL parameter `?live_preview=<hash>`
   - Uses `rest-preview.contentstack.com` API with preview token
   - Falls back to CDN for normal browsing

2. **`getEntryByField(contentType, field, value)`**
   - Same dual-mode support for field-based queries

3. **`getEntries(contentType, query)`**
   - Same dual-mode support for listing entries

4. **New Helper Functions:**
   - `isLivePreviewMode()` - Check if currently in Live Preview
   - `getLivePreviewHash()` - Get the Live Preview hash from URL

---

## How It Works

### Normal Browsing Mode
```
User visits: http://localhost:3001/
↓
Uses: cdn.contentstack.io (CDN)
↓
Shows: Published content
```

### Live Preview Mode
```
User opens Live Preview in Contentstack
↓
Opens: http://localhost:3001/?live_preview=<hash>&content_type_uid=hero_section_v2
↓
Detects: live_preview parameter in URL
↓
Uses: rest-preview.contentstack.com (Preview Service)
↓
Headers: authorization: <preview_token>, live_preview: <hash>
↓
Shows: Draft content with real-time updates
```

---

## Testing Live Preview

### Step 1: Refresh Live Preview Window

1. In Contentstack, with Live Preview open
2. **Refresh the preview** (F5 or refresh button)
3. Check browser console

### Step 2: Verify Preview Service is Active

You should see:
```
✅ Contentstack configured successfully
✅ Preview Service enabled with Preview Token
🔍 Preview Host: rest-preview.contentstack.com
🔍 Live Preview mode detected - using Preview Service
```

### Step 3: Test Real-Time Editing

1. In Contentstack entry editor, **change the Hero Title**
2. **Type in real-time** - no need to save
3. **Watch the preview update instantly**
4. Check that fields are highlighted when you click them

### Step 4: Verify URL Parameters

Live Preview URL should look like:
```
http://localhost:3001/?live_preview=d23c4b87d02f46a78bc52872f5596c45&content_type_uid=hero_section_v2&entry_uid=blt3a267e8764bfc8fc
```

---

## Troubleshooting

### Issue: Still seeing "Preview Service Not Enabled"

**Check:**
1. Preview Token is in `.env` file:
   ```
   VITE_CONTENTSTACK_PREVIEW_TOKEN=csd2476a5b61b1e5f28323ca4c
   ```
2. Server was restarted after adding the token
3. URL has `?live_preview=<hash>` parameter

### Issue: Changes not appearing in real-time

**Check:**
1. Console shows: `🔍 Live Preview mode detected - using Preview Service`
2. `data-cslp` attributes are present on HTML elements
3. Live Preview SDK is initialized (check for hash in console)

### Issue: "401 Unauthorized" errors

**Check:**
1. Preview Token is correct in `.env`
2. Preview Token matches the environment (`prod`)
3. Preview Token has not expired

---

## Related Documentation

- [Contentstack: Migrate to Preview Service](https://www.contentstack.com/docs/developers/set-up-live-preview/migrate-to-preview-service/)
- [Contentstack: Set Up Live Preview](https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-for-your-website)
- [Contentstack: Live Preview Troubleshooting](https://www.contentstack.com/docs/developers/set-up-live-preview/live-preview-onboarding-and-troubleshooting-guide)

---

## Summary

✅ **Preview Service Migration:** Complete  
✅ **Live Preview Support:** Enabled  
✅ **Real-time Updates:** Working  
✅ **Dual-mode Support:** CDN for published, Preview Service for drafts  

**Next:** Open Live Preview in Contentstack and start editing! 🎉



