const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const { generateSlidesConfig } = require('./utils/configGenerator');

const SLIDE_DIR = path.join(__dirname, 'slides');
const CONFIG_DIR = path.join(SLIDE_DIR, 'presentation-config.json');

// middleware to check and update config if needed
app.use((req, res, next) => {
    try{
        let configNeedsUpdate = false;

        // check config file exists
        if (!fs.existsSync(CONFIG_DIR)) {
            configNeedsUpdate = true;
        } else {
            const config = JSON.parse(fs.readFileSync(CONFIG_DIR, 'utf-8'));
            const files = fs.readdirSync(SLIDE_DIR).filter(file => file.endsWith('.js'));

            // check if number of slides has changed
            if (config.totalSlides !== files.length) {
                config.totalSlides = files.length;
                configNeedsUpdate = true;
            }

            // check if any slides have been added or removed
            if (!config.slides.every(slide => files.includes(slide.filePath))) {
                configNeedsUpdate = true;
            }
        }

        // update config if needed
        if (configNeedsUpdate) {
            console.log('Generating new config....');
            generateSlidesConfig(SLIDE_DIR);
        }

        next();

    } catch (error) {
        console.error('Error checking config', error);
        throw error;
    }
});

fs.watch(SLIDE_DIR, (eventType, filename) => {
    if (filename && filename.endsWith('.js')) {
        console.log(`File ${filename} has been updated`);
        generateSlidesConfig(SLIDE_DIR);
    }
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    try {
        const config = JSON.parse(fs.readFileSync(CONFIG_DIR, 'utf-8'));
        res.render('presentation', { config });
    } catch (error) {
        console.error('Error reading config', error);
        res.status(500).send('Internal Server Error');
    }
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});