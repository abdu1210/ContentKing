# Environment Variable Setup

Add this line to your `.env` file (or create `.env.local`):

```env
VITE_CONTENTSTACK_PERSONALIZE_PROJECT_UID=69124722573182d4979b5be9
```

Your complete `.env` should include:

```env
# Contentstack Configuration
VITE_CONTENTSTACK_API_KEY=blt1167fc5d742e4412
VITE_CONTENTSTACK_DELIVERY_TOKEN=cs2c10b5e47fde689b88e5c6f3
VITE_CONTENTSTACK_ENVIRONMENT=poc
VITE_CONTENTSTACK_REGION=us
VITE_CONTENTSTACK_PREVIEW_TOKEN=csd2476a5b61b1e5f28323ca4c

# Contentstack Personalize (ADD THIS)
VITE_CONTENTSTACK_PERSONALIZE_PROJECT_UID=69124722573182d4979b5be9
```

After adding, **restart your dev server**:
1. Stop current server (Ctrl+C in terminal)
2. Run: `npm run dev`



