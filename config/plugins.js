module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 20971520, // 20MB in bytes
      },
    },
  },
});
