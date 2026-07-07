# Finance Tracker

personal budget app built with React. User can add income and expense transactions, organize them by category, and get a statistic about his/her finances (this is all stored locally)

## Features

- Authentication — login/logout with protected routes
- Transaction Management — add and delete income or expense transactions
- Categories — create custom categories and view transactions grouped by category
- Live Balance — running total net that updates instantly, colored green or red depending on surplus or deficit
- Stats Page — total income, total spending, net balance, savings rate, and category breakdowns
- Persistent Storage — all data survives page refresh (localStorage)

## What I used

- React 18
- React Router v6 (with lazy loading, protected routes)
- Context API + custom hooks for states
- Vite
- CSS

## To Run

open `http://localhost:5173` in your browser.

To Login: - Username: `admin` - Password: `1234`

## Structure

In src:
pages/ # Login, Home, Categories, Stats, Error
components/ # Navbar, TransactionForm, TransactionList, CategoriesList, StatsInfo, ProtectedRoute
context/ # AuthContext, DataContext
hooks/ # useAuth, useData

## In Future

- Deploy to AWS S3 + CloudFront
- Add date field to transactions and filter by time period
