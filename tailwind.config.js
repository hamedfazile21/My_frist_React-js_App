/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: { 
      colors:{
        btn: "#00B4FF",
        gray: "#808080",
        lightgray: "#F5F5F5",
        muted: "#666666",
        borderColor :"#F5F5F5",
        date: "#999999",
        paragraph: "#333333",
        lightWhite: "#DADADA",
      },
      fontFamily:{
        estdad : ["estedad", "sans-serif"]
      }
      
    },
  },
  plugins: [],
};

