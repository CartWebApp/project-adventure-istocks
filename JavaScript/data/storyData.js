export const data = [
    {
        id: "Intro",
        scenes: [
            { image: 'images/Visuals/Intro/starting-john-page.jpg', text: "John brushes his teeth, gets dressed, and begins his commute to work. He stretches outside, enjoying the vivid warmth of the sun." },
            { image: 'images/Visuals/Intro/starting-john-page.jpg', text: "It's so beautiful" },
            { image: 'images/Visuals/Intro/starting-john-page.jpg', text: "Errgh and then something else happens here" },
            {
                image: 'images/Visuals/Intro/starting-john-page.jpg',
                text: "Woah! Make a choice, Johnny!",
                options: [
                    { text: "Go to work", leadsTo: "1A" /* Will probably not be what we actually call them */ },
                    { text: "Ditch your job and wander off", leadsTo: "1B" },
                    { text: "Get a liiittle bit more sleep...", leadsTo: "1C" },
                ]
            },
        ]
    },
    {
        id: "1A",
        scenes: [
            { image: 'images/Visuals/Intro/John-job-searching.jpg', text: "John wanders around downtown of his city for the next 2 hours seeing possible new job opportunities" },
            { image: 'images/Visuals/Introjohn-hooded-man-first-appearance.jpg', text: "However, as soon as he thought he found something big, a hooded man goes up to John speaking of a Higher World" },

            {
                image: '',
                text: 'Choose',
                options: [
                    { text: "Listen to Low Budget Man", leadsTo: "1A2A" },
                    { text: "Just another homeless guy...", leadsTo: "1A2B" },
                ]
            }
        ]
    },

    {
        id: "1A2A",
        scenes: [
            { image: '', text: "Introducing Low-Budget-Man, a stick figure who was banished from Layer 1, and informs John that something must be done." },
            { image: '', text: "He informs John that if he is not to ascent the layers, he too may be banished!" },

            {
                image: '',
                text: 'Should John heed the words of Low-Budget Man?',
                options: [
                    { text: "Yes, I'm terrified", leadsTo: "1A2A3A" },
                    { text: "Let's fight, nerd.", leadsTo: "1A2A3B" },
                    { text: "What a load of blasphemy.", leadsTo: "1A2A3C" }
                ]
            }
        ]

    },

    {
        id: "1A2A3A",
        scenes: [
            { image: '', text: "Low Budget Man explains to John that he must follow him to break free from Layer 0." },
            { image: '', text: "Low-Budget Man hands John a weapon; a simple dagger." },
            { image: '', text: "John and Low Budget Man travel to the edge of the world - something that John would've never even thought about originally." },
            { image: '', text: "Low Budget Man informs John that he needs a key in order to cross to Layer 1." },
            { image: '', text: "John will need to solve puzzles to get across the gates, but Low Budget Man cannot do so because he will be erased if he tries this again." },

            {
                image: '',
                text: 'Cross the border to Layer 1?',
                options: [
                    { text: "I'm Ready!", leadsTo: "1A2A3A4A" },
                    { text: "I take it back, I'm scared..", leadsTo: "1A2A3A4B"}
                ]
            }
        ]
    },


    {
        id: "1A2A3A4A",
        scenes: [
            {image:'', text: "Low Budget Man waves him good luck. Since he can't join him on the journey, he will keep informing others to find the enlightment instead. John has now entered into Layer 1."}
        ]
    },


    /* Transition to Layer 1*/

    {
        id: "1B",
        scenes: [
            { image: 'starting-john-page.jpg', text: "Ha ha John goes to work" },
            { image: 'starting-john-page.jpg', text: "ehm alright something else here now" }
        ]
    },


    {
        id: "1C",
        scenes: [
            { image: '', text: "John has gone now back to bed that later slightly disrupts his current undergoings." },
            { image: '', text: "John received an unfortunate phone call from his boss, saying that he is now fired from his miserable job." },

            {
                image: '',
                text: 'How does he recompense?',
                options: [
                    { text: 'Wander aimlessly', leadsTo: "" },
                    { text: 'John begs people for money', leadsTo: "" },
                ]
            }
        ]
    }
]