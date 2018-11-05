import React, {Component} from 'react';

class TestModal extends Component {

  constructor(props) {
    super();
    this.state = {}
  }

  mainArea = (event) => {
    event.stopPropagation();
  }

  removeModalHandler = (e) => {
    this.props.remove(e, undefined);
  }

  render() {

    return (<div>
      {
        this.props.show
          ? <div>
              <div className="showmodal">
                <div className="backdrop"></div>
                <div className="modal animated-modal fadeInDown" id="ModalPostJob" role="dialog" aria-labelledby="ModalPostJob" aria-hidden="true" onClick={this.removeModalHandler}>
                  <div className="modal-dialog modal-dialog-centered cus-modal modal-lg" role="document" onClick={this.mainArea}>
                    <div className="modal-content code-editor">
                      <div className="modal-body">
                      Hello
                        </div>
                      <div className="modal-footer py-0 json-editor-footer">
                        <div className="row w-100 mx-auto modal-input">
                          <div className="col-12 col-sm-12 col-md-12 col-xl-2 mb-1">
                            <button className="btn btn-info btn-fill w-100 border-0" disabled={this.state.disabledSave} onClick={this.storeJsonHandler}>Save</button>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-xl-2 mb-1">
                            <button className="btn btn-info btn-fill w-100 border-0" disabled={this.state.disabledCancel} onClick={this.removeModalHandler}>Cancel</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : null
      }
    </div>)
  }
}

export default TestModal;
