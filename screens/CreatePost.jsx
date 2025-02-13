import React from "react";
import { TextInput, View, StyleSheet, Button } from 'react-native';

function CreatePost({ navigation, route }) {
    const [postText, setPostText] = React.useState('');

    return (
        <>
            <View>
                <TextInput
                    multiline
                    placeholder="What's on your mind?"
                    style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                    value={postText}
                    onChangeText={setPostText}
                />
                <Button
                    title="Done"
                    onPress={() => {
                        // Pass and merge params back to home screen
                        navigation.navigate({
                            name: 'Home',
                            params: { post: postText },
                            merge: true,
                        });
                    }}
                />
            </View>
        </>
    )
}

export default CreatePost;

const styles = StyleSheet.create({
    TextInput: {
        height: 200,
        padding: 10,
        backgroundColor: 'white',
    }
})