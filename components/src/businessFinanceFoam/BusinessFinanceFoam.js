import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AntDesign from '@expo/vector-icons/AntDesign';
import Navbar from '../navbar/Navbar';

const BusinessFinanceFoam = () => {
    const [selectedProperty, setSelectedProperty] = useState();
    const [text, setText] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    // Business Loan Foam API
    const BusinessLoanHandler = () => {
        console.log('Business Loan Foam API');
    }

    return (
        <View style={styles.container}>
            <Navbar/>
            <ImageBackground
                source={require('../../../assets/images/foambg.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <Text style={styles.privacyText}>business finance Loan</Text>
                <View style={styles.formContainer}>    
                    <Picker
                        selectedValue={selectedProperty}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedProperty(itemValue)
                        }
                        style={styles.dropdownPicker}
                        >
                        <Picker.Item label="Services"/>
                        <Picker.Item label="SME Business Loan" value="SME" />
                        <Picker.Item label="Fleet Finance (Auto Loans)" value="fleet" />
                        <Picker.Item label="LGs / LCs" value="LG" />
                        <Picker.Item label="Account Opening" value="account" />
                     </Picker>  
                            
                    <TextInput
                        style={styles.textArea}
                        placeholder="Message"
                        name='text'
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(newText) => setText(newText)}
                        value={text}
                    />

                    <View style={styles.checkboxconsent} >
                        <TouchableOpacity onPress={handleCheck} style={styles.checkbox}>
                            {isChecked && <AntDesign name="check" size={26} color="green" />}
                        </TouchableOpacity>
                        <Text style={styles.consent} >
                            I give consent to Jovera Group to contact me & share my details with the UAE registered banks.
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.submitBtn} onPress={()=>BusinessLoanHandler()} >
                        <Text style={styles.submitText} >Submit</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );
}

export default BusinessFinanceFoam;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'start',
        alignItems: 'center',
    },
    privacyText: {
        marginTop: 50,
        fontSize: 24,
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontWeight: '700',
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    textInput: {
        width: '100%',
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderColor: '#5F5F5F',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    dropdownButton: {
        width: '100%',
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderColor: '#5F5F5F',
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 10,
        justifyContent: 'center',
    },
    dropdownPicker:{
        width: '100%',
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderColor: '#5F5F5F',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    textArea: {
        padding: 10,
        backgroundColor: '#FFF',
        textAlignVertical: 'top',
        width: '100%',
        marginTop:20,
        borderRadius:10
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: 'white',
    },
      checkboxInner: {
        width: 12,
        height: 12,
        backgroundColor: 'white',
    },
    consent:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },
    checkboxconsent:{
        flexDirection:'row',
        paddingHorizontal:17,
        marginTop:20,
        alignItems:'start'
    },
    submitBtn:{
        width:'100%',
        backgroundColor:'#F3C147',
        paddingHorizontal:32,
        paddingVertical:12,
        borderRadius:46,
        marginTop:20
    },
      submitText:{
        color:'#000000',
        fontSize:14,
        fontWeight:'500',
        textAlign:'center'
    }
});

