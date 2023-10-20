import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

function PostScreen() {
    return (
        <View style={styles.container}>
            <Text>PostScreen</Text>
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})