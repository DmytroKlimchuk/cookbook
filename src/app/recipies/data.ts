import { Shopping } from '../shopping/shopping.model';

export const recipes = [
    {
        "id": 1,
        "name": "Italian Pizza",
        "description": "Пі́ца — італійська національна страва, а саме, корж зазвичай круглої форми, який покривається томатною пастою та сиром і запікається.",
        "imgPath": "http://bbcfoods.in/wp-content/uploads/2018/04/VEG-PIZZA.png",
        "ingredients": [
            new Shopping('Мука', 290),
            new Shopping('Помідор', 170),
            new Shopping('Сир', 110)
        ]
    },
    {
        "id": 2,
        "name": "Pizza Bavarian",
        "description": "Піца Баварська своїм незабутнім смаком принесе Вам незабутнє задоволення.",
        "imgPath": "http://tashirpizza.by/images/products/36-243.jpg",
        "ingredients": [
            new Shopping('Мука', 260),
            new Shopping('Шинка', 120),
            new Shopping('Сир', 90)
        ]
    },
    {
        "id": 3,
        "name": "Cheses Pizza",
        "description": "Сирна піца на сковороді. Ви любите піцу? Але вам не подобається її готувати, так як це тривалий процес? ",
        "imgPath": "https://d2nznsm87rjw1k.cloudfront.net/media/dominos/osg/big/2015/03/25/hawaii_big.png",
        "ingredients": [
            new Shopping('Мука', 250),
            new Shopping('Сир', 90),
            new Shopping('Помідор', 60)
        ]
    },
    {
        "id": 4,
        "name": "Mushroom Pizza",
        "description": "Піцу з грибами люблять багато, ну а приготуват. ... заморожені, сушені або мариновані грибочки теж чудово підійдуть - все залежить від ваших побажань ...",
        "imgPath": "https://dominospizza.ru/media/9012/pizza-ekstravagantnaja-big.jpg",
        "ingredients": [
            new Shopping('Мука', 280),
            new Shopping('Гриби', 160),
            new Shopping('Сир', 110)
        ]
    }
]
