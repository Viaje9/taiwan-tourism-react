const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const sm = (val) => val >= screens.sm && val <= screens.md
const md = (val) => val >= screens.md && val <= screens.lg
const lg = (val) => val >= screens.lg && val <= screens.xl
const xl = (val) => val >= screens.xl

const getBreakpoint = (w) => {
  if (sm(w)) return 'sm'
  else if (md(w)) return 'md'
  else if (lg(w)) return 'lg'
  else if (xl(w)) return 'xl'
  else return 'min'
}

export const selectBreakpointsIs = (state) => getBreakpoint(state.screen.screenWidth)

export const selectScreenWidth = (state) => state.screen.screenWidth;

export const selectIsSmaller = (size) => (state) => {
  const { screenWidth } = state.screen
  if (size === 'min') return screenWidth < screens.sm
  if (size === 'md') return screenWidth < screens.md
  if (size === 'lg') return screenWidth < screens.lg
  if (size === 'xl') return screenWidth < screens.xl
  return false
}