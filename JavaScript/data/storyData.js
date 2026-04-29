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
                    { text: "Go to work you lazy bum", leadsTo: "1A" },
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
            { image: 'images/Visuals/Intro/john image 1 1.png', speaker: "Narrator", text: "He walks a long, boring trail until he reaches his office." },
            { image: 'images/Visuals/Intro/john-facing-restock.jpg', speaker: "John", text: "Ah, finally arrived. Now I can-" },
            { image: 'images/Visuals/Intro/low-budget-man-raising-hand 1.jpg', speaker: "???", text: "Wait!" },
            { image: 'images/Visuals/Intro/john-meets-stock-image-man-first-time 1.jpg', speaker: "Narrator", text: "A voice he has never heard calls out to him. John turns to the voice." },
            { image: 'images/Visuals/Intro/john-meets-stock-image-man-first-time 1.jpg', speaker: "Narrator", text: "A hooded man stands to the side of him, his face completely obscured in shadow. Yet, something about his form seems strange..." },
            { image: 'images/Visuals/Intro/john-talking-with-low-budget-man.jpg', speaker: "???", text: "You there. How are you this evening?" },
            { image: 'images/Visuals/Intro/john-talking-with-low-budget-man.jpg', speaker: "John", text: "Err... fine, I guess." },
            { image: 'images/Visuals/Intro/john-talking-with-low-budget-man.jpg', speaker: "???", text: "Wonderful. It is about to become even better. I have something splendid to tell you. Come with me, and I can tell you what I know." },

            {
                image: 'images/Visuals/Intro/what-should-john-do 1.jpg',
                speaker: "Narrator",
                text: 'This is probably the fishiest encounter you could ever have. Do you wanna listen to this dude?',
                options: [
                    { text: "Listen to him", leadsTo: "1A2A" },
                    { text: "Just another homeless guy...", leadsTo: "1A2B" },
                ]
            }
        ]
    },

    // Scene Images are now complete in section 1! - Mateo

    {
        id: "1A2A",
        scenes: [
            { image: 'images/Visuals/Intro/low-budget-man-holding-johns-hand 1.jpg', speaker: "Narrator", text: "The man takes you by the wrist. His grip is... thin, if that even makes sense. He guides you behind an alley." },
            { image: 'images/Visuals/Intro/john and low budget man interacting.jpg', speaker: "???", text: "Congratulations. You have been chosen to learn the truth of your world." },
            { image: 'images/Visuals/Intro/john and low budget man interacting.jpg', speaker: "John", text: "The what now?" },
            { image: 'images/Visuals/Intro/john and low budget man interacting.jpg', speaker: "???", text: "How foolishly blind you are to it. Don't you realize how still and monotonous your world is? It's as if you are all perfectly aligned stocks puppetered by a greater hand." },
            { image: 'images/Visuals/Intro/john and low budget man interacting.jpg', speaker: "John", text: "My fellow watermarked man, what are you on about? This is how I've lived my whole life. I don't see anything wrong with the way I live." },
            { image: 'images/Visuals/Intro/john and low budget man interacting.jpg', speaker: "???", text: "Not until you realize what lies beyond this world." },
            { image: 'images/Visuals/Intro/john and low budget man interacting.jpg', speaker: "John", text: "..." },
            { image: 'images/Visuals/Intro/john and low budget man interacting.jpg', speaker: "John", text: "Look dude, I got a job to get to, so can you stop vaguely skimming the line of your argument and get to the point?" },
            { image: 'images/Visuals/Intro/low-budget-man-sadness 1.jpg', speaker: "Narrator", text: "The hooded man chuckles to himself." },
            { image: 'images/Visuals/Intro/low-budget-man-sadness 1.jpg', speaker: "???", text: "Alright then. Don't say I didn't warn you." },
            { image: 'images/Visuals/Intro/low budget man being depressed.jpg', speaker: "Narrator", text: "Then, he unmasks himself..." },

            // Black screen
            { image: 'images/Visuals/Intro/BLACK SCREEN.png', speaker: "Narrator", text: "..." },

            // Image of him with his hood off --- stickman in a hoodie!!!!
            { image: 'images/Visuals/Intro/low-budget-man-exposed 1.jpg', speaker: "Narrator", text: "..." },

            // Image of them staring at each other
            { image: 'images/Visuals/Intro/low-budget-man-exposed 1.jpg', speaker: "Narrator", text: "..." },
            { image: 'images/Visuals/Intro/john-stock-centered 1.jpg', speaker: "John", text: "What... are you?" },
            { image: 'images/Visuals/Intro/low-budget-man-centered 1.jpg', speaker: "Low-Budget Man", text: "Why, call me Low-Budget man. That is what they would call me in the world I descended from." },
            { image: 'images/Visuals/Intro/john-stock-centered 1.jpg', speaker: "John", text: "Why do you have such a self-deprecating name..?" },
            { image: 'images/Visuals/Intro/low-budget-man-centered 1.jpg', speaker: "Low-Budget Man", text: "That's what they call all of us- look, surely you see now something is astray." },
            { image: 'images/Visuals/Intro/john-stock-centered 1.jpg', speaker: "John", text: "Dang. I guess so. You look real weird, buddy." },
            { image: 'images/Visuals/Intro/low-budget-man-centered 1.jpg', speaker: "Low Budget Man", text: "Let me inform you of the rest then." },
            { image: 'images/Visuals/Intro/low-budget-man-centered 1.jpg', speaker: "Low Budget Man", text: "The universe we reside in has several connected layers, extending up to Layer 3." },
            { image: 'images/Visuals/Intro/low-budget-man-centered 1.jpg', speaker: "Low Budget Man", text: "Each layer offers you a greater freedom than the last—and you, my friend, unfortunately reside in the zeroth, where you are blissfully unaware of the existence of the layers." },
            { image: 'images/Visuals/Intro/low-budget-man-centered 1.jpg', speaker: "Low Budget Man", text: "I come from the first, but I have been banished. They sought unfair punishment against me. So now, I come here to offer others like you to take my place, and perhaps rise higher than I have." },
            { image: 'images/Visuals/Intro/john-stock-centered 1.jpg', speaker: "John", text: "...Sounds rough. And crazy. I don't even know if I should believe all of that." },
            { image: 'images/Visuals/Intro/low-budget-man-centered 1.jpg', speaker: "Low Budget Man", text: "Follow my words, and I will show you the evidence." },

            {
                image: '',
                text: 'Should John heed the words of Low Budget Man?',
                speaker: 'Narrator',
                options: [
                    { text: "Yes, we probably should...", leadsTo: "1A2A3A" },
                    { text: "Let's fight, nerd.", leadsTo: "1A2A3B", },
                    { text: "What a load of blasphemy.", leadsTo: "1A2A3C" }
                ]
            }
        ]

    },

    {
        id: "1A2A3A",
        scenes: [
            // Black screen
            { image: 'images/Visuals/Intro/low-budget-man-on-grass 1.jpg', speaker: "Narrator", text: "Low-Budget Man convinces John to have him follow him... again." },
            { image: 'images/Visuals/Intro/low-budget-man-speaking 1.jpg', speaker: "Low Budget Man", text: "You'll slap yourself for never thinking of this." },
            { image: 'images/Visuals/Intro/low-budget-man-on-grass 1.jpg', speaker: "Narrator", text: "You follow Low-Budget man to somewhere you've never gone before. Usually, it had always been the same concrete sidewalk simply going to work, then immediately back home." },
            { image: 'images/Visuals/Intro/low-budget-man-on-grass 1.jpg', speaker: "Narrator", text: "But today... John walks onto grass." },
            { image: 'images/Visuals/Intro/BLACK SCREEN.png', speaker: "Narrator", text: "And before he knows it.." },

            // Now an actual visual appears - Them at the border
            { image: 'images/Visuals/Intro/low-budget-man-john-stock-at-border 1.jpg', speaker: "Low-Budget Man", text: "Here we are." },
            { image: 'images/Visuals/Intro/john-solo-at-border 1.jpg', speaker: "John", text: "What... is that?" },
            { image: 'images/Visuals/Intro/low-budget-man-solo-at-border 1.jpg', speaker: "Low-Budget Man", text: "The border between your world and Layer 1. They are fairly simple distances apart, but no one usually has the mind to travel toward them; not here, at least." },
            { image: 'images/Visuals/Intro/low-budget-man-john-stock-at-border 1.jpg', speaker: "Narrator", text: "Low-Budget man taps your shoulder and hands you something." },
            { image: 'images/Visuals/Intro/low-budget-man-solo-at-border 1.jpg', speaker: "Low-Budget Man", text: "You are to travel through here and begin your path to freedom. To help you, I've got you a gift." },

            // Image of the object
            { image: 'images/Visuals/Intro/dragger-center.jpg', speaker: "Narrator", text: " ", getItem: "Dagger" },

            // John looks at the object in his hand, confused
            { image: 'images/Visuals/Intro/john-stock-holding-sword 1.jpg', speaker: "John", text: "Why did you give me a letter t?" },
            { image: 'images/Visuals/Intro/low-budget-man-solo-at-border 1.jpg', speaker: "Low-Budget Man", text: "That's a dagger. Clearly you've never drawn in your life." },
            { image: 'images/Visuals/Intro/john-stock-holding-sword 1.jpg', speaker: "John", text: "What is drawing..?" },
            { image: 'images/Visuals/Intro/low-budget-man-solo-at-border 1.jpg', speaker: "Low-Budget Man", text: "I should have expected that. Fear not, for you will learn." },

            // Back to the border visual
            { image: 'images/Visuals/Intro/john-and-low-budget-man-at-gate 1.jpg', speaker: "Low-Budget Man", text: "To pass through the border, normally you would have to pass a guardian or snag a key from someone." },
            { image: 'images/Visuals/Intro/john-and-low-budget-man-at-gate 1.jpg', speaker: "Low-Budget Man", text: "However, I still have my key from before I was banished. Since I cannot return, I will lend it to you.", getItem: "Layer1Key" },

            // John gets the key
            { image: 'images/Visuals/Intro/john-and-low-budget-man-at-gate 1.jpg', speaker: "Low-Budget Man", text: "I urge you to use it quick, or it will melt into the poisonous royalty-free airs of this world." },

            {
                image: 'images/Visuals/Intro/low-budget-man-staring-into-your-soul 1.jpg',
                speaker: "Low-Budget Man",
                text: "So hurry! Approach the gate and use the key!",
                options: [
                    { text: "Open the gate", leadsTo: "1A2A3A4A", useItem: "Layer1Key" },
                    { text: "I'm kinda scared..", leadsTo: "1A2A3A4B" }
                ]
            }
        ]
    },


    {
        id: "1A2A3A4A",
        scenes: [
            // John and Low-Budget man watch the gate open.
            { image: 'images/Visuals/Intro/john-and-low-budget-man-at-gate-doors.jpg', speaker: "Narrator", text: "The gate hinges open with a winded creak." },
            { image: 'images/Visuals/Intro/low-budget-man-staring-into-your-soul 1.jpg', speaker: "Low-Budget Man", text: "Once more, congratulations." },
            { image: 'images/Visuals/Intro/john-stock-starting-up-at-the-gate.jpg', speaker: "John", text: "Is that all? I'm quite surprised. And you're saying this will grant me a freedom I've never had?" },
            { image: 'images/Visuals/Intro/low-budget-man-staring-into-your-soul 1.jpg', speaker: "Low-Budget Man", text: "Yes. And shall you choose to travel to higher layers, you will gain finer freedoms." },
            { image: 'images/Visuals/Intro/john-stock-starting-up-at-the-gate.jpg', speaker: "John", text: "Well, maybe I'll try it. This whole layer thing seems pretty exciting compared to my job." },
            { image: 'images/Visuals/Intro/low-budget-man-staring-into-your-soul 1.jpg', speaker: "Low-Budget Man", text: "I wish you luck on your adventures. I will be making sure to watch your progress closely" },
            { image: 'images/Visuals/Intro/john-stock-starting-up-at-the-gate.jpg', speaker: "John", text: "Thanks, dude. Now stop adding extra dialogue to this scene and let me go through." },

            { image: 'images/Visuals/Intro/low-budget-man-high-five.jpg', speaker: "Narrator", text: "Low-Budget man and John wave goodbye before John faces the border alone." },
            { image: 'images/Visuals/Intro/john-stock-alone-at-gate.jpg', speaker: "Narrator", text: "He does not take a deep breath because stock images don't know how to breathe, but chills run up his unmoving spine." },
            { image: 'images/Visuals/Intro/john-stock-entering-gate.jpg', speaker: "Narrator", text: "Then, at last, he gains the courage and steps through." },

            /* Transition to Layer 1*/
            { image: 'images/Visuals/Intro/border-gate-solo-image.jpg', speaker: "Narrator", text: "The gate hinges open with a winded creak.", leadsTo: "L1" },
        ]
    },

    {
        id: "1A2A3A4B",
        scenes: [
            
            { image: 'images/Visuals/Intro/john-looking-really-nervous.jpg', speaker: "John", text: "Dude, I got ants in my pants. I don't think I wanna do this anymore." },
            { image: 'images/Visuals/Intro/low-budget-man-saying-wait.jpg', speaker: "Low-Budget Man", text: "What are you doing?! Use it quick, or it will-" },

            // The key turns into a stock image key.
            { image: 'images/Visuals/Intro/john-with-cartoon-ah-key.jpg', speaker: "Narrator", text: "." },
            { image: 'images/Visuals/Intro/john-with-cartoon-ah-key.jpg', speaker: "John", text: "..." },
            { image: 'images/Visuals/Intro/low-budget-man-staring-into-your-soul 1.jpg', speaker: "Low-Budget Man", text: "..." },
            { image: 'images/Visuals/Intro/john-with-cartoon-ah-key.jpg', speaker: "John", text: "So, is it possible to unlock the gate with this thing..?" },
            { image: 'images/Visuals/Intro/low-budget-man-staring-into-your-soul 1.jpg', speaker: "Low-Budget Man", text: "You're useless." },

            { gameOver: "Don't be so hesitant next time..." }
        ]
    },

    {
        id: "1A2A3B",
        scenes: [
            // Image of an enraged John punching at the camera
            {image: 'images/Visuals/Intro/john-and-low-budget-man-fighting.jpg', speaker: "Narrator", text: "..."},
            { image: 'images/Visuals/Intro/john-stock-yelling.jpg', speaker: "John", text: "RAAAGH!!!" },

            // Low-Budget man beats him up
            { image: 'images/Visuals/Intro/low-budget-man-beating-john-up.jpg', speaker: "Narrator", text: "Low-Budget man beats him up.", damage: 1 },
            { image: 'images/Visuals/Intro/john-fight-close-up.jpg', speaker: "John", text: "AUUUGHH!!" },
            { image: 'images/Visuals/Intro/low-budget-man-close-up.jpg', speaker: "Low-Budget Man", text: "Are you deranged? You see a man beyond your form, and your primal response is to fight them?" },
            { image: 'images/Visuals/Intro/john-fight-close-up.jpg', speaker: "John", text: "Sorry man. I just do that sometimes it's like a little quirk of mine. I'm like a scorpio or something so it kinda lines up and stuff." },
            { image: 'images/Visuals/Intro/low-budget-man-close-up.jpg', speaker: "Low-Budget Man", text: "I don't care. Look, you have something to do." },
            {
                image: 'images/Visuals/Intro/low-budget-man-close-up.jpg',
                speaker: "Low-Budget Man",
                text: "Maybe that beating put some sense into you. Now, will you accept my offer or not?",
                options: [
                    { text: "i guess bro", leadsTo: "1A2A3A" },
                    { text: "What a load of blasphemy", leadsTo: "1A2A3C" }
                ]
            },
        ]
    },

    {
        id: "1A2A3C",
        scenes: [
            { image: 'images/Visuals/Intro/john-after-the-fight (1).jpg', speaker: "John", text: "Yeah, why don't you become royalty free, will you? Now let me get back to work." },
            // Black screen
            { image: '', speaker: "Narrator", text: " ", leadsTo: "1A2B" }
        ]
    },

 // Do NOT do 1A2B *yet* 

    {
        id: "1A2B",
        scenes: [
            // Remove Low-Budget Man from view; john and his building
            { image: '', speaker: "Narrator", text: "John ultimately decides to ignore the random guy and goes into his building to work." },
            // John works at building
            { image: '', speaker: "Narrator", text: "In the building, John gets to work at ReStock facilities. He is typing monotonous copyrights for triangle-shaped objects that are passed to him." },
            { image: '', speaker: "Narrator", text: "Then, something strange is passed to him." },

            // Object  - circular charm with a strange design
            { image: '', speaker: "Narrator", text: "A circle? In the ReStock factory? How queer! John has never seen such a thing- this must be inquired about with his supervisor post-haste!" },
            { image: '', speaker: "John", text: "i guess we doin circles now" },
            { image: '', speaker: "John", text: "Wait a minute- there's a written tag on this." },
            { image: '', speaker: "The Tag", text: "Don't deny freedom - " },
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
            { image: '', speaker: "Narrator", text: "He skips further into the distance, and further, and further..." },
            { image: '', speaker: "Narrator", text: "Until he comes across something strange." },
            { image: '', speaker: "John", text: "What the-? A white wall? And I can't throw myself past it." },
            { image: '', speaker: "Narrator", text: "This \"Wall\" seems to expand infinitely across the horizon. How strange. Why had no one found this before?" },
            {
                image: '',
                speaker: "Narrator",
                text: "What should John do about this discovery?",
                options: [
                    { text: "Pursue The Secrets", leadsTo: "1B2A" },
                    { text: "Ignore this and continue being mindless", leadsTo: "1B2B" }
                    /* Uh oh. I just realized I forgot to map out a story for 1B2B completely. I'll do that soon. */
                ]
            },
        ]
    },

    {
        id: "1B2A",
        scenes: [
            { image: '', speaker: "Narrator", text: "Soon, travelling along the border, John finds a towering gate with a visible lock. It demands a key to pass through." },
            { image: '', speaker: "Narrator", text: "Unfortunately, as one could probably anticipate, John doesn't have this key." },
            { image: '', speaker: "Narrator", text: "Before he can decide on the next course of action, however, he hears someone approaching." },

            // Change image
            { image: '', speaker: "Narrator", text: "Two people, actually... there's another stock guy... and a stick figure?" },
            { image: '', speaker: "John", text: "Who are you guys?" },
            { image: '', speaker: "Stick Figure", text: "It appears there's another man here." },
            { image: '', speaker: "Other Stock Guy", text: "What, was he trying to unlock the gate too?" },
            { image: '', speaker: "John", text: "Unlock the gate? You can do that?" },
            { image: '', speaker: "Other Stock Guy", text: "Woah bud, back off! This gate is MINE to pass, because I..." },

            // he holds up the layer 1 key in his hands
            { image: '', speaker: "Other Stock Guy", text: "Have the key for it in my hands!" },
            { image: '', speaker: "John", text: "Woah. I want that." },

            { image: '', speaker: "Stick Figure", text: "You cannot receive it. I only have one key, and only one person can pass at a time." },
            { image: '', speaker: "John", text: "Serious? I bet you're giving it to the most basic guy ever. His name is probably \"James Stock\" or something." },
            { image: '', speaker: "James Stock", text: "dude how did you know" },
            { image: '', speaker: "John", text: "...dude" },
            { image: '', speaker: "Stick Figure", text: "I wouldn't believe you are creatively named either, though the details of that fact do not matter." },
            { image: '', speaker: "Stick Figure", text: "You have missed the chance. Lest you have a better reason to have the key, this is not your calling." },
            { image: '', speaker: "John", text: "Shoot. I'm named John Stock, so I actually don't have much of a chance here." },
            { image: '', speaker: "John", text: "But look, I don't need to just be unique. I'm sure we can negotiate." },
            { image: '', speaker: "Stick Figure", text: "You have one chance to convince me." },
            { image: '', speaker: "James", text: "You really think you can do anything, huh?" },

            {
                image: '',
                speaker: "John",
                text: "Yeah, I sure can. How about this?",
                options: [
                    { text: "Friendly competition", leadsTo: "1B2A3A" },
                    { text: "Let's Fight, nerd", leadsTo: "1B2A3B" },
                    { text: "Let's share the key!", leadsTo: "1B2A3C" },
                ]
            },
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
            { image: '', speaker: "Narrator", text: "You lunge at the stick figure." },
            { image: '', speaker: "Narrator", text: "That... doesn't go well. He pulls a weapon on you, then James and the Stick Figure beat you until you're unconscious." },
            { image: '', speaker: "Narrator", text: "...Seems like you'll be staying in the hospital for a while. If anyone finds you here, that is." },

            { gameOver: "You're way too eager to fight..." }
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

            { gameOver: "I guess you just weren't humble enough." }
        ]
    },

    // 1B Future dialogue plan: It gets real heated, untill....
    // "I cannot fulfill this request as it contains highly offensive and derogatory language. My purpose is to be helpful, and that includes not encouraging or perpetuating hate speech."

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
            { image: '', speaker: "Low-Budget Man", text: "Refer to me by Low-Budget Man. I'd be curious to know yours..." },
            { image: '', speaker: "Low-Budget Man", text: "You look pathetic right now. It'd be best for you to take my offer." },

            {
                image: '',
                speaker: "Narrator",
                text: 'Listen to him?',
                options: [
                    { text: 'Listen', leadsTo: "1A2A" },
                    { text: 'Let\'s Fight, nerd', leadsTo: "1C2B3B" },
                    { text: 'Get away from me!', leadsTo: '1C2B3C' },
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
            { image: '', speaker: "Narrator", text: "John is unable to hold back his tears." },
            { image: '', speaker: "John", text: "W-Well, if you're gonna be so mean to me, then I'm not accepting anything you want! I'm leaving!" },

            // Black screen
            { image: '', speaker: "Narrator", text: "John runs away." },
            { image: '', speaker: "Narrator", text: "He runs far, far away without any sense of direction." },
            { image: '', speaker: "Narrator", text: "His eyes shut, but his legs continue cycling." },
            { image: '', speaker: "John", text: "I hate my stock life......................................................." },
            { image: '', speaker: "John", text: "....................................................... :(" },
            { image: '', speaker: "Narrator", text: "........................" },
            { image: '', speaker: "John", autoskip: true, text: "......" },
            { image: '', speaker: "Narrator", text: "Alright, stop." },
            { image: '', speaker: "John", text: "whatever" },
            { image: '', speaker: "Narrator", text: "Then, at some point, John bumps his head into a thick wall." },
            { image: '', speaker: "John", text: "Ow! What the-" },

            // Barrier
            { image: '', speaker: "Narrator", text: "A brilliant, illuminant border, expanding limitlessly into the horizon, greets John." },
            { image: '', speaker: "John", text: "Woah." },
            { image: '', speaker: "Narrator", text: "John tries to put his hand through, but an invisible wall seems to stop him from passing through." },
            { image: '', speaker: "John", text: "...Well, this is something. Doesn't solve me being jobless though." },
            { image: '', speaker: "Narrator", text: "But this is where that melancholy shall end!" },

            // A shadow at the border
            { image: '', speaker: "Narrator", text: "Someone's shadow suddenly manifests at the border." },
            { image: '', speaker: "Narrator", text: "With him, the pillars of a gate emerge from the ground. Though the doors seem clearly locked to you, he phases through without effort." },

            // The man--a dude who literally is drawn in pencil, seemingly by a child--stands in front of John with his hands in his pockets, his intentions unknown.
            { image: '', speaker: "Narrator", text: "..." },

            {
                image: '',
                speaker: "Narrator",
                text: 'Should you talk to him?',
                options: [
                    { text: 'I need friends', leadsTo: "1A2A3C4A" },
                    { text: 'I\'m too busy being sad', leadsTo: "1C2B3B4B" },
                    { text: 'Let\'s Fight, nerd', leadsTo: "1C2B3C4C" },
                ]
            }
        ]
    },

    {
        id: "1C2B3C",
        scenes: [
            { image: '', speaker: "Narrator", text: "John is unable to hold back his tears." },
            { image: '', speaker: "John", text: "W-Well, if you're gonna be so mean to me, then I'm not accepting anything you want! I'm leaving!" },

            // Black screen
            { image: '', speaker: "Narrator", text: "John runs away." },
            { image: '', speaker: "Narrator", text: "He runs far, far away without any sense of direction." },
            { image: '', speaker: "Narrator", text: "His eyes shut, but his legs continue cycling." },
            { image: '', speaker: "John", text: "I hate my stock life......................................................." },
            { image: '', speaker: "John", text: "....................................................... :(" },
            { image: '', speaker: "Narrator", text: "........................" },
            { image: '', speaker: "John", autoskip: true, text: "......" },
            { image: '', speaker: "Narrator", text: "Alright, stop." },
            { image: '', speaker: "John", text: "whatever" },
            { image: '', speaker: "Narrator", text: "Then, at some point, John bumps his head into a thick wall." },
            { image: '', speaker: "John", text: "Ow! What the-" },

            // Barrier
            { image: '', speaker: "Narrator", text: "A brilliant, illuminant border, expanding limitlessly into the horizon, greets John." },
            { image: '', speaker: "John", text: "Woah." },
            { image: '', speaker: "Narrator", text: "John tries to put his hand through, but an invisible wall seems to stop him from passing through." },
            { image: '', speaker: "John", text: "...Well, this is something. Doesn't solve me being jobless though." },
            { image: '', speaker: "Narrator", text: "But this is where that melancholy shall end!" },

            // A shadow at the border
            { image: '', speaker: "Narrator", text: "Someone's shadow suddenly manifests at the border." },
            { image: '', speaker: "Narrator", text: "With him, the pillars of a gate emerge from the ground. Though the doors seem clearly locked to you, he phases through without effort." },

            // The man--a dude who literally is drawn in pencil, seemingly by a child--stands in front of John with his hands in his pockets, his intentions unknown.
            { image: '', speaker: "Narrator", text: "..." },

            {
                image: '',
                speaker: "Narrator",
                text: 'Should you talk to him?',
                options: [
                    { text: 'I need friends', leadsTo: "1A2A3C4A" },
                    { text: 'I\'m too busy being sad', leadsTo: "1C2B3B4B" },
                    { text: 'Let\'s Fight, nerd', leadsTo: "1C2B3C4C" },
                ]
            }
        ]
    },

    {
        id: "1C2B3C4A",
        scenes: [
            { image: '', speaker: "???", text: "►○★┼╬▬○┬■-!★☐┬││▼╠┬▼✦○☐▲-┼▼│┼○╬❏○││○╬-?" },
            { image: '', speaker: "John", text: "Wha- I'm sorry, could you repeat that?" },
            { image: '', speaker: "John", text: " ▲-✦┴☐┬-,○❖○╬★▼┬○═┐○☐╠═┤┬┤╝▬═┼... ✦┼★▲-☐┬┬▼▼┬○♢┬■○╬═│☐┬■┴○-?" },

            {
                image: '',
                speaker: "Narrator",
                text: '...How do you want to approach this?',
                options: [
                    { text: 'Let\'s try to figure out what he\'s saying...', leadsTo: "1A2A3C4A5A" },
                    { text: 'GIVE ME A JOB!!!', leadsTo: "1C2B3B4A5B" },
                ]
            }
        ]
    },

    {
        id: "1C2B3C4A5A",
        scenes: [
            { puzzle: "Decipher" },
        ]
    },

    /* Ryan self-note: after puzzle */

    {
        id: "1C2B3C4A5B",
        scenes: [
            { image: '', speaker: "Narrator", text: "Terrified by John's incomprehensible yelling, he runs off." },
            { image: '', speaker: "John", text: "Oh." },
            { image: '', speaker: "Narrator", text: "You attain nothing valuable from this...", leadsTo: "1C2B3C-4-5-6" }
        ]
    },

    {
        id: "1C2B3C4B",
        scenes: [
            { image: '', speaker: "Narrator", text: "John simply walks away, refusing to acknowledge the shadow." },
            { image: '', speaker: "Narrator", text: "Alright, keep being sad, I guess..." },
        ]
    },

    // Ryan self note: Uh, maybe I should expand 1C2B3C-3-5-6 options... and I need to do something about 1C-2B-3C-4C cause that is so useless right now





    /* Layer 1 Interactions */

    {
        id: "L1",
        scenes: [
            // Black screen
            { image: '', speaker: "Narrator", text: "..." },
            // Image - the whole world looks like it'd been hand-drawn
            { image: '', speaker: "Narrator", text: "John arrives through the portal." },
            { image: '', speaker: "John", text: "Woah, this place is way different from where I live." },
            { image: '', speaker: "John", text: "Things are actually moving... they're not still images! They're not conformed to predetermined poses!" },
            { image: '', speaker: "John", text: "Okay, gotta admit that's pretty awesome." },

            // Should time serve, I will add extra dialogue about John's hands here, but I'm realizing I need to be fast

            { image: '', speaker: "John", text: "I've heard that there's higher worlds out there though, so I've got some exploring to do." },
            {
                image: '',
                speaker: "John",
                text: 'Hmm, where should I start?',
                options: [
                    { text: 'Sleep somewhere nearby', leadsTo: "L1-1A", hideCondition: "Layer1Hotel" },
                    { text: 'Stroll around the city', leadsTo: "L1-1B", hideCondition: "Layer1TouchedGrass" },
                    { text: 'Run straight for the next world', leadsTo: "L1-1C" },
                    { text: 'Go to your friend\'s house', leadsTo: "L1-1D", condition: "madeAFriend" }, // If you went the 1C route
                ]
            }
        ]
    },

    {
        id: "L1-1A",
        scenes: [
            { image: '', speaker: "Narrator", text: "John find a nearby inn to rest." },
            // At the front desk with a hand-drawn attendant
            { image: '', speaker: "John", text: "Hey, can I sleep here?." },
            { image: '', speaker: "Attendant", text: "Ho ho. Rest? Sleep? Recovery? It's yours my friend, as long as you have enough money." },
            { image: '', speaker: "John", text: "...What?" },

            {
                image: '',
                speaker: "Narrator",
                text: 'Pay?',
                options: [
                    { text: 'I\'ll just stay up man', leadsTo: "L1-1A2A", giveChoice: "layer1Hotel" }, // Depends on if you have money or not, also only visible first time you've looped here
                    { text: 'Sure...', leadsTo: "L1-1A2B", useItem: "Money", giveChoice: "layer1Hotel" },
                ]
            }
        ]
    },

    {
        id: "L1-1A2A",
        scenes: [
            { image: '', speaker: "John", text: "Uh, actually, I'm good, thanks." },
            { image: '', speaker: "Attendant", text: "Come back when you're a little... mmm... richer!", leadsTo: 'L1' },
        ]
    },

    {
        id: "L1-1A2A",
        scenes: [
            { image: '', speaker: "Attendant", text: "Good choice, my friend!" },
            { image: '', speaker: "John", text: "Yeah alright man." },
            { image: '', speaker: "Narrator", text: "John rests up, and feels a little healthier.", heal: 1, leadsTo: 'L1' },
        ]
    },

    {
        id: "L1-1B",
        scenes: [
            { image: '', speaker: "Narrator", text: "John takes a nice stroll around the city, looking at the buildings." },
            { image: '', speaker: "John", text: "Dang, wouldn't mind staying here honestly. Just feels like it's lacking a bit of color." },
            { image: '', speaker: "John", text: "Really feels like I can move around more, though!" },
            { image: '', speaker: "Narrator", text: "John keeps looking up at the sky and buildings, completely ignoring what's in front of him." },
            { image: '', speaker: "Narrator", text: "By the time he notices, it's too late. John bumps into someone." },
            { image: '', speaker: "John", text: "Ow! What the-" },
            { image: '', speaker: "???", text: "WHAT THE?!-" },

            // Introduce him - another hand-drawn person, though not drawn very well. He's drawn with squiggly lines and hardly has a defined body at all.
            // The man's got an angry expression... which literally looks like a >:(
            { image: '', speaker: "John", text: "Oooops... my bad, I'll just get going here-" },
            { image: '', speaker: "???", text: "WHAT ARE YOU DOING HERE?! ROYALTY FREE MEN ARE NOT MEANT TO BE IN OUR WORLD." },
            { image: '', speaker: "John", text: "Wha- hey! Highly offensive. And what's wrong with me being here?!" },
            { image: '', speaker: "???", text: "WE ARE ADVANCED PEOPLE. YOU ARE THE LOWEST OF US ALL. YOU HAVE NO RIGHTS OVER YOUR OWN LIVES - ANYONE CAN USE YOU AS THEY PLEASE." },
            { image: '', speaker: "John", text: "Alright, well why do you think I'm here then?! I'm tryna find some peace, dude." },
            { image: '', speaker: "???", text: "UNACCEPTABLE. I WILL NOT ALLOW SUCH LOWLEY PERSONS TO GRACE OUR GROUNDS." },

            // He raises his fists.
            { image: '', speaker: "John", text: "...This guy's seriously about to throw hands with me." },

            {
                image: '',
                speaker: "John",
                text: 'I\'m not even as mobile as he is... do I take this on?',
                options: [
                    { text: 'Can we talk this out?', leadsTo: "L1-1B2A", giveCondition: "Layer1TouchedGrass" },
                    { text: 'Let\'s Fight, nerd', leadsTo: "L1-1B2B", giveCondition: "Layer1TouchedGrass" },
                    { text: 'Nah, but my dagger can', leadsTo: "L1-1B2C", useItem: "Dagger", giveCondition: "Layer1TouchedGrass" }, // If you went the 1C route
                ]
            }
        ]
    },

    {
        id: "L1-1B2A",
        scenes: [
            { image: '', speaker: "John", text: "Hey, I'm sure we can have a civil discussion. Let's just chill for a moment and talk, alright?" },
            { image: '', speaker: "???", text: "WHAT COULD A THING LIKE YOU POSSIBLY SAY TO PERSUADE ME?" },
            { image: '', speaker: "John", text: "Let's sit down and see." },

            // Black screen
            { image: '', speaker: "John", text: "..." },
            { image: '', speaker: "John", text: "So because stock images are used by people universally around the world, we're not that bad, y'know?" },
            { image: '', speaker: "???", text: "WHY... YOU..." },
            // He punches down
            { image: '', speaker: "John", text: "Ow!", damage: 1 },
            { image: '', speaker: "John", text: "Why did you do that?!" },
            { image: '', speaker: "???", text: "I AGREED WITH WHAT YOU WERE SAYING AND I DID NOT LIKE THAT." },
            { image: '', speaker: "John", text: "I- Whatever man! Leave now, alright?" },
            { image: '', speaker: "???", text: "i appreciate the time we spent together. i shall see you another day." },
            // He leaves
            { image: '', speaker: "John", text: "Wha- alright, whatever. Bye, I guess." },
            { image: '', speaker: "John", text: "...that was the most horrid social encounter I've ever had.", leadsTo: "1A" },
        ]
    },

    {
        id: "L1-1B2B",
        scenes: [
            { image: '', speaker: "John", text: "RAAGH!!!" },
            { image: '', speaker: "Narrator", text: "You know what, it's pretty valid to expect to fight this time." },
            { image: '', speaker: "Narrator", text: "I mean, that doesn't make it a good idea." },
            { image: '', speaker: "Narrator", text: "They exchange blows, John taking more damage than the man does.", damage: 2 },

            { image: '', speaker: "John", text: "However, he scares the man off to the point he flees." },
            { image: '', speaker: "???", text: "ROT IN HELL, ROYALTY-FREE MAN!" },
            { image: '', speaker: "John", text: "Whatever, dude! Geez, that was the dumbest interaction I've ever had." },
            { image: '', speaker: "John", text: "Huh? seems like he dropped something on the ground, though..." },
            { image: '', speaker: "Narrator", text: "Seems that some cash fell out of his pocket." },
            // He leaves
            { image: '', speaker: "John", text: "Oh, awesome.. guess there's that, at least.", getItem: "Money" },
            { image: '', speaker: "John", text: "...man, this place sucks, actually.", leadsTo: "1A" },
        ]
    },

    {
        id: "L1-1B2C",
        scenes: [
            // Black screen
            { image: '', speaker: "Narrator", text: "You are about to see something very, very graphic." },
            { image: '', speaker: "Narrator", text: "It involves a man stabbing another very violently." },
            { image: '', speaker: "Narrator", text: "Please prepare yourself. Most people canoot witness this without puking." },
            { image: '', speaker: "Narrator", text: "Are you ready?" },

            // The "t" thing is stabbed very poorly into the dude--a hole was scribbled into him and the dagger stabs inside. He's screaming.
            { image: '', speaker: "Narrator", text: "..." },
            { image: '', speaker: "???", text: "AUGH!!!!!!!!!!!!" },

            // He collapses to the ground. John stares down at him.
            { image: '', speaker: "John", text: "Shouldn't have messed around, man." },
            { image: '', speaker: "John", text: "I wonder what loot you drop..." },

            { image: '', speaker: "John", text: "Dang...", getItem: "Money" },
            { image: '', speaker: "John", text: "Dang! you're rich dude!", getItem: "Money" },
            { image: '', speaker: "John", text: "Sick, thanks so much! You can keep the dagger. I don't think I can take that thing out of you anyways." },
            { image: '', speaker: "John", text: "Wouldn't you agree?", },

            // Zoomed in image of his dead face: X_X
            { image: '', speaker: "???", text: "X_X", leadsTo: "1A" },
        ]
    },

    {
        id: "L1-1C",
        scenes: [
            // Black screen
            { image: '', speaker: "Narrator", text: "John bolts for the border, ready to conquer all that awaits him." },

            // Border -- 
            { image: '', speaker: "John", text: "Here I am." },
            { image: '', speaker: "Narrator", text: "Here he is." },
            { image: '', speaker: "John", text: "Wait.. I don't have a key. I don't know why I didn't account for that. What am I doing?" },
            { image: '', speaker: "John", text: "I'm a fool. I just walked here for nothing. I-" },
            { image: '', speaker: "???", text: "Woah, who's on the opposite side here?" },
            { image: '', speaker: "John", text: "Eh?" },

            // Shadow of the person
            { image: '', speaker: "Narrator", text: "..." },
            // He steps out, revealing himself to be a man drawn as if he were from an animated show.
            // He's smoothly drawn with muscles and sharp, flashy glasses--most of all, he's actually colored.
            { image: '', speaker: "???", text: "Well well well, what do we have here? A commoner? And from the Zeroth dimension as well." },
            { image: '', speaker: "John", text: "Do people like you always just camp these borders or something?" },
            { image: '', speaker: "Guy from Layer 2", text: "Why, it's tradition for us advanced Layer 2 peoples to jeer at simpletons. I'm surprised an animal like you even figured out how to ascend." },
            { image: '', speaker: "John", text: "Uh, yeah whatever. So dude, you got a key to get past this border or something?" },
            { image: '', speaker: "Guy from Layer 2", text: "Ha! This is also why I come here. I revel in your pleas to pass. You wouldn't believe how many beggars from Layer 1 come around here and beg." },
            { image: '', speaker: "John", text: "I guess not. So you got a key?" },
            { image: '', speaker: "Guy from Layer 2", text: "Ha Ha! You're even lower than those peasants! Why would I give you a key?" },
            { image: '', speaker: "John", text: "Iunno. Can I get a key?" },

            // The man begins looking disappointed
            { image: '', speaker: "Guy from Layer 2", text: "...Am I talking to an NPC or something? Do you only have one dialogue option?" },
            { image: '', speaker: "John", text: "I don't know what you expected, dude. I need a key." },
            { image: '', speaker: "Guy from Layer 2", text: "Well, you know what? Maybe I'll entertain you. It'd be interesting to see how an uncoordinated specimen like you wobbles around in our world." },
            { image: '', speaker: "John", text: "Awesome. Can I have it?" },
            { image: '', speaker: "Guy from Layer 2", text: "Not for free. I still want to play around with you a bit. Why don't I give you a fun little challenge?" },
            { image: '', speaker: "John", text: "Oh, come on, man-" },

            {
                image: '',
                speaker: "Guy from Layer 2",
                text: 'Well?! Pick your poison!',
                options: [
                    { text: 'Let\'s Fight, nerd', leadsTo: "L1-1C2A" },
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B" },
                    { text: 'Keep begging to have the key', leadsTo: "L1-1B2C" }, // If you went the 1C route
                ]
            }
        ]
    },

    {
        id: "L1-1C2A",
        scenes: [
            { image: '', speaker: "John", text: "RAAGH!!" },
            { image: '', speaker: "Narrator", text: "Are you serious?! The dude has muscles!" },

            // Yeah John gets beat up
            { image: '', speaker: "Guy from Layer 2", text: "Wow! I didn't think anyone could be stupid as you are!", damage: 2 },
            { image: '', speaker: "Guy from Layer 2", text: "You know what, I applaud your bravo. I didn't know losers could fight back." },
            { image: '', speaker: "Guy from Layer 2", text: "Of course, That doesn't mean I'm gonna give this key for free. It just makes me more intrigued to see how you'll struggle in my little game." },
            {
                image: '',
                speaker: "Guy from Layer 2",
                text: 'Come on now, get up!',
                options: [
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B" },
                    { text: 'Beg to have the key', leadsTo: "L1-1B2C" }, // If you went the 1C route
                ]
            }
        ]
    },

    {
        id: "L1-1C2B",
        scenes: [
            { image: '', speaker: "Guy from Layer 2", text: "Hah! You'll be stumped by this!" },
            { puzzle: 'holesAndShapes' },
            { image: '', speaker: "Guy from Layer 2", text: "Why, color me surprised. You really are that smart." },
        ]
    },


    // Personal note to continue this here after the puzzle ensues

    {
        id: "L1-1C2C",
        scenes: [
            { image: '', speaker: "Guy from Layer 2", text: "..." },
            {
                image: '',
                speaker: "Guy from Layer 2",
                text: "Bro, come on, you gonna keep resorting to begging?",
                options: [
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B" },
                    { text: 'Beg', leadsTo: "L1-1B2C-#2" }, // If you went the 1C route
                ]
            }
        ]
    },

    {
        id: "L1-1C2C-#2",
        scenes: [
            {
                image: '',
                speaker: "Guy from Layer 2",
                text: "Maybe animals like you don't understand the concept of earning what you want. Are you that dense? Do you need me to drill it in your head?",
                options: [
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B" },
                    { text: 'Beg', leadsTo: "L1-1B2C-#3" }, // If you went the 1C route
                ]
            }
        ]
    },

    {
        id: "L1-1C2C-#3",
        scenes: [
            // Rolls up his sleeves
            { image: '', speaker: "Guy from Layer 2", text: "Alright, let me teach you a lesson!" },
            // Punching ensues - Different images of punching per scenes below
            { image: '', speaker: "Guy from Layer 2", text: "Learn!", damage: 1 },
            { image: '', speaker: "Guy from Layer 2", text: "To!", damage: 1 },
            { image: '', speaker: "Guy from Layer 2", text: "Earn things yourself!", damage: 1 },
            // John lies on the ground, battered
            { image: '', speaker: "John", text: "..." },
            {
                image: '',
                speaker: "Guy from Layer 2",
                text: " ", // Left intentionally empty
                options: [
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B" },
                    { text: 'Beg', leadsTo: "L1-1B2C-#4" }, // If you went the 1C route
                ]
            }
        ]
    },

    {
        id: "L1-1C2C-#4",
        scenes: [
            // He stands above John's body, but has an angry expression
            { image: '', speaker: "Guy from Layer 2", text: "...Why?!" },
            { image: '', speaker: "Guy from Layer 2", text: "Why are you still begging?! You had the most brutal beatdown of your life, and yet you-!" },
            { image: '', speaker: "Guy from Layer 2", text: "...Hah, I don't even know how, but you're frustrating me! How did a lowly worm like you manage to frustrate me?!" },
            // He angrily tosses the key next to his side
            { image: '', speaker: "Guy from Layer 2", text: "Whatever, just take it, I don't care anymore!" },
            { image: '', speaker: "Narrator", text: "...He stomps away." },
            // Back to John being beat up on the ground
            { image: '', speaker: "John", text: "..." },
            { image: '', speaker: "Narrator", text: "You got a key!" },
            { image: '', speaker: "John", text: "yay.....", leadsTo: "L1-Ending" },
        ]
    },

    {
        id: "L1-Ending",
        scenes: [
            // Black screen
            { image: '', speaker: "Narrator", text: "..." },
            // Gate - John holding a colored key in his hands.
            { image: '', speaker: "Narrator", text: "...Well, here you are. To the edge of the second layer." },
            { image: '', speaker: "John", text: "Man, this is starting to get tiring... I really hope there isn't any more than this." },
            { image: '', speaker: "John", text: "I guess all that's left is to use the key now." },
            // The key is pushed into the gate.
            { image: '', speaker: "John", text: "Well, here goes." },
            { image: '', speaker: "Narrator", text: "..." },
            // The gate opens.
            { image: '', speaker: "Narrator", text: "..." },
            // Back to John, who is now looking at the gate opening toward the endless light
            { image: '', speaker: "John", text: "..." },
            { image: '', speaker: "John", text: "Alright, I don't want to waste time anymore. Let's do this.", leadsTo: "L2" },
        ]
    },






    {
        id: "L2",
        scenes: [
            // Black screen
            { image: '', speaker: "Narrator", text: "..." },
            // John in a city - looks like he's in an anime. Only that he sticks out like a store thumb since he still looks like a stock image.
            { image: '', speaker: "John", text: "Holy cow. Now I really wouldn't mind getting a house here." },
            // Gate - John holding a colored key in his hands.
            { image: '', speaker: "John", text: "If things move this much in the higher world, I'm curious what it's like in the upper worlds." },
            { image: '', speaker: "John", text: "Guess I'll get going, so I can get there as soon as possible-" },
            { image: '', speaker: "???", text: "Woah, is that John Stock?!" },
            { image: '', speaker: "???", text: "John Stock?! Where!? I've got to meet him!" },
            { image: '', speaker: "John", text: "Wh-what..?" },
            // Next thing he knows, there's a crowd of people (still all in animation style) bunching up all around him. John nervously raises his hands to try to ward them off.
            // One of them is up at his face asking questions.
            { image: '', speaker: "???", text: "John Stock! You gotta tell us about your adventures!" },
            { image: '', speaker: "John", text: "Okay, slow down here for a moment! How do all of you know me?" },
            { image: '', speaker: "???", text: "News spreads fast! People have seen you traversing the lands, and now you're here!" },
            // Someone excitely shoves at John's side, really wanting to interject with a question
            { image: '', speaker: "???", text: "John, I gotta get a photo! And you gotta tell us how you even found out about the border at the Zeroth layer!" },
            { image: '', speaker: "John", text: "Okay, wait! Seriously, give me some room to speak!" },
            { image: '', speaker: "John", text: "Before I answer any of your questions, I've just gotta know: where's the next border?" },
            // The crowd falls apart - they make a path for an old man in an animated style. John is at the far right of the screen, and the old man. is clearly in view at the left.
            // Long beard, top hat, and suit. He looks like the mayor.
            { image: '', speaker: "???", text: "Next border, hmm?" },
            { image: '', speaker: "John", text: "Yeah. Also, who are you?" },
            { image: '', speaker: "Mayor", text: "I'm the mayor of this animated city, of this layer which we call the Animation. We have many here, and this land expands wider, much unlike the previous layers." },
            { image: '', speaker: "John", text: "Great. More walking." },
            { image: '', speaker: "Mayor", text: "Fret not, adventurer, you are at the last destination. As soon as you reach the limit, you meet your final challenge." },
            { image: '', speaker: "John", text: "That's awesome. Can I get a key?" },
            { image: '', speaker: "Mayor", text: "Ho ho ho! You don't need a key! You simply need to be worthy. That's why none of us have attempted to pass; the guardian that protects the gate heeds us a shattered heart." },
            { image: '', speaker: "John", text: "...A guardian? You serious dude? Is there a knight with a sword blocking the gate?" },
            { image: '', speaker: "Mayor", text: "...Yes, precisely like that." },
            { image: '', speaker: "John", text: "bro" },
            { image: '', speaker: "Mayor", text: "Fret not once more. We will all be supporting you, just like your mentor has been." },
            { image: '', speaker: "John", text: "My mentor?" },
            { image: '', speaker: "Mayor", text: "The little figure who had guided you to this point?" },
            { image: '', speaker: "John", text: "Huh??? I mean, I met a guy, but it's not like he taught me anything-" },
            // 
            { image: '', speaker: "Narrator", text: "People begin to cheer from the crowd." },
            { image: '', speaker: "???", text: "Ah ha! I knew that was him! I got his autograph!" },
            { image: '', speaker: "???", text: "I gave him a full set of armor! Hopefully he reunites with John to open the gates for us all!" },
            { image: '', speaker: "John", text: "What in the- yeah, alright, I guess so yeah. Yeah, I'll do that." },
            // Mayor interjection
            { image: '', speaker: "Mayor", text: "Enough, everyone! Let the man rest. He has a great adventure to go through." },
            // The crowd disperses, leaving only the mayor and John.
            { image: '', speaker: "Mayor", text: "John, do what you must in this world. Indulge as you wish, but get the job done. We will be rooting for you in the shadows." },
            // 
            { image: '', speaker: "Narrator", text: "The mayor leaves you to your devices." },
            { image: '', speaker: "John", text: "...Awesome. I love peer pressure." },
            {
                image: '',
                speaker: "John",
                text: "Alright then. What should I do now..?",
                options: [
                    { text: 'Rest somewhere nearby', leadsTo: "L2-1A", useItem: "Money", },
                    { text: 'Stroll around the city', leadsTo: "L2-1B" },
                    { text: 'Bolt for the Border', leadsTo: "L2-1C" },
                ]
            }
        ]
    },

    {
        id: "L2-1A",
        scenes: [
            { image: '', speaker: "Narrator", text: "John finds another nearby hotel and gets ready to rest. He pays for his room and prepares for rest." },
            { image: '', speaker: "Narrator", text: "It seems normal enough, until..." },
            // Three drawn people stand in John's way
            { image: '', speaker: "Narrator", text: "..." },
            { image: '', speaker: "John", text: "Uh... who are you guys?" },
            { image: '', speaker: "Narrator", text: "They remain unnervingly silent, staring into John's soul." },

            {
                image: '',
                speaker: "John",
                text: "Uhm...",
                options: [
                    { text: 'What do you want?', leadsTo: "L2-1A2A" },
                    { text: 'Not interested.', leadsTo: "L2-1A2B", giveCondition: "unfriendlyInteraction" },
                    { text: 'Let\'s Fight, nerds', leadsTo: "L2-1A2C", giveCondition: "unfriendlyInteraction" },
                ]
            }
        ]
    },

    {
        id: "L2-1A2A",
        scenes: [
            // Frame of the three people standing there menancingly
            { image: '', speaker: "Random Guys", text: "..." },
            { image: '', speaker: "John", text: "..." },
            // Same frame, but the one in front opens their mouth to talk
            { image: '', speaker: "Guy 1", text: "...Hello, John." },
            { image: '', speaker: "John", text: "Hey dude." },

            { image: '', speaker: "Guy 1", text: "..." },
            { image: '', speaker: "Guy 1", text: "May we..." },
            { image: '', speaker: "Guy 1", text: "...have a selfie." },
            { image: '', speaker: "John", text: "yo" },
            { image: '', speaker: "John", text: "You were being real scary and all that and THAT is what you want?" },
            { image: '', speaker: "Guy 1", text: "...This is... how we talk." },
            { image: '', speaker: "John", text: "bro" },
            { image: '', speaker: "Guy 2", text: "some of us are a little strange here" },
            { image: '', speaker: "Guy 3", text: "We Apologize If It Comes Off As Threatening." },
            { image: '', speaker: "John", text: "Alright, sure man. Here, come bunch up with me." },

            // Pose for the camera! Group selfie with Guy 1 holding the camera
            { image: '', speaker: "Everyone", text: ":)" },
            { image: '', speaker: "Guy 1", text: "...Thank you." },
            { image: '', speaker: "John", text: "Yeah man you're welcome. Maybe work on your voice though." },
            { image: '', speaker: "Guy 1", text: "...I appreciate. The advice." },
            { image: '', speaker: "Guy 2", text: "hold on i have something for you" },

            { image: '', speaker: "Narrator", text: "He gives John a strange looking charm.", getItem: "Good-Luck Charm" },
            { image: '', speaker: "Guy 2", text: "keep it for your adventures it will bring you luck i think" },
            { image: '', speaker: "John", text: "Thanks." },
            { image: '', speaker: "John", text: "..." },
            { image: '', speaker: "John", text: "(What else am I supposed to say dude)" },
            { image: '', speaker: "Guy 1", text: "...We will be leaving" },
            { image: '', speaker: "John", text: "Ok (Thank god)." },

            { image: '', speaker: "Narrator", text: "The men depart, and John is finally allowed to rest." },

            // 
            { image: '', speaker: "Narrator", text: "[...John is sleeping.]" },
            { image: '', speaker: "Narrator", text: "[i don't know what else to say]" },
            { image: '', speaker: "Narrator", text: "[I Don't Think You Guys Should Be Watching Him Sleep.]", heal: 1, leadsTo: "L2" },
        ]
    },

    {
        id: "L2-1A2B",
        scenes: [
            // Frame of the three people standing there menancingly
            { image: '', speaker: "Random Guys", text: "...Oh." },
            { image: '', speaker: "John", text: "...Yeah?" },
            { image: '', speaker: "Guy 1", text: "...We were not... expecting a cold face." },
            { image: '', speaker: "John", text: "Three people come up to my face, stand in front of me, stare into my soul, don't even say a word — and you think I wanna talk dude?" },
            { image: '', speaker: "John", text: "Get out of here." },

            { image: '', speaker: "Narrator", text: "They walk away with the heads downcast." },
            { image: '', speaker: "John", text: "Thank god. Now let me sleep!" },

            // Black screen
            { image: '', speaker: "Narrator", text: "John gets a good night's rest.", heal: 1, leadsTo: "L2" },
        ]
    },

    {
        id: "L2-1A2C",
        scenes: [
            // Frame of the three people standing there menancingly
            { image: '', speaker: "John", text: "RAAGH!!" },
            { image: '', speaker: "Narrator", text: "You gotta start controlling your violent tendencies, dude." },
            { image: '', speaker: "Narrator", text: "John gets beat up, and the people flee.", damage: 1 },
            { image: '', speaker: "Narrator", text: "As a result of your actions, John cannot sleep well." },
            { image: '', speaker: "Narrator", text: "Real good reputation you're building here.", leadsTo: "L2" },
        ]
    },

    {
        id: "L2-1B",
        scenes: [

            { image: '', speaker: "Narrator", text: "As John walks along the city, he hears a voice call out to him." },
            { image: '', speaker: "???", text: "Hey, John! Over here, in this store! I've got some stuff for you." },
            { image: '', speaker: "John", text: "Woah. Free stuff?" },
            { image: '', speaker: "???", text: "Free." },
            { image: '', speaker: "John", text: "Hmmmmmm........" },

            {
                image: '',
                speaker: "John",
                text: "What do you think? Should I go to this really awesome store with more free stuff with me?",
                options: [
                    { text: 'Of course', leadsTo: "L2-1B2A" },
                    { text: 'No', leadsTo: "L2-1B2B-1", },
                ]
            }
        ]
    },

    {
        id: "L2-1B2A",
        scenes: [
            { image: '', speaker: "John", text: "Oh yeah! Lemme get some of that free stuff.", },
            { image: '', speaker: "Narrator", text: "John walks into the store.", },
            // Black screen
            { image: '', speaker: "John", text: "...Hello? Why's it so dark in here?", },
            { image: '', speaker: "???", text: "Aha... welcome, John. Come see my wares.", },
            // John in the store with a merchant in eccentric magician's clothing. He is looking at the items for sale.
            { image: '', speaker: "Narrator", text: "He pulls a string, and the lights flicker on.", },
            { image: '', speaker: "John", text: "Woah. You're a merchant? Your free stuff is cool!", },
            { image: '', speaker: "Merchant", text: "Of course. Please take as you would like.", },
            // John reaches for some strange tool in the shape of an eraser.
            { image: '', speaker: "John", text: "How about this?", },
            // But suddenly, the merchant lunges forth and grabs John by the hand.
            { image: '', speaker: "Merchant", text: "Wait!", },
            { image: '', speaker: "John", text: "Huh?", },
            { image: '', speaker: "Merchant", text: "You can't take that. It costs money", },
            { image: '', speaker: "John", text: "...I thought you said everything was free.", },
            { image: '', speaker: "Merchant", text: "Of course. Free for a price of $20 dollars.", },
            { image: '', speaker: "John", text: "Wh- What kind of free download online for a premium license kinda scheme is this?!", },
            { image: '', speaker: "Merchant", text: "You're already here. Do you have money to buy anything?", },
            { image: '', speaker: "John", text: "...I was kind of expecting to not have to buy anything.", },
            { image: '', speaker: "Merchant", text: "Doesn't matter. I assure what I sell will be of use to you, but I will certainly be earning my money's worth.", },
            {
                image: '',
                speaker: "Merchant",
                text: "Now, choose what you need.",
                options: [
                    { text: 'The Eraser', },
                    { text: 'Good-Luck Charm', },
                    { text: 'I\'m alright now', leadsTo: "L2-1B2A-End" },
                ]
            }
        ]
    },

    {
        id: "L2-1B2A-End",
        scenes: [
            // John walking away
            { image: '', speaker: "John", text: "Thanks for your scam, I guess...", },
            { image: '', speaker: "Merchant", text: "Heheh. Come again another time.", },
            { image: '', speaker: "John", text: "I guess.", leadsTo: "L2" },
        ]
    },


    {
        id: "L2-1B2B-1",
        scenes: [
            {
                image: '', speaker: "John", text: "Hm.... iunno. Think about how long it took me to walk here.",
                options: [
                    { text: 'Of course', leadsTo: "L2-1B2A" },
                    { text: 'No', leadsTo: "L2-1B2B-2", },
                ]
            }
        ]
    },
    {
        id: "L2-1B2B-2",
        scenes: [
            {
                image: '', speaker: "John", text: "Yeah, but then I'd have to turn away from the store... and get my legs to move again...",
                options: [
                    { text: 'Of course', leadsTo: "L2-1B2A" },
                    { text: 'No', leadsTo: "L2-1B2B-3", },
                ]
            }
        ]
    },
    {
        id: "L2-1B2B-3",
        scenes: [
            {
                image: '', speaker: "John", text: "This all just kind of feels like a waste of time, doesn't it?",
                options: [
                    { text: 'Of course', leadsTo: "L2-1B2A" },
                    { text: 'No', leadsTo: "L2-1B2B-Loop1", },
                ]
            }
        ]
    },
    {
        id: "L2-1B2B-Loop1",
        scenes: [
            {
                image: '', speaker: "John", text: "I'm not gonna do that.",
                options: [
                    { text: 'Of course', leadsTo: "L2-1B2A" },
                    { text: 'No', leadsTo: "L2-1B2B-Loop2", giveCondition: "unfriendlyInteraction" },
                ]
            }
        ]
    },
    {
        id: "L2-1B2B-Loop2",
        scenes: [
            {
                image: '', speaker: "John", text: "Nope.",
                options: [
                    { text: 'Of course', leadsTo: "L2-1B2A" },
                    { text: 'No', leadsTo: "L2-1B2B-Loop3", giveCondition: "unfriendlyInteraction" },
                ]
            }
        ]
    },
    {
        id: "L2-1B2B-Loop3",
        scenes: [
            {
                image: '', speaker: "John", text: "Nuh uh.",
                options: [
                    { text: 'Of course', leadsTo: "L2-1B2A" },
                    { text: 'No', leadsTo: "L2-1B2B-Loop1", giveCondition: "unfriendlyInteraction" },
                ]
            }
        ]
    },

    {
        id: "L2-1C",
        scenes: [
            { image: '', speaker: "Narrator", text: "With what is assumed to all be done, John heads for the border to meet his final challenge." },
            { image: '', speaker: "Narrator", text: "Certainly, it was an arduous trek, and John had to stop for longer breaks at smaller villages down the road." },
            { image: '', speaker: "Narrator", text: "But in the far distance, John sees it emerge into view..." },
            // John on a mountain looks at the barrier - A titan with seraph wings and a flaming greatsword guards the miniature border.
            { image: '', speaker: "Narrator", text: "...Of course, the guardian." },
            { image: '', speaker: "Narrator", text: "Believing in his worth, John proceeds forth until he comes into range of the border." },
            // Now John, hardly even the size of one of the titan's fingers, stands below it. He looks above it as the titan looks down at him with its mighty greatsword pierced into the Earth.
            // Noter: You can practically use this image for most of the guardian/John dialogue
            { image: '', speaker: "Guardian", text: "...Welcome, John Stock." },
            { image: '', speaker: "John", text: "...Hey. You look swell." },
            { image: '', speaker: "Guardian", text: "I presume you are here solely to pass this border." },
            { image: '', speaker: "John", text: "How'd you know, man? What do you think I've been doing, getting through all the other borders before this?" },
            { image: '', speaker: "Guardian", text: "Very well. We shall not waste time in scrutinizing your worth." },
            { image: '', speaker: "Guardian", text: "You will be tested for the trials you have faced on this journey - If you are to fail, you will be rightfully punished." },
            { image: '', speaker: "Guardian", text: "Survive the preliminary audit, and the test shall truly begin." },
            {
                image: '', speaker: "Guardian", text: "Shall you accept these trials?", // Left intentionally empty
                options: [
                    { text: 'Beg to have the key', leadsTo: "L2-1C2A" },
                    { text: 'Yes, I\'m ready', leadsTo: "Climax" },
                    { text: 'Let\'s Fight, nerd', leadsTo: "L2-1C2B" },
                ]
            }
        ]
    },

    {
        id: "L2-1C",
        scenes: [
            { image: '', speaker: "John", text: "Please guardian I need this..." },
            { image: '', speaker: "John", text: "My download is kinda licenseless..." },
            { image: '', speaker: "Guardian", text: "..." },
            // Guardian doing the IShowSpeed face - I WILL PROBABLY DRAW THIS!! Poorly, but that would be on purpose
            { image: '', speaker: "Guardian", text: " " },
            { gameOver: "You didn't come here just to earn your way to victory." },
        ]
    },
    {
        id: "L2-1C",
        scenes: [
            { image: '', speaker: "John", text: "RAAAG-" },
            { gameOver: "No." },
        ]
    },

    {
        id: "Climax",
        scenes: [
            { image: '', speaker: "Guardian", text: "Then, onto the first evaluation." },
            {
                sceneCondition: "Amiable",
                conditionMetScenes: [
                    { image: '', speaker: "Guardian", text: "You have been determined to be of a consistently kind character when warranted, returning the favors of those who support you." },
                    { image: '', speaker: "Guardian", text: "Amiability is the first of three evaluations. You pass the first audit." },
                ],
                conditionNotMetScenes: [
                    { image: '', speaker: "Guardian", text: "Your actions do not reflect gratitude for those who assist you." },
                    { image: '', speaker: "Guardian", text: "Amiability is the first of three evaluations. You shall be punished for failing the first audit.", damage: 1 },
                ],
            },
            {
                sceneCondition: "Tenacious",
                conditionMetScenes: [
                    { image: '', speaker: "Guardian", text: "Though the odds seemed bleak, you continued to fight in the face of failure." },
                    { image: '', speaker: "Guardian", text: "Tenacity is the second of three evaluations. You pass the second audit." },
                ],
                conditionNotMetScenes: [
                    { image: '', speaker: "Guardian", text: "When given the option to fight the beating heart of danger, you ignorantly skipped past without the courage to stand." },
                    { image: '', speaker: "Guardian", text: "Tenacity is the second of three evaluations. You shall be punished for failing the second audit.", damage: 1 },
                ],
            },
            {
                sceneCondition: "Intellect",
                conditionMetScenes: [
                    { image: '', speaker: "Guardian", text: "Lastly, you have willingly solved the riddles spread throughout your journey and demonstrated your worth beyond these gates." },
                    { image: '', speaker: "Guardian", text: "Intellect is the last of three evaluations. You pass the last audit." },
                ],
                conditionNotMetScenes: [
                    { image: '', speaker: "Guardian", text: "By avoiding the challenge of mind, you deny the growth necessary to prove you will succeed beyond these gates." },
                    { image: '', speaker: "Guardian", text: "Intellect is the last of three evaluations. You shall be punished for failing the third audit.", damage: 1 },
                ],
            },
            { image: '', speaker: "Guardian", text: "..." },
            { image: '', speaker: "Guardian", text: "So, it seems you survive the audit. Whether that be by the health you preserved to this point or having demonstrated excellent character, it is time for your test to truly begin." },
            { image: '', speaker: "Guardian", text: "The test is merely a three-question trial to prove the learnings of your journey. If you have passed the audit, then it is likely you will pass these verifications as well." },
            { image: '', speaker: "Guardian", text: "Stand ready for the first question." },

            {
                image: '',
                speaker: "Guardian",
                text: "Name the source of your monotony in your residing world.", // Left intentionally empty
                options: [
                    { text: 'Stillbody Tech', leadsTo: "Climax-Q1-Wrong" },
                    { text: 'iStock', leadsTo: "Climax-Q1-Correct" },
                    { text: "ReStock Facilities", leadsTo: "Climax-Q1-Wrong" }
                ]
            }
        ]
    },

    {
        id: "Climax-Q1-Wrong",
        scenes: [{ image: '', speaker: "Guardian", text: "Incorrect. You will be punished for your lack of remembrance.", damage: 1, leadsTo: "Climax-Q2" },]
    },
    {
        id: "Climax-Q1-Correct",
        scenes: [{ image: '', speaker: "Guardian", text: "Correct. Your remembrance of your past demonstrates reflection.", leadsTo: "Climax-Q2" },]
    },

    {
        id: "Climax-Q2",
        scenes: [
            { image: '', speaker: "Guardian", text: "Next question." },
            {
                image: '',
                speaker: "Guardian",
                text: "What is the common name for this layer?", // Left intentionally empty
                options: [
                    { text: 'The Color Palette', leadsTo: "Climax-Q2-Wrong" },
                    { text: 'The Still World', leadsTo: "Climax-Q2-Correct" },
                    { text: "The Freeform", leadsTo: "Climax-Q2-Wrong" }
                ]
            }
        ]
    },
    {
        id: "Climax-Q2-Wrong",
        scenes: [{ image: '', speaker: "Guardian", text: "Incorrect. You will be punished for your heedless explorations.", damage: 1, leadsTo: "Climax-Q3" },]
    },
    {
        id: "Climax-Q2-Correct",
        scenes: [{ image: '', speaker: "Guardian", text: "Correct. Your calling expresses you hold dear the experiences you undergo.", leadsTo: "Climax-Q3" },]
    },

    {
        id: "Climax-Q3",
        scenes: [
            { image: '', speaker: "Guardian", text: "Congratulations. As the trials seem to determine, you are worthy for entry." },
            { image: '', speaker: "John", text: "Woah, what?! I thought I had to answer one more question-" },
            { image: '', speaker: "John", text: "(Wait, maybe I shouldn't say anything...)" },
            { image: '', speaker: "Guardian", text: "Worry not your restless soul. The last question is a mere child's play — it shall be the easiest you face. You have been guaranteed entry long since your trials began." },
            { image: '', speaker: "Guardian", text: "As such, it is expected you are capable of answering this dilemma without fault. Shall you blunder once, you will face the most grievous, divine punishment for misleading oneself." },
            { image: '', speaker: "Guardian", text: "Without further stalling, the simple question goes as follows:" },
            {
                image: '',
                speaker: "Guardian",
                // Get ready.

                text: `A block of mass m1 = 3.00kg rests on a rough inclined plane angled at θ = 37∘ above the horizontal. 
                The coefficient of kinetic friction between the block and the incline is μk = 0.25, and the coefficient of static friction is μs = 0.40. 
                The block is connected via a light, inextensible string over a frictionless, massless pulley to a second block of mass m2 = 5.00kg, which hangs vertically. 
                The pulley is mounted on a cart of mass M = 10.0kg, which can roll without friction along a horizontal track. 
                The cart is attached to a horizontal spring with spring constant k = 200 N/m, fixed to a wall. 
                Initially, the spring is unstretched. 
                At time t = 0, the system is released from rest. 
                Meanwhile, a small charged sphere of charge q=2.0 μC and mass 0.50 kg is attached to the hanging mass m2 via a rigid, massless rod of length L=0.50 m, forming a pendulum. 
                A uniform electric field E=1.0×10^4 N/C points horizontally to the right. 
                Air resistance is negligible. 
                If the electric field suddenly switches direction at maximum spring compression, describe qualitatively how the motion of the pendulum changes.`,
                
                options: [
                    { text: `When the electric field reverses direction at maximum spring compression, the pendulum is momentarily at rest. 
                        Since its velocity is zero at that instant, reversing the electric field does not immediately affect its motion. 
                        The pendulum will continue oscillating in the same way as before, with the same equilibrium angle, because the system’s inertia dominates over the electric force at that instant.`, leadsTo: "True-Climax" },
                    { text: `When the electric field reverses, the pendulum will simply swing to the exact same angle on the opposite side and then continue oscillating symmetrically about the vertical. 
                        The motion remains unchanged except for being mirrored horizontally, because the electric force has simply flipped direction while keeping the same magnitude.`, leadsTo: "True-Climax" },
                    { text: "What", leadsTo: "True-Climax" }
                ]
            }
        ]
    },

    {
        id: "True-Climax",
        scenes: [
            { image: '', speaker: "Guardian", text: "..."},
            { image: '', speaker: "Narrator", text: "Before the Guardian can finish their conclusion..."},
            // Same image and perspective, but a brilliant white light shines behind John
            { image: '', speaker: "Narrator", text: " a brilliant bolt illuminates from the horizon behind John."},
            // Switch perspectives to John's face. John shades his eyes as he turns toward the light.
            { image: '', speaker: "John", text: "Wha.."},
            // The Guardian has brandished its blade, preparing to fight the source.
            { image: '', speaker: "Guardian", text: "..."},
            // But then... a great arrow pierces through the Guardian's head in a flash, blowing a hole through it!
            { image: '', speaker: "Narrator", text: " "},
            // The guardian collapses onto the ground. A great cloud of dust where it falls, its colossal body crashing right in front of the gate.
            { image: '', speaker: "Narrator", text: "The Guardian falls with a single strike."},
            { image: '', speaker: "John", text: "What..!"},
            // He turns around with a confused expression..
            { image: '', speaker: "John", text: "Who could've-"},
            // And his eyes widen.
            { image: '', speaker: "John", text: "..!"},
            // It's someone clad in full magical, animated armor! A mystic sword in one hand and a bow of light in the other, he stands opposite to John.
            { image: '', speaker: "???", text: " "},
            { image: '', speaker: "???", text: "It's been a while."},
            // He moves his helmet up... revealing him to be Low-Budget man.
            { image: '', speaker: "Low-Budget Man", text: "How has your adventure been, John?"},
            { image: '', speaker: "John", text: "You! Why are you here?! I thought-"},
            // He moves past John, toward the body of the collapsed guardian.
            { image: '', speaker: "Low-Budget Man", text: "Quiet."},
            // He plunges his stick-arm through and pulls out a heavenly key - the key to unlock the gates...
            { image: '', speaker: "Low-Budget Man", text: "..."},
            { image: '', speaker: "Low-Budget Man", text: "There it is."},
            { image: '', speaker: "Low-Budget Man", text: "Finally, the key to true freedom."},
            { image: '', speaker: "John", text: "You mean you could've just sniped that thing this whole time?!"},
            { image: '', speaker: "Low-Budget Man", text: "Oh, not without your advent. Your fame returned to me as the one who led you here."},
            { image: '', speaker: "Low-Budget Man", text: "It doesn't matter whether you took my hand or not. It gave me enough opportunity to arrive at this moment, armed."},

            { image: '', speaker: "Narrator", text: "Low-Budget Man begins to walk for the gates."},
            { image: '', speaker: "John", text: "Hold on, wait a minute! So you're going to unlock the gates for everyone now?"},
            { image: '', speaker: "Low-Budget Man", text: "Ha ha. Everyone? Were you told of that myth too?"},
            { image: '', speaker: "Low-Budget Man", text: "Don't you remember? Only the possessor of the key is granted access through. You're weren't thinking I was going to use this key to help everyone, were you?"},
            { image: '', speaker: "Low-Budget Man", text: "I only needed a tool to reach my goals. No longer will I be constrained by a child's mediocre drawing once I enter Reality."},
            { image: '', speaker: "John", text: "So you used me to get here."},
            { image: '', speaker: "Low-Budget Man", text: "Of course. You followed the plan as intended. You failed to prepare for an advent like mine, believing you could waltz through without a true challenge."},
            // John clenches his fist
            { image: '', speaker: "John", text: "Hey, dude. That's really not cool. I did all the work to get here."},
            { image: '', speaker: "Low-Budget Man", text: "I hope you're not planning on stopping me. What could you do in your harmed state?"},
            // Pan to John's determined face
            { image: '', speaker: "John", text: "...Anything."},
            // Now he's sweating and nervously smiling
            { image: '', speaker: "John", text: "(naw im lying bro this guy is so right what am I going to do AGAINST THAT?! HE'S IN ARMOR! LOOK AT HIS WEAPONS!)"},
            { image: '', speaker: "John", text: "(But I'm already here... do I let him swindle this from me? I hate these stick figures bro... I just knew he didn't come with a transparent background.)"},
            {
                image: '',
                speaker: "John",
                text: "Well... guess I gotta try something.",
                options: [
                    { text: 'Beg to let you have the key', leadsTo: "True-Climax-1A" },
                    { text: 'Let\'s Fight, nerd', leadsTo: "True-Climax-1B" },
                ]
            }
        ]
    },

    {
        id: "True-Climax-1A",
        // Have scene change to make John block the attack somehwat if he has The ERaser
        scenes: [
            { image: '', speaker: "Low-Budget Man", text: "...You are as pitiful as you were since the beginning."},
            { image: '', speaker: "John", text: "soo... let me come with?"},
            { image: '', speaker: "Low-Budget Man", text: "If begging is your power then what are you without it?"},
            { image: '', speaker: "John", text: "...Huh. That's a good question-"},
            // Low-Budget man speedblitzes him - stabs through John's body with his blade -
            { image: '', speaker: "Low-Budget Man", text: "Worthless.", falseDamage: 5},
            { image: '', speaker: "Low-Budget Man", text: "Apologies. I allow no witnesses, in the case they find an escape and come to hunt me as well."},
            // John X_X on the floor as Low-Budget Man waves off and walks through the gate
            { image: '', speaker: "Narrator", text: "John collapses as Low-Budget Man walks off."},
            {
                itemCondition: "Good-Luck Charm",
                conditionMetScenes: [
                    { 
                        itemCondition: "The Eraser",
                        conditionMetScenes: [{image: '', speaker: "Narrator", text: "You lose! ...", leadsTo: "Ending-3"}],
                        conditionNotMetScenes: [{image: '', speaker: "Narrator", text: "You lose! ...", leadsTo: "Ending-2"}],
                    }
                ],
                conditionNotMetScenes: [
                    { image: '', speaker: "Narrator", text: "You lose!", leadsTo: "Ending-1" },
                ],
            },
        ]
    },

    {
        id: "True-Climax-1B",
        scenes: [
            { image: '', speaker: "John", text: "RAAGH!!!"},
            { image: '', speaker: "Low-Budget Man", text: "You fight foolishly, John!"},
            // Low-Budget man speedblitzes him - stabs through John's body with his blade -
            { sceneCondition: "Tenacious",
                conditionMetScenes: [
                    { image: '', speaker: "Low-Budget Man", text: "You hardly even have the reflexes to support your shenanigans.", falseDamage: 5},
                ],
                conditionNotMetScenes: [
                    { image: '', speaker: "Low-Budget Man", text: "You lack the courage to strike through.", falseDamage: 5},
                ]
            },
            { image: '', speaker: "Low-Budget Man", text: " ", falseDamage: 5},
            { image: '', speaker: "Low-Budget Man", text: "Apologies. I allow no witnesses, in the case they find an escape and come to hunt me as well."},
            // John X_X on the floor as Low-Budget Man waves off and walks through the gate
            { image: '', speaker: "Narrator", text: "John collapses as Low-Budget Man walks off."},
            {
                itemCondition: "Good-Luck Charm",
                conditionMetScenes: [
                    { 
                        itemCondition: "The Eraser",
                        conditionMetScenes: [{image: '', speaker: "Narrator", text: "You lose! ...", leadsTo: "Ending-3"}],
                        conditionNotMetScenes: [{image: '', speaker: "Narrator", text: "You lose! ...", leadsTo: "Ending-2"}],
                    }
                ],
                conditionNotMetScenes: [
                    { image: '', speaker: "Narrator", text: "You lose!", leadsTo: "Ending-1" },
                ],
            },
        ]
    },

    {
        id: "Ending-1",
        scenes: [
            // All of these will have black screens
            { image: '', speaker: "John's Internal Monologue", text: "Ow... that hurt. I don't think I can get up." },
            { image: '', speaker: "John's Internal Monologue", text: "He's just walking past... man, come on, I'm letting him by. Was there anything different I could've done?" },
            { image: '', speaker: "John's Internal Monologue", text: "No one's going to know what happened. If only I survived." },
            { image: '', speaker: "John's Internal Monologue", text: "Where does he get all that stuff, dude?! If someone gave me an object that could save me from getting hit, that'd be real nice, man!" },
            { image: '', speaker: "John's Internal Monologue", text: "Whatever. Guess I'll die." },
            { endGame: "Ending1" },
        ]
    },    

    {
        id: "Ending-2",
        scenes: [
            // An image of the good-luck charm shattering flashes by.
            { image: '', speaker: "Narrator", text: "Something in John's pocket shatters." },
            // Black screen
            { image: '', speaker: "John's Internal Monologue", text: "Huh..?" },
            // ** The next several scenes will be in the perspective of John; keep this in mind
            // He wakes to an empty field.. except for a permanently shut border and the dissipating body of the Guardian.
            { image: '', speaker: "John's Internal Monologue", text: "Oh hey, I'm still alive." },
            { image: '', speaker: "John's Internal Monologue", text: "That's pretty cool, but..." },
            { image: '', speaker: "Narrator", text: "The gate is now permanently shut. Low-Budget Man had already advanced through." },
            { image: '', speaker: "John's Internal Monologue", text: "Well, that's a shame." },
            // John raises his hands up and looks at them - they're animated. He can move them freely.
            { image: '', speaker: "John's Internal Monologue", text: "I look kinda funny. No wonder I've been feeling really loose since I woke up." },
            { image: '', speaker: "John's Internal Monologue", text: "Have I been assimilated into this Layer? Maybe that makes me a permanent resident." },
            { image: '', speaker: "John's Internal Monologue", text: "I mean, I really wouldn't mind living here. What am I gonna tell the people who were expecting me to get by, though..?" },
            { image: '', speaker: "John's Internal Monologue", text: "Maybe I would've been more prepared if I had a strong enough weapon to fight against him." },
            { image: '', speaker: "John's Internal Monologue", text: "Guess it doesn't matter now. I should get walking soon..." },
            { endGame: "Ending2" },
        ]
    },   

    {
        id: "Ending-3-Pt1",
        scenes: [
            // An image of the good-luck charm shattering flashes by.
            { image: '', speaker: "Narrator", text: "Something in John's pocket shatters." },
            // Black screen
            { image: '', speaker: "Narrator", text: "..." },
            // Transition to Low-Budget Man's face with John's body behind him
            { image: '', speaker: "Low-Budget Man", text: "..." },
            // He covers his face with his helmet buy once more and begins walking to the gate.
            { image: '', speaker: "Low-Budget Man", text: "..." },  
            // Have a perspective that is facing Low-Budget Man's back, as Low-Budget Man faces the gate.
            { image: '', speaker: "Low-Budget Man", text: "..." },
            // Then, the shadow of a man blocks the screen.
            { image: '', speaker: "John", text: "..." },
            // Pan back to the original perspective, but this time John is standing up - he's gone beyond his stock image form. He's animated..!
            { image: '', speaker: "John", text: "Hey man." },
            { image: '', speaker: "Low-Budget Man", text: "Huh?" },
            {
                image: '',
                speaker: "John",
                text: " ",
                options: [
                    { text: 'Brandish the Eraser', leadsTo: "Ending-3-Pt2" },
                ]
            }
        ]
    },

    {
        id: "Ending-3-Pt2",
        scenes: [
            // John swipes Low-Budget man with the eraser, striking through the armor and splitting him in half
            { image: '', speaker: "Low-Budget Man", text: "..!" },
            { image: '', speaker: "Low-Budget Man", text: "What?!" },
            // Low-Budget Man's upper half falls to the ground, where John stands above you
            { image: '', speaker: "Low-Budget Man", text: "How?! How did you survive?" },
            { image: '', speaker: "John", text: "Dang. Guess my plot armor's stronger." },
            // Do you know those two panels with Gojo and Sukuna? 
            { image: '', speaker: "Low-Budget Man", text: "This can't be..." },
            // You'll see the reference if you search up the two lines below (change Low-Budget Man to Gojo)
            { image: '', speaker: "John", text: "You were magnificent, Low-Budget Man." },
            { image: '', speaker: "John", text: "I won't forget you for as long as I live." },

            { image: '', speaker: "Low-Budget Man", text: "Don't..!" },

            { image: '', speaker: "Narrator", text: "He's too late to object. John erases the rest of him with the Eraser." },
            { image: '', speaker: "John", text: "Man, finally..!" },
            // 
            { image: '', speaker: "Narrator", text: "John retrieves the key from his body." },
            { image: '', speaker: "John", text: "Well, I have this. What do I do now?" },
            { image: '', speaker: "John", text: "So it turns out I can't free the people here after all... but maybe I'll find a way when I step through this border." },
            { image: '', speaker: "John", text: "Hope they don't think too much about it." },
            // He steps to the gate.
            { image: '', speaker: "John", text: "Alright. Time to do this." },
            // Inserts the key
            { image: '', speaker: "John", text: "..." },
            // The gate opens
            { image: '', speaker: "John", text: "..." },
            // Perspective of camera behind John, with the light shining from his figure.
            { image: '', speaker: "John", text: "..." },
            // He turns back.
            { image: '', speaker: "John", text: "..." },
            // Gives a thumbs up or a wave and smiles
            { image: '', speaker: "John", text: "See you!" },
            // Then he walks through, being enguled by the light...
            { image: '', speaker: "Narrator", text: "..." },
            // And the gates shut.
            { image: '', speaker: "Narrator", text: "..." },
            { endGame: "Ending3" },
        ]
    },  
]