# 🎯 Next Steps: Contentstack Dashboard Setup

## ✅ Code Implementation Complete!

All the code is ready in your React app. Now you need to set up the A/B test in Contentstack dashboard.

**Project UID:** `69124722573182d4979b5be9`

---

## 📋 Step-by-Step Dashboard Setup

### **Step 1: Create A/B Test Experience**

1. Go to https://personalize.contentstack.com
2. Click your project (Project UID: 69124722573182d4979b5be9)
3. Click **+ New Experience**
4. Select **A/B Test**
5. Fill in:
   - **Name**: Homepage Hero Test
   - **Description**: Test different hero headlines
6. Click **Save General Details**

---

### **Step 2: Configure Variants**

1. Go to **Configuration** tab
2. In **Variant Distribution** → Select **Equally split**
3. Click **+ Add Variant** button **TWICE**
4. Name the variants:
   - First variant: **Control**
   - Second variant: **Bold Headline**
5. Click **Save Draft**

**Important:** Note the **Experience Short ID** (something like `homepage_hero_test`)

---

### **Step 3: Create Event for Tracking**

1. Click **Events** tab in top navigation
2. Click **+ New Event**
3. Fill in:
   - **Key**: `hero_cta_click`
   - **Description**: Click on hero CTA button
4. Click **Create**

---

### **Step 4: Link Variant Group to Content Type**

**In your Contentstack CMS (not Personalize):**

1. Go to your Stack
2. Click **Content Types** in left sidebar
3. Find and click **hero_section_v2**
4. Go to **Settings** tab
5. Click **Variant Groups** in left menu
6. Click **+ Link Variant Group**
7. Select "Homepage Hero Test"
8. Click **Apply**
9. Click **Save**

---

### **Step 5: Create Entry Variants**

**In Contentstack CMS:**

1. Click **Entries** in left sidebar
2. Select **Base & Entry Variants** from dropdown
3. Find your `hero_home` entry (or the hero entry you want to test)
4. Click to open it

**Create Control Variant:**
5. At the top, you'll see a **Variant dropdown**
6. Select **Control** from dropdown
7. Keep the content as is (this is your original)
8. Click **Save**

**Create Bold Headline Variant:**
9. Still in the same entry, select **Bold Headline** from the variant dropdown
10. Change the **hero_title** field to something different
    - Example: "Experience the Future of Content Management"
11. You can also change:
    - `hero_subtitle`
    - `hero_description`
    - `primary_cta` text
12. Fields you change will show a **Variant Field** tag
13. Click **Save**

---

### **Step 6: Publish Entry Variants**

1. Click **Publish** button
2. Select:
   - **Environments**: Select your environment (e.g., `poc`)
   - **Languages**: Select language(s)
3. **Publish**: Select **Now**
4. Click **Send**
5. If prompted, click **Send With References**

**Repeat for both variants!** (Control and Bold Headline)

---

### **Step 7: Activate Experience**

**Back in Personalize Dashboard:**

1. Go to your experience (Homepage Hero Test)
2. Click **Actions** (⋮) → **Edit**
3. Go to **Configuration** tab
4. Click **Activate Draft** button
5. In the modal, click **Activate**

🎉 **Your A/B test is now LIVE!**

---

## 🧪 Testing

### **1. Restart Your Dev Server**

```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
```

### **2. Open Browser**

Navigate to: http://localhost:3000

### **3. Check Console**

Open browser console (F12) and you should see:

```
✅ Contentstack Personalize initialized
📊 Project UID: 69124722573182d4979b5be9
🎯 Variant for "homepage_hero_test": { variant_short_id: "control", ...}
👁️ Impression tracked: homepage_hero_test → control
```

### **4. Test Different Variants**

1. Refresh the page multiple times
2. You might see different hero content
3. Or open in incognito mode to get a different variant

**Note:** The same user will see the same variant consistently (stored in Personalize)

### **5. Check Variant Indicator**

In development mode, you'll see a small badge in top-right of hero:
```
Variant: control
```
or
```
Variant: bold_headline
```

### **6. Test CTA Tracking**

1. Click on the "Start Free Trial" button
2. Check console - you should see:
```
📊 Event tracked: hero_cta_click { experience: "homepage_hero_test", variant: "control", ...}
```

---

## 📊 View Analytics

### **In Personalize Dashboard:**

1. Go to your experience
2. Click **Analytics** tab
3. Wait for data to accumulate (refresh page a few times)
4. You'll see:
   - **Impressions** for each variant
   - **Conversions** (CTA clicks)
   - **Conversion Rate**
   - **Statistical Significance**

**Give it 10-20 test interactions to see meaningful data.**

---

## 🔧 Troubleshooting

### **Issue: "Variant not found" in console**

**Fix:** Make sure the `experienceId` in `Index.tsx` matches the Experience Short ID from Personalize dashboard.

Update this line in `src/pages/Index.tsx`:
```typescript
<PersonalizedHero 
  experienceId="YOUR_ACTUAL_EXPERIENCE_ID_HERE"  // ← Update this
  defaultEntryUid="hero_home"
/>
```

### **Issue: Same content showing for all variants**

**Fix:** Make sure you:
1. Created actual different content in both variants
2. Published both variants
3. Activated the experience

### **Issue: No console logs appearing**

**Fix:**
1. Check that environment variable is set correctly
2. Restart dev server after adding environment variable
3. Hard refresh browser (Ctrl+Shift+R)

---

## ✅ Success Checklist

- [ ] Created A/B Test Experience in Personalize
- [ ] Configured 2 variants (Control + Bold Headline)
- [ ] Created event (`hero_cta_click`)
- [ ] Linked variant group to `hero_section_v2` content type
- [ ] Created entry variant for Control
- [ ] Created entry variant for Bold Headline (with different content)
- [ ] Published both variants
- [ ] Activated experience in Personalize
- [ ] Restarted dev server
- [ ] Tested on http://localhost:3000
- [ ] Saw variant indicator in dev mode
- [ ] Checked console logs
- [ ] Clicked CTA and saw tracking event
- [ ] Viewed analytics in Personalize dashboard

---

## 🎉 You're Done!

Your homepage hero is now personalized! Different users will see different variants, and you can track which one performs better.

**Next Steps:**
- Let the A/B test run for a while
- Monitor analytics in Personalize dashboard
- Once you have enough data, declare a winner
- Apply winning variant to all users

---

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify environment variable is set
3. Make sure experience is activated
4. Confirm variants are published

**Everything should work now!** 🚀



