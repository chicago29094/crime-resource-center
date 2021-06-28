import { Route } from 'react-router-dom'
import About from "../About/About"
import Contribute from "../Contribute/Contribute"
import Hero from "../Hero/Hero"
import ArrestsSearchForm from "../ArrestsSearchForm/ArrestsSearchForm"
import CrimesSearchForm from "../CrimesSearchForm/CrimesSearchForm"
import SearchResults from "../SearchResults/SearchResults"

export default function MainContent(props) {

    return (
        <main>
            <Route path="/" exact component={Hero} />
            <Route path="/about" exact component={About} />
            <Route path="/contribute" exact component={Contribute} />

            <Route path="/crimes" exact>
                <CrimesSearchForm />
                <SearchResults />
            </Route>
                
            <Route path="/arrests" exact>
                <ArrestsSearchForm />
                <SearchResults />
            </Route>

        </main>
    )

}

