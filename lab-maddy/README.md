![cf](http://i.imgur.com/7v5ASc8.png) lab 25 - Tree Data Structure
====
#### Project Description


####  Documentation  
  * in your README, write documentation for you data structures
  * your documentation should includes code block usage examples
  * provide instructions for:
    * installing and using your data structure
    * running any command line interface
    * accessing each method
    * running your tests


## Requirements  
#### Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include  
  * [x]**README.md** -- with a documentation about your lab
  * [x]**.gitignore** -- with a robust .gitignore
  * [x]**.eslintrc** -- with the class .eslintrc file
  * [x]**.eslintignore** -- with the class .eslintignore
  * [x]**.package.json** -- with all dependencies and dev-dependencies
  * [x]**lib/** -- directory for holding your programs helper modules
  * [x]**test/** -- directory for holding your programs unit and integration tests

#### Testing  
  * write at least three test assertions for each constructor method
  * organize your tests into appropriate describe/it blocks for test output readability


#### Feature Tasks  
  1.  use the node fs module to read an HTML document into a buffer (minimal.html => found in the /assets dir)

  2.  parse the buffer and use the root `<html>` element, subsequent HTML tags, and their text content to build a tree data structure

    * hint: you will need to refactor your node to allow a different type of data to be stored in the `.value` property. The remainder of the node should not change
      * ```javascript
          Tree = Node {
            value: {
              eleName: 'xxx',
              textContent: 'yyy' (can be empty string??)
            },
              children: [{Node}, {Node}, ...]
            }
          }
        ```

## Bonus Points:
  * 2pts each
  * implement the ability to parse both classes & ids; and any other attribute nodes you would like to consider
    * there is a test file in /assets dir called stretch.html
