import React from 'react'
import { View,Text,Button } from 'react-native'

function MemberUpdate({navigation}){            // Buradan ProfileEditScreen sayfasına da gidebiliriz 
    return(
        <View>
            <Text>Hello Member Update</Text>

            <button
            title="Go to ProfileEdit page"
            onPress={() => navigation.navigate('ProfileEditScreen')}
            />

        </View>
    )
}

export default MemberUpdate;