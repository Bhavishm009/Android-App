import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

function MessageScreen() {
    return (
        <View style={styles.container}>
            <Text>MessageScreen</Text>
        </View>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})