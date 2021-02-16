'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */

const socket = require('socket.io')

module.exports = async () => {
    setTimeout(() => {
        console.log("check permission", strapi.server)
        const io = socket(strapi.server)

        io.on("connection", (socket) => {
            console.log(socket.id, 'A user Connected');
            
            socket.on("disconnect", () => console.log("A user disconnected", socket.id))
        })
        strapi.io = io;
        strapi.organizeArrays = (data) => data.map((element) => element.id)
        strapi.todoRefetch = () => io.emit("todo-refetch")
    }, 3000)
    
};
