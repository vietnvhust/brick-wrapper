const breakpoint = {
    xss: 320,
    xs: 600,
    md: 768,
    lg: 992,
    // xl: 1200,
    xl: 1280,
    xxl: 1400,
    xxxl: 1600,
    xg: 1900,
    xlg: 1024
}
export const breakpointsMedia = {
    // Small devices (mobile, less than 320)
    mobileS: `@media (max-width: ${breakpoint.xss}px)`,
    // Small devices (mobile, less than 600)
    mobile: `@media (max-width: ${breakpoint.xs}px)`,
    // Small devices (landscape phones, 576px and up)
    landscape: `@media (min-width: ${breakpoint.xs}px)`,
    // Medium devices (tablets, 768px and up)
    tablet: `@media (min-width: ${breakpoint.md}px)`,
    // Large devices (desktops, 992px and up)
    desktop: `@media (min-width: ${breakpoint.lg}px)`,
    // Extra large devices (large desktops, 1200px and up)
    largeDesktop: `@media (min-width: ${breakpoint.xl}px)`,
    // Extra large devices (large desktops, 1400px and up)
    xLargeDesktop: `@media (min-width: ${breakpoint.xxl}px)`,
    // Extra large devices (large desktops, 1600px and up)
    xxLargeDesktop: `@media (min-width: ${breakpoint.xxxl}px)`,
    // Extra large devices (large desktops, 1920px and up)
    xGloDesktop: `@media (min-width: ${breakpoint.xg}px)`,
    // tablet less than 1024px
    maxTablet: `@media (max-width: ${breakpoint.xlg}px)`,
    hover: `@media (hover:hover)`
}
