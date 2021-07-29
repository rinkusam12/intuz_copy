module.exports = {
  mode: 'jit',
  purge: {
    enable:true,
    mode: 'all',
    content:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        "opensans": ["'Open Sans'", "sans-serif"],
        "quicksand": ["'Quicksand'", "sans-serif"],
        "maven": ["'Maven Pro'", "sans-serif"],
        "nunito": ["'Nunito'", "sans-serif"],
        "merri": ["'Merriweather'", "sans-serif"],
        "nunitosans": ["'Nunito Sans'", "sans-serif"],
      },
      fontSize: {
        "28": "1.75rem",
        "20": "2rem",
        "48": "4.8rem",
        "30": "2.8rem",
        "18":"18px",
        "16":"16px",
        "14":"14px",
        "12":"12px",
      },
      colors: {
        brand: {
          primary: "#684574",
          secondary: "#3cecec",
        },
        black: {
          '2f': "#0e1f2f",
          "26": "#262626",
          "00": "#000",
          "3a": "#3a3a3a",
          "6b": "#6b6b6b"
        },
        gray: {
          "6b": "#6b6b6",
          "66": "#666666",
          "d2": "#d2d2d2",
          "4f": "#4f4f4f"
        },
        back:{
          "light":"rgb(250, 250, 250)",
        },
        header: "#575757"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ],
}
