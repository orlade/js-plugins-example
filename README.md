# MultiGreet

MultiGreet demonstrates how to use the [js-plugins](https://github.com/easeway/js-plugins) NPM
package.

The purpose of MultiGreet is to print a greeting to a set of audience members. However the list of
audience members is not pre-defined, or even a program input: it is determined by connecting
**MultiGreet plugins**.

Each plugin implements an interface that returns the name of an audience member. At runtime,
MultiGreet scans for plugins that extend the `multigreet:audience` **extension point** and then
greets the aggregated audience by name.

Plugins are implemented in the three main ways:

1. Direct registration with the plugin manager in the host app (i.e. MultiGreet)
2. Packages in other directories (sibling and non-sibling)
3. Packages installed globally

MultiGreet registers all of these audiences, and then on connecting processes their return values.

## Usage

1. From the MultiGreet repository, run `npm install -g` to install globally.
2. Run `multigreet` to see who is in the audience.
3. Install the `plugin-planets` package globally by running `npm run installGlobal`.
4. Run `multigreet` again to see who is in the new audience.
5. If you like, run `npm uninstall -g js-plugins-example-planets` and try again.
