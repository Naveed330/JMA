import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions,TextInput, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const OtpVerification = () => {
  return (
         <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
      <Pressable style={styles.backbuttonContainer}>
        <Image source={require('../../../assets/images/backbutton.png')} />
      </Pressable>
      <View style={styles.loginImageContainer}></View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>OTP Verification</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../../assets/images/OTPImage.png')} 
          style={styles.otpImage} 
          resizeMode="contain" 
        />
      </View>
        <Text style={styles.otpText} >Enter OTP</Text>
        <Text style={styles.digiitCode} >An 4 digit code has been sent to your email</Text>
        
        <View style={styles.textField} >
            <TextInput style={styles.textInput}/>
            <TextInput style={styles.textInput}/>
            <TextInput style={styles.textInput}/>
            <TextInput style={styles.textInput}/>
        </View>

        <Pressable style={styles.VerifyBtn} >
            <Text style={styles.VerifyText} >Verify</Text>
        </Pressable>

        <Pressable style={styles.ResendBtn} >
            <Text style={styles.VerifyText} >Resend OTP</Text>
        </Pressable>
    </View>
        </ScrollView>
  );
};

     

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: width * 0.05,
  },
  backbuttonContainer: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.05,
  },
  loginImageContainer: {
    width: '100%',
    flexShrink: 0,
    marginTop: height * 0.1,
    position: 'relative',
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    marginTop: height * 0.02,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#000',
    fontSize: width * 0.08,
    fontWeight: '700',
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: height * 0.00,
  },
  otpImage: {
    width: '100%',
    height: height * 0.4,
  },
  otpText:{
    color:'#000000',
    fontSize:29,
    fontWeight:'600'
  },
  digiitCode:{
    color:'#575757',
    fontSize:19,
    fontWeight:'500'
  },
  textInput: {
    width: '22%',
    height: '100%',
    borderRadius: 14,
    paddingHorizontal: 8,
    fontSize: 45,
    backgroundColor:'#E3E3E3',
    borderColor:'#E3E3E3', 
    textAlign:'center', 
    fontWeight:'700',
    marginLeft:5
  },
  textField:{
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'start',
    padding: 16,
  },
  VerifyBtn: {
    backgroundColor: '#F3C147',
    width: '100%',
    height: height * 0.06,
    borderRadius: 46,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ResendBtn:{
    backgroundColor: '#F3C147',
    width: '100%',
    height: height * 0.06,
    borderRadius: 46,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30
  },
  VerifyText:{
    color:'#000',
    fontSize:26,
    fontWeight:'500'
  }
});
