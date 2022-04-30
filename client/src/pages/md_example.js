import MarkdownEditor from '@uiw/react-markdown-editor';
import React, { useState } from 'react';

export default function MdEx() {
    const [markdown, setMarkdown] = useState("");
    return (
        <MarkdownEditor height="100vh"
            value={markdown} visible={true}
            onChange={(editor, data, value) => setMarkdown(value)}
        />
    );
}







