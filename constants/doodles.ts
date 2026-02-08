export interface Doodle {
    id: number;
    src: string;
    label: string;
    tags: string[];
    caption: string;
    post_link: string;
}

export const DOODLES: Doodle[] = [
    {
        id: 1,
        src: "/images/2025_recap.png",
        label: "2025 Art Recap",
        tags: ["#procreate", "#digital-art", "#character-design", "#portrait", "#illustration", "#indieartist"],
        caption: "Artwall 2025 timelapse! Wrapping up the year with a piece that brings together my favourite works :-)",
        post_link: "https://www.instagram.com/p/DSw4qpcEi-5/"
    },
    {
        id: 10,
        src: "/images/alkove.jpg",
        label: "Alkove",
        tags: ["#procreate", "#digital-art", "#character-design", "#illustration", "#cafe", "#vibes"],
        caption: "Cats and Coffee! Really liked this one. Kurt the cat is going to be a mainstay in all my pieces :)",
        post_link: "https://www.instagram.com/p/DL2lBEsTBhy/?img_index=1"
    },
    {
        id: 5,
        src: "/images/rustbucket.png",
        label: "Rustbucket",
        tags: ["#procreate", "#digital-art", "#character-design", "#mech", "#illustration", "#environment-design"],
        caption: "The Rustbucket.\n" +
            "\n" +
            "Tried a different style of painting with watercolour brushes. Mech inspired by JoyToy’s Steel Bone Armour.",
        post_link: "https://www.instagram.com/p/DR9z1V4ktxm/"
    },
    {
        id: 11,
        src: "/images/devastation-of-baal.png",
        label: "Devastation of Baal",
        tags: ["#procreate", "#digital-art", "#warhammer40k", "#blood-angels", "tyranids"],
        caption: "Warhammer40k: Devastation of Baal. Finally finished this piece!!!",
        post_link: "https://www.instagram.com/p/DUOglZvElye/"
    },
    {
        id: 12,
        src: "/images/a-big-mistake.jpg",
        label: "A Big Mistake",
        tags: ["#procreate", "#digital-art", "#character-design", "#environment-design", "#illustration"],
        caption: "Caught between a rock and a hard place",
        post_link: "https://www.instagram.com/p/DQQ4tJhkiSh/"
    },
    {
        id: 7,
        src: "/images/neotokyo-ramen.jpg",
        label: "Neotokyo Ramen",
        tags: ["#procreate", "#digital-art", "#character-design", "illustration", "cyberpunk", "tokyo"],
        caption: "Midnight Ramen. Just a chill vibe",
        post_link: "https://www.instagram.com/p/DLKOaGNR8or/",
    },
    {
        id: 2,
        src: "/images/katong-romance.png",
        label: "Katong Romance",
        tags: ["#procreate", "#digital-art", "#character-design", "#singapore", "#katong", "#illustration"],
        caption: "Longest one yet. Guess where!",
        post_link: "https://www.instagram.com/p/DPjNqfkknT2/?img_index=1"
    },
    {
        id: 8,
        src: "/images/ribbitmobile.png",
        label: "Ribbitmobile",
        tags: ["#procreate", "#digital-art", "#character-design", "#froggo", "#illustration", "mascot"],
        caption: "Just a boy and his frog 👦🏻🐸",
        post_link: "https://www.instagram.com/p/DPbAXwLEt5y/?img_index=1"
    },
    {
        id: 3,
        src: "/images/svt-in-paris.jpg",
        label: "Seventeen in Paris",
        tags: ["#procreate", "#digital-art", "#character-design", "#seventeen", "#miniteen", "#illustration", "#paris"],
        caption: "Miniteen in Paris, created for a good friend",
        post_link: "https://www.instagram.com/p/DQHBaR5EiJr/"
    },
    // {
    //     id: 6,
    //     src: "/images/simple-comforts.jpg",
    //     label: "Simple Comforts",
    //     tags: ["#procreate", "#digital-art", "#character-design", "#ink", "#artist", "#scrapbook", "#en-yang", "#studio"],
    //     caption: "Mood.\n" +
    //         "\n" +
    //         "Added many elements of my own room here, and of course not forgetting Kurt :)\n" +
    //         "(Yes, I know my guitar is inverted)"
    // }
];
