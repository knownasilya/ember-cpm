## Ember-CPM

Computed Property Macros for Ember

### Requirements

Ember. Versions between 0.9.8 and 1.1 should work fine.

### Installation

Just add `index.js` to your page after Ember but before your app.

### Provided Macros

 * `among` -- returns `true` if the original value is among the given literals
   (testing using `===`)
 * `encodeURIComponent` -- calls `encodeURIComponent` on the original value
 * `encodeURI` -- calls `encodeURI` on the original value
 * `fmt` -- pass the original value into a format-string
 * `htmlEscape` -- escapes the original value with
 * `ifNull` -- fall back on a default value
   `Handlebars.Utils.escapeExpression` *and* wraps the result in a
   `Handlebars.SafeString` (since it's now safe)
 * `notAmong` -- inverse of `among`
 * `notEqual` -- inverse of the built-in `equal` macro
 * `notMatch` -- inverse of the built-in `match` macro
 * `promise` -- wraps the original value in an already-resolved promise
 * `safeString` -- wraps the original value in a `Handlebars.SafeString`

### Examples

```javascript
Person = Ember.Object.extend({

  name: null,

  handedness: null,

  handle: EmberCPM.Macros.ifNull('name', 'Anonymous'),

  greeting: EmberCPM.Macros.fmt('name', '%@ says, "Hello!"'),

  canUseLeftHand: EmberCPM.Macros.among('handedness', 'left', 'ambidextrous'),

  notNamedJohn: EmberCPM.Macros.notMach('name', /\bJohn\b/)

});
```
### `Ember.computed`

If you would prefer to use `Ember.computed.{macro}` instead of
`EmberCPM.Macros.{macro}` (for the sake of uniform access), simply call
`EmberCPM.install()` before your application code.
