import React, {useState, useEffect} from 'react';

import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
import AsynchStorage from'@react-native-community/async-storage';

const SplashScreen = props => {
    let [animating, setAnimating] =useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setAnimating(false);

AsynchStorage.getItem('user_id').then(value =>
    props.navigation.navigate(
        value=== null ? 'Auth' : 'DrawerNavigationRoutes'

    )
    );
        }, 5000);
    },[]);

    return (
        <View style = {styleles.container}>
            <Image
            source ={require('../Image/aboutreact.png')}
            style={{width: '90%', resizeMode:'contain', margin :30}}
        />
        ActivityIndicator
        animation={animating}
        color="#FFFFF"
        size = "large"
        style= {styles.activityIndicator}


            </View>
    );
};
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backfaceVisibility:'#307ecc',
    },
    activityIndicator:{
        alignItems:'center',
        height:80,
    },

});