import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets, COLORS, SHADOWS, SIZES } from '../constants';
import  { CircleButton, RectButton } from './Button';
import { NFTTitle, SubInfo, ETHPrice } from './SubInfo';


const NFTCards = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style ={{
        width:"100%",
        height: 250
      }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style = {{
            height:"100%",
            width: "100%"
          }}
        />
        <CircleButton imgUrl = {assets.heart} right = {10} top={10}/>
      </View>
      <SubInfo/>
      <View
      style={{ padding:SIZES.font, width:"100%" }}>
        <NFTTitle 
          title ={data.name}
          subTitle={data.creator}/>
          <View style={{
            flexDirection:"row",
            marginTop: SIZES.font,
            alignItems:'center',
            justifyContent:'space-between'
          }}>
            <ETHPrice price={data.price}/>
            <RectButton
              minWidth = {120}
              handlePress = {() => navigation.navigate("Details", {data})}
             />
          </View>
      </View>

    </View>
  )
}

export default NFTCards