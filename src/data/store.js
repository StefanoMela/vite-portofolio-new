import { reactive } from "vue";

export const store = reactive({

    projectList: [
        {
            thumb: '/work-bg/game-thumb.png',
            title: 'Point n Shoot Game',
            techs: ["JS"],
            slug: 'point-n-shoot',
            brief: "My take on the freeCodeCamp course in ten lessons to build a 2D point and shoot game in plain JS.",
        },
        {
            thumb: '/work-bg/boolbnb-front-thumb.png',
            title: 'Bool BnB',
            techs: ["Laravel", " Vue"],
            slug: 'boolbnb',
            brief: "Final project of the Bootcamp. A complete web app, developed in group, as a real project, clone of AirBNB. It features three type of users, search and browse, geolocalization, filters apply without refresh. For the registered user that upload a property there is the possibility to acces a backoffice where he'll find charts about the number of visuals of his property, message area where he can read and store messages sent in-site from other users as well as a sponsorhip window, where the owner can put his property as featured in the first page",
        },
        {
            thumb: '/work-bg/boolfolio-front-thumb.png',
            title: 'Boolfolio',
            techs: ["Laravel", "Vue"],
            slug: 'boolfolio',
            brief: "Second full stack project coded. A full stack portfolio, where the FE user can browse through projects and see the details or get in touch via the contact form. The BE part is just a handmade API in Laravel with a simple backoffice interface to help the owner add, modify, delete and restore his works",
            gallery: ['/work-bg/boolfolio-back-thumb.png', '/work-bg/boolfolio-trash-thumb.png', '/work-bg/boolfolio-front-thumb.png']
        },
        {
            thumb: '/work-bg/library-thumb.png',
            title: 'Library',
            techs: ["Laravel", "Vue"],
            slug: 'library',
            brief: "The first full stack project coded. It's a fictional DB for a library, where, in the Laravel BE user can manage the DB itself, adding, modifying, erasing a book and its specifics. From the Vue FE the user can browse the displayed books or choose one and see the full detail",
        },
        {
            thumb: '/work-bg/vue-comics-thumb.png',
            title: 'Laravel - Comics',
            techs: ["Laravel"],
            slug: 'laravel-comics',
            brief: "One of the first approach to Laravel and his charme. We built a simple app that takes input, clean and stores them. User can create and add his own comic. Worked with web routes, CRUDs, forms and storage",
        },
        {
            thumb: '/work-bg/midterm-thumb.png',
            title: 'Cinemato - MIDTERM',
            techs: ["Vue"],
            slug: 'cinemato',
            brief: "Best Front End project I've coded so far. It was the midterm project in my bootcamp and it made me use all the knowledge acquired until then. It features different sections, carousel, loops, reactive store, emits and props.",
        },
        {
            thumb: '/work-bg/boolflix-thumb.png',
            title: 'Boolflix',
            techs: ["Vue", "Axios"],
            slug: 'boolflix',
            brief: "A simple clone of Netflix web app, where movies and TV series are fetched via an Axios call to an external API and then the datas passed through components by Emits and Props",
        },
        {
            thumb: '/work-bg/vue-comics-thumb.png',
            title: 'Comics',
            techs: ["Vite", "Vue"],
            slug: 'comics',
            brief: "Reproduction of a DC comics landing page. First approach with Vite paired with Vue.",
        },
        {
            thumb: '/work-bg/boolzapp-thumb.png',
            title: 'Boolzapp',
            techs: ["JS", "Vue", "Luxon"],
            slug: 'boolzapp',
            brief: "Whatsapp webapp almost clone. It was one of the early approach with Vue, and his structure. All the SMS are retrived with v-for loops and dinamically printed. It is possibile to write and get an answer or to delete the messages, that will expire from the sidebar as well. It was a chance to start working with Date Time as well.",
        },
        {
            thumb: '/work-bg/js-carousel-thumb.png',
            title: 'JS Carousel',
            techs: ["HTML", "CSS", "JS"],
            slug: 'js-carousel',
            brief: "You'll never forget your first vanilla JS carousel, a wise man said. Features autoplay, play, stop and reverse buttons.",
        },
        {
            thumb: '/work-bg/campo-minato-thumb.png',
            title: 'Minesweeper',
            techs: ["HTML", "CSS", "JS"],
            slug: 'minesweeper',
            brief: "A reproduction of the classic Minesweeper game, the begin of the DOM manipulation with Javascript. It features three difficulty level and a game over alert",
        },
        {
            thumb: '/work-bg/dashboard-thumb.png',
            title: 'Dashboard',
            techs: ["HTML", "CSS"],
            slug: 'dashboard',
            brief: "My first fully responsive dashboard",
        },
        {
            thumb: '/work-bg/spotify-thumb.png',
            title: 'Boolify',
            techs: ["HTML", "CSS"],
            slug: 'boolify',
            brief: "One of the most challenging project in my early days. It's almost full responsive and has some lil hover effects. All combined with the Spotify palette still put a nicey little smile on my face",
        },
        {
            thumb: '/work-bg/zalando-thumb.png',
            title: 'Boolando',
            techs: ["HTML", "CSS"],
            slug: 'boolando',
            brief: "Still with basics, here we played with absolute positioning and hover transitions",
        },
        {
            thumb: "/work-bg/discord-thumb.png",
            title: 'Discord',
            techs: ['HTML', 'CSS'],
            slug: 'My-first-time',
            brief: "My real first approach to a responsive design: a simple clone, no functionality, of the Discord web app",
        },
    ],
})
