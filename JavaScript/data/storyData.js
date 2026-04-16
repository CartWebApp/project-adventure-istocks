export const data = [
    {
        id: "Intro",
        scenes: [
            { image: 'images/Visuals/Intro/intro1.png', text: "John brushes his teeth, gets dressed, and begins his commute to work. He stretches outside, enjoying the vivid warmth of the sun." },
            { image: 'images/Visuals/Intro/intro1.png', text: "It's so beautiful" },
            { image: 'images/Visuals/Intro/intro1.png', text: "Errgh and then something else happens here" },
            {
                image: 'images/Visuals/Intro/intro1.png',
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
            { image: 'images/Visuals/Intro/intro1.png', text: "Ha ha John goes to work" },
            { image: 'images/Visuals/Intro/intro1.png', text: "ehm alright something else here now" }
        ]
    },

    {

    }
]