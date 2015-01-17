# @bitfyre Sudoku

A playable webbased sudoku UI.

My solution is a gulp base project that uses node-sass at it's preprocessor.
It also uses jade as the html templating language. I chose gulp and node-sass
because the are both light-weight and fast, and I am quite familiar with both
of them at this point. I chose jade primarily for its aesthetic simplicity. A
trade of to using node-sass is that it currently cannont run Compass, which
does limit use with a number of sass libraries out there. For this project
though I didn't feel Compass would add much to the development process.

This example as it stands has a fairly simple html/jade structure. There is a
main index.jade file with a partials directory that contain the smaller pieces
that I might have reused in the JavaScript in the future. The css/sass is where
I spent the bulk of my time. It is organized using a SMACSS style architecture.
In this case have a base, modules, and layouts directory. Base contains things
like resets or normalizers, mixins, and some very simple global styling. Layout
contains layout utility classes, and would contain things like the grid classes
in a larger project. The modules directory will often contain the majority of
the sass code. The are intended to be small reusable block of css that are used
to assemble to patterns of the site. In these modules my general rule of thumb
is, if it's over 100 lines in needs to be broken down. The class name/formatting
convention I use is something I call for now the Component Naming Convention.
It is a convention I developed at Evernote that is heavily inspired by BEM and
Suit CSS.

Since one of the primary things Grace discussed with me for this role was
creating a pattern library, I spent most of my time working through how I think
about such things. This meant I didn't spend any time on the JavaScript
interactions. Things I would have liked to have done there, first off would be
to add the ability to add a number to and empty field. The next thing would be
to add the ability to verify the entries were correct. From there I would add
the ability to add a list of numbers the user thinks might be potential
solution. The final thing I would add would be a board generator, ideally
storing them in localstorage.
