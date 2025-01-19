function Table({rows, isClickable, path}){
    if (!rows || rows.length === 0) {
        return <p>No data available</p>;
    }

    const headers = Object.keys(rows[0]);

    const formatHeader = (header) =>
        header
            .replace(/([A-Z])/g, " $1") // Insert space before uppercase letters
            .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter

    return(
        <table className="TableFullWidth">
            <thead>
                <tr>
                    {headers.map((header,index) => (
                        <th>{formatHeader(header)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header, cellIndex) => (
                                <td key={cellIndex}>
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default Table;