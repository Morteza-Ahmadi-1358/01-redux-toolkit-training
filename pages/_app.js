import { Store } from "@/redux/Store"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  )
}
