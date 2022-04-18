const express = require("express");
const app = express();
const server = require("http").createServer(app);
const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");

const AdminBroMongoose = require("@admin-bro/mongoose");
const mongoose = require("mongoose");
AdminBro.registerAdapter(AdminBroMongoose);
var bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
var cors = require("cors");
require("dotenv").config();

//folder for uploads
app.use(express.static(__dirname + "/public"));
app.use(cors());

// parse application/json
app.use(
    bodyParser.json({
        limit: "100mb",
        extended: true,
        parameterLimit: 100000000,
    })
);

// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit: "100mb",
        extended: true,
        parameterLimit: 100000000,
    })
);

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "", "DELETE"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});

// Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get("origin"));
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

// hookup routes
require("./app/v1.0.0/route/index")(app);

// hookup sockets
io.on("connection", (socket) => {
    // pass socket & io to the socket index file
    require("./app/v1.0.0/sockets/index")(io, socket);
});

let run = async() => {
    const mongooseDb = await mongoose.connect(
        // "mongodb://localhost/sample_tracking",
        process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    const adminBro = new AdminBro({
        databases: [mongooseDb],
        rootPath: "/admin",
    });

    const router = AdminBroExpress.buildRouter(adminBro);
    app.use(adminBro.options.rootPath, router);

    server.listen(port, () => {
        console.log(`app listening at http://localhost:${port}`);
    });
};
run();