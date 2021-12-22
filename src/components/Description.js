const Description = () => {
    return (
        <div className="description">
            <h2>Functionality</h2>
            <ol>
                <li>Search for a breed and add it to the collection</li>
                <li>Remove a breed from the collection</li>
                <li>Add a random breed to the collection</li>
                <li>Clear entire collection</li>
                <li>Each breed in the collection should show the name and an image</li>
                <li>A breed can only be added to the collection one time</li>
                <li>Sub-breeds cannot be added</li>
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