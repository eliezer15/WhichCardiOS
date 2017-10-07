'use strict';
const RewardsPerCategory = 2;

export default class RecommendationService {

    getRecommendations(user) {
        return user.shoppingCategories.map(category => this._getRecommendation(user.creditCards, category));
    }
    
    _getEffectivePercentageReward(reward) {
        if (!reward) {
            return 0;
        }
        
        if (reward.type === 'CashbackReward') {
            return reward.cashbackPercentage;
        } else if (reward.type === 'MilesReward') {
            return (reward.dollarPricePerMile * reward.milesPerDollarSpent) * 100;
        } else if (reward.type === 'SignUpReward') {
            return this._getEffectivePercentageReward(reward.miles) + this._getEffectivePercentageReward(reward.cashback);
        }

        return 0;
    }

    _getRecommendation(cards, category) {
        let rewardsToCards = this._getRewardsToCreditCards(cards);
        let rewards = Array.from(rewardsToCards.keys());

        let topRewards = this._getTopRewards(rewards, category);
        let topCreditCards = [];

        topRewards.forEach(function(reward) {
            let card = rewardsToCards.get(reward);
            card.rewards = [reward];
            topCreditCards.push(card);
        });

        return {
            'category': category,
            'creditCards': topCreditCards
        };
    }

    _getRewardsToCreditCards(cards) {
        let retVal = new Map();

        cards.forEach(function(card) {
            card.rewards.forEach(function(reward) {
                retVal.set(reward, card);
            });
        }); 

        return retVal;
    }

    _getTopRewards(rewards, category) {
        let applicableRewards = this._getApplicableRewards(rewards, category);

        applicableRewards.forEach(function(reward) {
            reward.effectivePercentageReward = this._getEffectivePercentageReward(reward);
        }, this);

        applicableRewards.sort(function(a, b) {
            if (a.effectivePercentageReward < b.effectivePercentageReward) {
                return 1;
            } else if (b.effectivePercentageReward < a.effectivePercentageReward) {
                return -1;
            } else {
                return 0;
            }
        });

        return applicableRewards.slice(0, RewardsPerCategory);
    }

    _getApplicableRewards(rewards, category) {
        return rewards.filter(reward => reward.categories.some(c => c === category));
    }
}