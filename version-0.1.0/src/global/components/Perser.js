import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import parse, {domToReact} from 'html-react-parser';

const html = `
 <p id="main>
    <span class="prettify">
        Keep me and make me pretty!
    </span>
</p>
`;

const options = {
    replace: ({attribs, children}) => {
        if(!attribs) return;

        if(attribs.id === 'main'){
            return <h1 style={{fontSize: 42}}>{domToReact(children, options)}</h1>
        }

        if(attribs.class === 'prettify') {
            return (
                <span style={{color: 'hotpink'}}>
                    {domToReact(children, options)}
                </span>
            )
        }
    }
}

console.log(renderToStaticMarkup(parse(html, options)));

