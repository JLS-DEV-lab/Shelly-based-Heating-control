import { Helmet } from "react-helmet";

export const Hero= () => {
    return (
        <div>
            <Helmet>
                <title>SOSA - Home</title>
                <meta name="welcome" content="SOSA mainpage" />
            </Helmet>
            <div>
                <h1 className="text-3xl font-bold underline">Welcome Page</h1>
            </div>
        </div>
    )
}