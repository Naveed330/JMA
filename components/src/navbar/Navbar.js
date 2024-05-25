import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

const Navbar = () => {
  return (
    <View style={styles.container} >
        <View style={styles.navbar}>
          <Pressable>
            <Image source={require('../../../assets/images/navbarlogo.png')} />
          </Pressable>
          <Pressable>
            <Image source={require('../../../assets/images/Notificationlogo.png')} />
          </Pressable>
        </View>
    </View>
  )
}

export default Navbar
       
const styles = StyleSheet.create({
  container: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
      },
      navbar: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',paddingBottom:8
      },
})
