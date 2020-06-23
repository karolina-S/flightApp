const flightConnections = [
    {
        id: 'warsaw',
        start: 'Warszawa',
        destinations: [{
            id: 'poznan',
            name: 'Poznań'
        }, {
            id: 'toronto',
            name: 'Toronto'
        }, {
            id: 'milan',
            name: 'Mediolan'
        }, {
            id: 'katowice',
            name: 'Katowice'
        }, {
            id: 'helsinki',
            name: 'Helsinki'
        }]
    },
    {
        id: 'poznan',
        start: 'Poznań',
        destinations: [{
            id: 'warsaw',
            name: 'Warszawa'
        }, {
            id: 'dubrovnik',
            name: 'Dubrovnik'
        }, {
            id: 'losangeles',
            name: 'Los Angeles'
        }, {
            id: 'katowice',
            name: 'Katowice'
        }, {
            id: 'cannes',
            name: 'Cannes'
        }]
    },
    {
        id: 'toronto',
        start: 'Toronto',
        destinations: [{
            id: 'newyork',
            name: 'Nowy Jork'
        }, {
            id: 'warsaw',
            name: 'Warszawa'
        }, {
            id: 'losangeles',
            name: 'Los Angeles'
        }]
    },
    {
        id: 'katowice',
        start: 'Katowice',
        destinations: [{
            id: 'prague',
            name: 'Praga'
        }, {
            id: 'warsaw',
            name: 'Warszawa'
        }, {
            id: 'poznan',
            name: 'Poznań'
        }, {
            id: 'nairobi',
            name: 'Nairobi'
        }, {
            id: 'cannes',
            name: 'Cannes'
        }]
    },
    {
        id: 'newyork',
        start: 'Nowy Jork',
        destinations: [{
            id: 'losangeles',
            name: 'Los Angeles'
        }, {
            id: 'toronto',
            name: 'Toronto'
        }]
    },
    {
        id: 'losangeles',
        start: 'Los Angeles',
        destinations: [{
            id: 'newyork',
            name: 'Nowy Jork'
        }, {
            id: 'toronto',
            name: 'Toronto'
        }, {
            id: 'poznan',
            name: 'Poznań'
        }]
    },
    {
        id: 'dubrovnik',
        start: 'Dubrovnik',
        destinations: [{
            id: 'poznan',
            name: 'Poznań'
        }, {
            id: 'milan',
            name: 'Mediolan'
        }, {
            id: 'cannes',
            name: 'Cannes'
        }]
    },
    {
        id: 'prague',
        start: 'Praga',
        destinations: [{
            id: 'katowice',
            name: 'Katowice'
        }, {
            id: 'helsinki',
            name: 'Helsinki'
        }]
    },
    {
        id: 'milan',
        start: 'Mediolan',
        destinations: [{
            id: 'helsinki',
            name: 'Helsinki'
        }, {
            id: 'cannes',
            name: 'Cannes'
        }, {
            id: 'warsaw',
            name: 'Warszawa'
        }]
    },
    {
        id: 'helsinki',
        start: 'Helsinki',
        destinations: [{
            id: 'warsaw',
            name: 'Warszawa'
        }, {
            id: 'milan',
            name: 'Mediolan'
        }, {
            id: 'prague',
            name: 'Praga'
        }, {
            id: 'nairobi',
            name: 'Nairobi'
        }]
    },
    {
        id: 'cannes',
        start: 'Cannes',
        destinations: [{
            id: 'poznan',
            name: 'Poznań'
        }, {
            id: 'milan',
            name: 'Mediolan'
        }, {
            id: 'katowice',
            name: 'Katowice'
        }, {
            id: 'toronto',
            name: 'Toronto'
        }, {
            id: 'dubrovnik',
            name: 'Dubrovnik'
        }]
    },
    {
        id: 'nairobi',
        start: 'Nairobi',
        destinations: [{
            id: 'katowice',
            name: 'Katowice'
        }, {
            id: 'newyork',
            name: 'Nowy Jork'
        }, {
            id: 'helsinki',
            name: 'Helsinki'
        }]
    }
],
    flightDetails = [
        {
            originCity: 'Poznań',
            destinationCity: 'Warszawa',
            timeStart: '13:55',
            timeEnd: '14:50',
            duration: '55 minut',
            price: {
                adults: {
                    basic: '80',
                    plus: '140',
                    premium: '220'
                },
                children: {
                    basic: '50',
                    plus: '110',
                    premium: '190'
                },
                babies: '10',
            },
            plane: 'Embraer ERJ-170'
        },
        {
            originCity: 'Poznań',
            destinationCity: 'Lublana',
            timeStartOrigin: '09:25',
            timeEndDestination: '11:00',
            timeStartDestination: '16:45',
            timeEndOrigin: '18:20',
            duration: '1 godzina 35 minut',
            price: {
                adults: {
                    basic: '120',
                    plus: '220',
                    premium: '310'
                },
                children: {
                    basic: '50',
                    plus: '110',
                    premium: '190'
                },
                babies: '10',
            },
            plane: 'Boeing 737-400'
        },
        {
            originCity: 'Warszawa',
            destinationCity: 'Los Angeles',
            timeStartOrigin: '09:25',
            timeEndDestination: '11:00',
            timeStartDestination: '16:45',
            timeEndOrigin: '18:20',
            duration: '1 godzina 35 minut',
            price: {
                adults: {
                    basic: '120',
                    plus: '220',
                    premium: '310'
                },
                children: {
                    basic: '50',
                    plus: '110',
                    premium: '190'
                },
                babies: '10',
            },
            plane: 'Boeing 787-8'
        },

    ],

    luggageDetails = [
        {
            luggage10: '87',
            luggage20: '114',
            luggage32: '158'
        }
    ]

export { flightConnections, flightDetails }