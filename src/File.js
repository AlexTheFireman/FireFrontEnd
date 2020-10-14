import React, {Component} from "react";

class File extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        selectedFile: null,
        responseFromServer: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        fetch("/api/upload", {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(response=>this.setState({responseFromServer:response})
             
            )}

    render() {
        const status = this.state.responseFromServer;
        let warning;

        if (status === "Check") {
            warning = <h1>Принимаются файлы только с расширением "xlsx" или "xls"</h1>;
        } else if (status === "FileAlreadyHas") {
            warning = <h1>Файл с таким именем уже существует в базе данных</h1>;
        } else if (status === "Check") {
            warning = <h1>Проверьте, пожалуйста, расширение файла</h1>;
        } else if (status === "Success") {
            warning = <h1>Файл успешно загружен</h1>;
        } else {
            warning = <h1>Файл не выбран</h1>;
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
                        <td><button onClick={this.fileUploadHandler}>Загрузить</button></td>
                    </tr>
                </table>
                <td>{warning}</td>
             </div>
        );
    }
}

export default File


   

