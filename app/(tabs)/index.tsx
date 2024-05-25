import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../components/src/login/Login'
import Register from '../../components/src/register/Register'
import ForgotPassword from '../../components/src/forgotPassword/ForgotPassword'
import OtpVerification from '../../components/src/otpVerification/OtpVerification'
import NewPassword from '../../components/src/newPassword/NewPassword'
import HomePage from '../../components/src/homePage/HomePage'
import FooterNavbar from '../../components/src/footerNavbar/FooterNavbar'
import Dashboard from '../../components/src/dashboard/Dashboard'
import Navbar from '../../components/src/navbar/Navbar'
import BusinessFinance from '../../components/src/businessFinance/BusinessFinance'
import Advertising from '../../components/src/advertising/Advertising'
import WebDev from '../../components/src/webDev/WebDev'
import Mortgage from '../../components/src/mortgage/Mortgage'
import PersonalLoan from '../../components/src/personalLoan/PersonalLoan'
import TravelTours from '../../components/src/travelTours/TravelTours'
import RealEstate from '../../components/src/realEstate/RealEstate'
import LoanCalculator from '../../components/src/loanCalculator/LoanCalculator'
import HelpandSupport from '../../components/src/helpAndSupport/HelpandSupport'
import PrivacyPolicy from '../../components/src/privacyPolicy/PrivacyPolicy'
import TermsAndConditions from '../../components/src/termsAndConditions/TermsAndConditions'
import AboutUs from '../../components/src/aboutUs/AboutUs'
import FeedBack from '../../components/src/feedBack/FeedBack'
import ContactUs from '../../components/src/contactUs/ContactUs'
import PersonalLoanFoam from '../../components/src/personalLoanFoam/PersonalLoanFoam'
import MortgageLoanFoam from '../../components/src/mortgageLoanFoam/MortgageLoanFoam'
import BusinessFinanceFoam from '../../components/src/businessFinanceFoam/BusinessFinanceFoam'
import RealEstateFoam from '../../components/src/realEstateFoam/RealEstateFoam'
import ProfileEdit from '../../components/src/profileEdit/ProfileEdit'
import Settings from '../../components/src/settings/Settings'
import Faqs from '../../components/src/faqs/Faqs'
import Carousal from '../../components/src/carousal/Carousal'
export default function HomeScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <ForgotPassword/> */}
    {/* <OtpVerification/> */}
    {/* <NewPassword/> */}
    {/* <HomePage/> */}
    <Dashboard/>
    {/* <Carousal/> */}
    {/* <ProfileEdit/> */}
    {/* <Settings/> */}
    {/* <Faqs/> */}
    {/* <BusinessFinance/> */}
    {/* <Advertising/> */}
    {/* <WebDev/> */}
    {/* <Mortgage/> */}
    {/* <PersonalLoan/> */}
    {/* <TravelTours/> */}
    {/* <RealEstate/> */}
    {/* <LoanCalculator/> */}
    {/* <PersonalLoanFoam/> */}
    {/* <MortgageLoanFoam/> */}
    {/* <BusinessFinanceFoam/> */}
    {/* <RealEstateFoam/> */}
    {/* <HelpandSupport/> */}
    {/* <PrivacyPolicy/> */}
    {/* <TermsAndConditions/> */}
    {/* <AboutUs/> */}
    {/* <FeedBack/> */}
    {/* <ContactUs/> */}
    {/* <Navbar/> */}
    {/* <FooterNavbar/> */}
    </>

  );
}

