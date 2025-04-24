import QuoteManager from './QuoteManager.js';
import fs from 'fs/promises';
import AssetFolderFinder from '../utils/AssetFolderFinder.js'

class RandomQuoteGenerator {
    constructor(quotes = []) {
        this.quotes = quotes || [];
        this.quoteManager = this.quotes.length ? new QuoteManager(this.quotes) : null;
    }

    async loadQuotes() {
        try {
            const filePath = AssetFolderFinder.getAssetFolder();
            const quotesData = await fs.readFile(filePath, 'utf-8');
            this.quotes = JSON.parse(quotesData);
            this.quoteManager = new QuoteManager(this.quotes);
        } catch (error) {
            console.error('Error loading quotes:', error);
        }
    }

    async getRandomQuote() {
        if (!this.quoteManager) {
            await this.loadQuotes();
        }
        return this.quoteManager ? this.quoteManager.getRandomQuote() : null;
    }

    async getRandomQuoteByAuthor(author) {
        if (!this.quoteManager) {
            await this.loadQuotes();
        }
        return this.quoteManager ? this.quoteManager.getRandomQuoteByAuthor(author) : null;
    }

    async getRandomQuoteAndAuthor() {
        if (!this.quoteManager) {
            await this.loadQuotes();
        }
        return this.quoteManager ? this.quoteManager.getRandomQuoteAndAuthor() : null;
    }
}

export default RandomQuoteGenerator;
