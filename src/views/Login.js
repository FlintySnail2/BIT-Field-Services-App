import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";
import {useFonts,} from "@expo-google-fonts/dev";

export default function Login (){

	let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Login}>
			<Image style = {stylesheet._BIT_bg_Phone_1} 
                source = {{uri: imageUrl_BIT_bg_Phone_1}}>
			</Image>
			<View style = {stylesheet._Form_BG}/>
			<View style = {stylesheet._Password_Field}/>
			<View style = {stylesheet._Rectangle_2}/>

			<Image style = {stylesheet._BITServicesFinal__2022_06_14_07_53_41_UTC__1} source = {{uri: imageUrl_BITServicesFinal__2022_06_14_07_53_41_UTC__1}}/>
            <View style = {[stylesheet._USERNAME, 
                {display: "flex", 
                flexDirection: "row", 
                alignItems: "center"}]}>

                <Text style = {[stylesheet._USERNAME, 
                    {position: "relative", 
                    flexGrow: 1, 
                    left: 0, 
                    top: 0, 
                    height: "auto", 
                    transform: [{translateX: 0}, {translateY: 0}],}]}>
                    USERNAME
                </Text>
			</View>

			<View style = {[stylesheet._PASSWORD, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
                <Text style = {[stylesheet._PASSWORD, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
                    PASSWORD
                </Text>
			</View>

			<View style = {[stylesheet._FORGOT_PASSWORD, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
                <Text style = {[stylesheet._FORGOT_PASSWORD, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
                    FORGOT PASSWORD
                </Text>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_Login: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		borderRadius: 10,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
		left: 0,
		top: 0,
	},
	_BIT_bg_Phone_1: {
		position: "absolute",
		width: 414,
		height: 927,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Form_BG: {
		position: "absolute",
		width: 350,
		height: 400,
		borderRadius: 10,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 1)",
		left: 32,
		right: "auto",
		top: 213,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0, 0, 0, 1)",
	},
	_Password_Field: {
		position: "absolute",
		width: 175,
		height: 32,
		borderRadius: 0,
		opacity: 1,
		left: 195,
		right: "auto",
		top: 468,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(54, 54, 54, 1)",
	},
	_Rectangle_2: {
		position: "absolute",
		width: 175,
		height: 32,
		borderRadius: 0,
		opacity: 1,
		left: 195,
		right: "auto",
		top: 398,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(54, 54, 54, 1)",
	},
	_BITServicesFinal__2022_06_14_07_53_41_UTC__1: {
		position: "absolute",
		width: 241,
		height: 72,
		borderRadius: 0,
		opacity: 1,
		left: 87,
		right: "auto",
		top: 252,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_USERNAME: {
		position: "absolute",
		width: 125,
		height: 24,
		left: 54,
		right: "auto",
		top: 402,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_PASSWORD: {
		position: "absolute",
		width: 125,
		height: 27,
		left: 54,
		right: "auto",
		top: 473,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_FORGOT_PASSWORD: {
		position: "absolute",
		width: 148,
		height: 17,
		left: 121,
		right: "auto",
		top: 528,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(0, 0, 139, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
});

const imageUrl_BITServicesFinal__2022_06_14_07_53_41_UTC__1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/6cf0d560c7f82a7ca1ee87038fe5061a"
const imageUrl_BIT_bg_Phone_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/0a29f491f40d09936de89e8e4f63b425"