import React from "react";
import { useSpring, animated } from 'react-spring'

export default function Animation() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (
        <div>
            <animated.div style={props}><h1>I will fade in</h1></animated.div>
            <animated.button style={props}>Hello</animated.button>
        </div>
    )
}