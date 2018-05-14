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

## Videos

1.  Use browsersize.com to verify that your browser width is 1040

2.  Use screeny to take video of a window. Make sure you are on a retina screen.

3.  Use quicktime to trim the video

4.  Use ffmpeg to crop the video to 2040 x 1280

5.  Use ffmpeg to change format to mp4

6.  Use handbrake to optimize for web and remove audio

7.  Use ffmpeg to get the first frame for poster

    ```
    ffmpeg -ss 0.5 -i feature-4-v2-cropped-hb.mp4 -t 1 -s 2080x1280 -f image2 feature-4.jpg
    ```
