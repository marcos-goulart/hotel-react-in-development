import { SearchForm } from "./SearchForm";
import { Main } from "./styles";
export function Banner() {
  return (
    <Main className="background-banner">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <SearchForm/>
          </div>
        </div>
      </div>
    </Main>
  )
}
