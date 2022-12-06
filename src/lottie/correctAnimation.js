import LottieView from "lottie-react-native";
import React, {useEffect, useState} from "react";

const CorrectAnimation = ({source, autoplay = true, loop= false, style, pressed}) => {

    const [shown, setShown] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShown(true)
        },0)
    },[])

    return (
        <LottieView
            // source={shown ? source : undefined}
            source={source}
            style={style}
            autoPlay={autoplay}
            loop={loop}
            pressed={pressed}
        />
    )
}

export default CorrectAnimation;