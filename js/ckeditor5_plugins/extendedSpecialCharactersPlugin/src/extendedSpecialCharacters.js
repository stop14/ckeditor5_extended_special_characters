/**
 * @file Base for the Extended Special Characters plugin
 * Note that no corresponding Editor View plugin is required in this case.
 */

import ExtendedSpecialCharactersUI from './extendedSpecialCharactersUI';
import { Plugin } from 'ckeditor5/src/core';

export default class ExtendedSpecialCharacters extends Plugin {
  static get requires() {
    return [ExtendedSpecialCharactersUI];
  }
}
