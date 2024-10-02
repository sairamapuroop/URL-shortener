**URL Shortener Project**
    This is a URL Shortener service built with a backend that allows users to shorten long URLs into compact, easily shareable links. The service also provides redirection from the shortened link to the original long URL.

__Features__
Shorten URLs: Input a long URL and get a shortened version.
Redirect: Shortened URLs automatically redirect to the original URL.
Analytics: Track the number of clicks on each shortened URL.

<!-- Expiration (optional): Set an expiration time for shortened URLs. -->

Tech Stack
Backend: Node.js with Express.js
Database: MongoDB for storing URL mappings and analytics

__Setup__
1. Clone the Repository
```bash
Copy code
git clone https://github.com/sairamapuroop/url-shortener.git
cd url-shortener
```

2. Install Dependencies
```bash
Copy code
npm install
```

3. Configure Environment Variables
Create a .env file in the root of the project and add the following environment variables:

```bash
PORT=3000
MONGO_URI=<your-mongo-connection-string>
DB_NAME=<your-db-name>
```

MONGO_URI: MongoDB connection URI (local or cloud)
DB_NAME: Database name which you want to give.

4. Run the Application
Start the development server:

```bash
npm start
```

The application will be available at http://localhost:3000.