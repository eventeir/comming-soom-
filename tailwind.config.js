/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 */
module.exports = {
  content: [],
  theme: {
    screens: {
      touch: { raw: 'hover: none' },
      'can-hover': { raw: 'hover: hover' },
      xxs: '380px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px'
    },
    extend: {
      colors: {
        primary:{
          100: '#161a3a',
          200: '#060b28',
          300: '#3862ce',
        }

      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%'
      }
    }
  }
}
