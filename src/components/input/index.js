// using the new hooks API
function Comp(props) {
    const { isLoading, data } = props;
    useEffect(() => {
        if (data) {
            var name = document.getElementById('name').value;
        }
    }, [data]) // this diff is necessary

    if (isLoading) return <div>isLoading</div>
    return (
        <div id='name'>Comp</div>
    );
}



function Comp(props) {
    const { isLoading, data } = props;
    useEffect(() => {
        if (data) {
            var name = document.getElementById('name').value;
        }
    }, [data]) // this diff is necessary

    if (isLoading) return <div>isLoading</div>
    return (
        <div id='name'>Comp</div>
    );
}


const BrowserInfo = () => {
    const greeting = 'Hello Function Component!';

    return <Headline value={greeting} />;
};

const Headline = ({ value }) =>
    <h1>{value}</h1>;

export default BrowserInfo;

//===================================================================


const BrowserInfo = () => {
    document.getElementById("cockieEnabled").innerHTML =
        "cookiesEnabled is " + navigator.cookieEnabled;

    document.getElementById("applicationName").innerHTML =
        "navigator.appName is " + navigator.appName;

    document.getElementById("applicationCodeName").innerHTML =
        "navigator.appCodeName is " + navigator.appCodeName;

    document.getElementById("browserEngine").innerHTML =
        "navigator.product is " + navigator.product;

    document.getElementById("version").innerHTML = navigator.appVersion;

    document.getElementById("agent").innerHTML = navigator.userAgent;

    document.getElementById("browserPlattform").innerHTML = navigator.platform;

    document.getElementById("browserLanguage").innerHTML = navigator.language;

    document.getElementById("onlineStatus").innerHTML = navigator.onLine;

    document.getElementById("javaEnabled").innerHTML = navigator.javaEnabled();


    return (
        <div>
            <CockieEnabled />
            <ApplicationName />
            <ApplicationCodeName />
            <BrowserEngine />
            <Version />
            <Agent/>
            <BrowserPlattform />
            <BrowserLanguage />
            <OnlineStatus />
            <JavaEnabled />
        </div>
    )
};

const CockieEnabled = ({ }) => <p id="cockieEnabled"></p>
const ApplicationName = ({ }) => <p id="applicationName"></p>
const ApplicationCodeName = ({ }) => <p id="applicationCodeName"></p>
const BrowserEngine = ({ }) => <p id="browserEngine"></p>
const Version = ({ }) => <p id="version"></p>
const Agent = ({ }) => <p id="agent">Cockies</p>
const BrowserPlattform = ({ }) => <p id="browserPlattform"></p>
const BrowserLanguage = ({ }) => <p id="browserLanguage"></p>
const OnlineStatus = ({ }) => <p id="onlineStatus"></p>
const JavaEnabled = ({ }) => <p id="javaEnabled">javaEnabled</p>

export default BrowserInfo;