import ShowDown from "showdown";

// This function converts the input markdown text to html text.
export default function getHTML(inputText) {
    // Showdown converter configurations.
    const converter = new ShowDown.Converter();
    converter.setOption("noHeaderId", true);

    // Convert to HTML text.
    const convertText = converter.makeHtml(inputText);

    // Remove extra spaces and newline.
    const htmlText = convertText
        .replace(/[\r\n]+/gm, "")
        .split(/[ ]+/)
        .join(" ");

    // Return HTML text.
    return htmlText;
}
