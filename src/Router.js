import React from 'react';
import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack;

import Member from '.pages/member/Member';
import MemberDetail from '.pages/member/MemberDetail';
import MemberUpdate from '.pages/member/MemberUpdate';

import Profile from '.pages/profile/Profile';
import ProfileEdit from '.pages/profile/ProfileEdit';


const Tab = createBottomTabNavigator(); // Tab ı  kur diyoruz
const Stack = createStackNavigator();  // Stack i kur diyoruz


const MemberStack = () => {            //normal function yapısı da kullanılabilir // Burda bir member stack yapısı kuruyoruz
    return(
        <Stack.Navigator>
            <Stack.Screen name="MemberScreen" component={Member} options={{title: 'Members'}} />
            <Stack.Screen name="MemberDetailScreen" component={MemberDetail}  />
            <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate}  />
        </Stack.Navigator>
    )
} 


const ProfileStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={Profile} />
            <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
        </Stack.Navigator>
    )
}



function App() {
    return (
        <NavigationContainer>                         // Tab ekranında member ve profiler kısımları bulunur
        <Tab.Navigator initialRouteName="Profile" >
                <Tab.Screen name="Member" component={MemberStack} />   // hangisi üsteyse o sayfayla başlatır bunu değişirmek için initialRouteName kullanabiliriz
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default App;
