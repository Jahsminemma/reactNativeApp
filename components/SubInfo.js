import { View, Text, Image } from 'react-native'
import React from 'react'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const NFTTitle = ({title, subTitle}) => {
  return (
    <View>
      <Text style={{
       fontSize: SIZES.large,
       fontFamily:FONTS.semiBold,
       color:COLORS.primary
       }}>
        {title}
       </Text>
       <Text style={{
       fontSize: SIZES.small,
       fontFamily:FONTS.regular,
       color:COLORS.primary
       }}>
        {subTitle}
       </Text>
    </View>
  )
}

export const ETHPrice = ({price}) => {
    return (
      <View style={{
        flexDirection:"row",
        alignItems:'center'
      }}>
        <Image 
        source={assets.eth}
        style = {{width:20, height:20, marginRight:2}} />
        <Text
          style={{
          fontFamily:FONTS.medium,
          fontSize: SIZES.font, 
          color:COLORS.primary}}
        > {price} </Text>
      </View>
    )
  }
  export const ImageCmp = ({imgUrl, index}) => {
    return (
      <Image 
        source={imgUrl}
        resizeMode="contain"
        style={{
            width:48,
            height:48,
            marginLeft: index === 0 ? 0: -SIZES.font
        }}/>
    )
  }

  export const People = () => {
    
    return (
      <View style={{flexDirection:"row"}}>
        {[assets.person02, assets.person03, assets.person04].map((imgUrl, 
            index) => (
                <ImageCmp index={index} imgUrl={imgUrl} key={`people-${index}`}/>
            ))}
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical:SIZES.base,
        backgroundColor:COLORS.white,
        alignItems:'center',
        justifyContent:'center',
        ...SHADOWS.light,
        elevation:1,
        maxWidth:"50%"
      }}>
        <Text
        style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color:COLORS.primary
        }}>Ending in</Text>
          <Text
        style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.medium,
            color:COLORS.primary
        }}>12:30MIN</Text>
      </View>
    )
  }

  export const SubInfo = () => {
    return (
      <View style={{
        width: "100%",
        paddingHorizontal:SIZES.extraLarge  ,
        marginTop: -SIZES.large,
        flexDirection:"row",
        justifyContent:"space-between",
      }}>
        <People />
        <EndDate />
      </View>
    )
  }