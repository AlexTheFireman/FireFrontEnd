import React from "react";

export default function File () {

        return (
            <div>
                <form method="POST" encType="multipart/form-data" action="/api/upload">
                    <table>
                        <tr>
                            <td>File to upload:</td>
                            <td><input type="file" name="file"/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Upload"/></td>
                        </tr>
                    </table>
                </form>
            </div>
        )

}


