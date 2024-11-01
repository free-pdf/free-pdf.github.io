function sortNotes() {
    const sortOption = document.getElementById("sortNotes").value;
    const notesList = document.getElementById("notesList");
    const notes = Array.from(notesList.getElementsByClassName("col"));

    notes.sort((a, b) => {
        if (sortOption === "date") {
            const dateA = new Date(a.querySelector("ul li:nth-child(1) strong").nextSibling.nodeValue.trim());
            const dateB = new Date(b.querySelector("ul li:nth-child(1) strong").nextSibling.nodeValue.trim());
            return dateB - dateA;
        } else if (sortOption === "size") {
            const sizeA = parseFloat(a.querySelector("ul li:nth-child(2) strong").nextSibling.nodeValue.trim());
            const sizeB = parseFloat(b.querySelector("ul li:nth-child(2) strong").nextSibling.nodeValue.trim());
            return sizeB - sizeA;
        }
    });

    notes.forEach(note => notesList.appendChild(note)); // Re-append sorted notes
}
