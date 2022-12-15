import { Helmet } from "react-helmet";

export const ErrorPage = () => {    
    return (
        <div>
            <Helmet>
                <title>SOSA - 404</title>
            </Helmet>
            <main className="h-screen w-screen bg-slate-200 flex flex-col justify-center items-center text-center space-y-3 space-x-3">
                <h1 className="text-7xl text-slate-700 font-extrabold">404</h1>
                <h1 className="text-4xl text-black">Seite nicht gefunden</h1>
                <p className="text-2xl text-slate-700">Sie wurde möglicherweise entfernt, umbenannt oder
                    existiert von vornherein nicht.
                </p>
                <a href="/">
                    <button type="button" className="mt-4 bg-slate-600 text-sm text-white font-semibold rounded-md hover:bg-slate-700 active:bg-slate-800 focus:outline-none focus:ring focus:ring-stone-500 px-5 py-2">Homepage</button>
                </a>
            </main>
        </div>
    )
}