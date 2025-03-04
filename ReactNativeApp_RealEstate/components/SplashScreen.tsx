// splashscreen.tsx

import { View, Text, Image, ActivityIndicator } from "react-native"

export default function SplashScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFF"}}>
            <Image source={require("@/assets/images/pngwing.png")} style={{ width: 200, height: 200, marginBottom: 10 }} />
            <ActivityIndicator size="large" color="black"/>
        </View>
    )
}