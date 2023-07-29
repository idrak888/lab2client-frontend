
## Getting Started

After cloning, navigate to root and start by installing all packages:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live development version.

## What we are using

- Bootstrap for styled components and responsive design
- Firebase for client-side authentication
- Axios for REST operations
- Email.js for email forms

## Documentation

<h3>Public</h3>
<p>Both the ```bash/public``` and ```bash/assets``` folders contains asset files such as favicons and logos</p>

<h3>Layouts</h3>
<p>The main layout files are _app.js and _document.js<p>

<h3>Pages</h3>
<p>Currently there are 10 main views<p>

- / (index.js)
- /about 
- /auth/login
- /auth/register
- /dashboard
- /dashboard/form
- /listings
- /view
- /order
- /payment/invoice

<h3>Components</h3>
<p>The /components folder contains all of the modular components. Each component file contains a comment on the top describing where it is used.<p>

<h3>Styles</h3>
<p>/styles folder contains all of the css files</p>

<h3>Utils</h3>
<p>Utility files stay in the /utils directory</p>

- firebase.js

## Deploy on Vercel

Simply pushing your changes to the Main branch will update the live version at https://lab2client.com.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
