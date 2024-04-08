/**
 * @file defines InsertExtendedSpecialCharactersCommand, which is executed when the extendedSpecialCharacters
 * toolbar button is pressed.
 */
// cSpell:ignore simpleboxediting

import { Command } from 'ckeditor5/src/core';

export default class InsertSpecialCharacterCommand extends Command {
  execute() {
    const { model } = this.editor;

    model.change((writer) => {
      // Insert <extendedSpecialCharacters>*</extendedSpecialCharacters> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createExtendedSpecialCharacters(writer));
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // extendedSpecialCharacters is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'extendedSpecialCharacters',
    );

    // If the cursor is not in a location where a extendedSpecialCharacters can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
  }
}

function createExtendedSpecialCharacters(writer) {
  // Create instances of the three elements registered with the editor in
  // simpleboxediting.js.
  const extendedSpecialCharacters = writer.createElement('extendedSpecialCharacters');
  const extendedSpecialCharactersTitle = writer.createElement('extendedSpecialCharactersTitle');
  const extendedSpecialCharactersDescription = writer.createElement('extendedSpecialCharactersDescription');

  // Append the title and description elements to the extendedSpecialCharacters, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(extendedSpecialCharactersTitle, extendedSpecialCharacters);
  writer.append(extendedSpecialCharactersDescription, extendedSpecialCharacters);

  // The extendedSpecialCharactersDescription text content will automatically be wrapped in a
  // `<p>`.
  writer.appendElement('paragraph', extendedSpecialCharactersDescription);

  // Return the element to be added to the editor.
  return extendedSpecialCharacters;
}
