'use strict';

export class User {
    constructor() {
        this.shoppingCategories = [];
        this.creditCards = [];
    }
}

export class CreditCard {
    constructor() {
        this.name = "";
        this.color = "";
        this.rewards = [];
    }
}

export class Category {
    constructor() {
        this.name = "";
        this.iconName = "";
    }
}

export class Reward {
    constructor() {
        this.categories = [];
        this.expiration = new Date();
        this.effectivePercentageReward = 0;
        this.type = "";
    }
}

export class CashbackReward extends Reward {
    constructor() {
        super();
        this.cashbackPercentage = 0;
    }
}