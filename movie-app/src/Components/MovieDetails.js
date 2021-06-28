//........................................................................
// Things we need to do for Friday 25th

// 1. Connect the correct buttons to the toggle function in the searched file
// 2. Style the modal and its container
// 3. Make the content of the modal dynamic based on which card was clicked
// 4. Cross reference the ID with the movie list 

//........................................................................

const MovieDetails = () => {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-poster">

                </div>
                <div className="modal-info">
                    <div className="info-title"></div>
                    <div className="info-tags"></div>
                    <div className="info-actors"></div>
                    <div className="info-plot"></div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;