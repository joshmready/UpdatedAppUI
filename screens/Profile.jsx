import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';

const Profile = ({navigation}) => {


    const {colors} = useTheme();
    return (
        <View style={styles.center}>
            <Text style={{color: colors.text}}>This is a test Profile</Text>
            {/* <Pressable onPress={() => navigation.navigate('Home')}>
                <Text>Go to Settings</Text>
            </Pressable> */}
            <Button 
                title="Go to About Screen"
                onPress={() => navigation.navigate('About')}
            />
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });