const flightConnections = [{
    id: 'warsaw',
    start: 'Warszawa (WAW)',
    destinations: [{
        id: 'katowice',
        name: 'Katowice (KTW)',
        duration: '0:55',
        timeStart: '08:55',
        timeEnd: '09:50',
        price: '96',
        plane: 'country'
    }, {
        id: 'milan',
        name: 'Mediolan (MXP)',
        duration: '2:15',
        timeStart: '11:30',
        timeEnd: '13:45',
        price: '412',
        plane: 'international'
    }, {
        id: 'newyork',
        name: 'Nowy Jork (JFK)',
        duration: '9:20',
        timeStart: '16:15',
        timeEnd: '19:35',
        price: '2154',
        plane: 'world'
    }, {
        id: 'poznan',
        name: 'Poznań (POZ)',
        duration: '0:55',
        timeStart: '17:35',
        timeEnd: '18:30',
        price: '107',
        plane: 'country'
    }, {
        id: 'toronto',
        name: 'Toronto (YYZ)',
        duration: '9:15',
        timeStart: '17:05',
        timeEnd: '20:20',
        price: '1720',
        plane: 'world'
    }]
}, {
    id: 'poznan',
    start: 'Poznań (POZ)',
    destinations: [{
        id: 'cannes',
        name: 'Cannes (CEQ)',
        duration: '2:30',
        timeStart: '16:05',
        timeEnd: '18:35',
        price: '76',
        plane: 'international'
    }, {
        id: 'dubrovnik',
        name: 'Dubrovnik (DBV)',
        duration: '2:05',
        timeStart: '12:50',
        timeEnd: '14:55',
        price: '69',
        plane: 'international'
    }, {
        id: 'katowice',
        name: 'Katowice (KTW)',
        duration: '0:55',
        timeStart: '09:20',
        timeEnd: '10:15',
        price: '88',
        plane: 'country'
    }, {
        id: 'warsaw',
        name: 'Warszawa (WAW)',
        duration: '0:55',
        timeStart: '17:40',
        timeEnd: '18:35',
        price: '97',
        plane: 'country'
    }]
}, {
    id: 'toronto',
    start: 'Toronto (YYZ)',
    destinations: [{
        id: 'newyork',
        name: 'Nowy Jork (JFK)',
        duration: '1:35',
        timeStart: '12:50',
        timeEnd: '14:25',
        price: '1142',
        plane: 'international'
    }, {
        id: 'warsaw',
        name: 'Warszawa (WAW)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'world'
    }]
}, {
    id: 'katowice',
    start: 'Katowice (KTW)',
    destinations: [{
        id: 'poznan',
        name: 'Poznań (POZ)',
        duration: '8:30', // // // // // // //
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'country'
    }, {
        id: 'prague',
        name: 'Praga (PRG)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'international'
    }, {
        id: 'warsaw',
        name: 'Warszawa (WAW)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'country'
    }]
}, {
    id: 'newyork',
    start: 'Nowy Jork (JFK)',
    destinations: [{
        id: 'toronto',
        name: 'Toronto (YYZ)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'international'
    }, {
        id: 'warsaw',
        name: 'Warszawa (WAW)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'world'
    }]
}, {
    id: 'dubrovnik',
    start: 'Dubrovnik (DBV)',
    destinations: [{
        id: 'milan',
        name: 'Mediolan (MXP)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'international'
    }, {
        id: 'poznan',
        name: 'Poznań (POZ)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'international'
    }]
}, {
    id: 'prague',
    start: 'Praga (PRG)',
    destinations: [{
        id: 'katowice',
        name: 'Katowice (KTW)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'international'
    }]
}, {
    id: 'milan',
    start: 'Mediolan (MXP)',
    destinations: [{
        id: 'cannes',
        name: 'Cannes (CEQ)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '21:35',
        price: '2342',
        plane: 'international'
    }, {
        id: 'warsaw',
        name: 'Warszawa (WAW)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'international'
    }]
}, {
    id: 'cannes',
    start: 'Cannes (CEQ)',
    destinations: [{
        id: 'milan',
        name: 'Mediolan (MXP)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'international'
    }, {
        id: 'poznan',
        name: 'Poznań (POZ)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'international'
    }, {
        id: 'toronto',
        name: 'Toronto (YYZ)',
        duration: '8:30',
        timeStart: '08:05',
        timeEnd: '22:35',
        price: '2342',
        plane: 'world'
    }]
}
],
    luggageDetails = [
        {
            luggage10: '87',
            luggage20: '114',
            luggage32: '158'
        }
    ],
    priceDetails = [
        {
            premiumEconomy: 1.67,
            business: 2.77,
            children: 0.67,
            babies: 0.1
        }
    ]

export { flightConnections, luggageDetails, priceDetails }