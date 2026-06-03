export const slideUp = {
    initial: {
        y: 300
    },
    enter: (withPreloader) => ({
        y: 0,
        transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: withPreloader ? 2.5 : 0.5}
    })
}
