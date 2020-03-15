const withOffline = require('next-offline');

module.exports = withOffline({
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: { cacheName: 'offlineCache' },
      },
    ],
  },
});
