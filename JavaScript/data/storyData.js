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
            { image: 'images/Visuals/Intro/john image 1 1.png', speaker: "Narrator", text: "He walks a long, boring trail until he reaches his office." },
            { image: 'images/Visuals/Intro/john-facing-restock.jpg', speaker: "John", text: "Ah, finally arrived. Now I can-" },
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
            { image: '', speaker: "Low-Budget Man", text: "Are you deranged? You see a man beyond your form, and your primal response is to fight them?" },
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
                    { text: 'Stroll around the city', leadsTo: "L1-1B", hideCondition: "Layer1TouchedGrass"},
                    { text: 'Run straight for the next world', leadsTo: "L1-1C"},
                    { text: 'Go to your friend\'s house', leadsTo: "L1-1D", condition: "madeAFriend"}, // If you went the 1C route
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
                    { text: 'Sure...', leadsTo: "L1-1A2B", useItem: "Money", giveChoice: "layer1Hotel"},
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
            { image: '', speaker: "John", text: "Yeah alright man."},
            { image: '', speaker: "Narrator", text: "John rests up, and feels a little healthier.", heal: 1, leadsTo: 'L1'},
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
                    { text: 'Can we talk this out?', leadsTo: "L1-1B2A", giveCondition: "Layer1TouchedGrass"},
                    { text: 'Let\'s Fight, nerd', leadsTo: "L1-1B2B", giveCondition: "Layer1TouchedGrass"},
                    { text: 'Nah, but my dagger can', leadsTo: "L1-1B2C", useItem: "Dagger", giveCondition: "Layer1TouchedGrass"}, // If you went the 1C route
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
            { image: '', speaker: "John", text: "Ow!", damage: 1},
            { image: '', speaker: "John", text: "Why did you do that?!" },
            { image: '', speaker: "???", text: "I AGREED WITH WHAT YOU WERE SAYING AND I DID NOT LIKE THAT." },
            { image: '', speaker: "John", text: "I- Whatever man! Leave now, alright?" },
            { image: '', speaker: "???", text: "i appreciate the time we spent together. i shall see you another day." },
            // He leaves
            { image: '', speaker: "John", text: "Wha- alright, whatever. Bye, I guess." },
            { image: '', speaker: "John", text: "...that was the most horrid social encounter I've ever had.", leadsTo: "1A"},
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
            { image: '', speaker: "John", text: "Oh, awesome.. guess there's that, at least.", getItem: "Money"},
            { image: '', speaker: "John", text: "...man, this place sucks, actually.", leadsTo: "1A"},
        ]
    },

    {
        id: "L1-1B2C",
        scenes: [
            // Black screen
            { image: '', speaker: "Narrator", text: "You are about to see something very, very graphic." },
            { image: '', speaker: "Narrator", text: "It involves a man stabbing another very violently." },
            { image: '', speaker: "Narrator", text: "Please prepare yourself. Most people canoot witness this without puking.", damage: 2 },
            { image: '', speaker: "Narrator", text: "Are you ready?" },

            // The "t" thing is stabbed very poorly into the dude--a hole was scribbled into him and the dagger stabs inside. He's screaming.
            { image: '', speaker: "Narrator", text: "..." },
            { image: '', speaker: "???", text: "AUGH!!!!!!!!!!!!" },

            // He collapses to the ground. John stares down at him.
            { image: '', speaker: "John", text: "Shouldn't have messed around, man." },
            { image: '', speaker: "John", text: "I wonder what loot you drop..." },

            { image: '', speaker: "John", text: "Dang...",  getItem: "Money"},
            { image: '', speaker: "John", text: "Dang! you're rich dude!", getItem: "Money" },
            { image: '', speaker: "John", text: "Sick, thanks so much! You can keep the dagger. I don't think I can take that thing out of you anyways." },
            { image: '', speaker: "John", text: "Wouldn't you agree?",  },

            // Zoomed in image of his dead face: X_X
            { image: '', speaker: "???", text: "X_X", leadsTo: "1A"},
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
                    { text: 'Let\'s Fight, nerd', leadsTo: "L1-1C2A"},
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B"},
                    { text: 'Keep begging to have the key', leadsTo: "L1-1B2C"}, // If you went the 1C route
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
            { image: '', speaker: "Guy from Layer 2", text: "Wow! I didn't think anyone could be stupid as you are!", damage: 2},
            { image: '', speaker: "Guy from Layer 2", text: "You know what, I applaud your bravo. I didn't know losers could fight back." },
            { image: '', speaker: "Guy from Layer 2", text: "Of course, That doesn't mean I'm gonna give this key for free. It just makes me more intrigued to see how you'll struggle in my little game." },
            {
                image: '',
                speaker: "Guy from Layer 2",
                text: 'Come on now, get up!',
                options: [
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B"},
                    { text: 'Beg to have the key', leadsTo: "L1-1B2C"}, // If you went the 1C route
                ]
            }
        ]
    },

    {
        id: "L1-1C2B",
        scenes: [
            { image: '', speaker: "Guy from Layer 2", text: "Hah! You'll be stumped by this!" },
            { puzzle: 'holesAndShapes'},
            { image: '', speaker: "Guy from Layer 2", text: "Why, color me surprised. You really are that smart."},
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
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B"},
                    { text: 'Beg', leadsTo: "L1-1B2C-#2"}, // If you went the 1C route
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
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B"},
                    { text: 'Beg', leadsTo: "L1-1B2C-#3"}, // If you went the 1C route
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
            { image: '', speaker: "Guy from Layer 2", text: "Learn!", damage: 1},
            { image: '', speaker: "Guy from Layer 2", text: "To!", damage: 1 },
            { image: '', speaker: "Guy from Layer 2", text: "Earn things yourself!", damage: 1 },
            // John lies on the ground, battered
            { image: '', speaker: "John", text: "..." },
            {
                image: '',
                speaker: "Guy from Layer 2",
                text: "", // Left intentionally empty
                options: [
                    { text: 'Play his puzzle', leadsTo: "L1-1B2B"},
                    { text: 'Beg', leadsTo: "L1-1B2C-#4"}, // If you went the 1C route
                ]
            }
        ]
    },

    {
        id: "L1-1C2C-#4",
        scenes: [
            // He stands above John's body, but has an angry expression
            { image: '', speaker: "Guy from Layer 2", text: "...Why?!" },
            { image: '', speaker: "Guy from Layer 2", text: "Why are you still begging?! You had the most brutal beatdown of your life, and yet you-!"},
            { image: '', speaker: "Guy from Layer 2", text: "...Hah, I don't even know how, but you're frustrating me! How did a lowly worm like you manage to frustrate me?!"},
            // He angrily tosses the key next to his side
            { image: '', speaker: "Guy from Layer 2", text: "Whatever, just take it, I don't care anymore!"},
            { image: '', speaker: "Narrator", text: "...He stomps away." },
            // Back to John being beat up on the ground
            { image: '', speaker: "John", text: "..." },
            { image: '', speaker: "Narrator", text: "You got a key!" },
            { image: '', speaker: "John", text: "yay.....", leadsTo: "L1-Ending"},
        ]
    },

    {
        id: "L1-Ending",
        scenes: [
            // Black screen
            { image: '', speaker: "Narrator", text: "..." },
            // Gate - John holding a colored key in his hands.
            { image: '', speaker: "Narrator", text: "...Well, here you are. To the edge of the second layer." },
            { image: '', speaker: "John", text: "Man, this is starting to get tiring... I really hope there isn't any more than this."},
            { image: '', speaker: "John", text: "I guess all that's left is to use the key now."},
            // The key is pushed into the gate.
            { image: '', speaker: "John", text: "Well, here goes."},
            { image: '', speaker: "Narrator", text: "..." },
            // The gate opens.
            { image: '', speaker: "Narrator", text: "..." },
            // Back to John, who is now looking at the gate opening toward the endless light
            { image: '', speaker: "John", text: "..." },
            { image: '', speaker: "John", text: "Alright, I don't want to waste time anymore. Let's do this.", leadsTo: "L2"},
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
            { image: '', speaker: "John", text: "Guess I'll get going, so I can get there as soon as possible-"},
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
            { image: '', speaker: "Mayor", text: "I'm the mayor of this animated city. We have many here, and this land expands wider, much unlike the previous layers." },
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

            { image: '', speaker: "Narrator", text: "People begin to cheer from the crowd." },
            { image: '', speaker: "???", text: "Ah ha! I knew that was him! I had already given him so many gifts" },
            { image: '', speaker: "???", text: "I gave him a full set of armor! Hopefully he reunites with John to open the gates for us all!" },
            { image: '', speaker: "John", text: "What in the- my goodness." },
        ]
    },






    // L2 merchant dialogue plan:
    // "What kind of $40.99 license scam is this?!"
]