module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'Bright-blue': 'hsl(220, 98%, 61%)',
        'Gradient-1': 'hsl(192, 100%, 67%)',
        'Gradient-2': ' hsl(280, 87%, 65%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
