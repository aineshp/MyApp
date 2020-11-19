import React,{Component} from 'react';
import{Text,StyleSheet,View,TextInput,TouchableOpacity, Alert,ScrollView,KeyboardAvoidingView} from 'react-native';
import Modal from 'react-native-modal';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import PlannerScreen from './PlannerScreen';
export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            contact:'',
            password:'',
            confirmPassword:'',
            first_name:'',
            last_name:'',
            email:'',
            isModalVisible:false,
        }
    }
    userLogin=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.props.navigation.navigate('PlannerScreen')
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    userSignUp=(email,password,confirmPassword)=>{
        if(password!==confirmPassword){
            return Alert.alert('Password Does Not Match\nCheck Your Password')
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
           
            return Alert.alert('User Added Successfully',
            '',
            [{text:'ok',onPress:()=>this.setState({
                'isModalVisible':false,
            })},
        ]) ;
        })
        .catch(function(error){
            var errorCode = error.code ;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
        db.collection('User').add({
            'FirstName':this.state.first_name,
            'LastName':this.state.last_name,
            'Contact':this.state.contact,
            'emailID':this.state.email,

        
        })
    }

}   

    showModal=()=>{
        return(     
            <Modal 
                   transparent={true}
                   visible={this.state.isModalVisible} >
                       <View style={styles.modalContainer}>
                           <ScrollView style={{width:'100%'}}> 
                           <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                               <Text style={styles.modalTitle}>Registration</Text>
                               <View>    
                                   <Icon type={'materialicon'} name={'cancel'} size={RFValue(40)} 
                                       color='blue' onPress={()=>{
                                           this.setState({ isModalVisible:false })
                                       }} />
                               </View>
                               <View style={{flex:0.95}}>
                  
                               <Text style={styles.label}>First Name</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"First Name"}
                    maxLength={12}
                    onChangeText={(text) => {
                      this.setState({
                        first_name: text,
                                             })  
                                           }} />
                                   <Text style={styles.label}>Last Name </Text>         
                               <TextInput style={styles.formInput}
                               
                                           placeholder={"Last Name"}
                                           maxLength={8}
                                           onChangeText={(text)=>{
                                               this.setState({
                                                   last_name:text
                                               })
                                           }} />
                                            <Text style={styles.label}>Contact </Text>
                               <TextInput style={styles.formInput}
                               
                                          placeholder={"Contact"} 
                                          maxLength={10} 
                                          keyboardType="numeric"
                                          onChangeText={(text)=>{
                                              this.setState({
                                                  contact:text
                                              })
                                              }} />

                    <Text style={styles.label}> EmailID </Text>
                  <TextInput style={styles.formInput}
                 
                                          placeholder={"EmailID"}  
                                          keyboardType="email-address"                                       
                                          onChangeText={(text)=>{
                                              this.setState({
                                                  email:text
                                              })
                                              }} />
                              <Text style={styles.label}>Password </Text>                 
                                              <TextInput style={styles.formInput}
                                            
                                          placeholder={"Password"}  
                                          secureTextEntry={true}                                       
                                          onChangeText={(text)=>{
                                              this.setState({
                                                  password:text
                                              })
                                              }} />
                          <Text style={styles.label}>Confirm Password </Text>
                    <TextInput style={styles.formInput}
                                      
                                          placeholder={"ConfirmPassword"}  
                                          secureTextEntry={true}                                       
                                          onChangeText={(text)=>{
                                              this.setState({
                                                confirmPassword:text
                                              })
                                              }} />     
                                </View>              
                               <View style={styles.modalBackButton} >
                               <TouchableOpacity style={styles.registrationButton}
                                                 onPress={()=>
                                                  this.userSignUp(this.state.email,this.state.password)
                                                 } >
                                    <Text style={styles.registrationButtonText} > Register </Text>                 
                                   </TouchableOpacity>
                                   </View>            
                                   <View style={styles.modalBackButton} >
                                      <TouchableOpacity style={styles.cancelButton}
                                                        onPress={()=>
                                                        this.setState({
                                                            "isModalVisible":false
                                                        })}>
                                         <Text style={{color:'blue'}}>Cancel</Text>                   
                                        </TouchableOpacity>

                                       </View>                        
                               </KeyboardAvoidingView>
                               </ScrollView>
                       </View>
                   </Modal>
        )
    }     


    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center'}} >
                    {this.showModal()}
                </View>
                <View>
                    <Text style={styles.title}>Dada Dadi App </Text>
                </View>

                <TextInput style={styles.loginBox}
                            placeholder="abc@example.com"
                            keyboardType='email-address'
                            onChangeText={(text)=>{
                                this.setState({email:text})
                            }}/>
              
            <TextInput style={styles.loginBox}
                       placeholder="password"
                       secureTextEntry={true}
                       onChangeText={(text)=>{
                           this.setState({password:text})
                       }}/>
                       <TouchableOpacity style={styles.button}
                                          onPress={()=>{
                                              this.userLogin(this.state.email,this.state.password)
                                              
                                          }}>
                                              <Text style={styles.buttonText}>Login</Text>
                           </TouchableOpacity>   
                           <TouchableOpacity style={styles.button}
                                              onPress={()=>{
                                   this.userSignUp(this.state.email,this.state.password,
                                   this.state.contact,this.state.last_name,this.state.first_name,this.state.confirmPassword)
                                              }}>
                               <Text style={styles.buttonText}>Sign Up</Text>
                               </TouchableOpacity>     
                          </View>
        )
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightyellow',
      },
      loginBox: {
        width: "80%",
        height: RFValue(50),
        borderWidth: 1.5,
        borderColor: "#ffffff",
        backgroundColor:"white",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10),
        marginLeft: RFValue(40),
        marginTop:RFValue(50),
      },
      button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: 'green',
        shadowColor: "#000",
        marginBottom:RFValue(10),
        marginLeft:RFValue(40),
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText: {
        color: "black",
        fontWeight: "200",
        fontSize: RFValue(20),
      },
      label:{
        fontSize:RFValue(30),
        color:"#717D7E",
        fontWeight:'bold',
        paddingLeft:RFValue(10),
        marginLeft:RFValue(20)
      },
      formInput: {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:1,
        borderRadius:2,
        borderColor:"grey",
        paddingBottom:RFValue(10),
        marginLeft:RFValue(20),
        marginBottom:RFValue(14)
      },
      registrationButton: {
        width: "75%",
        height: RFValue(50),
        marginTop:RFValue(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(3),
        backgroundColor: 'green',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: RFValue(10),
      },
      registrationButtonText: {
        fontSize: RFValue(23),
        fontWeight: "bold",
        color: "#fff",
      },


      

    label:{
      fontSize:RFValue(20),
      color:'#717D7E',
      fontWeight:'bold',
      paddingLeft:RFValue(10),
      marginLeft:RFValue(20),
      marginTop:RFValue(50),
    },
    modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
      },
      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',

        marginTop:5,
      },
})