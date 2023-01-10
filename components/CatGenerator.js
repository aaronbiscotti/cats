import React, { useState } from 'react';

function CatGenerator() {
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchRandomImage() {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
            const json = await response.json();
            const post = json[0];
            setImageUrl(post.url);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <button onClick={fetchRandomImage} disabled={isLoading} className="p-10 w-[500px] border border-black rounded-full">
                {isLoading ? 'Loading...' : 'Spawn cat'}
            </button>
            {imageUrl && <img src={imageUrl} className="max-h-[500px]" alt="Random cat" />}
        </>
    );
}

export default CatGenerator;