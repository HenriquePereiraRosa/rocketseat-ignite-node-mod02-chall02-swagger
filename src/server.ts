import { app } from ".";

import path  from 'path';
import swaggerUi from "swagger-ui-express"
// import swaggerFile from "./swagger.json"
import YAML from "yamljs"

const swagger_path =  path.resolve(__dirname,'./swagger.yml');
console.log(swagger_path)
const swaggerFile = YAML.load(swagger_path)

const PORT = 3333
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(PORT, () => console.log("Server is running on PORT: " + PORT + "!"));
