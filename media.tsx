import { createMedia } from "@artsy/fresnel"

const ExampleAppMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
  interactions: {
    hover: "(hover: hover)",
    notHover: "(hover: none)",
    landscape: "not all and (orientation: landscape)",
    portrait: "not all and (orientation: portrait)",
  },
})

export const { Media, MediaContextProvider, createMediaStyle } = ExampleAppMedia