const db = require('./connection');
const { User, Sauce, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Sauce' },
        { name: 'Grilling Sauce'},
        { name: 'Pickles' }
    ]);

    console.log('categories seeded');
    
    await Sauce.deleteMany();

    const sauce = await Sauce.insertMany([
        {
            name: 'Original',
            description: 'Original recipe',
            image: 'Original.jpg',
            category: categories[0]._id,
            price: 7,
            quantity: 12
        },
        {
            name: 'Honey',
            description: 'Honey BBQ',
            image: 'Honey.jpg',
            category: categories[0]._id,
            price: 7,
            quantity: 12
        },
        {
            name: 'Pineapple',
            description: 'Pineapple Grilling Sauce',
            category: categories[1]._id,
            image: 'Pineapple.jpg',
            category: categories[1]._id,
            price: 7,
            quantity: 12
        },
        {
            name: 'Chipotle',
            description: 'Spicy Chipotle BBQ',
            image: 'Chipotle.jpg',
            category: categories[0]._id,
            price: 7,
            quantity: 12
        },
        {
            name: 'Cheries Garlic Dill Pickles',
            description: 'Garlic Dill Pickles',
            image: 'Pickles.jpg',
            category: categories[1]._id,
            price: 5,
            quantity: 12
        }
    ]);
    console.log('sauces seeded');

    await User.deleteMany();

    await User.create({
        username: 'powers',
        email: 'powers@gmail.com',
        password: 'POWERS123',
        orders: [
            {
                sauces: []
            }
        ]
    });
    console.log('user seeded');

    process.exit();
})