import { View, Text, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { assets, COLORS, FONTS, SIZES } from '../constants'

const HomeHeader = ({onSerach}) => {
  return (
    <View style={{
      backgroundColor:COLORS.primary,
      padding: SIZES.font
    }}>
      <View
        style ={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <Image 
            source={assets.logo}
            resizeMode = "contain"
            style={{height: 25, width: 90}}
            />
            <View style={{width:45, height:45}}>
              <Image
                source={assets.person01}
                resizeMode="contain"
                style={{width:"100%", height:"100%"}}
              />
              <Image 
                source={assets.badge}
                resizeMode="contain"
                style={{width:15, height:15, position:"absolute",
              bottom:0, right:0}}
              />
            </View>
      </View>
      <View style={{marginVertical: SIZES.font}}>
        <Text
        style={{fontFamily: FONTS.regular, fontSize:SIZES.small, color: COLORS.white}}>
          Hello, there👋
        </Text>
        <Text
        style={{fontFamily: FONTS.bold, fontSize:SIZES.large, 
        color: COLORS.white, marginTop:SIZES.base / 2}}>
          Lets find a masterpiece
        </Text>
      </View>
      <View 
        style={{
          flexDirection:'row', 
          alignItems:'center',
          width: "100%",
          backgroundColor:COLORS.secondary,
          paddingHorizontal:SIZES.font,
          paddingVertical: SIZES.base,
          borderRadius: SIZES.base}}>
        <Image 
          source={assets.search}
          resizeMode="contain"
          style={{width:SIZES.large, marginRight: SIZES.base}}/>
          <TextInput
            placeholder='Search NFTs'
            placeholderTextColor={COLORS.gray}
            style={{flex:1}}
            onChangeText = { onSerach } />
      </View>
    </View>
  )
}

export default HomeHeader