import express from "express"
import path from 'path'
import { fileURLToPath } from 'url';
import adminRouter from './routes/admin.router.js'
import session from "express-session";

const app = express();

// To parse JSON bodies
app.use(express.json());

// To parse URL-encoded bodies (e.g., from HTML forms)
app.use(express.urlencoded({ extended: true }));

// load session
app.use(
    session({
      secret: process.env.JWT_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false }, // Change to `secure: true` in production if using HTTPS
    })
  );

// load ejs file
app.set('view engine', 'ejs');

// load the folder for view so that we can load view with name directly
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
//to load view folder
app.set('views', [path.join(__dirname, 'views'),path.join(__dirname, 'views/auth'),path.join(__dirname, 'views/layouts'),path.join(__dirname, 'views/layouts/blocks'),path.join(__dirname, 'views/patient')]);

// get images/css/js from public folder
app.use(express.static("public"))
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin",adminRouter)

export { app }
