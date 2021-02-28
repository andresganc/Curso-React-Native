
import { View, Text } from 'react-native'
import styled, { css } from 'styled-components/native'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'

const textBase = css ` font-size: 15px;`

const textH1 = css ` font-size: 2.2rem; `
    const textH2 = css ` font-size: 1.9rem; `
    const textH3 = css ` font-size: 1.6rem; `
    const textH4 = css ` font-size: 1.3rem; `
    const textH5 = css ` font-size: 1rem; `
    const textH6 = css ` font-size: .7rem; `
    const textP1 = css ` font-size: .9rem; `
    const textP2 = css ` font-size: .8rem; `
    const textP3 = css ` font-size: .7rem; `
    const textP4 = css ` font-size: .6rem; `

const Typography = styled(Text) `

    /* TextBase */
    ${ textBase }


    // =========== TYPE ===========
    ${ props => props.h1 && css ` ${ textH1 } `}
    ${ props => props.h2 && css ` ${ textH2 } `}
    ${ props => props.h3 && css ` ${ textH3 } `}
    ${ props => props.h4 && css ` ${ textH4 } `}
    ${ props => props.h5 && css ` ${ textH5 } `}
    ${ props => props.h6 && css ` ${ textH6 } `}
    ${ props => props.p1 && css ` ${ textP1 } `}
    ${ props => props.p2 && css ` ${ textP2 } `}
    ${ props => props.p3 && css ` ${ textP3 } `}
    ${ props => props.p4 && css ` ${ textP4 } `}


    /* Colors */
    ${ colorsBG }
    ${ colorsText }
`

export default Typography