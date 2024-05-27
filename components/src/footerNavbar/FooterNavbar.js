import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const FooterNavbar = () => {
  return (
    <View>
     
     <View style={styles.footerContainer}>
            <Image 
                style={styles.footerBackground} 
                source={require('../../../assets/images/footerNavbar.png')} 
            />
          
            <Pressable style={styles.logoContainer}>
                <Image 
                    style={styles.footerLogo} 
                    source={require('../../../assets/images/footerlogo.png')} 
                />
            </Pressable>

            <Pressable style={styles.logoContainer}>
                <Image 
                    style={styles.PersonLogo} 
                    source={require('../../../assets/images/Person.png')} 
                />
            </Pressable>

            <Pressable style={styles.ServiceContainer}>
                <Image 
                    style={styles.ServiceLogo} 
                    source={require('../../../assets/images/Service.png')} 
                />
            </Pressable>

            <Pressable style={styles.HomeContainer}>
                <Image 
                    style={styles.ServiceLogo} 
                    source={require('../../../assets/images/Home.png')} 
                />
            </Pressable>

            <Pressable style={styles.playbuttonContainer}>
                <Image 
                    style={styles.ServiceLogo} 
                    source={require('../../../assets/images/playbutton.png')} 
                />
            </Pressable>
        </View>
    </View>
  )
}

export default FooterNavbar
   
const styles = StyleSheet.create({
    container: {
       alignItems:'flex-end'
    },
    footerContainer:{
        width:'100%', 
        height:'100%',
        justifyContent:'center', 
        alignItems:'center',
        position:'relative',
        marginTop:60,
        marginBottom:9
    },
    logoContainer:{
        position:'absolute',
        right:30,
    },
    PersonLogo:{
        position:'absolute',
        right:90, 
        bottom:-18
    },
    ServiceContainer:{
        position:'absolute',
        left:100,
    },
    HomeContainer:{
        position:'absolute',
        left:20,
    },
    playbuttonContainer:{
        position:'absolute',
        left:157,
        top:295
    }
})
     
