function round(value) {
  return Math.round(value * 1e5) / 1e5
}

const defaultFontFamily = '"Quicksand", "Helvetica", "Arial", sans-serif'

/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */
export default function createTypography(breakpoints) {
  const fontFamily = defaultFontFamily
  const fontSize = 14
  const fontWeightLight = 300
  const fontWeightRegular = 400
  // const fontWeightMedium = 500 // Not used, also not imported from google fonts anymore
  const fontWeightBold = 700
  const htmlFontSize = 16

  const coef = fontSize / 14
  const pxToRem = size => `${(size / htmlFontSize) * coef}rem`
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    letterSpacing,
  })

  const variants = {
    h1: {
      ...buildVariant(fontWeightRegular, 42, '54px', 1.4),

      [breakpoints.down('md')]: {
        ...buildVariant(fontWeightRegular, 22, '32px', 1.4),
      },
    },
    h2: buildVariant(fontWeightLight, 28, '38px', '1.75px'),
    h3: buildVariant(fontWeightLight, 16, '26px', 1.1),
    title: buildVariant(fontWeightRegular, 16, '19.2px', '0.7px'),
    body1: buildVariant(fontWeightRegular, 16, '28px', '1px'),
    body2: buildVariant(fontWeightLight, 14, '26px', 0.88),
    button: buildVariant(fontWeightBold, 12, '18px', 'normal'),
    caption: buildVariant(fontWeightRegular, 14, '24px', 1.7),
  }

  return {
    htmlFontSize,
    pxToRem,
    round,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    // fontWeightMedium,
    fontWeightBold,
    ...variants,
  }
}
