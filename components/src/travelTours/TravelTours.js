import { StyleSheet, Text, View,ImageBackground, Pressable,ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../navbar/Navbar'

const TravelTours = () => {
  return (
    <View style={styles.container}>
      <Navbar/>
    
        <ImageBackground 
        source={require('../../../assets/images/businessimage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.businessText} >travel & tours</Text>
            <View style={styles.businessFinanceDetail} >
                <Text style={styles.BusinessGeneralText}>
                Embark on the adventure of a lifetime with our bespoke travel and tours services. At our agency, we curate unforgettable experiences tailored to your 
                preferences and desires. From exploring exotic destinations to immersing yourself in local culture, we specialize in crafting personalized itineraries 
                that exceed expectations. Our team of travel experts ensures every detail is meticulously planned, leaving you free to relax and enjoy the journey. 
                Whether you're seeking a romantic getaway, a family adventure, or a solo expedition, we're here to turn your travel dreams into reality. 
                With access to exclusive accommodations, insider knowledge, and seamless logistics, we're your trusted partner in travel. Let us guide you to hidden gems, 
                iconic landmarks, and unforgettable moments around the globe. Experience the world in a whole new way – contact us today and let the adventure begin
                </Text>
            </View>

            <Pressable style={styles.applybtn} >
                <Text style={styles.applytext} >Learn More</Text>
            </Pressable>
            </ScrollView>
        </ImageBackground>
    
    </View>
  )
}

export default TravelTours

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
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:24, 
        textTransform:'uppercase',
        color:'#FFFFFF',
        fontWeight:'700'
    },
    businessFinanceDetail:{
        paddingHorizontal:80,
        paddingTop:20
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
        alignItems: 'center', marginTop:60,
      },
      applybtnText: {
        color: '#FFFFFF', 
        fontSize: 16, 
        fontWeight: 'bold', 
        
      },
      applytext:{
        fontSize:15, 
        fontWeight:'700'
      },
      scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 20,
      },

})