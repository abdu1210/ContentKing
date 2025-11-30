# Contentstack Bulk Import Guide

## 🚀 **Method 1: Contentstack CLI (if you can login)**

1. **Login to CLI:**
   ```bash
   csdx auth:login
   ```

2. **Import all content types:**
   ```bash
   csdx cm:stacks:import -d contentstack-schemas -s YOUR_STACK_API_KEY
   ```

## 📋 **Method 2: Manual Import (Recommended for now)**

Since CLI login failed, use this efficient manual process:

### **Step 1: Access Content Types**
1. Go to your Contentstack dashboard
2. Navigate to **Content Models** → **Content Types**
3. Click **+ Create New**

### **Step 2: Import Each Schema (in this order)**

**Import in this order to handle dependencies:**

1. **global_settings.json** ✅
2. **navigation.json** ✅
3. **footer.json** ✅
4. **hero_section.json** ✅
5. **feature_card.json** ✅
6. **statistic.json** ✅
7. **core_product.json** ✅
8. **role_card.json** ✅
9. **value_card.json** ✅
10. **team_member.json** ✅

### **Step 3: For Each File:**
1. Click **+ Create New Content Type**
2. Click **Import** (JSON icon)
3. Copy the content from the schema file
4. Paste and click **Import**
5. Review the fields and click **Save**

## 🔧 **Method 3: API Import Script**

If you have your Management Token, I can create a Node.js script to import all schemas automatically.

## ✅ **Verification Checklist**

After importing all schemas, verify:
- [ ] All 10 content types are created
- [ ] Field types are correct (no json data type errors)
- [ ] Required fields are marked properly
- [ ] Select field choices are populated
- [ ] File fields are configured for images

## 🎯 **Next Steps After Import**

1. Create sample entries for each content type
2. Set up the React components to use CMS data
3. Configure Live Preview
4. Test content editing

---

**Note:** The schemas are designed to be imported in any order, but the suggested order above follows logical dependencies for easier management.
