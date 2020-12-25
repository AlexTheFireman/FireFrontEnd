import React, {Component} from "react";

class File extends Component {

    state = {
        selectedFile: null,
        responseFromServer: null
    };

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    };

    fileUploadHandler = () => {
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        fetch("/api/upload", {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(response => this.setState({responseFromServer: response})
            )
    };

    render() {
              return (
                    <div align="center">
                        <table>
                            <tr>
                                <td>Выберите файл:</td>
                                <td><input type="file" onChange={this.fileSelectedHandler}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button onClick={this.fileUploadHandler}>Загрузить</button>
                                </td>
                            </tr>
                        </table>
                        <td>{this.state.responseFromServer}</td>
                    </div>
              );
        }
    }

export default File




