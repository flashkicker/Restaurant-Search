import axios from "axios"

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer a4uRIWdCbX1uehGM8LgCLdvtxTzaOGvdf1vpV-pyrNZ019ofszFRzkFbbbEX5q5IqQUXWmQy3wT_dYeiwmIr3251vk3LuDWdaMP3N3D1kD5uDUw8AAjWSMOp8-WMXnYx",
	},
})
