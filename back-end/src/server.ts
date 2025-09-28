import { app } from "./app"
import { environment } from "./config/environment"

app.listen({ port: environment.PORT }).then(() => {
  console.log("🚀 HTTP Server Running!")
})
