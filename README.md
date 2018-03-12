# mercury-website

Repository for the static website that powers [rubberduck.io](http://www.rubberduck.io)

## Development

The website is built over [Gatsby](https://www.gatsbyjs.org) - a static site generator on top of React.

Switch on the "development mode" on Cloudflare while deploying new versions.

## Serving

This static website is served from GCP cloud storage, from the [www.rubberduck.io](https://console.cloud.google.com/storage/browser/www.rubberduck.io?project=codeview-191613&organizationId=902217817724) bucket.

To deploy a new version, run

```
npm run deploy
```

Ensure that the files have public permissions.

```
npm run permissions
```

For one command that builds, deploys and checks permissions, run

```
npm run push
```

For more info, check out the [GCP guide](https://cloud.google.com/storage/docs/hosting-static-website) for hosting static websites.
