module.exports = {
    cases: [
        {
            // current
            in: [
                [
                    { type: 'current', balance: 10000 },
                    { type: 'credit', balance: 30000, limit: 20000 },
                    { type: 'savings', balance: 40000 }
                ],
                2000
            ],
            out: [
                { type: 'current', balance: 8000 },
                { type: 'credit', balance: 30000, limit: 20000 },
                { type: 'savings', balance: 40000 }
            ]
        },

        //current, credit
        {
            in: [
                [
                    { type: 'current', balance: 10000 },
                    { type: 'credit', balance: 30000, limit: 20000 },
                    { type: 'savings', balance: 40000 }
                ],
                13000
            ],
            out: [
                { type: 'current', balance: 0 },
                { type: 'credit', balance: 27000, limit: 20000 },
                { type: 'savings', balance: 40000 }
            ]
        },

        //current, credit and limit
        {
            in: [
                [
                    { type: 'current', balance: 10000 },
                    { type: 'credit', balance: 30000, limit: 20002 },
                    { type: 'savings', balance: 40001 }
                ],
                44000
            ],
            out: [
                { type: 'current', balance: 0 },
                { type: 'credit', balance: 0, limit: 16002 },
                { type: 'savings', balance: 40001 }
            ]
        },

        // current, credit and limit, savings
        {
            in: [
                [
                    { type: 'current', balance: 10000 },
                    { type: 'credit', balance: 30000, limit: 20000 },
                    { type: 'savings', balance: 40005 }
                ],
                63000
            ],
            out: [
                { type: 'current', balance: 0 },
                { type: 'credit', balance: 0, limit: 0 },
                { type: 'savings', balance: 37005 }
            ]
        }
    ]
};


