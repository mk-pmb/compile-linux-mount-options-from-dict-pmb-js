
<!--#echo json="package.json" key="name" underline="=" -->
compile-linux-mount-options-from-dict-pmb
=========================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Make a comma-separated list from mount options in a dictionary object.
<!--/#echo -->



API
---

This module exports one function:

### compile(opt)

Where `opt` are your mount options, as…
* a string: will be returned as-is.
* any false-y value except empty string: returns `'defaults'`.
* an array: returns all truthy elements from that array, `.join()`ed by `','`.
* or a dictionary object, the actual reason for this module.

Values supported in the dictionary are:

* `undefined` to ignore that entry
* A string
* A number
* `null` or `true` to add the option with neither `=` nor value.
* `false` to add the option with prefix `no` and neither `=` nor value.
* An array to specify an option multiple times.



Usage
-----

see [test/basics.mjs](test/basics.mjs)


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
