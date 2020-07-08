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
        duration: '1:15',
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
        name: 'Dubrownik (DBV)',
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
        duration: '0:55',
        timeStart: '13:45',
        timeEnd: '14:50',
        price: '123',
        plane: 'country'
    }, {
        id: 'prague',
        name: 'Praga (PRG)',
        duration: '1:15',
        timeStart: '14:35',
        timeEnd: '15:50',
        price: '278',
        plane: 'international'
    }, {
        id: 'warsaw',
        name: 'Warszawa (WAW)',
        duration: '0:55',
        timeStart: '18:20',
        timeEnd: '19:15',
        price: '99',
        plane: 'country'
    }]
}, {
    id: 'newyork',
    start: 'Nowy Jork (JFK)',
    destinations: [{
        id: 'toronto',
        name: 'Toronto (YYZ)',
        duration: '1:35',
        timeStart: '11:20',
        timeEnd: '12:55',
        price: '330',
        plane: 'international'
    }, {
        id: 'warsaw',
        name: 'Warszawa (WAW)',
        duration: '8:30',
        timeStart: '09:50',
        timeEnd: '12:20',
        price: '2657',
        plane: 'world'
    }]
}, {
    id: 'dubrovnik',
    start: 'Dubrownik (DBV)',
    destinations: [{
        id: 'milan',
        name: 'Mediolan (MXP)',
        duration: '1:15',
        timeStart: '11:30',
        timeEnd: '13:45',
        price: '412',
        plane: 'international'
    }, {
        id: 'poznan',
        name: 'Poznań (POZ)',
        duration: '2:05',
        timeStart: '07:00',
        timeEnd: '09:05',
        price: '124',
        plane: 'international'
    }]
}, {
    id: 'prague',
    start: 'Praga (PRG)',
    destinations: [{
        id: 'katowice',
        name: 'Katowice (KTW)',
        duration: '1:20',
        timeStart: '11:35',
        timeEnd: '12:55',
        price: '206',
        plane: 'international'
    }]
}, {
    id: 'milan',
    start: 'Mediolan (MXP)',
    destinations: [{
        id: 'cannes',
        name: 'Cannes (CEQ)',
        duration: '0:55',
        timeStart: '18:20',
        timeEnd: '19:15',
        price: '198',
        plane: 'international'
    }, {
        id: 'dubrovnik',
        name: 'Dubrownik (DBV)',
        duration: '1:15',
        timeStart: '17:25',
        timeEnd: '18:40',
        price: '395',
        plane: 'international'
    }, {
        id: 'warsaw',
        name: 'Warszawa (WAW)',
        duration: '1:15',
        timeStart: '07:55',
        timeEnd: '09:10',
        price: '346',
        plane: 'international'
    }]
}, {
    id: 'cannes',
    start: 'Cannes (CEQ)',
    destinations: [{
        id: 'milan',
        name: 'Mediolan (MXP)',
        duration: '0:55',
        timeStart: '12:10',
        timeEnd: '13:05',
        price: '176',
        plane: 'international'
    }, {
        id: 'poznan',
        name: 'Poznań (POZ)',
        duration: '2:30',
        timeStart: '12:45',
        timeEnd: '15:15',
        price: '69',
        plane: 'international'
    }]
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

export { flightConnections, priceDetails }