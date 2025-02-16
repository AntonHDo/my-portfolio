"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import { CopyBlock, dracula } from "react-code-blocks";
import { useDarkMode } from "../hooks/DarkModeContext";

const UiComponentPage = () => {
    const { isDarkMode } = useDarkMode(); // Use the useDarkMode hook

    return (
        <div className={`${isDarkMode ? "bg-slate-800 text-slate-200" : "bg-slate-200 text-slate-800"}`}>
            <Box className="flex relative flex-col h-full w-full justify-center ">
                <Navbar />
                <div className={`${isDarkMode ? "bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800" : ""} flex flex-col justify-evenly items-center  py-20`}>

                    <h1 className="text-5xl pb-20">Custom Components</h1>
                    <div className="text-2xl pb-2">First Component</div>
                    <div className="flex-col w-full justify-evenly items-center ">
                        <div className="flex flex-wrap justify-evenly items-center p-6">
                            <div className="w-[600px] items-center text-center flex-initial">
                                hi
                            </div>
                            <div className="w-[600px] flex-initial self-center justify-self-center overflow-y-auto overflow-x-auto">

                                <CopyBlock
                                    text={`class HelloMessage extends React.Component {
        handlePress = () => {
            alert('Hello')
        }
        render() {
            return (
                <div>
                    <p>Hello {this.props.name}</p>
                    <button onClick={this.handlePress}>Say Hello</button>
                </div>
                );
            }
        }

    ReactDOM.render(
    <HelloMessage name="Taylor" />, 
    mountNode 
    );`}
                                    showLineNumbers={true}
                                    theme={dracula}
                                    wrapLines={true}
                                    codeBlock
                                    customStyle={{ flexShrink: 1 }}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Next line of code */}

                <div className={`${isDarkMode ? "bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800" : ""} flex flex-col justify-evenly items-center  py-20`}>

                    <div className="text-2xl pb-2">Second Component</div>
                    <div className="flex-col w-full justify-evenly items-center ">
                        <div className="flex flex-wrap justify-evenly items-center p-6">
                            <div className="w-[600px] items-center text-center flex-initial">
                                hi
                            </div>
                            <div className="w-[600px] flex-initial self-center justify-self-center overflow-y-auto overflow-x-auto">

                                <CopyBlock
                                    text={`class HelloMessage extends React.Component {
        handlePress = () => {
            alert('Hello')
        }
        render() {
            return (
                <div>
                    <p>Hello {this.props.name}</p>
                    <button onClick={this.handlePress}>Say Hello</button>
                </div>
                );
            }
        }

    ReactDOM.render(
    <HelloMessage name="Taylor" />, 
    mountNode 
    );`}
                                    showLineNumbers={true}
                                    theme={dracula}
                                    wrapLines={true}
                                    codeBlock
                                    customStyle={{ flexShrink: 1 }}
                                />
                            </div>
                        </div>
                    </div>

                </div>


                <div className={`${isDarkMode ? "bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800" : ""} flex flex-col justify-evenly items-center  py-20`}>

                    <div className="text-2xl pb-2">Third Component</div>
                    <div className="flex-col w-full justify-evenly items-center ">
                        <div className="flex flex-wrap justify-evenly items-center p-6">
                            <div className="w-[600px] items-center text-center flex-initial">
                                hi
                            </div>
                            <div className="w-[600px] flex-initial self-center justify-self-center overflow-y-auto overflow-x-auto">

                                <CopyBlock
                                    text={`class HelloMessage extends React.Component {
handlePress = () => {
alert('Hello')
}
render() {
return (
<div>
<p>Hello {this.props.name}</p>
<button onClick={this.handlePress}>Say Hello</button>
</div>
);
}
}

ReactDOM.render(
<HelloMessage name="Taylor" />, 
mountNode 
);`}
                                    showLineNumbers={true}
                                    theme={dracula}
                                    wrapLines={true}
                                    codeBlock
                                    customStyle={{ flexShrink: 1 }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </Box>
        </div>
    );
};
export default UiComponentPage;
