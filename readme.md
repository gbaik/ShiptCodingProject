## Install Project Dependencies
`npm install`

## Installing System Dependencies

`brew install postgresql`

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Run Migrations & Data Seeds

In terminal, from the root directory:

```
knex migrate:latest
knex seed:run
```
## Running the App

To run server: `yarn run start`

## Assumptions Made
- 365 Days in a year and 31 days in a month, so that it is easier to break down the products sold at a time.
- The customer_id customer_first_name category_id category_name number_purchased query returns the 1st order because of unclear instructions.

## Future Work
- Make code more modular and clean up using ES6.
- Make queries more efficient, possibly use joins instead of nested queries. 
- Make route paths clearer and add documentation.