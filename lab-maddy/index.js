'use strict';

// 1.  use the node fs module to read an HTML document into a buffer (minimal.html => found in the /assets dir)
//
// 2.  parse the buffer and use the root `<html>` element, subsequent HTML tags, and their text content to build a tree data structure
//
//   * hint: you will need to refactor your node to allow a different type of data to be stored in the `.value` property. The remainder of the node should not change
//     * ```javascript
//         Tree = Node {
//           value: {
//             eleName: 'xxx',
//             textContent: 'yyy' (can be empty string??)
//           },
//             children: [{Node}, {Node}, ...]
//           }
//         }
//       ```

const fs = require('fs');
