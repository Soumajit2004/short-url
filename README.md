# Short URL

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Soumajit2004/short-url)

**Short URL** is a simple and efficient URL shortener built using Next.js and MySQL. This project is part of my
portfolio, showcasing my skills in full-stack development.

## Screenshots

### Demo video link here: [video link](https://youtu.be/xQI1SQzC99c)

![Screenshot 1](https://github.com/Soumajit2004/short-url/blob/1222e1e2993f7b979676ef002680aac4d843f4b8/screenshots/Screenshot%20from%202024-08-26%2018-41-03.png?raw=true)

![Screenshot 2](https://github.com/Soumajit2004/short-url/blob/1222e1e2993f7b979676ef002680aac4d843f4b8/screenshots/Screenshot%20from%202024-08-26%2018-41-19.png?raw=true)

![Screenshot 3](https://github.com/Soumajit2004/short-url/blob/1222e1e2993f7b979676ef002680aac4d843f4b8/screenshots/Screenshot%20from%202024-08-26%2018-41-36.png?raw=true)

## Features

- Shorten long URLs into concise, easy-to-share links.
- Track the number of times a shortened URL has been accessed.
- Manage URLs with a simple and intuitive interface.

## Technologies Used

- **Next.js**: A React framework for building fast, user-friendly web applications.
- **MySQL**: A relational database management system for storing URLs and their corresponding short codes.
- **Prisma**: An ORM for database migrations and queries.
- **Node.js**: JavaScript runtime for the server-side logic.

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

- **Node.js** (v14.x or later)
- **MySQL** (v5.x or later)
- **Git**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Soumajit2004/short-url.git
   cd short-url
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

    - Create a MySQL database named `short_url`.
    - Push the Prisma schema to your database:

      ```bash
      npx prisma db push
      ```

    - Generate the Prisma client:

      ```bash
      npx prisma generate
      ```

4. **Configure environment variables:**

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```bash
   DATABASE_URL="mysql://root:password@localhost:3307/database"
   NEXTAUTH_URL=http://localhost:3000/
   NEXTAUTH_SECRET="REQUIRED"
   GITHUB_ID="CREATE A GITHUB OAUTH APP"
   GITHUB_SECRET="CREATE A GITHUB OAUTH APP"
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will be running on [http://localhost:3000](http://localhost:3000).

## Usage

Once the server is running, you can shorten URLs by navigating to the homepage, entering a long URL, and clicking "
Shorten." The shortened URL will be generated, which you can then share or track its usage.

## Deployment

For deployment, you can use services like Vercel, Netlify, or any cloud provider that supports Next.js applications.
Make sure to configure the environment variables on the deployment platform as described above.

## Contact

For any inquiries or issues, please contact me through GitHub.