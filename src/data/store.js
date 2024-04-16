import { reactive } from "vue";

export const store = reactive({

    comicsList: [
        {
            thumb: "public/work-bg/discord-bg.png",
            title: 'My first time',
            techs: "HTML, CSS",
            brief: "My real first approach to a responsive design: a simple clone, no functionality, of the Discord web app",
        },
        {
            thumb: 'public/work-bg/zalando-bg.png',
            title: 'Boolando',
            techs: "HTML, CSS",
            brief: "Still with basics, here we played with absolute positioning and hover transitions",
        },
        {
            thumb: 'public/work-bg/spotify-bg.png',
            title: 'Boolify',
            techs: "HTML, CSS",
            brief: "One of the most challenging project in my early days. It's almost full responsive and has some lil hover effects. All combined with the Spotify palette still put a nicey little smile on my face",
        },
        {
            thumb: 'public/work-bg/dashboard-bg.png',
            title: 'Dashboard',
            techs: "HTML, CSS",
            brief: "My first fully responsive dashboard",
        },
        {
            thumb: 'public/work-bg/campo-minato-bg.png',
            title: 'Minesweeper',
            techs: "HTML, CSS, JS",
            brief: "A reproduction of the classic Minesweeper game, the begin of the DOM manipulation with Javascript. It features three difficulty level and a game over alert",
        },
        {
            thumb: 'public/work-bg/js-carousel-bg.png',
            title: 'JS Carousel',
            techs: "HTLM, CSS, JS",
            brief: "You'll never forget your first vanilla JS carousel, a wise man said. Features autoplay, play, stop and reverse buttons.",
        },
        {
            thumb: 'public/work-bg/boolzapp-bg.png',
            title: 'Boolzapp',
            techs: "HTML, CSS, JS, Vue, Luxon",
            brief: "Whatsapp webapp almost clone. It was one of the early approach with Vue, and his structure. All the SMS are retrived with v-for loops and dinamically printed. It is possibile to write and get an answer or to delete the messages, that will expire from the sidebar as well. It was a chance to start working with Date Time as well.",
        },
        {
            thumb: 'public/work-bg/vue-comics-bg.png',
            title: 'Comivs',
            techs: "HTML, CSS, Vite + Vue",
            brief: "Reproduction of a DC comics landing page. First approach with Vite paired with Vue.",
        },
        {
            thumb: 'public/work-bg/boolflix-bg.png',
            title: 'Boolflix',
            techs: "Vue, Axios",
            brief: "A simple clone of Netflix web app, where movies and TV series are fetched via an Axios call to an external API and then the datas passed through components by Emits and Props",
        },
        {
            thumb: 'public/work-bg/midterm-bg.png',
            title: 'Cinemato - MIDTERM',
            techs: "Vue",
            brief: "Best Front End project I've coded so far. It was the midterm project in my bootcamp and it made me use all the knowledge acquired until then. It features different sections, carousel, loops, reactive store, emits and props.",
        },
        {
            thumb: 'public/work-bg/discord-bg.png',
            title: 'boolzapp',
            techs: "$4.99",
            brief: "Batman: White Knight Presents: Harley Quinn",
        },
        {
            thumb: 'public/work-bg/discord-bg.png',
            title: 'boolzapp',
            techs: "$16.99",
            brief: "Catwoman",
        },
    ],

})
