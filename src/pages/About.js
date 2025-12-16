import React from 'react'

function About() {
    // return (
    //     <div id="about" class="center">
    //         <h1>About</h1>
    //     </div>
    // )
    return (
        <section class="section about-section gray-bg" id="about">
            <div class="container1">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-avatar">
                            <img class="" src={require('../assets/Shehmir.PNG')} title="" alt=""></img>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="">
                            <h3 class="light-color aboutMe">About Me</h3>
                            <h6 class="light-color lead">SWE @ JPMorganChase based in Plano, Texas</h6>
                            <p class="light-color">
                            Software Engineer at JPMorgan Chase and UT Dallas alum. I care about finding patterns in complex systems and using those insights to design clean abstractions, simplify workflows, and ship reliable software. Problem solving keeps me going. I like taking a tough issue apart, tracing it to the root, and putting it back together in a way that makes sense.
                            <br></br>
                            <br></br>
                            Day to day I build data informed, cloud native services and user experiences. I work with React and TypeScript on the front end, Java and Spring Boot for APIs, and containerized workloads on AWS with CI/CD, observability, and messaging. Recent work includes migrating legacy components to modern stacks, strengthening integrations and authentication, automating schema versioning, and improving reporting. The focus is reliability, faster releases, and less manual effort.
                            <br></br>
                            <br></br>
                            My goal is to raise the standard of development and UX with measurable impact and software people trust every day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
