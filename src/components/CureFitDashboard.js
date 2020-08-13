import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

import HLSVideo from "./HLSVideo";
import NeuButton from "./NeuButton";

import { format_seconds } from "../functions/createPlayList";
import "../css/app.css";

import * as curefit_constants from "../constants/curefit_constants";
const video_url = curefit_constants.video_url;

class PreviewVideo extends Component {
  render() {
    const { src, name } = this.props;
    return (
      <div>
        <div
          style={{
            position: "absolute",
            height: "20%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: "white"
          }}
        >
          {name}
        </div>
        <HLSVideo src={src} muted={true} loop={true} autoPlay={true} />
      </div>
    );
  }
}

class PreviewThumbnail extends Component {
  render() {
    const { exc_info, exc_time, onClickDelete } = this.props;
    return (
      <div
        style={{
          display: "flex",
          margin: "0 5px",
          width: "25%",
          position: "relative"
        }}
      >
        <img
          src={exc_info.thumbnail}
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          onDragStart={e => {
            e.preventDefault();
          }}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            height: "50%",
            width: "40%",
            bottom: 0,
            right: 0
          }}
          onClick={() => {
            onClickDelete();
          }}
        >
          <NeuButton>
            <DeleteIcon style={{ color: "white" }} />
          </NeuButton>
        </div>

        <div
          style={{
            position: "absolute",
            height: "50%",
            width: "40%",
            bottom: 0,
            left: 0,
            backgroundColor: "white",
            borderRadius: 10
          }}
        >
          {exc_time}
        </div>
      </div>
    );
  }
}

class CureFitDashboard extends Component {
  state = {
    selected_key: null,
    sec: 10,
    PlusClassName: "neu",
    added_workout: [],
    total_time: 0,
    rounds: 1,

    exc_data: {},
    exc_list: []
  };

  changeSelectedKey = key => {
    if (this.state.selected_key === key) {
      this.setState({ selected_key: null, sec: 10 });
    } else {
      this.setState({ selected_key: key });
    }
  };

  addWorkout = () => {
    const {
      selected_key,
      sec,
      added_workout,
      total_time,
      exc_data
    } = this.state;
    const workout = {
      id: uuidv4(),
      w_id: selected_key,
      time: sec
    };
    this.setState({
      added_workout: [...added_workout, workout],
      total_time: total_time + sec + exc_data[selected_key].offset,
      selected_key: null,
      sec: 10
    });
  };

  onClickDelete = id => {
    const { added_workout } = this.state;
    this.setState({
      added_workout: added_workout.filter(item => item.id !== id)
    });
  };

  componentDidUpdate() {
    const { exc_data, exc_list } = this.state;
    if (this.props.exc_data !== exc_data || this.props.exc_list !== exc_list) {
      this.setState({
        exc_data: this.props.exc_data,
        exc_list: this.props.exc_list
      });
    }
  }

  componentDidMount() {
    // get_exc_data().then(response => {
    //   if (response.status) {
    //     const exc_data = response.exc_data ? response.exc_data : [];
    //     const exc_list = response.exc_list ? response.exc_list : [];
    //     this.setState({ exc_data: exc_data, exc_list: exc_list });
    //   }
    // });
  }
  render() {
    const { onClickStart } = this.props;
    const { selected_key, exc_list, exc_data } = this.state;

    const vList = exc_list.slice(0, 4);
    const hList = exc_list.slice(4, 7);
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(66, 66, 83, 0.9)",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            height: "100%",
            width: "100%"
          }}
        >
          <video
            src={video_url}
            style={{ height: "100%", width: "100%" }}
            loop
            muted
            autoPlay
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "2%",
            left: "2%",
            height: "96%",
            width: "96%",
            display: "flex"
          }}
        >
          <div
            style={{
              height: "100%",
              width: "25%",

              display: "flex",
              flexDirection: "column",
              flex: 1,
              position: "relative"
            }}
          >
            {vList.map(item => {
              return (
                <div
                  key={item.key}
                  style={{
                    position: "relative",

                    width: "calc(100% - 10px)",
                    margin: 5,

                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  onClick={() => this.changeSelectedKey(item.key)}
                >
                  <div
                    className={
                      item.key === selected_key ? "selected-neu" : "neu"
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: 10,
                      overflow: "hidden",
                      height: "90%",
                      width: "90%",
                      transform:
                        item.key === selected_key
                          ? "translate(-1px, -1px)"
                          : null
                    }}
                  >
                    <PreviewVideo
                      src={exc_data[item.key].file}
                      name={exc_data[item.key].name}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              height: "100%",
              width: "75%"
            }}
          >
            <div
              style={{
                height: "25%",
                width: "100%",

                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                position: "relative"
              }}
            >
              {hList.map(item => {
                return (
                  <div
                    key={item.key}
                    style={{
                      position: "relative",

                      height: "calc(100% - 10px)",
                      margin: 5,

                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onClick={() => this.changeSelectedKey(item.key)}
                  >
                    <div
                      className={
                        item.key === selected_key ? "selected-neu" : "neu"
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: 10,
                        overflow: "hidden",
                        height: "90%",
                        width: "90%",
                        transform:
                          item.key === selected_key
                            ? "translate(-1px, -1px)"
                            : null
                      }}
                    >
                      <PreviewVideo
                        src={exc_data[item.key].file}
                        name={exc_data[item.key].name}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                height: "60%",
                width: "100%",
                display: "flex",

                boxSizing: "border-box"
              }}
            >
              {selected_key && (
                <div
                  style={{
                    height: "calc(100% - 10px)",
                    width: "calc(100% - 10px)",
                    borderRadius: 10,
                    margin: 5,
                    position: "relative",

                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <div className="neu" />
                  <div
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      display: "flex"
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 10,
                        overflow: "hidden",
                        height: "calc(100% - 10px)",
                        width: "calc(75% - 10px)",
                        margin: 5
                      }}
                    >
                      <PreviewVideo
                        key={`${selected_key}_main`}
                        src={exc_data[selected_key].file}
                      />
                    </div>
                    <div
                      style={{
                        borderRadius: 10,
                        overflow: "hidden",
                        height: "calc(100% - 10px)",
                        width: "calc(25% - 10px)",
                        margin: 5,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative"
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          height: "15%",
                          width: "40%",
                          margin: 5
                        }}
                      >
                        <NeuButton>
                          <AddIcon
                            style={{ width: "100%", height: "100%" }}
                            onClick={() => {
                              this.setState({
                                sec: Math.min(this.state.sec + 5, 40)
                              });
                            }}
                          />
                        </NeuButton>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          height: "15%",
                          width: "40%",
                          margin: 5,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        {this.state.sec}
                        {"\nSeconds"}
                      </div>
                      <div
                        style={{
                          position: "relative",
                          height: "15%",
                          width: "40%",
                          margin: 5
                        }}
                      >
                        <NeuButton>
                          <RemoveIcon
                            style={{ width: "100%", height: "100%" }}
                            onClick={() => {
                              this.setState({
                                sec: Math.max(this.state.sec - 5, 5)
                              });
                            }}
                          />
                        </NeuButton>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          height: "15%",
                          width: "70%",
                          margin: 5,
                          marginTop: 20
                        }}
                      >
                        <NeuButton>
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                            onClick={this.addWorkout}
                          >
                            Add
                          </div>
                        </NeuButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {this.state.added_workout.length > 0 && (
              <div
                style={{
                  height: "calc(15% - 10px)",
                  width: "calc(100% - 10px)",
                  margin: 5,
                  position: "relative",
                  display: "flex",
                  flex: 1,

                  borderRadius: 10
                }}
              >
                <div className="neu" />
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flex: 1,
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      margin: 5,
                      width: "calc(60% - 10px)",
                      height: "calc(100% - 10px)",
                      position: "relative"
                    }}
                  >
                    {this.state.added_workout.map(item => {
                      return (
                        <PreviewThumbnail
                          key={item.id}
                          exc_info={exc_data[item.w_id]}
                          exc_time={item.time}
                          onClickDelete={() => this.onClickDelete(item.id)}
                        />
                      );
                    })}
                  </div>
                  <div
                    style={{
                      width: "20%",
                      height: "100%",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 10
                    }}
                  >
                    <div
                      style={{
                        width: "30%",
                        height: "50%",
                        position: "relative"
                      }}
                    >
                      <NeuButton>
                        <RemoveIcon
                          style={{ width: "100%", height: "100%" }}
                          onClick={() => {
                            this.setState({
                              rounds: Math.max(this.state.rounds - 1, 1)
                            });
                          }}
                        />
                      </NeuButton>
                    </div>
                    <div style={{ flex: 1, position: "relative" }}>
                      {this.state.rounds}
                    </div>
                    <div
                      style={{
                        width: "30%",
                        height: "50%",
                        position: "relative"
                      }}
                    >
                      <NeuButton>
                        <AddIcon
                          style={{ width: "100%", height: "100%" }}
                          onClick={() => {
                            this.setState({
                              rounds: Math.min(this.state.rounds + 1, 5)
                            });
                          }}
                        />
                      </NeuButton>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "20%",
                      height: "100%",
                      position: "relative"
                    }}
                  >
                    <div
                      style={{
                        width: "calc(100% - 10px)",
                        height: "calc(50% - 10px)",
                        margin: 5,
                        position: "relative"
                      }}
                    >
                      {`Time: ${format_seconds(
                        this.state.rounds * this.state.total_time
                      )}`}
                    </div>
                    <div
                      style={{
                        width: "calc(100% - 10px)",
                        height: "calc(50% - 5px)",
                        margin: "2.5px 5px",
                        position: "relative"
                      }}
                      onClick={() => {
                        onClickStart &&
                          onClickStart([
                            {
                              group: 1,
                              rep: this.state.rounds,
                              activity: [
                                ...this.state.added_workout,
                                { id: uuidv4(), w_id: "rest", time: 15 }
                              ]
                            }
                          ]);
                      }}
                    >
                      <NeuButton>
                        <div>Start</div>
                      </NeuButton>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CureFitDashboard;
