module.exports = {
  content: [
    './src/**/*.svelte',
    './src/**/*.md'
  ],
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#F1A944",
        },
      },
    ],
  }
}
