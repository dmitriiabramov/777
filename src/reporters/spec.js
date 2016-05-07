// @flow
/* eslint-disable no-console */

import chalk from 'chalk';
import invariant from '../invariant';

import type {DispatcherData, DispatcherEvent, DispatcherObject} from '../types';
let indent = 0;

function getIndent() {
  return Array(indent + 1).join('  ');
}

let errors = [];

export default function(
  event: DispatcherEvent,
  object: ?DispatcherObject,
  data: ?DispatcherData
): void {
  switch (event) {
  case 'suite_start':
    invariant(object);
    console.log(getIndent() + object.name);
    indent += 1;
    break;

  case 'test_fail':
    invariant(object);
    console.log(getIndent() + chalk.red('✘'), object.name);
    invariant(data && data.error);
    errors.push({object, error: data.error});
    break;

  case 'test_pass':
    invariant(object);
    console.log(getIndent() + chalk.green('✔'), object.name);
    break;

  case 'suite_end':
    indent -= 1;
    break;

  case 'test_skip':
    invariant(object);
    console.log(getIndent() + chalk.yellow('•', object.name));
    break;

  case 'end':
    errors.forEach(({object, error}) => {
      console.log(object.name + ':');
      console.log(chalk.red(error.stack));
    });
  }
}