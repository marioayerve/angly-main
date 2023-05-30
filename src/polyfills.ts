/*
* BROWSER POLYFILLS
*/

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/features/reflect'  // Run `npm install --save classlist.js`.

/* Zone JS is required by Angular itself.*/
import 'zone.js';  // Included with Angular CLI.



/***************************************************************************************************
* APPLICATION IMPORTS
*/

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// Run `npm install --save intl`.
import 'intl';
import 'intl/locale-data/complete.js';
import 'intl/locale-data/jsonp/en.js';

if (typeof SVGElement.prototype.contains == 'undefined') {
    SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
}