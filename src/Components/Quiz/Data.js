import { useState } from 'react'

export const QuizData = [
    {
        id: 1,
        heading: 'Your home is...',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_1_back.png'),
        option: [
            {
                img: require('../../../public/Assets/questions/que_1_img1.png'),
                title: 'An Apartment',
            },
            {
                img: require('../../../public/Assets/questions/que_1_img2.png'),
                title: 'A Villa',
            },
            {
                img: require('../../../public/Assets/questions/que_1_img3.png'),
                title: 'An Independent House',
            },
        ],
    },
    {
        id: 2,
        heading: 'What is your home configuration?',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_2_back.png'),
        option: [
            {
                img: require('../../../public/Assets/questions/que_2_img1.png'),
                title: 'Studio/1 BHK',
            },
            {
                img: require('../../../public/Assets/questions/que_2_img2.png'),
                title: '2 BHK',
            },
            {
                img: require('../../../public/Assets/questions/que_2_img3.png'),
                title: '3 BHK',
            },
            {
                img: require('../../../public/Assets/questions/que_2_img4.png'),
                title: '4 BHK',
            },
        ],
    },
    {
        id: 3,
        heading: 'What is the size of your home? (Enter the super built-up area.)',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_2_back.png'),
        option: [
            {
                img: require('../../../public/Assets/questions/que_1_img1.png'),
                title: 'one',
            },

        ],
    },
    {
        id: 4,
        heading: 'What are you looking for?',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_4_back.png'),
        option: [
            {
                img: require('../../../public/Assets/questions/que_4_img1.png'),
                title: 'New Home Design',
            },
            {
                img: require('../../../public/Assets/questions/que_4_img2.png'),
                title: 'Renovation',
            },
        ],
    },
    {
        id: 5,
        heading: 'Do you plan on renting out your home?',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_2_back.png'),
        option: [
            {
                title: 'Yes',
            },
            {
                title: 'No',
            },
        ],
    },
    {
        id: 6,
        heading: 'Which of these Look & Live packages match best with your requirements?',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_2_back.png'),
        option: [
            {
                title: 'Modular Interior',
            },
            {
                title: 'Full Home Interior',
            },
            {
                title: 'Others',
            },
        ],
    },
    {
        id: 7,
        heading: 'What price range would you choose for your home interiors?',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_7_back.png'),
        option: [
            {
                title: '3 - 5 Lacs',
            },
            {
                title: '5 - 10 Lacs',
            },
            {
                title: '10 - 15 Lacs',
            },
            {
                title: '15 - 20 Lacs',
            },
            {
                title: '>20 Lacs',
            },

        ],
    },
    {
        id: 8,
        heading: 'When would you like us to start the interiors of your home?',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_8_back.png'),
        option: [
            {
                title: 'Immediately (less than 1 month)',
            },
            {
                title: '1 - 3 months',
            },
            {
                title: '4 - 6 months',
            },
            {
                title: 'More than 6 months',
            },
        ],
    },
    {
        id: 9,
        heading: 'Choose the top 3 bedroom looks you like the most.',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_9_back.png'),
        option: [
            {
                img: require('../../../public/Assets/questions/que_9_img1.png'),
                title: 'Art Deco',
            },
            {
                img: require('../../../public/Assets/questions/que_9_img2.png'),
                title: 'Modern Contemprory',
            },
            {
                img: require('../../../public/Assets/questions/que_9_img3.png'),
                title: 'Minimalistic',
            },
            {
                img: require('../../../public/Assets/questions/que_9_img4.png'),
                title: 'Luxury',
            },
            {
                img: require('../../../public/Assets/questions/que_9_img5.png'),
                title: 'Traditional',
            },
            {
                img: require('../../../public/Assets/questions/que_9_img6.png'),
                title: 'Other',
            },
        ],
    },
    {
        id: 10,
        heading: 'Choose the top 3 kitchen looks you like the most.',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_10_back.png'),
        option: [
            {
                img: require('../../../public/Assets/questions/que_10_img1.png'),
                title: 'Art Deco',
            },
            {
                img: require('../../../public/Assets/questions/que_10_img2.png'),
                title: 'Modern Contemprory',
            },
            {
                img: require('../../../public/Assets/questions/que_10_img3.png'),
                title: 'Minimalistic',
            },
            {
                img: require('../../../public/Assets/questions/que_10_img4.png'),
                title: 'Luxury',
            },
            {
                img: require('../../../public/Assets/questions/que_10_img5.png'),
                title: 'Traditional',
            },
            {
                img: require('../../../public/Assets/questions/que_10_img6.png'),
                title: 'Other',
            },
        ],
    },
    {
        id: 11,
        heading: 'Choose the top 3 dinning room looks you like the most.',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_11_back.png'),
        option: [
            {
                img: require('../../../public/Assets/questions/que_11_img1.png'),
                title: 'Art Deco',
            },
            {
                img: require('../../../public/Assets/questions/que_11_img2.png'),
                title: 'Modern Contemprory',
            },
            {
                img: require('../../../public/Assets/questions/que_11_img3.png'),
                title: 'Minimalistic',
            },
            {
                img: require('../../../public/Assets/questions/que_11_img4.png'),
                title: 'Luxury',
            },
            {
                img: require('../../../public/Assets/questions/que_11_img5.png'),
                title: 'Traditional',
            },
            {
                img: require('../../../public/Assets/questions/que_11_img6.png'),
                title: 'Other',
            },
        ],
    },
    {
        id: 12,
        heading: 'Choose the top 3 living room looks you like the most.',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_12_back.png'),
        option: [
            {
                img: require('../../../public/Assets/questions/que_12_img1.png'),
                title: 'Art Deco',
            },
            {
                img: require('../../../public/Assets/questions/que_12_img2.png'),
                title: 'Modern Contemprory',
            },
            {
                img: require('../../../public/Assets/questions/que_12_img3.png'),
                title: 'Minimalistic',
            },
            {
                img: require('../../../public/Assets/questions/que_12_img4.png'),
                title: 'Luxury',
            },
            {
                img: require('../../../public/Assets/questions/que_12_img5.png'),
                title: 'Traditional',
            },
            {
                img: require('../../../public/Assets/questions/que_9_img6.png'),
                title: 'Other',
            },
        ],
    },
    {
        id: 13,
        heading: 'Customer Inputs',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_13_back.png'),
    },
    {
        id: 14,
        heading: '',
        multiSelection: false,
        button: false,
        bgImg: require('../../../public/Assets/questions/que_1_back.png'),
        img: require('../../../public/Assets/thanksImg.png'),
    },


]
