const Vue = require('vue');

let fullWidth = window.innerWidth;
let fullHeight = window.innerHeight;

let channels = [""]

const app = new Vue({
    el: "#app",
    data: {
        channels: [
            "beppierosie",
            "guidospace777",
            "superzilog",
            "nickyrebecca",
            "thomkuytgraphics"
        ],
        currentChannel: 0
    },
    methods: {
        previousChannel() {
            if (this.currentChannel === 0) {
                this.currentChannel = this.channels.length - 1;
            } else {
                this.currentChannel--;
            }
            this.refreshStream();
        },
        nextChannel() {
            if (this.currentChannel < this.channels.length - 1) {
                this.currentChannel++;
            } else {
                this.currentChannel = 0;
            }
            this.refreshStream();
        },
        refreshStream() {
            this.$refs.twitchEmbed.innerHTML = "";
            new Twitch.Player("twitch-embed", {
                channel: this.channels[this.currentChannel],
                width: fullWidth,
                height: fullHeight
            });
        }
    },
    created() {
        new Twitch.Player("twitch-embed", {
            channel: this.channels[this.currentChannel],
            width: fullWidth,
            height: fullHeight
        });
    }
})