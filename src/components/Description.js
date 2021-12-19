const Description = () => {
    return ( 
        <div className="description">
            <h2>Functionality</h2>
            <ol>
                <li>Select from list of breeds</li>
                <li>Display image and title</li>
                <li>Disable chosen breeds in options</li>
                <li>Add a random breed to collection</li>
                <li>Delete a breed from collection</li>
                <li>Clear entire collection</li>
            </ol>
            <h2>Technologies</h2>
            <ol>
                <li>Dog CEO API as data source</li>
                <li>React useState</li>
                <li>React useEffect</li>
                <li>new.css, a lightweight library for basic styling</li>
                <li>Sass for additional styling</li>
            </ol>
        </div>
     );
}
 
export default Description;