import React from 'react'
import { View,Text,Button } from 'react-native'

function MemberDetail({navigation}){
    return(
        <View>
            <Text>Hello Member Detail</Text>

            <Button
            title="Go to MemberUpdate page"
            onPress={() => navigation.navigate('MemberUpdateScreen')}
            />

        </View>
    )
}

export default MemberDetail;