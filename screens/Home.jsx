import React, { useContext } from "react";
import { View, Button, Text, Image, Pressable, ScrollView, Linking, StyleSheet, FlatList } from "react-native";
import { useTheme } from '@react-navigation/native';

// below is dummy datat used to track workouts
const weight = 10;
const totalWorkouts = 7;
const url = 'https://www.arrowheadpride.com'


const Home = ({ navigation, route }) => {
    React.useEffect(() => {
        if (route.params?.post) {

        }
    }, [route.params?.post]);

    const { colors } = useTheme();

    return (
        <View style={styles.main}>
            <View style={styles.profileSection}>
                <View style={styles.redBox}>
                    <Image
                        style={{ width: 100, height: 100, gap: 10 }}
                        source={require('../assets/images/ProfilePic.png')}
                    />

                    <View style={styles.workoutDetails}>

                        <Text style={{ fontWeight: 600, textAlign: 'center' }}>User's Profile Name</Text>

                        <View style={styles.totals}>

                            <View style={{ flex: 1, borderRightWidth: 5 }}>
                                <Text style={{ textAlign: 'right', paddingRight: 5 }}>{totalWorkouts}</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 5, fontWeight: 200 }}>Workouts Completed</Text>
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text>{weight} lbs</Text>
                                <Text style={{ textAlign: 'left', fontWeight: 200 }}>Weight Lifted</Text>
                            </View>

                        </View>

                    </View>

                </View>
                <Text>User's Profile Info</Text>
            </View>


            <View style={{ flex: 1, alignItems: 'center', gap: 5 }}>
                <Text>NO PROGRAM APPLIED</Text>
                <Pressable
                    onPress={() => navigation.navigate('CreatePost')}
                    style={{ backgroundColor: 'blue', height: '60%', width: '80%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ color: 'white', fontWeight: 600 }}>FIND A PROGRAM</Text>
                </Pressable>
            </View>

            {/* Need to establish why navigation is not working with below import */}
            {/* <HomeScrollBar /> */}

            <View style={{flex: 1, borderTopWidth: 5, borderTopColor: colors.flatListTopBar}}>
                <FlatList
                    contentContainerStyle={{gap: 15, alignItems: 'center'}}
                    horizontal={true}
                    data={[
                        { key: 'MY PRESSABLE BUTTONS' },
                        { key: 'SHOP' },
                        { key: 'MY PHOTOS' },
                        { key: 'COMPETITION BOARD' },
                        { key: 'TRACK A WORKOUT' },
                        { key: 'FIND A NEW BUDDY' },
                        { key: 'MY FRIENDS' },
                        { key: 'FIND A WORKOUT' },
                        { key: 'EXERCISES' },
                        { key: 'SETTINGS' },
                        { key: 'CREATE A POST' },
                        { key: 'GO TO DETAILS' },
                    ]}
                    renderItem={({ item }) =>
                        <Pressable
                            style={styles.scrollButton}
                            onPress={() => navigation.navigate('CreatePost')}
                        >
                            <Text style={styles.scrollButtonText}>{item.key}</Text>
                        </Pressable>
                    }
                />


            </View>

            {/* <ScrollView horizontal={true} style={{ flex: 1 }} contentContainerStyle={{ gap: 15, alignItems: 'center' }}>
                <Pressable
                    style={styles.scrollButton}
                    onPress={() => navigation.navigate('CreatePost')}
                >
                    <Text style={styles.scrollButtonText}>MY PRESSABLE PHOTOS</Text>
                </Pressable>
                <Pressable
                    style={styles.scrollButton}
                    onPress={() => Linking.openURL(url)}
                >
                    <Text style={styles.scrollButtonText}>SHOP</Text>
                </Pressable>
                <Button
                    title="My Photos"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="Shop"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="Competition Board"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="Track a Workout"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="Find a New Buddy"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="My Friends"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="Find a Workout"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="Exercises"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="Settings"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="Create post"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
                <Button
                    title="Go to Details"
                    onPress={() =>
                        navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'This is additional'
                        })}
                />
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile', { name: 'Test' })}
                />
            </ScrollView> */}


            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Create post"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
                <Button
                    title="Go to Details"
                    onPress={() =>
                        navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'This is additional'
                        })}

                />
                <Text>Go to Profile Page?</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile', { name: 'Test' })}
                />
            </View>


            {/* <Text style={{ color: colors.text }}>This is a home screen</Text>
            <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate('About')}
            /> */}
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flex: 1,
    },
    profileSection: {
        alignItems: 'center',
        justifyContent: 'top',
        borderWidth: 5,
        gap: 5
    },
    redBox: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'red',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row'
    },
    workoutDetails: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightblue'
    },
    totals: {
        flexDirection: 'row',
        borderTopWidth: 3,
        width: '100%',
        gap: 3
    },
    // flatListContainer: {
    //     flex: 1, 
    //     borderTopWidth: 5, 
    //     borderTopColor: colors.flatListTopBar
    // },
    scrollButton: {
        borderRadius: 5,
        backgroundColor: 'lightblue',
        width: 'auto',
        height: 35,
        justifyContent: 'center',
        padding: 10
    },
    scrollButtonText: {
        fontWeight: 500,
        color: 'white',
        
    },
});