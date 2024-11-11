export default function Pagination( props ) {
  var currentPage = props.currentPage  
  var totalPages = props.totalPages 
  var onPageChange = props.onPageChange 
  return (
    <>
      <div class="row">
        <div class="column large-12 " id={currentPage}>
          <nav class="pgn">
            <ul>
              <li>
                <a class="pgn__prev" href="#0" onClick={()=>{onPageChange(Number(currentPage)-1)}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                  </svg>
                </a>
              </li>
              {[...Array(totalPages)].map((e, i) => {
                    return (i+1 == currentPage  ? <li key={i}> 
                        <span class="pgn__num current">{i + 1}</span>
                      </li>: <li>
                      <a key={i} class="pgn__num" href="#0" onClick={()=>{onPageChange(i+1)}}>
                        {i + 1}
                      </a>
                    </li>)
                })}


              <li>
                <a class="pgn__next" href="#0" onClick={()=>{onPageChange(Number(currentPage)+1)}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
