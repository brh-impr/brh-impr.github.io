# Club Hockey Site — Static Export Starter

This version of the project is optimized for **static export** so it can be hosted at very low cost on **Amazon S3 + CloudFront**.

## What changed for static hosting

- `next.config.ts` uses `output: 'export'`
- dynamic routes use `generateStaticParams()`
- Next.js image optimization is disabled for static hosting
- API routes were removed because S3 + CloudFront does not run server-side code
- placeholder forms remain in the UI, but you should replace them with a hosted form service before launch
- a CloudFront Function is included to support clean URLs like `/roster/jack-morrison/`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The exported static site is generated in the `out/` folder.

## Optional quick deploy with AWS CLI

```bash
./scripts/deploy-to-s3.sh your-bucket-name
```

## Recommended production architecture

- S3 bucket for site files
- CloudFront distribution in front of S3
- Origin Access Control (OAC) so the bucket does not need to be public
- ACM certificate in `us-east-1` for your custom domain
- Route 53 alias records pointing your domain to CloudFront

## Important static-hosting note about forms

Because this site is static, the included forms do not submit anywhere by default. Before launch, connect them to one of these:

- Formspree
- Basin
- Tally
- Google Forms
- Stripe payment links for paid events
- Shopify for merch/store

## Deploy flow summary

1. Update site content in `src/data`
2. Add logo and images in `public/`
3. Run `npm run build`
4. Upload `out/` to S3
5. Put CloudFront in front of the bucket
6. Attach domain + HTTPS
7. Add CloudFront Function from `cloudfront/url-rewrite-function.js`
8. Invalidate CloudFront after updates
