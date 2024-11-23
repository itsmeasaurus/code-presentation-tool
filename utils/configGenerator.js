const fs = require('fs');
const path = require('path');

function generateTitleFromFileName(fileName) {
    return fileName
        .replace('.js', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function generateSlidesConfig(slidesDir) {
    try {
        if (!fs.existsSync(slidesDir)) {
            fs.mkdirSync(slidesDir);
        }

        const files = fs.readdirSync(slidesDir).filter(file => file.endsWith('.js'));

        const slides = files.map((file, index) => {
            const filePath = path.join(slidesDir, file);

            return {
                id: index + 1,
                title: generateTitleFromFileName(file),
                filePath: filePath,
                content: '** update your content in here **',
                code: fs.readFileSync(filePath, 'utf-8'),
                metaData: {
                    dateAdded: new Date().toISOString(),
                    lastModified: fs.statSync(filePath).mtime.toISOString()
                }
            }
        });

        const config = {
            presentationTitle: 'My Presentation',
            totalSlides: slides.length,
            lastUpdated: new Date().toISOString(),
            slides: slides
        }

        fs.writeFileSync(path.join(slidesDir, 'presentation-config.json'), JSON.stringify(config, null, 2));

        return config;

    } catch (error) {
        console.error('Error generating slides config', error);
        throw error;
    }
}

module.exports = {
    generateSlidesConfig,
    generateTitleFromFileName
}