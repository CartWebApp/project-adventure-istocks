export const data = [
    // { image: 'images/Visuals/', speaker: "", text: "." },
    {
        id: "Intro",
        scenes: [
            { image: 'images/Visuals/Intro/starting-john-page.jpg', speaker: "Narrator", text: "A man named John wakes up in the comfort of his bed. He stretches to alertness." },
            { image: 'images/Visuals/Intro/starting-john-page.jpg', speaker: "John", text: "Man, what a beautiful day to go to my miserable job and work for 8 hours straight! Let's do this!" },
            { image: 'images/Visuals/Intro/starting-john-page.jpg', speaker: "John", text: "...Or, should I? I don't really like doing work, and I am feeling quite sleepy..." },
            { image: 'images/Visuals/Intro/starting-john-page.jpg', speaker: "John", text: "I mean, what's the worst that can happen? I get fired?" },
            { image: 'images/Visuals/Intro/starting-john-page.jpg', speaker: "John", text: "Alright, that's pretty bad, actually. I dunno..." },
            {
                image: 'images/Visuals/Intro/starting-john-page.jpg',
                speaker: "John",
                text: "What should I do?",
                options: [
                    { text: "Go to work you lazy bum", leadsTo: "1A"},
                    { text: "Ditch your job and wander off", leadsTo: "1B" },
                    { text: "Get a liiittle bit more sleep...", leadsTo: "1C" },
                ]
            },
        ]
    },
    {
        id: "1A",
        scenes: [
            { image: 'images/Visuals/Intro/John-job-searching.jpg', speaker: "Narrator", text: "John is a Good Person so he brushes his teeth, gets, dressed, and begins his commute to his work office at ReStock facilities." },
            { image: 'images/Visuals/Intro/John-job-searching.jpg', speaker: "Narrator", text: "He walks a long, boring trail until he reaches his office." },
            { image: 'images/Visuals/Intro/John-job-searching.jpg', speaker: "John", text: "Ah, finally arrived. Now I can-" },
            { image: 'images/Visuals/', speaker: "???", text: "Wait!" },
            { image: 'images/Visuals/', speaker: "Narrator", text: "A voice he has never heard calls out to him. John turns to the voice." },
            // Change image here
            { image: 'images/Visuals/', speaker: "Narrator", text: "A hooded man stands to the side of him, his face completely obscured in shadow. Yet, something about his form seems strange..." },
            { image: 'images/Visuals/', speaker: "???", text: "You there. How are you this evening?" },
            { image: 'images/Visuals/', speaker: "John", text: "Err... fine, I guess." },
            { image: 'images/Visuals/', speaker: "???", text: "Wonderful. It is about to become even better. I have something splendid to tell you. Come with me, and I can tell you what I know." },

            {
                image: '',
                text: 'This is probably the fishiest encounter you could ever have. Do you wanna listen to this dude?',
                options: [
                    { text: "Listen to him", leadsTo: "1A2A" },
                    { text: "Just another homeless guy...", leadsTo: "1A2B" },
                ]
            }
        ]
    },

    {
        id: "1A2A",
        scenes: [
            { image: 'images/Visuals/', speaker: "Narrator", text: "The man takes you by the wrist. His grip is... thin, if that even makes sense. He guides you behind an alley." },
            { image: 'images/Visuals/', speaker: "???", text: "Congratulations. You have been chosen to learn the truth of your world." },
            { image: 'images/Visuals/', speaker: "John", text: "The what now?" },
            { image: 'images/Visuals/', speaker: "???", text: "How foolishly blind you are to it. Don't you realize how still and monotonous your world is? It's as if you are all perfectly aligned stocks puppetered by a greater hand." },
            { image: 'images/Visuals/', speaker: "John", text: "My fellow watermarked man, what are you on about? This is how I've lived my whole life. I don't see anything wrong with the way I live." },
            { image: 'images/Visuals/', speaker: "???", text: "Not until you realize what lies beyond this world." },
            { image: 'images/Visuals/', speaker: "John", text: "..." },
            { image: 'images/Visuals/', speaker: "John", text: "Look dude, I got a job to get to, so can you stop vaguely skimming the line of your argument and get to the point?" },
            { image: 'images/Visuals/', speaker: "Narrator", text: "The hooded man chuckles to himself." },
            { image: 'images/Visuals/', speaker: "???", text: "Alright then. Don't say I didn't warn you." },
            { image: 'images/Visuals/', speaker: "Narrator", text: "Then, he unmasks himself..." },

            // Black screen
            { image: 'images/Visuals/', speaker: "Narrator", text: "..." },

            // Image of him with his hood off --- stickman in a hoodie!!!!
            { image: 'images/Visuals/', speaker: "Narrator", text: "..." },

            // Image of them staring at each other
            { image: 'images/Visuals/', speaker: "Narrator", text: "..." },
            { image: 'images/Visuals/', speaker: "John", text: "What... are you?" },
            { image: 'images/Visuals/', speaker: "Low-Budget Man", text: "Why, call me Low-Budget man. That is what they would call me in the world I descended from." },
            { image: 'images/Visuals/', speaker: "John", text: "Why do you have such a self-deprecating name..?" },
            { image: 'images/Visuals/', speaker: "Low-Budget Man", text: "That's what they call all of us- look, surely you see now something is astray." },
            { image: 'images/Visuals/', speaker: "John", text: "Dang. I guess so. You look real weird, buddy." },
            { image: 'images/Visuals/', speaker: "Low-Budget Man", text: "Let me inform you of the rest then." },
            { image: 'images/Visuals/', speaker: "Low-Budget Man", text: "The universe we reside in has several connected layers, extending up to Layer 3." },
            { image: 'images/Visuals/', speaker: "Low-Budget Man", text: "Each layer offers you a greater freedom than the last—and you, my friend, unfortunately reside in the zeroth, where you are blissfully unaware of the existence of the layers." },
            { image: 'images/Visuals/', speaker: "Low-Budget Man", text: "I come from the first, but I have been banished. They sought unfair punishment against me. So now, I come here to offer others like you to take my place, and perhaps rise higher than I have." },
            { image: 'images/Visuals/', speaker: "John", text: "...Sounds rough. And crazy. I don't even know if I should believe all of that." },
            { image: 'images/Visuals/', speaker: "Low-Budget Man", text: "Follow my words, and I will show you the evidence." },

            {
                image: '',
                text: 'Should John heed the words of Low-Budget Man?',
                options: [
                    { text: "Yes, we probably should...", leadsTo: "1A2A3A" },
                    { text: "Let's fight, nerd.", leadsTo: "1A2A3B",  },
                    { text: "What a load of blasphemy.", leadsTo: "1A2A3C" }
                ]
            }
        ]

    },

    {
        id: "1A2A3A",
        scenes: [
            // Black screen
            { image: '', speaker: "Narrator", text: "Low-Budget Man convinces John to have him follow him... again." },
            { image: '', speaker: "Low-Budget Man", text: "You'll slap yourself for never thinking of this." },
            { image: '', speaker: "Narrator", text: "You follow Low-Budget man to somewhere you've never gone before. Usually, it had always been the same concrete sidewalk simply going to work, then immediately back home." },
            { image: '', speaker: "Narrator", text: "But today... John walks onto grass." },
            { image: '', speaker: "Narrator", text: "And before he knows it.." },

            // Now an actual visual appears - Them at the border
            { image: '', speaker: "Low-Budget Man", text: "Here we are." },
            { image: '', speaker: "John", text: "What... is that?" },
            { image: '', speaker: "Low-Budget Man", text: "The border between your world and Layer 1. They are fairly simple distances apart, but no one usually has the mind to travel toward them; not here, at least." },
            { image: '', speaker: "Narrator", text: "Low-Budget man taps your shoulder and hands you something." },
            { image: '', speaker: "Low-Budget Man", text: "You are to travel through here and begin your path to freedom. To help you, I've got you a gift." },

            // Image of the object
            { image: '', speaker: "Narrator", text: "", getItem: "Dagger" },

            // John looks at the object in his hand, confused
            { image: '', speaker: "John", text: "Why did you give me a letter t?" },
            { image: '', speaker: "Low-Budget Man", text: "That's a dagger. Clearly you've never drawn in your life." },
            { image: '', speaker: "John", text: "What is drawing." },
            { image: '', speaker: "Low-Budget Man", text: "I should have expected that. Fear not, for you will learn." },

            // Back to the border visual
            { image: '', speaker: "Low-Budget Man", text: "To pass through the border, normally you would have to pass a guardian or snag a key from someone." },
            { image: '', speaker: "Low-Budget Man", text: "However, I still have my key from before I was banished. Since I cannot return, I will lend it to you.", getItem: "Layer1Key"},

            // John gets the key
            { image: '', speaker: "Low-Budget Man", text: "I urge you to use it quick or it will melt into the poisonous royalty-free airs of this world." },

            {
                image: '',
                speaker: "Low-Budget Man", 
                text: "So hurry! Approach the gate and use the key!",
                options: [
                    { text: "Open the gate", leadsTo: "1A2A3A4A" },
                    { text: "I'm kinda scared..", leadsTo: "1A2A3A4B"}
                ]
            }
        ]
    },


    {
        id: "1A2A3A4A",
        scenes: [
            // John and Low-Budget man watch the gate open.
            {image:'', speaker: "Narrator", text: "The gate hinges open with a winded creak."},
            {image:'', speaker: "Low-Budget Man", text: "Once more, congratulations."},
            {image:'', speaker: "John", text: "Is that all? I'm quite surprised. And you're saying this will grant me a freedom I've never had?"},
            {image:'', speaker: "Low-Budget Man", text: "Yes. And shall you choose to travel to higher layers, you will gain finer freedoms."},
            {image:'', speaker: "John", text: "Well, maybe I'll try it. This whole layer thing seems pretty exciting compared to my job."},
            {image:'', speaker: "Low-Budget Man", text: "I wish you luck on your adventures. I will be making sure to watch your progress closely"},
            {image:'', speaker: "John", text: "Thanks, dude. Now stop adding extra dialogue to this scene and let me go through."},

            {image:'', speaker: "Narrator", text: "Low-Budget man and John wave goodbye before John faces the border alone."},
            {image:'', speaker: "Narrator", text: "He does not take a deep breath because stock images don't know how to breathe, but chills run up his unmoving spine."},
            {image:'', speaker: "Narrator", text: "Then, at last, he gains the courage and steps through."},

             /* Transition to Layer 1*/
            {image:'', speaker: "Narrator", text: "The gate hinges open with a winded creak.", leadsTo: "L1"},
        ]
    },

    {
        id: "1A2A3A4B",
        scenes: [
            // John and Low-Budget man watch the gate open.
            {image:'', speaker: "John", text: "Dude, I got ants in my pants. I don't think I wanna do this anymore."},
            {image:'', speaker: "Low-Budget Man", text: "What are you doing?! Use it quick, or it will-"},

            // The key turns into a stock image key.
            {image:'', speaker: "Narrator", text: "."},
            {image:'', speaker: "John", text: "..."},
            {image:'', speaker: "Low-Budget Man", text: "..."},
            {image:'', speaker: "John", text: "So, is it possible to unlock the gate with this thing..?"},
            {image:'', speaker: "Low-Budget Man", text: "You're useless."},

            {gameOver: "Don't be so hesitant next time..."}
        ]
    },

    {
        id: "1A2A3B",
        scenes: [
            // Image of an enraged John punching at the camera
            { image: '', speaker: "John", text: "RAAAGH!!!" },

            // Low-Budget man beats him up
            { image: '', speaker: "Narrator", text: "", damage: -1},
            { image: '', speaker: "John", text: "AUUUGHH!!"},
            { image: '', speaker: "Low-Budget Man", text: "Are you a nutcase? You see a man beyond your form, and your primal response is to fight them?" },
            { image: '', speaker: "John", text: "Sorry man. I just do that sometimes it's like a little quirk of mine. I'm like a scorpio or something so it kinda lines up and stuff." },
            { image: '', speaker: "Low-Budget Man", text: "I don't care. Look, you have something to do." },
            { image: '', 
                speaker: "Low-Budget Man", 
                text: "Maybe that beating put some sense into you. Now, will you accept my offer or not?",
                options: [
                    { text: "ig bro", leadsTo: "1A2A3A" },
                    { text: "What a load of blasphemy", leadsTo: "1A2A3C"}
                ] },
        ]
    },

    {
        id: "1A2A3C",
        scenes: [
            { image: '', speaker: "John", text: "Yeah, why don't you become royalty free, will you? Now let me get back to work."},
            // Black screen
            { image: '', speaker: "Narrator", text: "", leadsTo: "1A2B"}
        ]
    },

    {
        id: "1A2B",
        scenes: [
            // Remove Low-Budget Man from view; john and his building
            { image: '', speaker: "Narrator", text: "John ultimately decides to ignore the random guy and goes into his building to work."},
            // John works at building
            { image: '', speaker: "Narrator", text: "In the building, John gets to work at ReStock facilities. He is typing monotonous copyrights for triangle-shaped objects that are passed to him."},
            { image: '', speaker: "Narrator", text: "Then, something strange is passed to him."},

            // Object  - circular charm with a strange design
            { image: '', speaker: "Narrator", text: "A circle? In the ReStock factory? How queer! John has never seen such a thing- this must be inquired about with his supervisor post-haste!"},
            { image: '', speaker: "John", text: "i guess we doin circles now"},
            { image: '', speaker: "John", text: "Wait a minute- there's a written tag on this."},
            { image: '', speaker: "The Tag", text: "Don't deny freedom - "},
        ]
    },

    // Need 1A-2B interactions below.... This'll be strange to code.


    // For now, just do these interactions down here

    {
        id: "1B",
        scenes: [
            { image: 'starting-john-page.jpg', speaker: "Narrator", text: "John decides to wander off today because he decided to feel like a bum specifically today of all times." },

            // John frolicks around in a grass field :sob:
            { image: 'starting-john-page.jpg', speaker: "John", text: "Ha ha ha! I am having so much fun ruining my life!" },
            { image: '', speaker: "Narrator", text: "He skips further into the distance, and further, and further..."},
            { image: '', speaker: "Narrator", text: "Until he comes across something strange."},
            { image: '', speaker: "John", text: "What the-? A white wall? And I can't throw myself past it."},
            { image: '', speaker: "Narrator", text: "This \"Wall\" seems to expand infinitely across the horizon. How strange. Why had no one found this before?"},
            { image: '', 
                speaker: "Narrator", 
                text: "What should John do about this discovery?",
                options: [
                    { text: "Pursue The Secrets", leadsTo: "1B2A" },
                    { text: "Ignore this and continue being mindless", leadsTo: "1B2B"} 
                    /* Uh oh. I just realized I forgot to map out a story for 1B2B completely. I'll do that soon. */
                ] },
        ]
    },

    {
        id: "1B2A",
        scenes: [
            { image: '', speaker: "Narrator", text: "Soon, travelling along the border, John finds a towering gate with a visible lock. It demands a key to pass through."},
            { image: '', speaker: "Narrator", text: "Unfortunately, as one could probably anticipate, John doesn't have this key."},
            { image: '', speaker: "Narrator", text: "Before he can decide on the next course of action, however, he hears someone approaching."},

            // Change image
            { image: '', speaker: "Narrator", text: "Two people, actually... there's another stock guy... and a stick figure?"},
            { image: '', speaker: "John", text: "Who are you guys?"},
            { image: '', speaker: "Stick Figure", text: "It appears there's another man here."},
            { image: '', speaker: "Other Stock Guy", text: "What, was he trying to unlock the gate too?"},
            { image: '', speaker: "John", text: "Unlock the gate? You can do that?"},
            { image: '', speaker: "Other Stock Guy", text: "Woah bud, back off! This gate is MINE to pass, because I..."},

            // he holds up the layer 1 key in his hands
            { image: '', speaker: "Other Stock Guy", text: "Have the key for it in my hands!"},
            { image: '', speaker: "John", text: "Woah. I want that."},

            { image: '', speaker: "Stick Figure", text: "You cannot receive it. I only have one key, and only one person can pass at a time."},
            { image: '', speaker: "John", text: "Serious? I bet you're giving it to the most basic guy ever. His name is probably \"James Stock\" or something."},
            { image: '', speaker: "James Stock", text: "dude how did you know"},
            { image: '', speaker: "John", text: "...dude"},
            { image: '', speaker: "Stick Figure", text: "I wouldn't believe you are creatively named either, though the details of that fact do not matter."},
            { image: '', speaker: "Stick Figure", text: "You have missed the chance. Lest you have a better reason to have the key, this is not your calling."},
            { image: '', speaker: "John", text: "Shoot. I'm named John Stock, so I actually don't have much of a chance here."},
            { image: '', speaker: "John", text: "But look, I don't need to just be unique. I'm sure we can negotiate."},
            { image: '', speaker: "Stick Figure", text: "You have one chance to convince me."},
            { image: '', speaker: "James", text: "You really think you can do anything, huh?"},

            { image: '', 
                speaker: "John", 
                text: "Yeah, I sure can. How about this?",
                options: [
                    { text: "Friendly competition", leadsTo: "1B2A3A" },
                    { text: "Let's Fight, nerd", leadsTo: "1B2A3B"},
                    { text: "Let's share the key!", leadsTo: "1B2A3C"},
                ] },
        ]
    },
    {
        id: "1B2A3A",
        scenes: [
            { image: '', speaker: "James", text: "Competition, eh? You know what, I got an idea..." },
            { image: '', speaker: "James", text: "I'm quite the rock-paper-scissors guy myself. And it's not just skill; I've got a hidden talent. See for yourself, buddy." },
        
            { puzzle: "RockPaperScissors" }
        ]
    },

    // Other dialogue as fit for this puzzle - return to later

    //

    {
        id: "1B2A3B",
        scenes: [
            // The same image
            { image: '', speaker: "John", text: "RAAGH!!!" },

            // Beating up - black screen
            { image: '', speaker: "Narrator", text: "You lunge at the stick figure" },
            { image: '', speaker: "Narrator", text: "That... doesn't go well. He pulls a weapon on you, then James and the Stick Figure beat you until you're unconscious." },
            { image: '', speaker: "Narrator", text: "...Seems like you'll be staying in the hospital for a while. If anyone finds you here, that is." },
        
            { gameOver: "You're way too eager to fight..."}
        ]
    },

    {
        id: "1B2A3C",
        scenes: [
            { image: '', speaker: "James", text: "Ahaha. What a humble request. Why, that makes me feel so humble." },

            { image: '', speaker: "Narrator", text: "James humbly kicks your shins, causing you to fall flat to the ground in pain." },
            { image: '', speaker: "James", text: "Unfortunately, I shall humbly decline your request, for it is clear I am the humbler man here." },
            { image: '', speaker: "Narrator", text: "You helplessly watch in pain as the stick figure and James humbly pass through the gate." },
            { image: '', speaker: "Narrator", text: "The gate closes shut; now, you have no way of getting past there ever, and it's useless to try anything more." },
        
            { gameOver: "I guess you just weren't humble enough."}
        ]
    },

    {
        id: "1C",
        scenes: [
            { image: '', speaker: "John", text: "Eh I can sleep a bit more it's ok." },
            // Black screen
            { image: '', speaker: "Narrator", text: "..." },
            // John gets fired.svg
            { image: '', speaker: "Narrator", text: "John gets fired the next day." },
            { image: '', speaker: "John", text: "Whatever! I hated that job anyways! I can deal with not making any money..." },
            { image: '', speaker: "John", text: "..." },

            {
                image: '',
                speaker: "John",
                text: 'I\'m gonna be homeless in a few days. I need to do something quick. What do I do?!',
                options: [
                    { text: 'Wander aimlessly', leadsTo: "1B" },
                    { text: 'Cry and beg people for money', leadsTo: "1C2B" },
                ]
            }
        ]
    },

    {
        id: "1C2B",
        scenes: [
            // John is begging in a cardboard box with a cup for change
            { image: '', speaker: "John", text: "Spare change..? Anyone..?" },
            { image: '', speaker: "John", text: "Man, why'd I do that... my life kinda sucks now. The extra hours of sleep felt real nice, though." },
            // A shadow moves into frame
            { image: '', speaker: "???", text: "Having a bad day in this world?" },
            { image: '', speaker: "Narrator", text: "A hooded man approaches John." },
            { image: '', speaker: "John", text: "Yeah, I am... got any money?" },
            { image: '', speaker: "???", text: "I have something better. I can offer you freedom from your shackles." },
            { image: '', speaker: "???", text: "You look pathetic right now. It'd be best for you to take my offer." },

            {
                image: '',
                speaker: "Narrator",
                text: 'Listen to him?',
                options: [
                    { text: 'Listen', leadsTo: "1A2A" },
                    { text: 'Let\'s Fight, nerd', leadsTo: "1C2B3B" },
                    { text: 'Get away from me!', leadsTo: '1C2B3C'},
                ]
            }
        ]
    },

    {
        id: "1C2B3B",
        scenes: [
            { image: '', speaker: "Narrator", text: "You must be masochistic. You just made a frail, starving man try to throw hands." },
            { image: '', speaker: "Narrator", text: "No, John does not survive that encounter." },

            { gameOver: "I know life's getting hard, but you don't need to be so aggressive." }
        ]
    },

    {
        id: "1C2B3C",
        scenes: [
            // John is begging in a cardboard box with a cup for change
            { image: '', speaker: "Narrator", text: "John isn't taking this verbal abuse today. He's getting out of there!" },
            { image: '', speaker: "Narrator", text: "" },

            {
                image: '',
                speaker: "Narrator",
                text: 'Listen to him?',
                options: [
                    { text: 'Listen', leadsTo: "1A2A" },
                    { text: 'Let\'s Fight, nerd', leadsTo: "1C2B3B" },
                    { text: 'Get away from me!', leadsTo: '1C2B3C'},
                ]
            }
        ]
    },
]