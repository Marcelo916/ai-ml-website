# Quote Guru

![NPM Version](https://img.shields.io/npm/v/quote-guru)
![License](https://img.shields.io/npm/l/quote-guru)

Quote Guru is a lightweight, easy-to-use library that provides random inspirational quotes. It provides each quote with its author and a neatly formatted HTML blockquote. Perfect for adding a touch of wisdom or motivation to your apps, websites, or projects!

## Features

- Retrieve random quotes from a predefined JSON file.
- Each quote includes the text, author, and a formatted blockquote.
- Lightweight and easy to integrate.

## Installation

You can install **quote-guru** via npm:

```bash
npm install quote-guru
```

## Usage

First, import the `RandomQuoteGenerator` class into your project:

```javascript
import { RandomQuoteGenerator } from 'quote-guru';
```

Then, create an instance of the `RandomQuoteGenerator`:

```javascript
const quoteGenerator = new RandomQuoteGenerator();
```

### Methods

#### `getRandomQuote()`
Returns a random quote with the quote text, author, and a preformatted block quote. If there are no quotes available, null will be returned.

```javascript
const randomQuote = await quoteGenerator.getRandomQuote();
console.log(randomQuote);
/*
{
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
    blockQuote: "<blockquote>&ldquo;Genius is one percent inspiration and ninety-nine percent perspiration.&rdquo; &mdash; <footer>Thomas Edison</footer></blockquote>"
}
*/
```

#### `getRandomQuoteByAuthor(author)`
Retrieves one random quote by the specified author. If the input is invalid, an error message will be returned. If there are no quotes available for the author, null will be returned.

```javascript
const quotesByAuthor = await quoteGenerator.getRandomQuoteByAuthor('Thomas Edison');
console.log(quotesByAuthor);
/*
[
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
        blockQuote: "<blockquote>&ldquo;Genius is one percent inspiration and ninety-nine percent perspiration.&rdquo; &mdash; <footer>Thomas Edison</footer></blockquote>"
    }
]
*/
```

#### `getRandomQuoteAndAuthor()`
Returns a random quote with just the text and author. Useful for displaying a simple quote without the blockquote formatting. If there are no quotes available, null will be returned.

```javascript
const quoteAndAuthor = await quoteGenerator.getRandomQuoteAndAuthor();
console.log(quoteAndAuthor);
/*
{
    quote: "You can observe a lot just by watching.",
    author: "Yogi Berra"
}
*/
```

### Sample Usage

Here's an example of how you can use the `quote-guru` library in your project:

```javascript
import { RandomQuoteGenerator } from 'quote-guru';

async function displayRandomQuotes() {
    const quoteGenerator = new RandomQuoteGenerator();

    try {
        const randomQuote = await quoteGenerator.getRandomQuote();
        const randomQuoteAuthor = await quoteGenerator.getRandomQuoteAndAuthor();
        const randomQuoteByAuthor = await quoteGenerator.getRandomQuoteByAuthor('Thomas Edison');

        console.log(randomQuote);
        console.log(randomQuoteAuthor);
        console.log(randomQuoteByAuthor);
    } catch (error) {
        console.error('Error retrieving quotes:', error);
    }
}

displayRandomQuotes();
```

### Edge Cases and Validations
- Make sure to use `await` when calling the methods to handle the asynchronous nature of the library.
- The `getRandomQuoteByAuthor` method requires the `author` parameter to be a non-empty string. It will throw a validation error if the input is invalid.
- If there are no quotes available (i.e., an empty quotes array), methods will return `null`.

Feel free to experiment with these methods to get different quotes or filter by specific authors!

### JSON File Structure

The quotes are retrieved from a JSON file located in the `assets` directory. The file should have the following format:

```json
[
    {
        "quoteText": "Your quote here.",
        "quoteAuthor": "Author Name"
    },
    {
        "quoteText": "Another quote.",
        "quoteAuthor": "Another Author"
    }
]
```

## Setup on Your Local Machine

To set up the project on your local machine, follow these steps:

Clone the repository:

```bash
git clone git@github.com:evrentan/quote-guru.git
```

Navigate to the project directory:

```bash
cd quote-guru
```

Install the dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

Test the project:

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/yourFeature`).
3. Commit your changes (`git commit -m 'feat(Feature): Add some Feature'`).
4. Push to the branch (`git push origin feature/yourFeature`).
5. Open a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

## About

This library was created to help developers easily integrate random quotes into their applications. If you have any questions or suggestions, feel free to reach out!

## Acknowledgements

[ZenQuotes API][zenquotes-url] is an inspiration for this project. It provides a simple and easy-to-use API for retrieving random quotes.

## Credits

This project uses a JSON quotes database provided by [JamesFT][jamesft-github-url]. You can find the original quotes database [here][jamesft-github-quotes-url]. Special thanks to JamesFT for making this valuable resource available!

## Sponsoring

If you enjoy this project and would like to support its development, please consider sponsoring. Your support helps me continue improving and maintaining the project.

You can sponsor me via:

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on-GitHub-blue?style=for-the-badge&logo=github)][github-sponsors-url]

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-yellow?style=for-the-badge&logo=buy-me-a-coffee)][buy-me-a-coffee-url]

Thank you for your support!


[zenquotes-url]: https://zenquotes.io
[jamesft-github-url]: https://github.com/JamesFT/Database-Quotes-JSON
[jamesft-github-quotes-url]: https://github.com/JamesFT/Database-Quotes-JSON/blob/master/quotes.json
[github-sponsors-url]: https://github.com/sponsors/evrentan
[buy-me-a-coffee-url]: https://www.buymeacoffee.com/evrentan
