# rs-target

This simple directive allows you to optionally specify a "target" attribute on an element depending on the code in the value of the directive's attribute. If it evaluates to falsy, the "target" attribute is removed, otherwise the resultant value is assigned.

It's simple, but it's a good illustration of how an attribute's evaluated value can be watched and how the element's attributes can be changed dynamically with the change in the evaluated attribute code.

To use it just add the rs-target attribute with code as the value that will be evaluated to falsy or to the desired string. For example:

``<a href="#" rs-target="link.newPage ? '_blank' : false">Click Me</a>``

If link.newPage is non-empty, the element will be assigned attribute target="_blank" however if link.newPage is empty, the element will have no "target" attribute at all.
