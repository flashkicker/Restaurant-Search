import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

import SearchBar from "../components/SearchBar"
import useRestaurants from "../hooks/useRestaurants"
import RestaurantsList from "../components/RestaurantsList"

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const [searchApi, restaurants, errorMessage] = useRestaurants()

	const filterResultsByPrice = (price) => {
		return restaurants.filter((restaurant) => restaurant.price === price)
	}

	return (
		<>
			<SearchBar
				searchTerm={searchTerm}
				onSearchTermSubmit={() => searchApi(searchTerm)}
				onSearchTermChange={setSearchTerm}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<RestaurantsList
					restaurants={filterResultsByPrice("$")}
					title="Cost Effective"
				/>
				<RestaurantsList
					restaurants={filterResultsByPrice("$$")}
					title="Bit Pricier"
				/>
				<RestaurantsList
					restaurants={filterResultsByPrice("$$$")}
					title="Big Spender"
				/>
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({})

export default SearchScreen
