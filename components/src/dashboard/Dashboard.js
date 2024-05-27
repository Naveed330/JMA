import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Navbar from '../navbar/Navbar'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Navbar/>
      <ImageBackground 
        source={require('../../../assets/images/dashboardbg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.profileImage}>
            <Image style={styles.ellipse} source={require('../../../assets/images/Ellipse.jpg')} />
          </View>
          <Text style={styles.userName}>Abcde</Text>
          <Text style={styles.useremail}>abcdef@gmail.com</Text>

          <View style={styles.businessFinance}>
            <View style={styles.businessStatus}>
              <Text style={styles.businessfinancetext}>Business Finance</Text>
              <View style={styles.statusField} >
                <Text style={styles.textColor}> Status </Text>
                <AntDesign name="check" size={26} color="green" />
              </View>
            </View>

            <TouchableOpacity style={styles.viewDetail}>
              <Text style={styles.textColor}>View Details</Text>
              <Image source={require('../../../assets/images/Arrow.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.businessFinance}>
            <View style={styles.businessStatus}>
              <Text style={styles.businessfinancetext}>Personal Loan</Text>
              <View style={styles.statusField}>
                <Text style={styles.textColor}> Status </Text>
                <AntDesign name="close" size={26} color="Red" />
              </View>
            </View>

            <TouchableOpacity style={styles.viewDetail}>
              <Text style={styles.textColor}>View Details</Text>
              <Image source={require('../../../assets/images/Arrow.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.businessFinance}>
            <View style={styles.businessStatus}>
              <Text style={styles.businessfinancetext}>Mortgage</Text>
              <View style={styles.statusField}>
                <Text style={styles.textColor}> Status </Text>
                <AntDesign name="close" size={26} color="Red" />
              </View>
            </View>

            <TouchableOpacity style={styles.viewDetail}>
              <Text style={styles.textColor}>View Details</Text>
              <Image source={require('../../../assets/images/Arrow.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.businessFinance}>
            <View style={styles.businessStatus}>
              <Text style={styles.businessfinancetext}>Real Estate</Text>
              <View style={styles.statusField}>
                <Text style={styles.textColor}> Status </Text>
                <AntDesign name="check" size={26} color="green" />
              </View>
            </View>

            <TouchableOpacity style={styles.viewDetail}>
              <Text style={styles.textColor}>View Details</Text>
              <Image source={require('../../../assets/images/Arrow.png')} />
            </TouchableOpacity>
          </View>

        </ScrollView>
          {/* <FooterNavbar/> */}
      </ImageBackground>
    </View>
  )
}

export default Dashboard
            
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipse: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '500',
  },
  useremail: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
  },
  businessFinance: {
    width: '80%',
    backgroundColor: 'rgba(224, 224, 224, 0.58)',
    borderRadius: 15,
    paddingVertical: 25, 
    paddingHorizontal: 20,
    marginTop: 20,
  },
  businessStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  businessfinancetext: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  textColor: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  viewDetail: {
    flexDirection: 'row',
    paddingTop: 30,
    alignItems:'center'
  },
  statusField:{
    flexDirection:'row',
    justifyContent:'center', alignItems:'center'
  }
})


