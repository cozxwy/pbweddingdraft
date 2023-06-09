module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Bacalisties', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      rotate: {
        '350': '350deg',
      },
      backgroundImage: {
        'my_bg_image' : "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
      animation: {
        fadeinn: 'fadeIn 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '100%': { backgroundColor: theme('colors.transparent') },
          '0%': { backgroundColor: theme('colors.red.300') },
        },
      }),
    }
  },
 
  plugins: [
    require('@tailwindcss/forms')
  ],
  
}
