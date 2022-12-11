import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import {COLORS, NFTData, SIZES} from "../constants"
import { HomeHeader, FocusedStatusBar, NFTCards } from "../components"
const Home = () => {
    const [nftData, setNftData]  = useState(NFTData)

    const handleSearch = (value) => {
        if(!value.length) setNftData(NFTData);
        const filteredNFTData = NFTData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        if(filteredNFTData.length > 0){
            setNftData(filteredNFTData)
       }
       else{
        setNftData(NFTData)
       }
    }
  return (
    <SafeAreaView style ={{flex: 1}}>
        <FocusedStatusBar background = {COLORS.primary}/>
        <View style={{flex:1}}>
            <View style={{zIndex: 0 }}>
                <FlatList
                    data={nftData}  
                    renderItem={({item}) => <NFTCards data={item}/>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader onSerach={handleSearch}/>}
                />
            </View>
            <View style={{
                position:"absolute",
                top:0,
                bottom:0,
                left:0,
                right:0,
                zIndex:-1
            }}>
                <View style={{
                    height:350, 
                    backgroundColor:COLORS.primary,
                    borderBottomEndRadius: SIZES.font}}/>
                <View style ={{flex:1, backgroundColor: COLORS.white}}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home
