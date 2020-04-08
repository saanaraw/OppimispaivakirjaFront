import React from "react"

function Sidebar() {
    return (
        <div className="sidebar">
            <a href="#" className="list-group-item list-group-item-action">
                Kaikki aiheet
            </a>
            <a href="#" className="list-group-item list-group-item-action">Oppitunti 1</a>
            <a href="#" className="list-group-item list-group-item-action">Aihe 2 tietokannasta</a>
            <a href="#" className="list-group-item list-group-item-action">Aihe 3</a>
            <a href="#" className="list-group-item list-group-item-action disabled">Aihe 4</a>
        </div>
    )
}
export default Sidebar