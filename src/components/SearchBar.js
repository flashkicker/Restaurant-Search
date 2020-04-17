import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				style={styles.inputStyle}
				value={searchTerm}
				onChangeText={onSearchTermChange}
				placeholder="Search"
				autoCapitalize="none"
				autoCorrect={false}
				onEndEditing={onSearchTermSubmit}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginVertical: 15,
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: "center",
		marginHorizontal: 15,
	},
})

export default SearchBar
