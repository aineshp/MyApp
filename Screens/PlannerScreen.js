import React,{Component} from 'react';
import{Text,TouchableOpacity,View,StyleSheet,Alert,TextInput} from 'react-native';
import {Modal} from 'react-native-modal';
import db from '../config';
import firebase from 'firebase';
export default class PlannerScreen extends Component{
    constructor(props){
        super();
        this.state={
            userId:firebase.auth().currentUser().email(),
        isModalVisible:false,
        medicine:'',
        doses:'',
        till:'',
        start:'',
        end:'',
        activity:'',
        bill:'',
        amount:'',
        createNewActivity:'',
        }  
    }
    createNewActivity=()=>{
    
    }
    showModal1=()=>{
        return(
            <Modal animationType='fade'
            transparent={true}
            visible={this.state.isModalVisible} >
                <View style={styles.container}>
                    <Text>Medicines Planner</Text>
                    <TextInput style={styles.textInput} 
                    placeholder={'Medicine'} 
                    onChangeText={(text)=>{
                   this.setState({medicine:text})
                    }}/>
                    <TextInput style={styles.textInput}
                    placeholder={'Doses per day'}
                    maxLength={2}
                    onChangeText={(text)=>{
                        this.setState({doses:text})
                    }} />
                    <TextInput style={styles.textInput}
                    placeholder={'Till date'} 
                    onChangeText={(text)=>{
                        this.setState({till:text})
                    }}/>

            <TouchableOpacity style={styles.button}
            onPress={()=>{
                this.setState({isModalVisible:false})
            }}>
                <Text>Add</Text>
                </TouchableOpacity>
                </View>
            </Modal>
        )
    }
    showModal2=()=>{
        return(
            <Modal animationType='fade'
            transparent={true}
            visible={this.state.isModalVisible} >
                <View style={styles.container}>
                    <Text>Activities Planner</Text>
                    <TextInput style={styles.textInput} 
                    placeholder={'Activities'} 
                    onChangeText={(text)=>{
                   this.setState({activity:text})
                    }}/>
                    <TextInput style={styles.textInput}
                    placeholder={'Start Time'}
                   
                    onChangeText={(text)=>{
                        this.setState({start:text})
                    }} />
                    <TextInput style={styles.textInput}
                    placeholder={'End Time'} 
                    onChangeText={(text)=>{
                        this.setState({end:text})
                    }}/>  
       <TouchableOpacity style={styles.button}
            onPress={()=>{
                this.setState({isModalVisible:false})
                this.createNewActivity()
            }}>
                <Text>Add</Text>
                </TouchableOpacity>
                </View>
            </Modal>
        )
    }
    showModal3=()=>{
        return(
            <Modal animationType='fade'
            transparent={true}
            visible={this.state.isModalVisible} >
                <View style={styles.container}>
                    <Text>Bills Planner</Text>
                    <TextInput style={styles.textInput} 
                    placeholder={'Bills'} 
                    onChangeText={(text)=>{
                   this.setState({bill:text})
                    }}/>
                    <TextInput style={styles.textInput}
                    placeholder={'Amount'}
                   
                    onChangeText={(text)=>{
                        this.setState({amount:text})
                    }} />
                   

       <TouchableOpacity style={styles.button}
            onPress={()=>{
                this.setState({isModalVisible:false})
            }}>
                <Text>Add</Text>
                </TouchableOpacity>
                </View> 
            </Modal>
        )
    }
    componentDidMount(activity){
        var activity_start=this.state.start
        var activity_end=this.state.end
        var user=this.state.userId
        db.collection('Activities').add({
        'start_time':activity_start,
        'activityEnd':activity_end,
        'activityName':activity,
        'userId':user
        })
        this.setState({
            start:'',
            end:'',
            activity:''
        })
        Alert.alert('Activity created successfully')

    }
    render(){
    
        return(
           
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <View >{this.showModal1()}  </View>
               <View >{this.showModal2()}  </View>
               <View >{this.showModal3()}  </View>

                <TouchableOpacity style={styles.button} 
                onChange >
                    <Text style={styles.buttonText}>Medicines</Text>
                    <Text style={styles.text}>Next: </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}
                 onChange>
                    <Text style={styles.buttonText}>Activities</Text>
                    <Text styles={styles.text}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onChange>
                    <Text style={styles.buttonText }>Bills</Text>
                    
                </TouchableOpacity>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'green',
        borderRadius:5,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'black',
        fontSize:25,
        
    },
    text:{
        color:'grey',
        fontSize:15,    
    },
    textInput:{
    alignItems:'center',
    color:'lightyellow',
    }
})
