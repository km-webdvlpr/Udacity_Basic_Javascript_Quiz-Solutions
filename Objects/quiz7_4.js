/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name : "glitchy",
    friends : 100,
    messages : ["Hello there!", "Like my status!", "Follow me!"],
    postMessage : function (message){
        this.messages.push(message);
    },
    deleteMessage : function (index){
        this.messages.splice(index, 1);
    },
    addFriend : function (){
        this.friends ++;
    },
    removeFriend : function (){
        this.friends --;
    }
};

facebookProfile.addFriend()
console.log(facebookProfile.friends)
facebookProfile.removeFriend
console.log(facebookProfile.friends)
