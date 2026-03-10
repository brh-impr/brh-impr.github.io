#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: ./scripts/deploy-to-s3.sh <bucket-name> [aws-cli-profile]"
  exit 1
fi

BUCKET_NAME="$1"
PROFILE_ARG=""

if [[ $# -ge 2 ]]; then
  PROFILE_ARG="--profile $2"
fi

npm run build
aws s3 sync out/ "s3://${BUCKET_NAME}" --delete ${PROFILE_ARG}

echo "Upload complete. If you use CloudFront, create an invalidation for /* after deployment."
