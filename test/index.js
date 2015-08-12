/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2015 eBay Software Foundation                                │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
/*global describe, it, beforeEach, afterEach*/

'use strict';


var test = require('tap').test,
  path = require('path'),
  Dust = require(path.resolve(__dirname, '..')),
  dust = Dust({}),
  fs = require('fs');

test('construx-dustjs', function (t) {

    t.test('processes a good dustjs file', function (t) {
        t.plan(1);
        //get good star file
        fs.readFile(path.resolve(__dirname, 'templates/good.dust'), function (err, data) {
            dust(data, {paths: '', context: {name: 'good.js'}}, function (err, compiled) {
                console.log(compiled);
                t.equal('(function(dust){dust.register("good.js",body_0);function body_0(chk,ctx){return chk.w("{good/}");}body_0.__dustBody=!0;return body_0}(dust));', compiled);
                t.end();
            });

        });

    });

    t.test('processes a bad dustjs file', function (t) {
        t.plan(1);
        //get bad star file
        fs.readFile(path.resolve(__dirname, 'templates/bad.dust'), function (err, data) {
            dust(data, {paths: '', context: {name: 'bad.js'}}, function (err, compiled) {
                t.ok(err.name === 'SyntaxError');
                t.end();
            });

        });

    });

});