import React from 'react'

function Projects() {
    return (
        <div id="projects" class="projects container1">
            <h3 class="section__title center-text dark-color pb-12">Projects</h3>
            <div class="projects__grid">
                <div class="project">
                    <h3 class="secondary-title project__title">Price Error Monitor</h3>
                    <p class="project__description medium-color">
                    Built scalable e-commerce monitoring system processing 50K+ products with concurrent workers and Redis for real-time pricing error detection, achieving sub-3-minute full scans integrating TLS fingerprinting for anti-bot bypass and intelligent proxy rotation across distributed requests.
                    </p>
                    <ul class="project__stack">
                        <li class="project__stack-item">Golang</li>
                        <li class="project__stack-item">Redis</li>
                        <li class="project__stack-item">TLS Client</li>
                        <li class="project__stack-item">Discord API</li>
                        <li class="project__stack-item">Concurrent Programming</li>
                        <li class="project__stack-item">REST Api</li>
                    </ul>
                    <a href="https://github.com/ShehmirR/hackathon-eog-2023" target="_blank" rel="noopener noreferrer" aria-label="source code" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/ShehmirR/" target="_blank" rel="noopener noreferrer" aria-label="live preview" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                        </svg>
                    </a>
                </div>

                <div class="project">
                    <h3 class="secondary-title project__title">NFL Fantasy Football ML Predictor</h3>
                    <p class="project__description medium-color">
                    Engineered end-to-end ML pipeline with 4-model ensemble (Random Forest, Gradient Boosting, XGBoost, LightGBM) predicting fantasy points for 2,000+ active NFL players using 15+ years of historical data.
                    </p>
                    <ul class="project__stack">
                        <li class="project__stack-item">Python</li>
                        <li class="project__stack-item">XGBoost</li>
                        <li class="project__stack-item">LightGBM</li>
                        <li class="project__stack-item">Scikit-Learn</li>
                        <li class="project__stack-item">Pandas</li>
                        <li class="project__stack-item">NumPy</li>
                    </ul>
                    <a href="https://github.com/ShehmirR/ml-fantasy-football-predictor" target="_blank" rel="noopener noreferrer" aria-label="source code" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/ShehmirR/" target="_blank" rel="noopener noreferrer" aria-label="live preview" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                        </svg>
                    </a>
                </div>

                <div class="project">
                    <h3 class="secondary-title project__title">HackUTD Hackathon Project</h3>
                    <p class="project__description medium-color">
                    Curated and analyzed a dataset of 15,000+ data points for EOG to rank 
                    optimal drill bits based on depth and material. Implemented personalized chatbot
                    and visually immersive front-end.
                    </p>
                    <ul class="project__stack">
                        <li class="project__stack-item">Pandas</li>
                        <li class="project__stack-item">NumPy</li>
                        <li class="project__stack-item">Pandas</li>
                        <li class="project__stack-item">MaterialUI</li>
                        <li class="project__stack-item">Recharts</li>
                        <li class="project__stack-item">Dialogflow</li>
                    </ul>
                    <a href="https://github.com/ShehmirR/hackathon-eog-2023" target="_blank" rel="noopener noreferrer" aria-label="source code" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/ShehmirR/" target="_blank" rel="noopener noreferrer" aria-label="live preview" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                        </svg>
                    </a>
                </div>

                <div class="project">
                    <h3 class="secondary-title project__title">eBay Discount Discord Bot</h3>
                    <p class="project__description medium-color">
                    Created a Discord Bot that identifies discounted items, compares prices to marketplace, 
                    and filters items to maximize profit.
                    <br></br><br></br>
                    
                    </p>
                    <ul class="project__stack">
                        <li class="project__stack-item">Python</li>
                        <li class="project__stack-item">eBay Api</li>
                        <li class="project__stack-item">Discord API</li>
                        <li class="project__stack-item">AWS</li>
                        <br></br><br></br>
                    </ul>
                    <a href="https://github.com/ShehmirR/" target="_blank" rel="noopener noreferrer" aria-label="source code" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/ShehmirR/" target="_blank" rel="noopener noreferrer" aria-label="live preview" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                        </svg>
                    </a>
                </div>

                <div class="project">
                    <h3 class="secondary-title project__title">COVID Essentials Monitor</h3>
                    <p class="project__description medium-color">
                    Developed a Python program to monitor essential item availability across major retail sites. 
                    Utilized Python's Requests for data retrieval and BeautifulSoup4 for parsing.
                    <br></br>
                    
                    </p>
                    <ul class="project__stack">
                        <li class="project__stack-item">Python</li>
                        <li class="project__stack-item">Requests</li>
                        <li class="project__stack-item">BS4</li>
                        <li class="project__stack-item">Discord API</li>
                        <li class="project__stack-item">AWS</li>
                        <br></br><br></br>
                    </ul>
                    <a href="https://github.com/ShehmirR/" target="_blank" rel="noopener noreferrer" aria-label="source code" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/ShehmirR/" target="_blank" rel="noopener noreferrer" aria-label="live preview" class="link link--icon">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
