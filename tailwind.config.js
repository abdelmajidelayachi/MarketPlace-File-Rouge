module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scale: 'scale .5s ease-in-out',
      }, 
      keyframes: {
        scale: {
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' },
        }

      },
      colors:{
        mainBlue : '#3A36DB',
        bgBlue : '#F2F2F2', 
        btn:'#FF9C01',
        dropdown :  'rgba(0, 0, 0, 0.75)',
        firstColor : '#FF9C01',
        buttonColor : '#FFF6E9',
        dashboard: '#96b4f4'

      },
      boxShadow: {
        '3xl': '0px 2px 4px 4px rgba(0, 0, 0, 0.1)',
        'modal': '0 2px 8px rgba(0,0,0,0.26)',
      },
      width: {
        'width_22': '23%',
        'width-30': '30%',
        'width-45': '45%',
      },
      zIndex : {
        'max':'999'
      },
      
      theme: {
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        }
      },
   


    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
