#!/usr/bin/env node

/**
 * Contentstack Schema Import Script
 * 
 * This script imports all content type schemas to Contentstack using the Management API
 * 
 * Requirements:
 * 1. Set environment variables:
 *    - CONTENTSTACK_API_KEY (your stack API key)
 *    - CONTENTSTACK_MANAGEMENT_TOKEN (your management token)
 *    - CONTENTSTACK_REGION (optional, defaults to 'us')
 * 
 * Usage:
 *    node import-schemas.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  apiKey: process.env.CONTENTSTACK_API_KEY,
  managementToken: process.env.CONTENTSTACK_MANAGEMENT_TOKEN,
  region: process.env.CONTENTSTACK_REGION || 'us',
  baseUrl: process.env.CONTENTSTACK_REGION === 'eu' 
    ? 'https://eu-api.contentstack.io/v3' 
    : 'rest-preview.contentstack.com/v3'
};

// Schema files to import (in order)
const schemaFiles = [
  'global_settings.json',
  'navigation.json',
  'footer.json',
  'hero_section.json',
  'feature_card.json',
  'statistic.json',
  'core_product.json',
  'role_card.json',
  'value_card.json',
  'team_member.json'
];

async function importSchema(schemaFile) {
  const schemaPath = path.join(__dirname, 'contentstack-schemas', schemaFile);
  
  if (!fs.existsSync(schemaPath)) {
    console.error(`❌ Schema file not found: ${schemaFile}`);
    return false;
  }

  try {
    const schemaContent = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    
    const response = await fetch(`${config.baseUrl}/content_types`, {
      method: 'POST',
      headers: {
        'api_key': config.apiKey,
        'authorization': config.managementToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(schemaContent)
    });

    if (response.ok) {
      const result = await response.json();
      console.log(`✅ Successfully imported: ${schemaFile} (UID: ${result.content_type.uid})`);
      return true;
    } else {
      const error = await response.text();
      console.error(`❌ Failed to import ${schemaFile}:`, error);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error importing ${schemaFile}:`, error.message);
    return false;
  }
}

async function main() {
  // Validate configuration
  if (!config.apiKey || !config.managementToken) {
    console.error('❌ Missing required environment variables:');
    console.error('   CONTENTSTACK_API_KEY');
    console.error('   CONTENTSTACK_MANAGEMENT_TOKEN');
    console.error('');
    console.error('📖 Get these from your Contentstack Dashboard:');
    console.error('   • API Key: Settings → Stack Settings → API Key');
    console.error('   • Management Token: Settings → Tokens → Create Management Token');
    process.exit(1);
  }

  console.log('🚀 Starting Contentstack schema import...');
  console.log(`📊 Config: ${config.baseUrl} (${config.region})`);
  console.log(`📋 Importing ${schemaFiles.length} content types...`);
  console.log('');

  let successCount = 0;
  let failCount = 0;

  for (const schemaFile of schemaFiles) {
    const success = await importSchema(schemaFile);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Add a small delay between imports
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('');
  console.log('📊 Import Summary:');
  console.log(`   ✅ Successful: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📋 Total: ${schemaFiles.length}`);

  if (failCount === 0) {
    console.log('');
    console.log('🎉 All schemas imported successfully!');
    console.log('');
    console.log('🎯 Next steps:');
    console.log('   1. Create sample entries for each content type');
    console.log('   2. Set up React components to use CMS data');
    console.log('   3. Configure Live Preview');
  }
}

// Run the import
main().catch(console.error);
