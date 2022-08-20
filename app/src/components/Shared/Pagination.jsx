import { Suspense } from "react"
import Pagination from "react-js-pagination"

const Paginator= (props) => {
    return (
        <div className="d-flex justify-content-center mx-2 pagination" >
              <Suspense fallback={<div>Loading...</div>}>
              <Pagination 
                activePage={props.activePage} 
                onChange={props.onChange}
                itemsCountPerPage={props.itemsCountPerPage}
                totalItemsCount={props.totalItemsCount}
                pageRangeDisplayed={props.pageRangeDisplayed}
                hideDisabled={props.hideDisabled}
                itemClass="page-item"
                linkClass="page-link"
                />
              </Suspense>
        </div>
    )
}

export default Paginator