import React from "react";

export default function File (props) {

    return (
        <div align="center">
            <form method="POST" encType="multipart/form-data" action="/api/upload">
                <table>
                    <tr>
                        <td>Выберите файл:</td>
                        <td><input type="file" name="file"/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Загрузить"/></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}


