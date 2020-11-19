import React,{Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
export default class Calendar extends Component{
    constructor(props){
     super(props);
     this.state={
         selectedStartDate:null,
         selectedEndDate:null,
     };
     this.onDateChange=this.onDateChange.bind(this);   
    }   
    onDateChange(date,type){
        if(type === endDate){
            this.setState({
         selectedEndDate:date
            });
        }
        else{   
            this.setState({
                selectedStartDate:date,
                selectedEndDate:null
            });
        }
    }

    render(){
        const {selectedStartDate,selectedEndDate}=this.state;
        const minDate=new Date(2018,1,1);
        const maxDate=new Date(2050,1,1);
        const startDate = selectedStartDate ? selectedStartDate.toString(): '';
        const endDate = selectedEndDate ? selectedEndDate.toString(): '';
        return(
            <View style={styles.container}>
                <CalendarPicker 
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={minDate}
                maxDate={maxDate}
                weekdays={['Mon','Tue','Wed','Thur','Fri','Sat','Sun']}
                months={['January','February','March','April','May','June','July','August','September','October','November','December']} 
                previousTitle='previous'
                nextTitle='next'
                todayBackgroundColor='lightblue'
                selectedDayColor='lightgreen'
                selectedDayTextColor='black'
                scaleFactor={375}
                textStyle={{fontFamily:'cochin',color:'black',}} 
                onDateChange={this.onDateChange()}
                 />
                 <View style={{padding:15}}>
                     <Text style={{padding:15}} > SELECTED START DATE: </Text>
                     <Text style={{padding:15}}> {startDate} </Text>
                     <Text style={{padding:15}}> SELECTED END DATE: </Text>
                     <Text style={{padding:15}}> {endDate} </Text>
                 </View>
            
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue',
        marginTop:50
    }
})