import { StyleSheet, Text, View,ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Navbar from '../navbar/Navbar'

const RealEstate = () => {
  return (
    <View style={styles.container}>
      <Navbar/>
        <ImageBackground 
        source={require('../../../assets/images/businessimage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
        >
            <Text style={styles.businessText} >real estate</Text>
            <View style={styles.businessFinanceDetail} >
                <Text style={styles.BusinessGeneralText}>
                At our advertising agency, we're more than just marketers – we're storytellers, strategists, and solution-seekers. With a blend of creativity and expertise, 
                we craft campaigns that resonate with your audience and drive meaningful results. From captivating content creation to targeted ad placements, we're dedicated 
                to elevating your brand's presence across all channels. Partner with us and let's embark on a journey to success together.
                </Text>
            </View>

            <Pressable style={styles.applybtn} >
                <Text style={styles.applytext} >Apply</Text>
            </Pressable>
        </ImageBackground>
    
    </View>
  )
}

export default RealEstate

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#FFFFFF',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'start',
        alignItems: 'center',
    },
    businessText:{
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:24, 
        textTransform:'uppercase',
        color:'#FFFFFF',
        fontWeight:'700'
    },
    businessFinanceDetail:{
        paddingHorizontal:80,
        paddingTop:50
    },
    BusinessGeneralText:{
        color:'#FFFFFF',
        fontWeight:'700', 
        fontSize:12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    applybtn: {
        width: 100, 
        height: 50, 
        borderRadius: 50, 
        backgroundColor: '#D9D9D9', 
        justifyContent: 'center', 
        alignItems: 'center', marginTop:100,
      },
      applybtnText: {
        color: '#FFFFFF', 
        fontSize: 16, 
        fontWeight: 'bold', 
        
      },
      applytext:{
        fontSize:15, 
        fontWeight:'700'
      }

})