# 🔴 Live Preview Setup Guide - CSR Debugging

## ✅ **What's Already Implemented**

Your project now has **Contentstack Live Preview** fully configured for **CSR (Client-Side Rendering)** with comprehensive debugging! Here's what was added:

### **1. Dependencies Installed**
- ✅ `@contentstack/live-preview-utils` - Latest Live Preview SDK

### **2. Code Changes Made**

#### **📄 src/lib/contentstack.ts**
- ✅ Added Live Preview SDK import
- ✅ Added region-based host mapping
- ✅ Updated Stack initialization with `live_preview` config
- ✅ Added Live Preview initialization
- ✅ Exported `onEntryChange` function

#### **📄 src/App.tsx**
- ✅ Added `onEntryChange` import and usage
- ✅ Added useEffect to listen for content changes
- ✅ Auto-invalidate React Query cache on content updates

## 🚀 **Next Steps: Contentstack Dashboard Setup**

### **Step 1: Generate Preview Token**

1. **Go to Contentstack Dashboard**
2. **Click Stack Settings** → **Tokens**
3. **Open your existing delivery token**
4. **Click "+ Create Preview Token"**
5. **Copy the generated preview token**

### **Step 2: Add Preview Token to Environment**

**Add this line to your `.env` file:**
```bash
VITE_CONTENTSTACK_PREVIEW_TOKEN=your_preview_token_here
```

### **Step 3: Enable Live Preview in Stack**

1. **Go to Stack Settings** → **Live Preview**
2. **Check "Enable Live Preview"**
3. **Select Default Preview Environment: Development**
4. **Set Preview URL:** `http://localhost:5001`
5. **Click Save**

### **Step 4: Configure Environment**

1. **Go to Settings** → **Environments**
2. **Click "development" environment**
3. **Update Base URL:** `http://localhost:5001`
4. **Click Save**

## 🎯 **How to Test Live Preview**

### **Method 1: Direct Testing**
1. **Open any entry** (e.g., Global Settings, Hero Section)
2. **Click "Live Preview" tab** in right sidebar
3. **Make changes** to content fields
4. **See instant updates** in preview panel

### **Method 2: Side-by-Side**
1. **Open your website:** `http://localhost:5001`
2. **Open Contentstack dashboard** in another tab
3. **Edit content** in Contentstack
4. **Watch live updates** on your website

## 📊 **What You'll See**

### **Console Logs:**
```
✅ Live Preview initialized
🔄 Live Preview: Content changed, invalidating React Query cache
```

### **Real-time Updates:**
- **Header changes** → Instant site title/logo updates
- **Hero section edits** → Live headline/description changes
- **Navigation updates** → Menu items change immediately
- **Feature modifications** → Feature cards update in real-time

## 🎉 **Live Preview Features Available**

✅ **Real-time content updates**
✅ **No page refresh needed**
✅ **Works with all content types**
✅ **Instant cache invalidation**
✅ **Cross-device preview**
✅ **Multi-environment support**

## 🔧 **Advanced Features (Optional)**

### **Live Edit Tags**
- Add click-to-edit buttons in preview
- Direct navigation to specific fields
- Enhanced editor experience

### **Multiple Environment Support**
- Preview content in staging/production
- Environment-specific configurations
- Content workflow integration

## 🚨 **Troubleshooting**

### **Live Preview Not Working?**
1. ✅ Check preview token is set in `.env`
2. ✅ Verify Live Preview is enabled in Contentstack
3. ✅ Confirm base URL matches your local server
4. ✅ Check browser console for errors

### **Changes Not Updating?**
1. ✅ Check React Query cache invalidation
2. ✅ Verify onEntryChange is firing
3. ✅ Refresh the page to reset state

## 🎯 **Ready to Test!**

Your Live Preview setup is **complete**! Just add the preview token and enable it in Contentstack dashboard.

**Once configured, you'll have real-time content editing** - make changes in Contentstack and see them instantly on your website! 🚀
