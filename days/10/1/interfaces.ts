const videoGame = require("./types")

interface User {
    name: string,
    age: number
}

interface Student extends User{
    gradeAverage: number
}

interface Gamer extends User {
    favoriteGame: typeof videoGame
}

var friend: Student = {
    name: "My Friend",
    age: 16,
    gradeAverage: 97
}

console.log(friend.name)