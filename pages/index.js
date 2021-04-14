import {useState, useEffect} from 'react' // Import useState & useEffect hooks
import Head from 'next/head'
import styles from '../styles/Home.module.css'


const defaultEndpoint = 'https://rickandmortyapi.com/api/character/'; // Default API endpoint

export async function getServerSideProps() {  // Function to fetch all the characters data
    const res = await fetch(defaultEndpoint) // Setting the default API endpoint in the reponse
    const data = await res.json(); // Grab the data in JSON format
    return {
        props: { // Make data available in Props property.
            data
        }
    }
}

export default function Home({data}) { // Create an argument 'home' and capture the data
    const {info, results: defaultResults = []} = data; // Destructure the results and send empty array value and destructure the same from data
    const [results, updateResults] = useState(defaultResults); // Using React's useState we can store the results in state and the update the state with more results. Rename results to defaultResults to be used as the initial state.
    const [page, updatePage] = useState({ //
        ...info,
        current: defaultEndpoint // Define the defaultEndpoint as the current state of the page.
    });

    const {current} = page; // Use the current value to be updated every page by destructuring the 'current' vale from the page

    useEffect(() => { // Use useEffct to make request of pagination updates
        if (current === defaultEndpoint) return; // check if the current value equals the default end point value

        async function request() { // Call the async function to request a response to update the current state of the page
            const res = await fetch(current)
            const nextData = await res.json(); // assign nextData the value of the response in JSON format

            updatePage({ // Pass the current, next data information attributes in the updatePage function
                current, ...nextData.info
            });

            if (!nextData.info?.prev) { // check if the information does not have previous value therefore replace the current results
                updateResults(nextData.results);
                return;
            }

            updateResults(prev => { // Update the result and return the previous and new results
                return [
                    ...prev,
                    ...nextData.results
                ]
            });
        }

        request(); // Call a request function and pass 'current's' value through it
    }, [current]);

    function handleLoadMore() { // Load more button function
        updatePage(prev => { // Update the 'page' state with new current value with the 'next' value as the as the endpoint to fetch new results
            return {
                ...prev,
                current: page?.next
            }
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Rick & Morty Challenge</title> {/* Page Title & Favicon */}
                <link rel="icon" href="../tkfavicon.ico"/>
            </Head>

            <main className={styles.main}> {/* Page Title */}
                <h1 className={styles.title}>
                    Rick & Morty Challenge
                </h1>

                <p className={styles.description}> {/* Page sub-title */}
                    by Tanmay Kulkarni
                </p>

                <ul className={styles.grid}> {/* Grid layout */}
                    {results.map(results => { // By using map method create a new list of each character result
                        const {id, name, image, gender, location, origin, species} = results; // map the results by id, name, image, gender, location, origin & species
                        return ( // Return a list by id as the key
                            <li key={id} className={styles.card}>
                                <a href="#">
                                    <img src={image} alt={'${name}} Thumbnail'}/> {/* Display the image of the character and update the header with name  */}
                                    <h3>{name}</h3>
                                </a>
                                <ul className={styles.ulimage}> {/* Custom bullet */}
                                    <li>
                                        <strong>Gender: </strong> {gender} {/* Display gender */}
                                    </li>
                                    <li>
                                        <strong>Location: </strong> {location?.name} {/* Display location */}
                                    </li>
                                    <li>
                                        <strong>Origin: </strong> {origin?.name} {/* Display origin */}
                                    </li>
                                    <li>
                                        <strong>Species: </strong> {species} {/* Display species */}
                                    </li>
                                </ul>
                            </li>
                        )
                    })}
                </ul>

                <p>
                    <button className={styles.bouncy} onClick={handleLoadMore}>Load More</button> {/* Button designed inspired from https://fdossena.com/?p=html5cool/buttons/i.frag */}
                </p>

            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}