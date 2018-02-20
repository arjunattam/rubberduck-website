# mercury-website

Repository for the static website that powers [rubberduck.io](http://www.rubberduck.io)

## Serving

This static website is served from GCP cloud storage, from the [www.rubberduck.io](https://console.cloud.google.com/storage/browser/www.rubberduck.io?project=codeview-191613&organizationId=902217817724) bucket.

To update the contents of the bucket, run the following command

```
gsutil cp index.html gs://www.rubberduck.io
```

Ensure that the files have public permissions.

```
gsutil acl ch -u AllUsers:R gs://www.rubberduck.io/index.html
```

For more info, check out the [GCP guide](https://cloud.google.com/storage/docs/hosting-static-website) for hosting static websites.

## Infra todos

1. Need to get SSL working, either by GCP load balancer, or [Cloudflare](https://www.cloudflare.com/ssl/).

2. Verify if non-www redirection is working.
