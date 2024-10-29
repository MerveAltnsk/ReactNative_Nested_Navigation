import React from 'react'
import { View,Text,Button} from 'react-native'

function Member({navigation}){
    return(
        <View>
            <Text>Hello Member</Text>

            <Button
            title="Go to MemberDetail page"
            onPress={() => navigation.navigate('MemberDetailScreen')}
            />

        </View>
    )
}

export default Member;