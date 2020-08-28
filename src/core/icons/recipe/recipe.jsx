import React from 'react'
import PropTypes from 'prop-types'

function Recipe(props) {
  const { size, style } = props

  return (
    <svg height={size} viewBox="0 0 512 512" width={size} {...style}>
      <path d="M438.109 0H91.781C66.538 0 46 20.538 46 45.782v420.436C46 491.462 66.538 512 91.781 512h346.328C453.488 512 466 499.488 466 484.109V27.891C466 12.512 453.488 0 438.109 0zM66 466.218c0-14.216 11.565-25.782 25.781-25.782h314.217V492H91.781C77.565 492 66 480.435 66 466.218zm380 17.891c0 4.351-3.54 7.891-7.891 7.891h-12.111v-51.563h12.111a27.83 27.83 0 007.891-1.136zm0-71.563c0 4.351-3.54 7.891-7.891 7.891H106.001V265.215c0-5.523-4.477-10-10-10s-10 4.477-10 10v155.591A45.505 45.505 0 0066 428.403V45.782c0-12.229 8.56-22.489 20.001-25.121v154.553c0 5.523 4.477 10 10 10s10-4.477 10-10V20h332.108c4.351 0 7.891 3.54 7.891 7.891z" fill="currentColor" />
      <path d="M346.91 107.855a59.04 59.04 0 00-21.927 4.21c-10.863-16.081-29.144-26.029-48.982-26.029s-38.119 9.948-48.982 26.029a59.06 59.06 0 00-21.927-4.21c-32.583 0-59.091 26.508-59.091 59.091 0 25.036 15.346 46.751 38.182 55.297v116.701c0 8.521 6.933 15.455 15.454 15.455h152.728c8.521 0 15.454-6.933 15.454-15.455v-116.7C390.654 213.698 406 191.982 406 166.947c0-32.583-26.507-59.092-59.09-59.092zM204.183 334.4v-20.002h143.636V334.4zm151.423-129.333a10 10 0 00-7.787 9.752v79.579H204.183v-79.579a10 10 0 00-7.787-9.752c-17.896-4.061-30.395-19.737-30.395-38.12 0-21.555 17.536-39.091 39.091-39.091a38.971 38.971 0 0120.689 5.92 9.999 9.999 0 0014.448-4.434c6.259-14.157 20.3-23.305 35.771-23.305s29.512 9.147 35.771 23.305a10.002 10.002 0 0014.448 4.434 38.975 38.975 0 0120.69-5.92c21.554 0 39.09 17.536 39.09 39.091.001 18.383-12.498 34.059-30.393 38.12zM96.001 210.215c-5.523 0-10 4.48-10 10.003s4.477 10 10 10 10-4.477 10-10v-.007c0-5.523-4.477-9.996-10-9.996z" fill="currentColor" />
    </svg>
  );
}

Recipe.propTypes = {
  size: PropTypes.number,
}

Recipe.defaultProps = {
  size: 16,
}

export default Recipe
