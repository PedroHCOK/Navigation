import {
    createBottomTabNavigator, 
    BottomTabScreenProps
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";


import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type BottomtackRoutesList = {
    home: undefined;
    product: undefined | { id: string} ;
}

export type BottomRoutesProps<T extends keyof BottomtackRoutesList> = BottomTabScreenProps<BottomtackRoutesList, T>

const Tab = createBottomTabNavigator<BottomtackRoutesList>();

export function BottomRoutes() {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: '#2C46B1',
                tabBarInactiveTintColor: '#444444',
                tabBarLabelPosition: 'beside-icon',
             }} 
            initialRouteName="home"
        >
            <Tab.Screen 
                name="home" 
                component={Home} 
                options={{ 
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons 
                            name="home"
                            size={size}
                            color={color}
                        />
                    ) 
                }}
            />
            <Tab.Screen 
                name="product" 
                component={Product} 
                options={{ 
                    tabBarLabel: 'Produto', 
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons 
                            name="shopping-cart"
                            size={size}
                            color={color}
                        />
                    ) 
                }}
            />
        </Tab.Navigator>
    );
}