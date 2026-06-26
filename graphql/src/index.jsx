import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";\

//server setup
const server = new ApolloServer({
//typeDefs -- definitions of types of data
})

const {url} = new startStandaloneServer(server , {
    listen: {port: 4000}
})

console.log("Server is running at " , 4000)