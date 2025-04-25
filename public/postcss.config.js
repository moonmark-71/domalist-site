// ✅ 수정된 postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),
    require('autoprefixer'),
  ],
};


  