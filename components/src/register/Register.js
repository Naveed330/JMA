import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput,TouchableOpacity } from 'react-native';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactnumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [emailError,setEmailError] = useState('')
  const [NameError,setNameError] = useState('')
  const [contactnumberError,setcontactnumberError] = useState('')
  const [passwordError,setPasswordError] = useState('')

  
  
  // Register API Handler
  const API_BASE_URL = 'http://mob.lantanapk.com/api/users/register'; // Example base URL

  const registerHandler = async () => {

    if (!name || !email || !contactnumber || !password) {
      !name && setNameError('Name is Required');
      !email && setEmailError('Email is Required');
      !contactnumber && setcontactnumberError('Phone Number is Required');
      !password && setPasswordError('Password is Required');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          contactnumber,
          password,
        }),
      });
    } catch (error) {
      setError(error)
      console.error(error);
    }
    setName('')
    setEmail('')
    setContactNumber('')
    setPassword('')
    props.navigation.navigate('Login')
  }
  return (
      <View style={styles.container}>
          {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
            <View style={styles.loginImageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/registerbg.png')} />
                <TouchableOpacity style={styles.backbuttonContainer} onPress={()=>props.navigation.navigate('Login')}>
                    <Image source={require('../../../assets/images/backbutton.png')} />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Register</Text>
                    <Text style={styles.welcomeLoginText}>Create your new account</Text>
                </View>
                <View style={styles.formContainer}>
                <TextInput 
                style={styles.textInput} 
                placeholder='Name' 
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                name='name'
                />
                <Text style={styles.errorEmail} >{NameError} </Text>
                <TextInput 
                style={styles.textInput} 
                placeholder='Email' 
                name='email'
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                />
                <Text style={styles.errorEmail} >{emailError} </Text>
                <TextInput 
                style={styles.textInput} 
                placeholder='Phone' 
                name='contactnumber'
                value={contactnumber} 
                onChange={(e)=>setContactNumber(e.target.value)} 
                />
                <Text style={styles.errorEmail} >{contactnumberError} </Text>
                <TextInput 
                style={styles.textInput} 
                placeholder='Password' 
                name='password'
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                secureTextEntry 
                />
                <Text style={styles.errorEmail} >{passwordError} </Text>
               <Text style={styles.text}>
                    By signing up you agree to our{' '}
                    <TouchableOpacity onPress={() => {props.navigation.navigate('TermsAndConditions') }}>
                    <Text style={styles.link}>Terms & Conditions</Text>
                    </TouchableOpacity>
                    {' '}and{' '}
                    <TouchableOpacity onPress={() => {props.navigation.navigate('PrivacyPolicy') }}>
                    <Text style={styles.link}>Privacy Policy</Text>
                    </TouchableOpacity>
                </Text>

                <TouchableOpacity style={styles.loginBtn} onPress={()=>registerHandler()}>
                    <Text style={styles.loginText} >Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.joveraRegister}>
                    <Text style={styles.newJovera} >Already have an Account? 
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Login')} >
                        <Text style={styles.registerBtn}> Login in</Text>
                    </TouchableOpacity>
                    </Text>
                </View>
            </View>
            </View>
          {/* </ScrollView> */}
    </View>
  );
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flexGrow: 1,
  },
  loginImageContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5, // 50% of the screen height
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  textContainer: {
    position: 'absolute',
    top: '45%', 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  backbuttonContainer:{
    position: 'absolute',
    top: '10%', 
    left: '7%',
    right: 0,
    alignItems: 'start',
  },
  welcomeText: {
    color: 'white',
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomeLoginText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  textInput:{
    width:'100%',
    height:'55px',
    flexShrink: 0,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  textInput: {
    width: '100%',
    height: 55,
    borderColor: '#8B8B8B',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  forgotPassword:{
    color:'#000000',
    fontSize:14,
    fontWeight:'500'
  },
  forgotContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  loginBtn:{
    backgroundColor:'#F3C147',
    width:'100%',
    height:40,
    borderRadius:12,
    marginTop:15,
    justifyContent:'center',
  },
  loginText:{
    color:'#000',
    fontWeight:'500',
    fontSize: 22,
    textAlign:'center'
  },
  joveraRegister: {
    marginTop:20,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom:30
  },
  registerBtn:{
    color:'#D5A847',
    fontWeight:'500',
    fontSize:16,
  },
  newJovera:{
    color:'#000',
    fontSize:16,
    fontWeight:'500',
  },
  text: {
    fontSize: 16, 
    color: '#000', 
    textAlign: 'center', 
    marginTop:8
  },
  link: {
    color: '#D5A847',
    textDecorationLine: 'none', 
  },
  errorEmail:{
    color:'red',
    marginTop:-12
  }
});

          


