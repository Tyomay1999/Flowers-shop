export const animation1 = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: '100%'
    },
}

const animation2 = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: '-100%'
    },
}

const animation3 = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: '100%'
    },
}
const animation4 = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: '-100%'
    },
}
const animation5 = {
    initial: {
        opacity: 0,
        rotate: '90deg'
    },
    in: {
        opacity: 1,
        rotate: '0deg'
    },
    out: {
        opacity: 0,
        rotate: '90deg'
    },
}
const animation6 = {
    initial: {
        opacity: 0,
        rotate: '-90deg'
    },
    in: {
        opacity: 1,
        rotate: '0deg'
    },
    out: {
        opacity: 0,
        rotate: '-90deg'
    },
}
const animation7 = {
    initial: {
        opacity: 0,
        rotateY: '150deg'
    },
    in: {
        opacity: 1,
        rotateY: '0deg'
    },
    out: {
        opacity: 0,
        rotateY: '150deg'
    },
}
export const noAnimation = {
    initial: {
        opacity: 1,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 1,
    },
}
const animationsArray = [ animation1, animation2, animation3, animation4, animation5, animation6, animation7 ];
export const animationPick = (k) => {    
    if(k){
        return noAnimation
    }
    const animation = animationsArray[Math.floor(Math.random() * animationsArray.length)]
    return animation
}
