/**
 * Created by iTop on 4/6/16.
 */
var faker = require("faker");
var _ = require("lodash");
const NUMBER_OF_USER = 100;
const NUMBER_OF_EVENT = 5;
const NUMBER_OF_SPORT = 12
const NUMBER_OF_FACILITIES = 20;
const NUMBER_OF_CITIES = 200;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.getUsers = function getUsers() {
    return {
        user: _.times(NUMBER_OF_USER, function (n) {
            return {
                id: n + 1,
                uuid: faker.random.uuid(),
                socia_id: faker.random.number(),
                email: faker.internet.email(),
                password: "abc123",
                fullname: faker.name.findName(),
                picture: faker.internet.avatar(),
                birthday: faker.date.past(),
                gender: +faker.random.boolean(),
                city_id: faker.random.number(),
                latest_login: faker.date.recent(),
                is_active: faker.random.boolean(),
                phone: faker.phone.phoneNumber(),
                shipping_address: faker.address.country() + ", " + faker.address.city() + ", " + faker.address.streetAddress(),
                shipping_phone: faker.phone.phoneNumber()
            }
        })
    }
}

module.exports.getAUsers = function getAUsers() {
    return {
        id: 35,
        uuid: faker.random.uuid(),
        socia_id: faker.random.number(),
        email: faker.internet.email(),
        password: "abc123",
        fullname: faker.name.findName(),
        picture: faker.internet.avatar(),
        birthday: faker.date.past(),
        gender: +faker.random.boolean(),
        city_id: faker.random.number(),
        latest_login: faker.date.recent(),
        is_active: faker.random.boolean(),
        phone: faker.phone.phoneNumber(),
        shipping_address: faker.address.country() + ", " + faker.address.city() + ", " + faker.address.streetAddress(),
        shipping_phone: faker.phone.phoneNumber()
    }
}

module.exports.getPrefectures = function getPrefectures() {
    return {
        "prefectures": _.times(100, function (n) {
            return {
                id: n + 1,
                prefecture_name: faker.address.streetName()

            }
        })
    }
}

module.exports.getCities = function getCities() {
    return {
        cities: _.times(NUMBER_OF_CITIES, function (n) {
            return {
                id: n + 1,
                prefecture_id: getRandomInt(1, n),
                city_name: faker.address.city()
            }
        })
    }
}

module.exports.getSports = function getSports() {
    return {
        sports: _.times(NUMBER_OF_SPORT, function (n) {
            return {
                id: n + 1,
                sports_name: "Sport " + n
            }
        })
    }
}

module.exports.getEventSports = function getEventSports() {
    return {
        sports: _.times(NUMBER_OF_SPORT, function (n) {
            return {
                id: n + 1,
                sports_name: "Sport " + n,
                events_count: faker.random.number() % 200
            }
        })
    }
}

module.exports.getNotifications = function getNotifications() {
    return {
        notifications: _.times(100, function (n) {
            return {
                id: n + 1,
                user_id: n,
                content: faker.lorem.words(),
                is_read: faker.random.boolean()
            }
        })
    }
}

module.exports.getFavoriteSports = function getFavoriteSports() {
    return {
        sports_favourites: _.times(NUMBER_OF_SPORT, function (n) {
            return {
                id: n + 1,
                id_user: n,
                id_sport: n,
            }
        })
    }
}

module.exports.getMessages = function getMessages() {
    return {
        messages: _.times(100, function (n) {
            return {
                id: n + 1,
                id_recruitment: n,
                id_user: n,
                messages: faker.lorem.words()
            }
        })

    }
}

module.exports.getParticipantFee = function getParticipantFee() {
    return {
        participation_fees: _.times(20, function (n) {
            return {
                id: n + 1,
                highest_fee: faker.random.number() % 100,
                lowest_fee: faker.random.number() % 100,
                surcharge: faker.random.number() % 100
            }
        })
    }
}

module.exports.getTags = function getTags() {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        tags: _.times(20, function (n) {
            return {
                id: n + 1,
                tag_name: faker.lorem.words()
            }
        })
    }
}

module.exports.getEventTags = function getEventTags() {
    return {
        event_tags: _.times(20, function (n) {
            return {
                id: n + 1,
                tag_id: n,
                "event_id": n
            }
        })
    }
}

module.exports.getFavoriteEvents = function getFavoriteEvents() {
    return {
        favourites_events: _.times(100, function (n) {
            return {
                id: n + 1,
                user_id: n,
                "event_id": n
            }
        })
    }
}

module.exports.getEvents = function getEvents() {
    return {
        events: _.times(NUMBER_OF_EVENT, function (n) {
            return {
                id: n,
                title: faker.name.title,
                image_url: faker.image.imageUrl(),
                start_date: "2016/03/20",
                meeting_place: faker.address.streetAddress,
                tags: _.times(2, function (n) {
                    return {
                        id: n,
                        name: faker.lorem.word()
                    }
                })
            }
        })
    }
}

module.exports.getTags = function getTags() {
    return {
        tags: _.times(6, function (n) {
            return {
                id: n,
                name: "tag" + n
            }
        })
    }
}

module.exports.getRecommendEvents = function getRecommendEvents() {
    return {
        recommend_events: _.times(NUMBER_OF_EVENT, function (n) {
            return {
                id: n,
                user_id: n,
                sport_id: n,
                facility_id: n,
                title: faker.lorem.words(),
                image_url: faker.image.imageUrl(),
                start_date: faker.date.future(),
                start_time: "18:30:30",
                end_time: faker.date.future() + "20:30:30",
                max_members: faker.random.number() % 30,
                min_members: faker.random.number() % 10,
                gender: +faker.random.boolean(),
                team_level: faker.random.number() % 5,
                entry_fee: faker.random.number() % 30,
                comment: faker.lorem.words(),
                meeting_place: faker.address.city(),
                is_active: faker.random.boolean(),
                created_at: faker.date.past(),
                is_open: faker.random.boolean(),
                type: faker.random.boolean()
            }
        })
    }
}

module.exports.getWaitingEvents = function getWaitingEvents() {
    return {
        waiting_list: _.times(NUMBER_OF_EVENT, function (n) {
            return {
                id: n,
                title: faker.name.title,
                image_url: faker.image.imageUrl(),
                start_date: "2016/03/20",
                meeting_place: faker.address.streetAddress,
                sport_name: faker.name.title,
                max_members: faker.random.number() % 30,
                min_members: faker.random.number() % 10,
                cur_members: faker.random.number() % 30
            }
        })
    }
}

module.exports.getFacilitiesSports = function getFacilitiesSports() {
    return {
        facility_sports: _.times(NUMBER_OF_FACILITIES, function (n) {
            return {
                id: n,
                sport_id: n,
                facility_id: n
            }
        })
    }
}

module.exports.getFacilities = function getFacilities() {
    return {
        "total": 6,
        "per_page": 6,
        "has_next_page": false,
        "facilities": [
            {
                "id": 4,
                "distance": "0.013",
                "name": "Duy tan 4",
                "image_url": "https://Schmeler.info/culpa-est-facilis-quia-impedit.html",
                "address": "03487 Hazel Ways Suite 988\nNorth Stephanie, LA 10462"
            },
            {
                "id": 3,
                "distance": "0.015",
                "name": "Duy tan 3",
                "image_url": "https://Stoltenberg.biz/odit-vel-culpa-eius-distinctio-quia.html",
                "address": "57402 Davonte Canyon\nMartinland, CO 65201-1584"
            },
            {
                "id": 1,
                "distance": "0.065",
                "name": "Duy tan 1",
                "image_url": "http://Russel.com/natus-minima-numquam-voluptatum-et-error-enim.html",
                "address": "685 Maxime Skyway\nLake Mavis, CT 31772-2357"
            },
            {
                "id": 2,
                "distance": "0.084",
                "name": "Duy tan 2",
                "image_url": "http://Schaefer.com/similique-eaque-adipisci-cum-et-enim-dolorem-quos",
                "address": "2990 Herman Islands\nHanebury, FL 64043"
            },
            {
                "id": 5,
                "distance": "0.188",
                "name": "Noi that go Nui ThanhDa Nang",
                "image_url": "https://www.Tromp.org/aperiam-dignissimos-fugit-sit-maxime-in-maiores-earum",
                "address": "46 Nui Thanh"
            },
            {
                "id": 6,
                "distance": "4.626",
                "name": "Yet Kieu Da Nang",
                "image_url": "http://Jacobs.com/et-voluptatum-aliquid-natus-illo-inventore-pariatur-et",
                "address": "34644 Odell Court\nEast Terryport, IL 45353"
            }
        ]
    }
}

module.exports.getSportsOfFacilities = function getSportsOfFacilities() {
    return _.times()
}
