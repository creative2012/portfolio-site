const sideBar = document.getElementById('sideBar');
const sideBarIcon = document.getElementById('dLogo');
const sideBarTitle = document.getElementById('dTitle');
const sideBarContent = document.getElementById('dContent');

const skills = [
    {
        icon: '<i class="devicon-html5-plain-wordmark colored"></i>',
        title: 'Hypertext Markup Language',
        source: '<a href="http://www.techtarget.com/whatis/definition/HTML5" target="_new">Source</a>',
        content: 
        `<p>HTML 5 is a revision of the Hypertext Markup Language (HTML), the standard programming language for
        describing the contents and appearance of Web pages.</p>

        <p> HTML5 was developed to solve compatibility problems that affect the current standard, HTML4. One of the
        biggest differences between HTML5 and previous versions of the standard is that older versions of HTML
        require proprietary plugins and APIs. (This is why a Web page that was built and tested in one browser
        may not load correctly in another browser.) HTML5 provides one common interface to make loading elements
        easier. For example, there is no need to install a Flash plugin in HTML5 because the element will run by
        itself.</p>

        <p>One of the design goals for HTML5 is to support for multimedia on mobile devices. New syntactic features
        were introduced to support this, such as video, audio and canvas tags. HTML5 also introduces new
        features which can really change the way users interact with documents including:</p>
        <ul>
            <li>New parsing rules for enhanced flexibility</li>
            <li>New attributes</li>
            <li>Elimination of outmoded or redundant attributes</li>
            <li>Drag and drop capabilities from one HTML5 document to another</li>
            <li>Offline editing</li>
            <li>Messaging enhancements</li>
            <li>Detailed rules for parsing</li>
            <li>MIME and protocol handler registration</li>
            <li>A common standard for storing data in SQL databases (Web SQL)</li>
        </ul>

        <p>HTML 5 was adopted by the new working group of the World Wide Web Consortium (W3C) in 2007. This group
        published the first public draft of HTML 5 in January 2008. As of now, HTML5 is in the "Call for Review"
        state, and the W3C expects that it will reach its final state by the end of 2014.</p>`
    },
    {
        icon: '<i class="devicon-css3-plain-wordmark colored"></i>',
        title: 'Cascading Style Sheet',
        source: '<a href="http://https://www.theserverside.com/definition/cascading-style-sheet-CSS?_gl=1*16ysf70*_ga*NDE3NDc1OTk2LjE2NzYzMjYwMTA.*_ga_TQKE4GS5P9*MTY3NjM5NDg0OS4yLjEuMTY3NjM5NDg1Ni4wLjAuMA..&_ga=2.115309447.1852113905.1676326010-417475996.1676326010" target="_new">Source</a>',
        content: 
        `<h2>What is cascading style sheets (CSS)?</h2>
        <ul>
            <li> CSS stands for Cascading Style Sheets</li>
            <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
            <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
            <li>External stylesheets are stored in CSS files</li>
        </ul>
        <p>Using CSS with HTML pages is a user interface (UI) 
        development best practice that complies with the separation of concerns design pattern.</p>
        
        CSS is the standard and preferred mechanism for formatting HTML pages.</p>
        
        <h2>Separation of concerns</h2>
        <p>Conforming with the separation of concerns design pattern and best practice, cascading style sheets provide a central location in which 
        information about what various fonts, foreground colors, background colors, italicization and emphasization should be applied to various 
        HTML elements within a webpage.</p>
        
        <p>Cascading style sheets can also control how various parts of a page, such as the header, footer, body, article content, sections and asides,
         are laid out on the page. This is extremely helpful when content must be laid out in a dramatically different fashion depending upon whether
          it is being viewed on a desktop, tablet or a smartphone.</p>
        
        <h2>History of CSS</h2>
        <p>In the early days of the World Wide Web (WWW), it was common for HTML files to include not only markup language and content, but formatting 
        information and JavaScript as well. This made webpages difficult to write, difficult to read, difficult to update and difficult to maintain.</p>

        <p>As the web matured, it became a best practice to divide HTML, scripting content and style information into separate, easy-to-maintain files. 
        As such, a modern webpage is typically made up of three separate entities: a cascading style sheet, a JavaScript file and the HTML file itself.</p>

        <p>The CSS specification is managed and maintained by W3C, with version 3 being the currently supported release.</p>
        `
    },
    {
        icon: '<i class="devicon-javascript-plain colored"></i>',
        title: 'Javascript',
        source: '<a href="http://" target="_new">Source</a>',
        content: 
        ``
    },
    {
        icon: '<i class="devicon-photoshop-plain colored"></i>',
        title: 'PhotoShop',
        source: '<a href="http://" target="_new">Source</a>',
        content: 
        ``
    },
    {
        icon: '<i class="devicon-php-plain colored"></i>',
        title: 'Hypertext preprocessor',
        source: '<a href="http://" target="_new">Source</a>',
        content: 
        ``
    },
];

const populateSideBar = (position) => {
    let el = skills[position]; 

    sideBarIcon.innerHTML = el.icon;
    sideBarTitle.innerHTML = el.title + el.source;
    sideBarContent.innerHTML = el.content;
    sideBarContent.scrollTo(0,0);
    sideBar.style.right = '0';
    sideBar.style.opacity = '1';
    
}

const closeSideBar = () => {
    sideBar.style.right = '-540px';
    sideBar.style.opacity = '0';

}

document.body.addEventListener('click', (e) => {
    if(e.target.dataset.type == 'skills'){
        populateSideBar(parseInt(e.target.dataset.id));
    }
    if(e.target.id == 'dClose'){
        closeSideBar();
    }
});