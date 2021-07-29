import { createMedia } from "@artsy/fresnel"

const ExampleAppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 990,
    xl:1200,
    xxl:1440
  },
})

// Generate CSS to be injected into the head
export const mediaStyle = ExampleAppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = ExampleAppMedia