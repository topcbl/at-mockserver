
// module.exports  = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		user: _.times(100, function(n) {
// 			return {
// 				id: n + 1,
// 				uuid: faker.random.uuid(),
// 				socia_id: faker.random.number(),
// 				email: faker.internet.email(),
// 				password: "abc123",
// 				fullname: faker.name.findName(),
// 				picture: faker.internet.avatar(),
// 				birthday: faker.date.past(),
// 				gender: +faker.random.boolean(),
// 				city_id: faker.random.number(),
// 				latest_login: faker.date.recent(),
// 				is_active: faker.random.boolean(),
// 				phone: faker.phone.phoneNumber(),
// 				shipping_address: faker.address.country() + ", " + faker.address.city() + ", " + faker.address.streetAddress(),
// 				shipping_phone: faker.phone.phoneNumber()
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		prefectures: _.times(100, function(n) {
// 			return {
// 				id: n + 1,
// 				prefecture_name: faker.address.streetName()

// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		cities: _.times(100, function(n) {
// 			return {
// 				id: n + 1,
// 				id_prefecture: faker.address.streetName(),
// 				city_name: faker.address.city()
// 			}
// 		})

// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		sports: _.times(100, function(n) {
// 			return {
// 				id: n + 1,
// 				sports_name: "Sport " + n
// 			}
// 		})

// 	}
// }


// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		notifications: _.times(100, function(n) {
// 			return {
// 				id: n + 1,
// 				user_id: n,
// 				content: faker.lorem.words(),
// 				is_read: faker.random.boolean()
// 			}
// 		})

// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		sports_favourites: _.times(100, function(n) {
// 			return {
// 				id: n + 1,
// 				id_user: n,
// 				id_sport: n,
// 			}
// 		})

// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		messages: _.times(100, function(n) {
// 			return {
// 				id: n + 1,
// 				id_recruitment: n,
// 				id_user: n,
// 				messages: faker.lorem.words()
// 			}
// 		})

// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		participation_fees: _.times(20, function(n) {
// 			return {
// 				id: n + 1,
// 				highest_fee: faker.random.number() % 100,
// 				lowest_fee: faker.random.number() % 100,
// 				surcharge: faker.random.number() % 100
// 			}
// 		})

// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		tags: _.times(20, function(n) {
// 			return {
// 				id: n + 1,
// 				tag_name: faker.lorem.words()
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		event_tags: _.times(20, function(n) {
// 			return {
// 				id: n + 1,
// 				tag_id: n,
// 				"event_id": n
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		favourites_events: _.times(100, function(n) {
// 			return {
// 				id: n + 1,
// 				user_id: n,
// 				"event_id": n
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		events: _.times(200, function(n) {
// 			return {
// 				id: n,
// 				user_id: n,
// 				sport_id: n,
// 				facility_id: n,
// 				title: faker.lorem.words(),
// 				image_url: faker.image.imageUrl(),
// 				start_date: faker.date.future(),
// 				start_time: "18:30:30",
// 				end_time: faker.date.future() + "20:30:30",
// 				max_members: faker.random.number()%30,
// 				min_members: faker.random.number()%10,
// 				gender: +faker.random.boolean(),
// 				team_level: faker.random.number()%5,
// 				entry_fee: faker.random.number()%30,
// 				comment: faker.lorem.words(),
// 				meeting_place: faker.address.city(),
// 				is_active: faker.random.boolean(),
// 				created_at: faker.date.past(),
// 				is_open: faker.random.boolean()
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		facility_sports: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				sport_id: n,
// 				facility_id: n
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		facilities: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				sport_id: n,
// 				facility_name: faker.lorem.words(),
// 				image_url: faker.image.sports(),
// 				business_hours: faker.random.number()%24,
// 				address: faker.address.country() + ", " + faker.address.city() + ", " + faker.address.streetAddress(),
// 				coordinate: "{lat: " + faker.address.latitude() + ", " + "lng: " + faker.address.longitude() + "}",
// 				phone: faker.phone.phoneNumber() 

// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		participations: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				user_id: n, 
// 				event_id: n,
// 				status: +faker.random.boolean()
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		checklists: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				product_id: n, 
// 				user_id: n
// 			}
// 		})
// 	}
// }


// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		ec_admins: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				company_id: n, 
// 				email: faker.internet.email(),
// 				password: "123abc",
// 				name: faker.name.findName(),
// 				lastest_login: faker.date.recent(),
// 				is_active: faker.random.boolean()
// 			}
// 		})
// 	}
// }


// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		products: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				ec_admin_id: n, 
// 				sport_id: n,
// 				category_id: n,
// 				title: faker.lorem.words(),
// 				description: faker.lorem.words(),
// 				reference_price: faker.random.number()%100
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		categories: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				category_name: faker.lorem.words() 
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		companies: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				company_name: faker.company.companyName()
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		carts: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				user_id: n,
// 				product_detail_id: n
// 			}
// 		})
// 	}
// }


// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		product_details: _.times(100, function(n) {
// 			return {
// 				id_recruitment: n,
// 				product_id: n,
// 				size: "S",
// 				color: "Red",
// 				price: faker.random.number()%1000,
// 				inventory_number: faker.random.number()%100
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		product_images: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				image_url: faker.image.sports(),
// 				variation_id: n
// 			}
// 		})
// 	}
// }

// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		orders: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				user_id: n,
// 				payment_id: n,
// 				subtotal: faker.random.number()%1000,
// 				shipping_address: faker.random.number()%1000,
// 				payment_method: "Paypal",
// 				status: faker.random.number()%4
// 			}
// 		})
// 	}
// }


// module.exports = function() {
// 	var faker = require("faker");
// 	var _ = require("lodash");
// 	return {
// 		order_details: _.times(100, function(n) {
// 			return {
// 				id: n,
// 				product_detail_id: n,
// 				order_id: n,
// 				price: faker.random.number()%1000,
// 				order_date: faker.date.past(),
// 				order_status: faker.random.number()%3
// 			}
// 		})
// 	}
// }
