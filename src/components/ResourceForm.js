import React, { Component } from 'react';

class ResourceForm  extends Component {
    state = 
        {posterName: "",
        resourceAuthor: "",
        cohort: "",
        title: "",
        };

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
        })
    }

    render() {
    return (
        <div className="ResourceForm">
            <form style={styles.form}>
                <input
                 style={styles.input}
                 id="posterName"
                 type="text"
                 placeholder="Your Name"
                 value={this.state.posterName}
                 onChange={this.handlechange}
                 />
                <input
                 style={styles.input}
                 id="resourceAuthor"
                 type="text"
                 placeholder="Resource Holder"
                 value={this.state.resourceAuthor}
                 onChange={this.handlechange}
                 />
                <input
                 style={styles.input}
                 id="cohort"
                 type="text"
                 placeholder="Cohort #"
                 value={this.state.cohort}
                 onChange={this.handlechange}
                 />
                <input
                 style={styles.input}
                 id="title"
                 type="text"
                 placeholder="Resource Title"
                 value={this.state.title}
                 onChange={this.handlechange}
                 />
                 <button type="Submit">Submit</button>
            </form>
        </div>
    );
 }
}

const styles = {
    form: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "20%",
        marginLeft: "20%",
        flexDirection: "column",
    },
    input: {
        width: "60%",
        height: 32,
    },
};

export default ResourceForm;