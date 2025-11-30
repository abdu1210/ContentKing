# Contentstack Personalize - Simple Setup Guide
## Homepage Hero Only

**Your Project UID:** `69124722573182d4979b5be9`

---

## ⚠️ Important: Network Issue

Your npm is experiencing network timeouts. **Complete Step 1 first when you have stable internet.**

---

## 📋 Step-by-Step Implementation

### **Step 1: Install SDK** (When network works)

Open terminal and run:

```bash
cd "C:\Users\Abdul Rahaman\testingclonecontentking\ContentKing"
npm install @contentstack/personalize-edge-sdk
```

Wait for installation to complete (may take 1-2 minutes).

**Verify installation:**
```bash
npm list @contentstack/personalize-edge-sdk
```

You should see: `@contentstack/personalize-edge-sdk@x.x.x`

---

### **Step 2: Add Environment Variable**

Add this line to your `.env` file (or `envfileoriginal`):

```env
VITE_CONTENTSTACK_PERSONALIZE_PROJECT_UID=69124722573182d4979b5be9
```

**Your complete .env should look like:**

```env
# Contentstack Configuration
VITE_CONTENTSTACK_API_KEY=blt1167fc5d742e4412
VITE_CONTENTSTACK_DELIVERY_TOKEN=cs2c10b5e47fde689b88e5c6f3
VITE_CONTENTSTACK_ENVIRONMENT=poc
VITE_CONTENTSTACK_REGION=us
VITE_CONTENTSTACK_PREVIEW_TOKEN=csd2476a5b61b1e5f28323ca4c

# Contentstack Personalize (NEW)
VITE_CONTENTSTACK_PERSONALIZE_PROJECT_UID=69124722573182d4979b5be9
```

---

### **Step 3: Create Personalize Service** (I'll do this)

I'll create: `src/lib/personalize.ts`

This file will handle:
- SDK initialization
- Getting variants
- Tracking impressions
- Tracking events

---

### **Step 4: Update Homepage** (I'll do this)

I'll modify: `src/pages/Index.tsx`

To use personalized hero content.

---

### **Step 5: Create Experience in Contentstack** (You do this)

**In Contentstack Personalize Dashboard:**

1. Go to https://personalize.contentstack.com
2. Click your project
3. Click **+ New Experience**
4. Select **A/B Test**
5. Name: "Homepage Hero Test"
6. Click **Save General Details**
7. In **Configuration**:
   - Variant Distribution: **Equally split**
   - Click **+ Add Variant** twice
   - Name them:
     - **Control** (original)
     - **Variant B** (new version)
8. Click **Save Draft**

**Note the Experience Key** (something like `homepage_hero_test`)

---

### **Step 6: Create Event** (You do this)

**In Personalize Dashboard:**

1. Click **Events** tab
2. Click **+ New Event**
3. Key: `hero_cta_click`
4. Description: "Click on hero CTA button"
5. Click **Create**

---

### **Step 7: Create Entry Variants** (You do this)

**In Contentstack CMS:**

1. Go to your Stack
2. Go to **Content Types** → `hero_section_v2`
3. Go to **Settings** → **Variant Groups**
4. Click **+ Link Variant Group**
5. Select "Homepage Hero Test"
6. Click **Apply** and **Save**

**Then create variants:**

1. Go to **Entries** → **Base Entries**
2. Find `hero_home` entry
3. You'll see a **Variant dropdown** at top
4. Select **Control**:
   - Keep content as is
   - Click **Save**
5. Select **Variant B**:
   - Change `hero_title` to something different
   - Example: "Experience the Future of Content Management"
   - Click **Save**
6. **Publish both variants**

---

### **Step 8: Activate Experience** (You do this)

**In Personalize Dashboard:**

1. Go to your experience
2. Click **Actions** → **Edit**
3. Go to **Configuration** tab
4. Click **Activate Draft**
5. Click **Activate**

---

### **Step 9: Test** (After everything is set up)

1. Open http://localhost:3000
2. Refresh page multiple times
3. You might see different hero headlines
4. Check browser console for logs

---

## 🎯 Current Status

- ❌ **Step 1**: Blocked by network issue
- ⏸️ **Steps 2-9**: Waiting for Step 1

---

## 🆘 What to Do Now

**Option A: Wait for Network**
- Try Step 1 later when internet is stable
- Once SDK installs, let me know
- I'll implement Steps 3-4

**Option B: Use Mobile Hotspot**
- Connect to mobile hotspot
- Try Step 1 again
- Usually bypasses network issues

**Option C: Alternative Network**
- Try from different location
- Use different WiFi
- Then run Step 1

---

## 📞 Once Step 1 Works

**Send me a message saying:**
"SDK installed successfully"

**Then I will:**
1. Create the personalize service file
2. Update the homepage component
3. Provide testing instructions

---

**We're ready to go as soon as npm can download the package!** 🚀



