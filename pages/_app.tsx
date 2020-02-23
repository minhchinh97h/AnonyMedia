import App, { AppContext } from 'next/app'
import { Store } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import makeStore from '../store';
import { TestAction } from '../reducers/action-interfaces';


const testAction: TestAction = {
    type: "_test"
}

interface AppProps {
    store: Store
}

class MyApp extends App<AppProps> {
    static async getInitialProps({ Component, ctx }: AppContext) {

        ctx.store.dispatch(testAction)

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default withRedux(makeStore)(MyApp)