import { DrawerContentScrollView } from "@react-navigation/drawer";

function CustomNavigationDrawer({...navProps}) {
    const {state, navigation} = navProps;

    const isActive = index => index === state.index;

    return (
        <DrawerContentScrollView {...navProps}>
            {state.routes.map((route, index) => (
                <Drawer.Item 
                    key={route.key}
                    label={route.name}
                    accessibilityLabel={route.name}
                    active={isActive(index)}
                    onPress={() => navigation.navigate(route.name)}
                />
            ))}
        </DrawerContentScrollView>
    )
}

export default CustomNavigationDrawer;