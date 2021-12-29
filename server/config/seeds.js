const db = require('./connection');
const { User, Sauce } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Sauce' },
        { name: 'Pickles' }
    ]);

    console.log('categories seeded');
    
    await Sauce.deleteMany();

    const sauce = await Sauce.insertMany([
        {
            name: 'Original',
            description: 'Original recipe',
            image: 'Original.jpg',
            price: 7,
            quantity: 12
        },
        {
            name: 'Honey',
            description: 'Honey BBQ',
            image: 'Honey.jpg',
            price: 7,
            quantity: 12
        },
        {
            name: 'Pineapple',
            description: 'Pineapple Grilling Sauce',
            image: 'Pineapple.jpg',
            price: 7,
            quantity: 12
        },
        {
            name: 'Chipotle',
            description: 'Spicy Chipotle BBQ',
            image: 'Chipotle.jpg',
            price: 7,
            quantity: 12
        }
    ]);
    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Phil',
        lastName: 'Powers',
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