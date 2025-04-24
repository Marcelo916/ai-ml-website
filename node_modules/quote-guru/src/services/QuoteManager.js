import Validator from "../utils/Validator.js";

class QuoteManager {
    constructor(quotes) {
        this.quotes = Array.isArray(quotes) ? quotes : [];
    }

    /**
     * Get a random quote
     * @returns {{quote: *, blockQuote: string, author: *}|null}
     */
    getRandomQuote() {
        if (this.quotes.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        const selectedQuote = this.quotes[randomIndex];

        return {
            quote: selectedQuote.quoteText,
            author: selectedQuote.quoteAuthor,
            blockQuote: `<blockquote>&ldquo;${selectedQuote.quoteText}&rdquo; &mdash; <footer>${selectedQuote.quoteAuthor}</footer></blockquote>`
        };
    }

    /**
     * Get a quote by a specific author (case-insensitive)
     * @param {string} inputAuthor - The author's name to filter quotes by
     * @returns {{quote: *, blockQuote: string, author: *}|null}
     */
    getRandomQuoteByAuthor(inputAuthor) {
        Validator.validateAuthor(inputAuthor);

        const normalizedAuthor = inputAuthor.trim().toLowerCase();

        const filteredQuotes = this.quotes.filter(quote =>
            quote.quoteAuthor && quote.quoteAuthor.trim().toLowerCase() === normalizedAuthor
        );

        if (filteredQuotes.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const { quoteText: quote, quoteAuthor: author } = filteredQuotes[randomIndex];

        return {
            quote,
            author,
            blockQuote: `<blockquote>&ldquo;${quote}&rdquo; &mdash; <footer>${author}</footer></blockquote>`
        };
    }

    /**
     * Get a random quote and its author
     * @returns {{quote: *, author: *}|null}
     */
    getRandomQuoteAndAuthor() {
       const randomQuote = this.getRandomQuote()

        return randomQuote ? {
            quote: randomQuote.quote,
            author: randomQuote.author
        } : null;
    }
}

export default QuoteManager;
