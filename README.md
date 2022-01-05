# v6.2.2 issue with LaunchDarkly SDK

1. Replace API key in `src/index.js` with a valid launch darkly key
1. `docker build . --no-cache -t launchdarkly-repo`
2. `docker run launchdarkly-repo`
