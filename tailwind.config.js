module.exports = {
  content: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,css,scss}',
  ],
  darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    extend: {
      backgroundImage: {
        'docs-a': "url('../images/docs/docs-a.png')",
        'docs-tit': "url('../images/docs/docs-tit.png')",
        'docs-data': "url('../images/docs/docs-data.png')",
        'docs-money': "url('../images/docs/docs-money.png')",
        'docs-price': "url('../images/docs/docs-price.png')",
        'arrows': "url('../images/arrows.png')",
        'banner-pc': "url('../images/banner.png')",
        'banner-h5': "url('../images/banner-h5.png')",
       },
      colors: {
        gray66: '#666666',
        gray77: '#777777',
        grayf1: '#F1F1F1',
        gray02: '#02071D',
        gray89: '#89ABBC',
        gray42: '#42677B',
        grayb3: '#B3C3D3',
        grayea: '#EAEFF4',
        gray02: '#02071D',
        grag2c: '#2C465E',
        grage5:'#E5F2FF',
        grage5f:'#E5F5FF',
        grayf7:'#F7FBFF',
        gray6a:'#6A8298',
        grag96a: '#96A9BA',
        graye3: '#E3EDF7',
        gragd1: '#D1E5F9',
        gray20: '#207CD1',
        graye3e: '#E3EEF6 ',
        graydd: '#DDF1FD',
        gray96: '#96A9BA',
        gray11: '#119BFF ',
        gray333: '#333333',
        graydd: '#DDEBF7',
        graybc: '#BCE6FF',
        green07: '#07D600',
        grayed: '#EDF5FA',
        gray3d3d:'#3D3D3D',
        gray00:'#008CDF',
        black0a:"#0A0A0A",
        black2f:"#2F2F2F",
        black00:"#00A0FF",
        black74:"#74CBFF"
      },
      width: {
       
      },
      fontSize: {
        font22: '1.4rem'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
