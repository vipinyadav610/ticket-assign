import { ON_COLLAPSE } from 'constants/sidebar'

export const onCollapse = collapse => {
  return {
    type: ON_COLLAPSE,
    collapse
  }
}
