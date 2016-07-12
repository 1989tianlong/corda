'use strict';

define([], () => {
    return {
        baseCurrency: "EUR",
        effectiveDate: new Date(2016, 3, 11),
        terminationDate: new Date(2026, 3, 11),
        eligibleCreditSupport: "Cash in an Eligible Currency",
        independentAmounts: {
            quantity: 0
        },
        threshold: {
            quantity: 0
        },
        minimumTransferAmount: {
            quantity: 25000000
        },
        rounding: {
            quantity: 1000000
        },
        valuationDate: "Every Local Business Day",
        notificationTime: "2:00pm London",
        resolutionTime: "2:00pm London time on the first LocalBusiness Day following the date on which the notice is give",
        interestRate: {
            oracle: "Rates Service Provider",
            tenor: {
                name: "6M"
            },
            ratioUnit: null,
            name: "EONIA"
        },
        addressForTransfers: "",
        exposure: {},
        localBusinessDay: [ "London" , "NewYork" ],
        dailyInterestAmount: "(CashAmount * InterestRate ) / (fixedLeg.notional.token.currencyCode.equals('GBP')) ? 365 : 360",
        hashLegalDocs: "put hash here"
    };
});