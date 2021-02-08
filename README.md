
# Skiply Javascript SDK

Use this JavaScript library to manage Skiply resources (such as cart, merchant, students, and payments).

## Installation

Install the latest SDK using npm:
```sh
$ npm install skiplyjs
or
$ yarn add skiplyjs
```

## How do I import the client and other types from the SDK?
**Recommended:** You can import the client in ES module style if your environment supports it:

```javascript
import { Auth, Student } from 'skiply'
```

Or you can import the client in CommonJS style:

```javascript
const { Student, Cart } = require('skiply')
```

### Import Gotcha

Do not mix ES module and CommonJS imports in the same codebase. This will likely cause issues that are hard to debug. For more information, do a web search for "Dual Package Hazard Node".

## How do I initialize the client?

```javascript
import { User, Cart } from 'skiply'

const user = new User({
  environment: Environment.Sandbox,
  accessToken: process.env.SKIPLY_TOKEN,
})
```
## API documentation


* [Cart]
* [Product]
* [Merchant]
* [Student]
* [Session]
* [Search]

## Usage

First time using Skiply? Here’s how to get started:


### Get an access token



## Tests




