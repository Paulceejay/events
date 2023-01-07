import { getFeaturedEvents } from "../dummy-data"

const HomePage = () => {
    const featuredEvents = getFeaturedEvents()

    return(
        <div>
            <h1>home page</h1>
        </div>
    )
}

export default HomePage