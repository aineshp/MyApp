import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {Card,Icon,ListItem} from 'react-native-elements'
import MyHeader from '../components/MyHeader.js'
import firebase from 'firebase';
import db from '../config.js'

export default class MyDonationScreen extends Component {
   constructor(){
     super()
     this.state = {
       userId : firebase.auth().currentUser.email,
        allActivities : []
     }
     this.requestRef= null
   }

   static navigationOptions = { header: null };

   getUserDetails=(userId)=>{
     db.collection("User").where("emailAddress","==", userId).get()
     .then((snapshot)=>{
       snapshot.forEach((doc) => {
       });
     })
   }

   getallActivities =()=>{
     this.requestRef = db.collection("Activities").where("userID" ,'==', this.state.userId)
     .onSnapshot((snapshot)=>{
       var allActivities = []
       snapshot.docs.map((doc) =>{
         var donation = doc.data()
         donation["doc_id"] = doc.id
         allActivities.push(donation)
       });
       this.setState({
         allActivities : allActivities
       });
     })
   }





   keyExtractor = (item, index) => index.toString()




   componentDidMount(){
     this.getUserDetails(this.state.userId)
     this.getallActivities()
   }

   componentWillUnmount(){
     this.requestRef();
   }

   render(){
     return(
       <View style={{flex:1}}>
         <MyHeader navigation={this.props.navigation} title="My Activities"/>
         <View style={{flex:1}}>
           {
             this.state.allActivities.length === 0
             ?(
               <View style={styles.subtitle}>
                 <Text style={{ fontSize: 20}}>List of all activities</Text>
               </View>
             )
             :(
               <FlatList
                 keyExtractor={this.keyExtractor}
                 data={this.state.allActivities}
                 renderItem={this.renderItem}
               />
             )
           }
         </View>
       </View>
     )
   }
   }


const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  },
  subtitle :{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  }
})