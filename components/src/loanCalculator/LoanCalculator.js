import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import Navbar from '../navbar/Navbar';

const LoanCalculator = () => {
    const [amount,setAmount] = useState('')
    const [interestRate,setInterestRate] = useState('')
    const [mTenure,setMtenure] = useState('')
    const [yTenure,setYtenure] = useState('')
  return (
    <View style={styles.container}>
      <Navbar/>
      <ImageBackground
        source={require('../../../assets/images/loanbg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Text style={styles.loanText}>Loan Calculator</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Amount"
            keyboardType="numeric"
            name='amount'
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
          />

        <Text style={styles.labelInterest}>Interest Rate</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Interest Rate"
            keyboardType="numeric"
            name='interestRate'
            value={interestRate}
            onChange={(e)=>setInterestRate(e.target.value)}
          />

        <Text style={styles.labelInterest}>Tenure (Months)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tenure (Months)"
            keyboardType="numeric"
            name='mTenure'
            value={mTenure}
            onChange={(e)=>setMtenure(e.target.value)}
          />

        <Text style={styles.labelInterest}>Tenure (Years)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tenure (Years)"
            keyboardType="numeric"
            name='yTenure'
            value={yTenure}
            onChange={(e)=>setYtenure(e.target.value)}
          />

          <Text style={styles.mnthlyIncome} >MONTHLY PAYMENT</Text>
          <Text style={styles.mnthlyPayment}>2236 AED</Text>

          <Text style={styles.mnthlyIncome} >TOTAL INTEREST RATE</Text>
          <Text style={styles.mnthlyPayment}>7309 AED</Text>

          <Text style={styles.mnthlyIncome} >TOTAL AMOUNT</Text>
          <Text style={styles.mnthlyPayment}>107309 AED</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoanCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loanText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
    paddingTop: 30,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#FFF',
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
  },
  labelInterest:{
    fontSize: 16,
    color: '#FFF',
    marginTop:8
  },
  mnthlyIncome:{
    fontSize:13,
    fontWeight:'500',
    color:'#FFFFFF',
    marginTop:12,
    paddingHorizontal:7
  },
  mnthlyPayment:{
    fontSize:24,
    fontWeight:'500',
    color:'#FFFFFF',
    paddingHorizontal:7,
   
  }
});

