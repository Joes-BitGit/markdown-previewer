// continue from user story #4
import React, { Component } from "react";

// Marked lets you convert Markdown into HTML.
// Markdown is a simple text format whose goal is to be very easy to read and write,
// even when not converted to HTML.
import marked from "marked";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: placeholder,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div id="wrapper">
        <form>
          <label>
            editor:
            <textarea
              name="editor"
              id="editor"
              cols="40"
              rows="20"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div
          dangerouslySetInnerHTML={{ __html: marked(this.state.value) }}
          id="preview"
        />
      </div>
    );
  }
}

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

let placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Google Logo](https://www.google.com/images/errors/logo_sm.gif)
`;

export default App;
