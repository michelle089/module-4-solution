/*
Hello Yaakov
Good Bye John
Good Bye Jenny
Good Bye Jimmy
Hello Peter
Hello Flora
Hello Larry
Hello Patrick
Hello Laura
Good Bye John
*/

(function() {
    var names = ["Yaakov", "John", "Jenny", "Jimmy", "Peter", "Flora", "Larry", "Patrick", "Laura", "John"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } 
        else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
