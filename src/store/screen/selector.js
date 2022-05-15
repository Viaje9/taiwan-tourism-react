import {
  SM_WIDTH,
  MD_WIDTH,
  LG_WIDTH,
  XL_WIDTH,
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_MIN
} from '/src/constant'

const screens = {
  sm: SM_WIDTH,
  md: MD_WIDTH,
  lg: LG_WIDTH,
  xl: XL_WIDTH
}

const sm = (val) => val >= screens.sm && val <= screens.md
const md = (val) => val >= screens.md && val <= screens.lg
const lg = (val) => val >= screens.lg && val <= screens.xl
const xl = (val) => val >= screens.xl

const getBreakpoint = (w) => {
  if (sm(w)) return SCREEN_SM
  else if (md(w)) return SCREEN_MD
  else if (lg(w)) return SCREEN_LG
  else if (xl(w)) return SCREEN_XL
  else return SCREEN_MIN
}

export const selectBreakpointsIs = (state) => getBreakpoint(state.screen.screenWidth)

export const selectScreenWidth = (state) => state.screen.screenWidth

export const selectIsSmaller = (size) => (state) => {
  const { screenWidth } = state.screen
  if (size === SCREEN_MIN) return screenWidth < screens.sm
  if (size === SCREEN_MD) return screenWidth < screens.md
  if (size === SCREEN_LG) return screenWidth < screens.lg
  if (size === SCREEN_XL) return screenWidth < screens.xl
  return false
}
