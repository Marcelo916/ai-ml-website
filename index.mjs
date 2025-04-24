import express from 'express';
import fetch from 'node-fetch';
import { parseString } from 'xml2js';
import { RandomQuoteGenerator } from 'quote-guru';

const quoteGenerator = new RandomQuoteGenerator();
console.log(quoteGenerator);

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/types', (req, res) => {
    res.render('types');
});

app.get('/algorithms', (req, res) => {
    res.render('algorithms');
});

app.get('/ethics', (req, res) => {
    res.render('ethics');
});

app.get('/research', async (req, res) => {
    const url = 'http://export.arxiv.org/api/query?search_query=all:artificial%20intelligence&start=0&max_results=5';

    try {
        const response = await fetch(url);
        const data = await response.text();
        parseString(data, (err, result) => {
            if (err) {
                res.render('error', { error: 'Failed to parse data' });
                return;
            }
            const articles = result.feed.entry.map(entry => ({
                title: entry.title[0],
                summary: entry.summary[0]._,
                link: entry.id[0]
            }));
            res.render('research', { articles });
        });
    } catch (error) {
        console.error('Failed to fetch data:', error);
        res.render('error', { error: 'Failed to fetch data' });
    }
});

app.get('/quote', async (req, res) => {
    try {
        const quoteAndAuthor = await quoteGenerator.getRandomQuoteAndAuthor();
        res.render('quote', { quote: quoteAndAuthor });
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.render('error', { error: 'Failed to fetch quote' });
    }
});


app.listen(3000, () => {
    console.log('server started');
});