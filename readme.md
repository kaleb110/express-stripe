# Express-Stripe Boilerplate

This is a boilerplate for integrating Stripe with an Express.js application. It includes essential configurations and sample code to help you get started quickly.

## Features

- Express.js setup
- Stripe integration
- Sample endpoints for Stripe payments
- Environment configuration

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Stripe account

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/kaleb110/express-stripe
  ```
2. Navigate to the project directory:
  ```sh
  cd express-stripe
  ```
3. Install dependencies:
  ```sh
  npm install
  ```
  or
  ```sh
  yarn install
  ```

### Configuration

1. Create a `.env` file in the root directory and add your Stripe secret key:
  ```env
NODE_ENV=development
DATABASE_URL=postgres_database_url
PORT=5000
BASE_URL=http://localhost:3000
BASE_URL_PROD=your_production_url

STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
STRIPE_MONTHLY_PRICE_ID=your_stripe_monthly_price_id
STRIPE_YEARLY_PRICE_ID=your_stripe_yearly_price_id
  ```

### Running the Application

Start the development server:
```sh
npm start
```
or
```sh
yarn start
```

The server will be running on `http://localhost:3000`.

## Usage

### Sample Endpoints

- `POST api/create-payment-intent`: Creates a payment intent using Stripe.

### Example Request

```sh
curl -X POST http://localhost:5000/api/create-payment-intent \
  -H "Content-Type: application/json" \
  -d '{
  "amount": 2000,
  "currency": "usd"
  }'
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
