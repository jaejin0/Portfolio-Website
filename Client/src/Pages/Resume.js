import resumePDF from "../Assets/JaejinCha_Resume.pdf"

function Resume() {

    return (
        <object data={ resumePDF } type="application/pdf" width="100%" height="100%">
            <p>Unable to display PDF file. <a href={ resumePDF }>Download</a> instead.</p>
        </object>
    )
}

export default Resume