import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware"
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware"
import Server from "./servers/Server"
import * as readline from "readline"

declare var process
const server = new Server()

let setPromptQuestions = () => {
    const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
    })

    rl.question("Digite o email: ", email => {
        rl.question("Digite a senha: ", password => {
            server.login(email, password)
            rl.close()
        })
    })
    rl.on("close", () => setPromptQuestions())
}

const middleware = new CheckUserMiddleware()
middleware.linkWith(new CheckPermissionMiddleware())
server.middleware = middleware
setPromptQuestions()