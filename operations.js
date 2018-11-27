const largeList = require('./operations.json');

module.exports = {
    cases: [
        {
            in: [
                largeList
            ],
            out: '2017-03-16'
        },
        {
            in: [
                [
                    { date: '2017-08-10', amount: 5422 },
                    { date: '2017-08-9', amount: 5422 },
                    { date: '2017-08-8', amount: 5422 },
                    { date: '2017-08-7', amount: 5422 },
                    { date: '2017-08-6', amount: 5422 },
                    { date: '2017-08-5', amount: 5422 },
                    { date: '2017-08-4', amount: 5422 },
                    { date: '2017-08-3', amount: 5422 },
                    { date: '2017-08-2', amount: 5422 },
                    { date: '2017-08-1', amount: 5422 },
                    { date: '2017-07-31', amount: 5422 },
                    { date: '2017-07-30', amount: 5220 },
                    { date: '2017-07-29', amount: 5365 },

                    { date: '2017-07-27', amount: 5451 },
                    { date: '2017-07-26', amount: 5303 },
                    { date: '2017-07-25', amount: 5654 }
                ]
            ],
            out: '2017-07-28'
        },
        {
            in: [
                [
                    { date: '2018-07-31', amount: 5422 },
                    { date: '2018-07-30', amount: 5220 },
                    { date: '2018-07-29', amount: 5365 },

                    { date: '2018-07-27', amount: 5451 },
                    { date: '2018-07-26', amount: 5303 },
                    { date: '2018-07-25', amount: 5654 },
                    { date: '2018-07-24', amount: 5654 }
                ]
            ],
            out: '2018-07-28'
        }
    ]
};

