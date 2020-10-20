import React, {Component} from "react";

class File extends Component {
    constructor(props) {
        super(props);
    }

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
        const status = {
            FILE_ALREADY_EXIST: "Файл с таким именем уже существует в базе данных",
            SUCCESS: 'winter',
            CHECK_FILE_EXTENSION: 'spring',
            NO_FILE_SELECTED: 'autumn'
        };

        let warning;

        switch (this.state.responseFromServer) {
            case status.FILE_ALREADY_EXIST:
                warning = <h1>status.FILE_ALREADY_EXIST</h1>;
                break;
            case status.SUCCESS:
                warning = <h1>Файл успешно загружен</h1>;
                break;
            case status.CHECK_FILE_EXTENSION:
                warning = <h1>Принимаются файлы только с расширением "xlsx" или "xls".</h1>;
                break;
            case status.NO_FILE_SELECTED:
                warning = <h1>Файл не выбран</h1>;
                break;
            default:
                break;
            }
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
                        <td>{warning}</td>
                    </div>
                );
        }
    }

export default File




