import {Helmet} from "react-helmet"

const ComingSoon = () => {
  return (
    <div className="App">
      <Helmet>
        <title>SOSA - Coming Soon</title>
        <meta name="description" content="SOSA application" />
      </Helmet>
      <div className="container">
        <div className="logo">SOSA</div>
        <div className="info">
          Die Website wird derzeit überarbeitet
          <h1 className="capitalize">Marvin ist der geilste. Wir sind demnächst für Sie in <span className="color">Amorbach</span> verfügbar</h1>
          <h2 className="capitalize margin-top color">shared office solutions amorbach</h2>
          <div className="more-info margin-top">
            Weitere Informationen
            <button type="button">
              <a href="https://github.com/JLS-DEV-lab/Shelly-based-Heating-control">
                <div className="link-arrow" />
              </a>
            </button>
          </div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
        
    </div>
  );
}

export default ComingSoon;