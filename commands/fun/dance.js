const Base = require("../../base/Command.js");

module.exports = class Dance extends Base {
        constructor(client) {
            super(client, {
                name: "dance",
                usage: "",
                category: "fun",
                permLevel: 0,
                cooldown: 60000
            });

            Object.defineProperty(this, "nod", {
                value: [
                 ""https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5093088",
                ]
            });
            
            Object.defineProperty(this, "chosen", {
                value: this.nod[Math.floor(Math.random() * this.nod.length)],
                writable: true
            });
        }
        
        run(message) {
            if (message.channel.name === "dfchat") return super.error("You can't use that here!");
            message.channel.send(`**Dance** ${this.chosen}`); this.chosen = this.nod[Math.floor(Math.random() * this.nod.length)];
            }
        };
