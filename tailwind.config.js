/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-1" : "#0396ff",
        "color-2" : "#e6f4ff",
        "color-3" : "#E2E6F2",
        "color-4" : "#2B2F33",
        "color-5" : "#76809B",
        "color-6" : "#212633",
        "color-7" : "#f2faff",
        "color-8" : "#99A2BC",
        "color-9" : "#7d7d7d",
        "color-10" : "#c4cdd5",
        "color-11" : "rgba(128,187,53,0.1)",
        "color-12" : "#80BB35",
        "color-13" : "#8E8B8B",
        "color-14" : "#231f20",
        "color-15" : "#777",
        "color-16" : "#9e9e9e",
      },
      fontSize:{
        "20px" : "20px"
      },
      backgroundImage:{
        "bg-1" : "url('https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726841986/Web_Travel/background-smart_ewdtub.png')",
        "bg-2" : "url('https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726842164/Web_Travel/background-cus-review_csgrqr.png')"
      },
      boxShadow:{
        "box-1" : "0px 4px 4px 0 rgba(0,0,0,0.05)",
        "box-2" : "0px 2px 6px 0px rgba(50,50,50,0.33)"
      }
    },
  },
  plugins: [],
}

