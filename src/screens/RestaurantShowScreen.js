import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"
import yelp from "../api/yelp"

const RestaurantShowScreen = ({ navigation }) => {
	const [restaurant, setRestaurant] = useState()
	const restaurantId = navigation.getParam("id")

	const getRestaurant = async (restaurantId) => {
		const response = await yelp.get(`/${restaurantId}`)
		setRestaurant(response.data)
	}

	useEffect(() => {
		getRestaurant(restaurantId)
	}, [])

	if (!restaurant) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		)
	}

	return (
		<>
			<Text style={styles.title}>{restaurant.name}</Text>
			<FlatList
				data={restaurant.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />
				}}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	image: {
		height: 200,
        width: 300,
        marginHorizontal: 20,
        marginBottom: 20,
        alignSelf: "center",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "black"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 55,
        marginVertical: 15
    }
})

export default RestaurantShowScreen
