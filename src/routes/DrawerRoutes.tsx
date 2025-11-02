import {
    createDrawerNavigator, 
    DrawerScreenProps
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";


import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type DrawerRoutesList = {
    home: undefined;
    product: undefined | { id: string} ;
}

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> = DrawerScreenProps<DrawerRoutesList, T>

const Drawer = createDrawerNavigator<DrawerRoutesList>();

export function DrawerRoutes() {
    return (
        <Drawer.Navigator 
            screenOptions={{ 
                headerShown: false,
                drawerActiveTintColor: '#2C46B1',
                drawerInactiveTintColor: '#444444',
             }} 
            initialRouteName="home"
        >
            <Drawer.Screen 
                name="home" 
                component={Home} 
                options={{ 
                    drawerLabel: 'Inicio',
                    drawerIcon: ({color, size}) => (
                        <MaterialIcons 
                            name="home"
                            size={size}
                            color={color}
                        />
                    ) 
                }}
            />
            <Drawer.Screen 
                name="product" 
                component={Product} 
                options={{ 
                    drawerLabel: 'Produto', 
                    drawerIcon: ({color, size}) => (
                        <MaterialIcons 
                            name="shopping-cart"
                            size={size}
                            color={color}
                        />
                    ) 
                }}
            />
        </Drawer.Navigator>
    );
}