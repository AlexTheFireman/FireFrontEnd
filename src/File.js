import React, { Component } from "react";

export class File extends Component {

    render(){
        return (
            <div>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
                    <div className="example-2">
                        <div className="form-group">
                            <input type="file" name="file" id="file" className="input-file"></input>
                                <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                                    <i className="icon fa fa-check"></i>
                                    <span className="js-fileName">Загрузить файл</span>
                                </label>
                        </div>
                    </div>
            </div>
        )
    }
}

export default File