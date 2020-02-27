import React, { Component } from "react";

export class File extends Component {

    render(){
        return (
            <div>
                <form method="POST" action="/upload" enctype="multipart/form-data">
                <input type="file" name="file" /><br/>
               <input type="submit" value="Submit" />
            </form>

             /*   <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
                    <div className="example-2">
                        <div className="form-group"  >
                            <input type="file" name="file" id="file" className="input-file" ></input>
                                <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                                    <i className="icon fa fa-check"/>
                                    <span className="js-fileName">Загрузить файл</span>
                                    <input type="submit" value="Submit" />
                                </label>
                        </div>
                    </div>*/

            </div>
        )
    }


}

export default File