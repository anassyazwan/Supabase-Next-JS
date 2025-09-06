# Next.js + Supabase App

An application built using Next.js and Supabase.

## Features

- **Authentication**: User login and registration powered by Supabase Auth.
	- Login User
	-> Login User
	-> Sign up User
	-> Forgot Password
	-> Reset Password
- **Database**: Store and manage data using Supabase's Postgres database.
	-> Supabase (Database-as-a-service)
- **Tailwind CSS**: Modern styling with utility-first CSS framework.
	-> Example Component using Shadcn UI 

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [Supabase account](https://supabase.com/) with a configured project.

### Installation

1. Clone the repository

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Update `.env.local` with your Supabase credentials:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

This application can be deployed on platforms like Vercel, Netlify, or any provider supporting Next.js.

### Deploy to Vercel

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## License

This project is open-source and available under the MIT License.
