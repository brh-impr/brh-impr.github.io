# AWS Setup — S3 + CloudFront Static Hosting

This guide is for the static-export version of the club hockey site.

## 1) Build the site locally

```bash
npm install
npm run build
```

After the build finishes, your static site is in the `out/` folder.

## 2) Create an S3 bucket

Create a bucket to hold the exported site files.

Recommended bucket name:

```text
www.yourdomain.com
```

Keep these settings in mind:
- leave **Block all public access** enabled
- do **not** use S3 static website hosting when you are using CloudFront + OAC
- upload the contents of the `out/` folder to the bucket root

Example AWS CLI upload:

```bash
aws s3 sync out/ s3://www.yourdomain.com --delete
```

AWS recommends restricting direct S3 access and using CloudFront with an S3 origin, with **Origin Access Control (OAC)** preferred over the older OAI approach. citeturn0search16turn0search12

## 3) Create a CloudFront distribution

Create a new CloudFront distribution with:

- **Origin domain**: your S3 bucket (choose the regular S3 bucket origin, not the website endpoint)
- **Viewer protocol policy**: Redirect HTTP to HTTPS
- **Default root object**: `index.html`
- **Compress objects automatically**: Yes
- **Price class**: `Use only North America and Europe` for lower cost if that fits your audience

Using the standard S3 origin with CloudFront allows private bucket access through OAC. AWS documents that OAC is the recommended way to secure S3 origins behind CloudFront. citeturn0search16turn0search12

## 4) Create and attach Origin Access Control (OAC)

When editing the distribution origin:

- enable **Origin access control settings**
- create a new OAC if needed
- choose **Sign requests (recommended)**
- let CloudFront update the bucket policy, or copy the generated policy and apply it manually

This keeps the S3 bucket private while CloudFront can still read the files. citeturn0search16

## 5) Add a CloudFront Function for clean URLs

Because this is a static Next.js export, requests like `/schedule/` or `/roster/jack-morrison/` should map to `index.html` files in subfolders.

Use the included file:

```text
cloudfront/url-rewrite-function.js
```

Create a **CloudFront Function** and paste in that code. Then attach it to the distribution on the **Viewer request** event for the default behavior.

That function rewrites:
- `/` → `/index.html`
- `/schedule/` → `/schedule/index.html`
- `/roster/jack-morrison/` → `/roster/jack-morrison/index.html`
- `/about` → `/about/index.html`

## 6) Add custom error responses

Add these CloudFront custom error responses:

- `403` → respond with `/404.html`, HTTP response code `404`
- `404` → respond with `/404.html`, HTTP response code `404`

This improves the user experience for bad URLs when using a private S3 origin behind CloudFront.

## 7) Set up your custom domain and HTTPS

If you want `www.yourdomain.com` or `yourdomain.com`:

1. Request an ACM certificate in **US East (N. Virginia) / us-east-1**
2. Include every hostname you plan to use, such as:
   - `yourdomain.com`
   - `www.yourdomain.com`
3. Validate the certificate with DNS
4. In CloudFront, add the alternate domain name(s)
5. Attach the ACM certificate to the distribution

For CloudFront alternate domain names, AWS requires a trusted certificate that covers the exact hostname, and CloudFront certificates for viewer HTTPS must be in `us-east-1`. citeturn0search2turn0search6turn0search18

## 8) Point DNS to CloudFront

If your DNS is in Route 53:

- create an **A record** for `yourdomain.com` as an **Alias** to the CloudFront distribution
- create an **A record** for `www.yourdomain.com` as an **Alias** to the CloudFront distribution

Route 53 alias records are the AWS-recommended way to point a root domain or subdomain to CloudFront. citeturn0search3turn0search15turn0search11

## 9) Deploy updates later

Because your site changes only once or twice a year, the simplest update flow is:

```bash
npm run build
aws s3 sync out/ s3://www.yourdomain.com --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths '/*'
```

Next.js static export generates a deployable `out/` folder for any static web host. citeturn0search1turn0search5

## 10) Suggested low-cost choices

For your scenario, these settings usually make sense:

- S3 Standard bucket for the site files
- CloudFront price class limited to North America + Europe if your audience is mostly there
- Route 53 only if you want AWS-managed DNS
- no server-side backend until you actually need forms or commerce

## 11) Repo structure recommendation

Keep the repo simple:

```text
club-hockey-site/
  public/
  src/
  cloudfront/
    url-rewrite-function.js
  scripts/
    deploy-to-s3.sh
  AWS-S3-CLOUDFRONT-SETUP.md
  next.config.ts
  package.json
```

## 12) What not to do in this static version

Do not rely on:
- Next.js API routes
- server-side rendering
- server actions that require a runtime
- built-in image optimization

Those features need a server-capable host, not plain S3 + CloudFront. Next.js notes that static export works on any static host, but server-required features are not supported in that mode. citeturn0search1turn0search5turn0search9
