'use-strict';
import RecommendationService from '../../Business/RecommendationService';

test('Recommendation returns expected value', () => {

    const creditCards = [
        {
            name: 'Discover',
            rewards: [
                {
                    categories: ['Gas', 'Restaurants'],
                    cashbackPercentage: 5,
                    type: 'CashbackReward'
                }
            ]
        },
        {
            name: 'Amex',
            rewards: [
                {
                    categories: ['Gas', 'Amazon'],
                    milesPerDollarSpent: 2,
                    dollarPricePerMile:0.01,
                    type: 'MilesReward'
                }
            ]
        },
        {
            name: 'Venture',
            rewards: [
                {
                    categories: ['Restaurants', 'Amazon'],
                    cashback: {
                        cashbackPercentage: 10,
                        type: 'CashbackReward'
                    },
                    amountToSpend: 2000,
                    type: 'SignUpReward'
                }
            ]
        },
    ];

    let subject = new RecommendationService();
    let user = {
        shoppingCategories: ['Gas', 'Amazon', 'Restaurants'],
        creditCards: creditCards
    };

    let recommendations = subject.getRecommendations(user);

    expect(recommendations.length).toBe(3);

    //Gas recommendation
    let gas = recommendations.find(r => r.category === 'Gas');

    expect(gas.creditCards.length).toBe(2);
    expect(gas.creditCards).toContain(creditCards.find(c => c.name === 'Discover'));
    expect(gas.creditCards).toContain(creditCards.find(c => c.name === 'Amex'));

    //Restaurant recommendation
    let restaurant = recommendations.find(r => r.category === 'Restaurants');
    
    expect(restaurant.creditCards.length).toBe(2);
    expect(restaurant.creditCards).toContain(creditCards.find(c => c.name === 'Discover'));
    expect(restaurant.creditCards).toContain(creditCards.find(c => c.name === 'Venture'));

    //Amazon recommendation
    let amazon = recommendations.find(r => r.category === 'Amazon');
    
    expect(amazon.creditCards.length).toBe(2);
    expect(amazon.creditCards).toContain(creditCards.find(c => c.name === 'Venture'));
    expect(amazon.creditCards).toContain(creditCards.find(c => c.name === 'Amex'));
});